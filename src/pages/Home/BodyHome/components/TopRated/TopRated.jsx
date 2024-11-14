import { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TopRatedSideBarRender from './TopRatedSideBarRender';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TopRated() {
    const [option, setOption] = useState('movie');

    const handleChooseOption = (e) => {
        setOption(e.target.checked ? 'tv' : 'movie');
    };

    return (
        <div className="bg-white w-full dark:bg-primary-1150">
            <div className="p-5 flex flex-row justify-start items-center gap-4">
                <FontAwesomeIcon
                    icon={faStar}
                    className="md:text-[2.4rem] mobile:text-[1.8rem] text-rose-600 select-none mt-[-8px]"
                ></FontAwesomeIcon>
                <h3 className="md:text-[2.4rem] mobile:text-[1.8rem] text-primary-1350 dark:text-primary-50 font-bold select-none">TopRated</h3>
                <input
                    type="checkbox"
                    id="switch-movies-tv"
                    className="hidden"
                    onClick={(e) => handleChooseOption(e)}
                />
                <label
                    htmlFor="switch-movies-tv"
                    className="p-0 ml-5 w-fit border-[2px] rounded-3xl flex flex-row justify-evenly items-center relative cursor-pointer z-0 dark:bg-primary-700"
                    style={{ minWidth: '130px', height: '40px' }}
                >
                    {/* Animated Slider Background */}
                    <span
                        className={`absolute left-0 top-0 h-full w-1/2 rounded-3xl transition-all duration-300 ease-in-out ${
                            option === 'movie'
                                ? 'translate-x-0 bg-gradient-to-tl from-primary-1050 dark:from-primary-1250 to-primary-50 dark:to-primary-1350 via-primary-900 dark:via-primary-800'
                                : 'translate-x-full bg-gradient-to-tl from-primary-1050 dark:from-primary-1250 to-primary-50 dark:to-primary-1350 via-primary-900 dark:via-primary-800'
                        }`}
                    ></span>

                    {/* Movie & TV Text */}
                    <span
                        className={`z-10 py-[5px] font-semibold w-[110px] text-center select-none transition-all duration-300 ease-in-out ${
                            option === 'movie' ? 'text-primary-200' : 'text-primary-1350'
                        }`}
                    >
                        Movies
                    </span>
                    <span
                        className={`z-10 py-[5px] font-semibold w-[110px] text-center select-none transition-all duration-300 ease-in-out ${
                            option !== 'movie' ? 'text-primary-200' : 'text-primary-1350'
                        }`}
                    >
                        TV Series
                    </span>
                </label>
            </div>
            <TopRatedSideBarRender option={option} />
        </div>
    );
}

export default memo(TopRated);
