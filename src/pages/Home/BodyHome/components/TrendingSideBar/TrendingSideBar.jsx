import { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { TrendingSideBarRender } from './components';

function TrendingSideBar() {
    const [option, setOption] = useState('day');

    const handleChooseOption = (e) => {
        setOption(e.target.checked ? 'week' : 'day');
    };

    return (
        <div className="bg-white w-full dark:bg-primary-1150">
            <div className="p-5 flex flex-row justify-start items-center gap-4">
                <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="md:text-[2.4rem] mobile:text-[1.8rem] text-rose-600 select-none"
                ></FontAwesomeIcon>
                <h3 className="md:text-[2.4rem] mobile:text-[1.8rem] text-primary-1350 dark:text-primary-50 font-bold select-none">Trending</h3>
                <input type="checkbox" id="switch-day-week" className="hidden" onClick={(e) => handleChooseOption(e)} />
                <label
                    htmlFor="switch-day-week"
                    className="p-0 ml-5 w-fit border-[2px] rounded-3xl flex flex-row justify-evenly items-center relative cursor-pointer z-0 dark:bg-primary-700"
                    style={{ minWidth: '130px', height: '40px' }}
                >
                    {/* Animated Slider Background */}
                    <span
                        className={`absolute left-0 top-0 h-full w-1/2 rounded-3xl transition-all duration-300 ease-in-out ${
                            option === 'day'
                                ? 'translate-x-0 bg-gradient-to-tl from-primary-1050 dark:from-primary-1250 to-primary-50 dark:to-primary-1350 via-primary-900 dark:via-primary-800'
                                : 'translate-x-full bg-gradient-to-tl from-primary-1050 dark:from-primary-1250 to-primary-50 dark:to-primary-1350 via-primary-900 dark:via-primary-800'
                        }`}
                    ></span>

                    {/* Day & Week Text */}
                    <span
                        className={`z-10 py-[5px] font-semibold w-[110px] text-center select-none transition-all duration-300 ease-in-out ${
                            option === 'day' ? 'text-primary-200' : 'text-primary-1350'
                        }`}
                    >
                        Today
                    </span>
                    <span
                        className={`z-10 py-[5px] font-semibold w-[110px] text-center select-none transition-all duration-300 ease-in-out ${
                            option !== 'day' ? 'text-primary-200' : 'text-primary-1350'
                        }`}
                    >
                        This Week
                    </span>
                </label>
            </div>
            <TrendingSideBarRender option={option} />
        </div>
    );
}

export default memo(TrendingSideBar);
