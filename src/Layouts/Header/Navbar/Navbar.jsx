// import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import logo from '../../../assets/logo.png';
import { route } from '../../../routes';

function Navbar() {
    return (
        <>
            <div className="items-center mobile:hidden md:flex">
                <div className="flex justify-center items-center">
                    <Link to={route.Home} className="block p-[5px] bg-amber-50 rounded select-none">
                        <img src={logo} alt="Logo" className="w-[150px] h-[45px]" />
                    </Link>
                    <HeadlessTippy
                        interactive={true}
                        placement="bottom-start"
                        trigger="mouseenter focus"
                        render={(attrs) => (
                            <ul
                                tabIndex="1"
                                {...attrs}
                                className="bg-white rounded py-2 w-[175px] shadow-lg dark:bg-gray-100"
                            >
                                <li className="py-2 px-4 text-base text-primary-1150 hover:bg-gray-50 dark:hover:text-amber-50 dark:hover:bg-primary-1150">
                                    <Link to={route.Movie} className="block w-full h-full cursor-pointer">
                                        Popular
                                    </Link>
                                </li>
                                <li className="py-2 px-4 text-base text-primary-1150 hover:bg-gray-50 dark:hover:text-amber-50 dark:hover:bg-primary-1150">
                                    <Link to={route.NowPlaying} className="block w-full h-full cursor-pointer">
                                        Now Playing
                                    </Link>
                                </li>
                                <li className="py-2 px-4 text-base text-primary-1150 hover:bg-gray-50 dark:hover:text-amber-50 dark:hover:bg-primary-1150">
                                    <Link to={route.Upcoming} className="block w-full h-full cursor-pointer">
                                        Upcoming
                                    </Link>
                                </li>
                                <li className="py-2 px-4 text-base text-primary-1150 hover:bg-gray-50 dark:hover:text-amber-50 dark:hover:bg-primary-1150">
                                    <Link to={route.TopRated} className="block w-full h-full cursor-pointer">
                                        Top Rated
                                    </Link>
                                </li>
                            </ul>
                        )}
                    >
                        <h3 className="px-5 text-base font-bold text-primary-50 cursor-pointer select-none">Movies</h3>
                    </HeadlessTippy>
                    <HeadlessTippy
                        interactive={true}
                        placement="bottom-start"
                        trigger="mouseenter focus"
                        render={(attrs) => (
                            <ul
                                tabIndex="1"
                                {...attrs}
                                className="bg-white rounded py-2 w-[175px] shadow-lg dark:bg-gray-100"
                            >
                                <li className="py-2 px-4 text-base text-primary-1150 hover:bg-gray-50 dark:hover:text-amber-50 dark:hover:bg-primary-1150">
                                    <Link to={route.Movie} className="block w-full h-full cursor-pointer">
                                        Popular People
                                    </Link>
                                </li>
                            </ul>
                        )}
                    >
                        <h3 className="px-5 text-base font-bold text-primary-50 cursor-pointer select-none">People</h3>
                    </HeadlessTippy>
                    <HeadlessTippy
                        interactive={true}
                        placement="bottom-start"
                        trigger="mouseenter focus"
                        render={(attrs) => (
                            <ul
                                tabIndex="1"
                                {...attrs}
                                className="bg-white rounded py-2 w-[175px] shadow-lg dark:bg-gray-100"
                            >
                                <li className="py-2 px-4 text-base text-primary-1150 hover:bg-gray-50 dark:hover:text-amber-50 dark:hover:bg-primary-1150">
                                    <Link to={route.Movie} className="block w-full h-full cursor-pointer">
                                        Help
                                    </Link>
                                </li>
                                <li className="py-2 px-4 text-base text-primary-1150 hover:bg-gray-50 dark:hover:text-amber-50 dark:hover:bg-primary-1150">
                                    <Link to={route.NowPlaying} className="block w-full h-full cursor-pointer">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        )}
                    >
                        <h3 className="px-5 text-base font-bold text-primary-50 cursor-pointer select-none">More</h3>
                    </HeadlessTippy>
                </div>
            </div>
            <div className="items-center mobile:flex md:hidden">
                <Link to={route.Home} className='w-[30%] h-[70%] p-[5px] bg-amber-50 rounded select-none'>
                    <img src={logo} alt='Logo' className='w-full h-full'></img>
                </Link>
            </div>
        </>
    );
}

export default Navbar;
