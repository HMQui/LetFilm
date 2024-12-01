import PropTypes from 'prop-types';

import ProgressCircle from '../progress/ProgressCircle';
import noneImg from '../../assets/img/noneImg.png';

function MainCard({ vote_average, title, release_date, poster_path }) {
    return (
        <div className="flex-shrink-0 w-full h-full flex flex-col justify-start items-start group">
            <div
                className="w-full h-[300px] bg-cover rounded-lg relative group-hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{
                    backgroundImage: `url(${poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noneImg})`,
                }}
            >
                <ProgressCircle rate={vote_average} bottom={'-18px'} left={'8px'} />
            </div>
            <div className="pl-1 dark:text-primary-50 flex flex-col">
                <h3 className="mt-6 w-full overflow-hidden font-bold select-none">{title}</h3>
                <h4 className="text-sm select-none">{release_date}</h4>
            </div>
        </div>
    );
}

export default MainCard;

MainCard.propTypes = {
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    path: PropTypes.string.isRequired,
};
