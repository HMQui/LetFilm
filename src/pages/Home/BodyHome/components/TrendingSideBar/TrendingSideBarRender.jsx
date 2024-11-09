import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { trendingMovie } from '../../../../../services/functions/api_call';
import ProgressCircle from '../../../../../components/progress/ProgressCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function TrendingSideBarRender({ option }) {
    const [loading, setLoading] = useState(true);
    const [dataRender, setDataRender] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await trendingMovie(option);
                setDataRender(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching trending movies:', error);
                setLoading(true)
            }
        };

        fetchData();
    }, [option]);

    return (
        <div className="w-full h-fit relative">
            {loading ? (
                <div className="mt-5 animate-pulse w-full h-[300px] bg-gray-200 opacity-15 rounded-3xl flex justify-center items-center">
                    <FontAwesomeIcon icon={faSpinner} className='text-[3rem] animate-spin-custom'></FontAwesomeIcon>
                </div>
            ) : (
                <div className="mt-5 px-3 relative w-full min-h-[450px] bg-white dark:bg-primary-1150 flex flex-row justify-start items-center gap-3 overflow-x-auto overflow-y-hidden custom-scrollbar dark:custom-scrollbar-dark">
                    {dataRender.map((render) => {
                        return (
                            <Link
                                key={render.id}
                                to={`movie/${render.id}`}
                                className="lg:w-[15%] md:w-[20%] sm:w-[30%] mobile:w-[40%] h-[90%] flex-shrink-0 flex flex-col justify-between items-start group"
                            >
                                <div
                                    className="w-full h-[300px] bg-cover rounded-lg relative group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${render.poster_path})`,
                                    }}
                                >
                                    <ProgressCircle rate={render.vote_average} bottom={'-18px'} left={'8px'}/>
                                </div>
                                <div className='dark:text-primary-50'>
                                    <h3 className="mt-6 w-full h-[50px] overflow-hidden font-bold select-none">
                                        {render.title}
                                    </h3>
                                    <h4 className='text-sm select-none'>{render.release_date}</h4>
                                </div>
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
