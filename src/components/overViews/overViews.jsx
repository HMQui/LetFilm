import PropTypes from 'prop-types';

import { getImg } from '../../services/functions/api_call';
import ProgressCircle from '../progress/ProgressCircle'

function OverViews({ type = 'movie', bgImg, poster, title, release_date, genres, runtime, vote_average }) {
    // Combine getImg and bgImg to form the complete image URL
    const urlBg = `${getImg}${bgImg}`;
    const urlPoster = `${getImg}${poster}`;

    return (
        <div className="w-full relative flex justify-center items-center">
            <div
                className="w-full h-[510px] absolute inset-0 z-0"
                style={{ backgroundImage: `url(${urlBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="w-full h-[510px] absolute inset-0 bg-primary-1350 opacity-75" />
            <div className="px-28 py-10 w-full h-[510px] absolute inset-0 z-2">
                <div className="w-full h-full flex flex-row gap-8">
                    <div
                        className="w-[300px] h-[450px] rounded-2xl"
                        style={{
                            backgroundImage: `url(${urlPoster})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div>
                        <div className="flex flex-row justify-start items-center gap-5">
                            <h2 className="text-4xl text-primary-50 font-bold tracking-wider">{title}</h2>
                            <h2 className="text-3xl text-primary-50 tracking-wider">
                                {'('}
                                {release_date[0] + release_date[1] + release_date[2] + release_date[3]}
                                {')'}
                            </h2>
                        </div>
                        {type === 'movie' && (
                            <div className="flex flex-row justify-start items-center gap-3">
                                <span className="text-sm text-primary-50">{release_date}</span>
                                <span className="text-sm text-primary-50">&#x2022;</span>
                                <div className="flex flex-row gap-2">
                                    {genres.map((genre) => {
                                        return (
                                            <span key={genre.id} className="text-sm text-primary-50">
                                                {genre.name}
                                            </span>
                                        );
                                    })}
                                </div>
                                <span className="text-sm text-primary-50">&#x2022;</span>
                                <span className="text-sm text-primary-50">
                                    {runtime >= 60 && Math.round(runtime / 60)}
                                    {runtime >= 60 && 'h'}
                                    {runtime % 60}m
                                </span>
                            </div>
                        )}
                        <div className='flex'>
                            <ProgressCircle rate={vote_average} size={60}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverViews;

OverViews.propTypes = {
    type: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    runtime: PropTypes.number,
    vote_average: PropTypes.number.isRequired,
};
