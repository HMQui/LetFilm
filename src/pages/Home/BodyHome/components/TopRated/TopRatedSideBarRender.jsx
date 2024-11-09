import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { topRatedMovie, topRatedTV, getImg } from '../../../../../services/functions/api_call';
import ProgressCircle from '../../../../../components/progress/ProgressCircle';

function TopRatedSideBarRender({ option }) {
    const [loading, setLoading] = useState(true);
    const [dataRender, setDataRender] = useState([]);
    const [imgURL, setImgURL] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await (option === 'movie' ? topRatedMovie() : topRatedTV());
                setDataRender(data);

                if (data && data.length > 0) {
                    setImgURL(getImg + data[0].backdrop_path);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(true);
            }
        };
        fetchData();
    }, [option]);

    const handleHover = (url) => {
        setImgURL(getImg + url);
    };

    return (
        <div className="w-full h-fit relative">
            {loading ? (
                <div className="mt-5 animate-pulse w-full h-[300px] bg-gray-200 opacity-15 rounded-3xl flex justify-center items-center">
                    <FontAwesomeIcon icon={faSpinner} className="text-[3rem] animate-spin-custom" />
                </div>
            ) : (
                <div className="w-full h-[400px] relative bg-primary-1050">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-[400px] opacity-10 z-0"
                        style={{ backgroundImage: `url('${imgURL}')` }}
                    ></div>
                    <div className="p-2 absolute inset-0 w-full h-[400px] flex justify-start items-center gap-4 overflow-x-auto overflow-y-hidden custom-scrollbar dark:custom-scrollbar-dark">
                        {dataRender.map((render) => {
                            return (
                                <div
                                    key={render.id}
                                    className="w-[30%] h-[80%] overflow-hidden flex-shrink-0 flex flex-col justify-center items-center gap-3"
                                    onMouseOver={() => handleHover(render.backdrop_path)}
                                >
                                    <div
                                        className="w-full h-[60%] bg-center bg-cover rounded-xl relative flex-shrink-0 group cursor-pointer"
                                        style={{ backgroundImage: `url('${getImg + render.backdrop_path}')` }}
                                    >
                                        <div className="absolute inset-0 w-full h-full rounded-xl opacity-20 bg-black group-hover:bg-black group-hover:opacity-40"></div>
                                        <div className="absolute inset-0 flex justify-center items-center">
                                            <FontAwesomeIcon icon={faPlay} className="text-[2rem] text-white" />
                                        </div>
                                        <ProgressCircle rate={render.vote_average} bottom={'-18px'} left={'18px'}/>
                                    </div>
                                    <Link
                                        to={render.title ? `movie/${render.id}` : `tv/${render.id}`}
                                        className="h-[30%] flex flex-col justify-around items-center flex-shrink-0"
                                        title="Click for more detail"
                                    >
                                        <h3 className="text-[1.5rem] font-semibold text-primary-50 select-none text-center flex-shrink-0">
                                            {render.title ? render.title : render.name}
                                        </h3>
                                        <h4 className="text-[1.2rem] font-medium text-yellow-50 select-none">
                                            {render.release_date ? render.release_date : render.first_air_date}
                                        </h4>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TopRatedSideBarRender;

TopRatedSideBarRender.propTypes = {
    option: PropTypes.string.isRequired,
};
