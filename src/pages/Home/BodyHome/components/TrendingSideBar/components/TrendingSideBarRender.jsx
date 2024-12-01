import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { trendingMovie } from '../../../../../../services/functions/api_call';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import MainCard from '../../../../../../components/cards/MainCard';
import { Link } from 'react-router-dom';

function TrendingSideBarRender({ option }) {
    const [loading, setLoading] = useState(true);
    const [dataRender, setDataRender] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await trendingMovie(option);
                setDataRender(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
                setLoading(true);
            }
        };

        fetchData();
    }, [option]);

    return (
        <div className="w-full h-fit relative">
            {loading ? (
                <div className="mt-5 animate-pulse w-full h-[300px] bg-gray-200 opacity-15 rounded-3xl flex justify-center items-center">
                    <FontAwesomeIcon icon={faSpinner} className="text-[3rem] animate-spin-custom"></FontAwesomeIcon>
                </div>
            ) : (
                <div className="px-3 relative w-full min-h-[450px] bg-white dark:bg-primary-1150 flex flex-row justify-start items-between gap-3 overflow-x-auto overflow-y-hidden custom-scrollbar dark:custom-scrollbar-dark">
                    {dataRender.map((render) => {
                        return (
                            <Link to={`/LetFilm/movie/${render.id}`} key={render.id} className='lg:w-[15%] md:w-[20%] sm:w-[30%] mobile:w-[40%] h-[90%] flex-shrink-0 flex items-center justify-center'>
                                <MainCard
                                    id={render.id}
                                    vote_average={render.vote_average}
                                    title={render.title}
                                    release_date={render.release_date}
                                    poster_path={render.poster_path}
                                    path={`movie/${render.id}`}
                                />
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default TrendingSideBarRender;

TrendingSideBarRender.propTypes = {
    option: PropTypes.string.isRequired,
};
