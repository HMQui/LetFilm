import { useEffect, useState, useCallback, memo } from 'react';
import { setData, getData } from '../../../services/functions/localStorage';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Field, Label, Switch } from '@headlessui/react';

import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { route } from '../../../routes';

function MobileMenu() {
    const MENU_MOBILE = [
        'Menu',
        {
            content: 'Movies',
            children: [
                'Movies',
                {
                    content: 'Popular',
                    to: route.Movie,
                },
                {
                    content: 'Now Playing',
                    to: route.NowPlaying,
                },
                {
                    content: 'Upcoming',
                    to: route.Upcoming,
                },
                {
                    content: 'Top Rated',
                    to: route.TopRated,
                },
            ],
        },
        {
            content: 'TV Shows',
            children: [
                'TV Shows',
                {
                    content: 'Popular',
                    to: '/LetFilm/tv',
                },
                {
                    content: 'Airing Today',
                    to: '/LetFilm/tv/airing-today',
                },
                {
                    content: 'On The Air',
                    to: "/LetFilm/tv/on-the-air",
                },
                {
                    content: 'Top Rated',
                    to: "/LetFilm/tv/top-rated",
                },
            ],
        },
        {
            content: 'People',
            to: route.Movie,
        },
        {
            content: 'More',
            children: [
                'More',
                {
                    content: 'Help',
                    to: route.Movie,
                },
                {
                    content: 'About Us',
                    to: route.NowPlaying,
                },
            ],
        },
        {
            content: 'Adding',
            children: [
                'Adding',
                {
                    content: 'Add New Movie',
                    href: 'https://www.themoviedb.org/movie/new?language=vi',
                },
                {
                    content: 'Add New TV Show',
                    href: 'https://www.themoviedb.org/tv/new?language=vi',
                },
            ],
        },
        {
            content: 'Dark Mode',
            button: true,
        },
    ];

    const [dataRender, setDataRender] = useState(MENU_MOBILE);
    const [dataPre, setDataPre] = useState([]);

    const [open, setOpen] = useState(false);

    const handleWrapper = () => {
        setOpen((pre) => {
            const nextState = !pre;
    
            // Disable scrolling when the menu is open
            if (nextState) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = ''; // Re-enable scrolling when closed
            }
    
            return nextState;
        });
    };

    // Reset to default menu when closing the menu
    useEffect(() => {
        if (!open) {
            document.body.style.overflow = ''; // Re-enable scrolling when the menu is closed
            setDataRender(MENU_MOBILE);
            setDataPre([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]); // This effect runs whenever `open` changes

    const handleDisplayChildren = (currData) => {
        if (currData.children) {
            setDataPre((prev) => [...prev, dataRender]);
            setDataRender(currData.children);
        }
    };

    const handleBack = () => {
        // Go back to the previous level by popping the stack
        const previousLevel = dataPre.pop();
        setDataPre([...dataPre]); // Update the state to trigger a re-render
        setDataRender(previousLevel); // Render the previous level
    };

    //Handle dark mode
    const localStorage = getData();
    const [dark, setDark] = useState(localStorage.darkMode ?? false);

    useEffect(() => {
        //Set local storage
        setData({
            ...localStorage,
            darkMode: dark,
        });

        // Toggle handle class in body tag
        document.body.classList.toggle('dark', dark);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dark]);

    const handleChangeDarkMode = useCallback(() => {
        setDark((pre) => !pre);
    }, []);

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs w-full h-dvh z-40 overflow-hidden"
                    style={{ pointerEvents: 'auto' }} 
                    onMouseDown={handleWrapper}
                ></div>
            )}
            <HeadlessTippy
                interactive
                trigger="click"
                render={(attrs) => (
                    <div {...attrs} className="w-fit h-fit bg-white shadow-lg rounded min-w-[125px]">
                        {dataPre.length > 0 && (
                            <div
                                className="py-2 px-4 text-base text-primary-1150 cursor-pointer select-none bg-gray-100 rounded flex justify-center items-center"
                                onClick={handleBack}
                            >
                                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                                <span className="px-5">{dataPre[dataPre.length - 1][0]}</span>
                            </div>
                        )}
                        <ul className="bg-white rounded py-2 w-full h-full shadow-lg dark:bg-gray-100">
                            {dataRender.map((item, index) => {
                                const isHeader = item.content;
                                let render = item.content;
                                if (item.to) {
                                    render = <Link to={item.to}>{item.content}</Link>;
                                } else if (item.button) {
                                    render = (
                                        <Field className="flex items-center gap-2">
                                            <Label className="cursor-pointer">{item.content}</Label>
                                            <Switch
                                                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-black hover:bg-primary-50 cursor-pointer"
                                                onChange={handleChangeDarkMode}
                                                checked={dark}
                                            >
                                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                                            </Switch>
                                        </Field>
                                    );
                                } else if (item.href) {
                                    render = <a href={item.href}>{item.content}</a>;
                                }
                                return (
                                    isHeader && (
                                        <li
                                            key={index}
                                            className="py-2 px-4 text-base text-primary-1150 cursor-pointer select-none"
                                            onClick={() => handleDisplayChildren(item)}
                                        >
                                            {render}
                                        </li>
                                    )
                                );
                            })}
                        </ul>
                    </div>
                )}
            >
                <FontAwesomeIcon
                    icon={faBars}
                    size="xl"
                    className="text-white mr-5 cursor-pointer"
                    onClick={handleWrapper}
                ></FontAwesomeIcon>
            </HeadlessTippy>
        </>
    );
}

export default memo(MobileMenu);
