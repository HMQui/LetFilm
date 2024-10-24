import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Field, Label, Switch } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setData, getData } from '../../../services/functions/localStorage';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useCallback } from 'react';
import MobileMenu from './MobileMenu';

function MyDropdownMenu() {
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

    // Handle menu mobile

    return (
        <>
            <div className="justify-end items-center gap-8 mobile:hidden md:flex">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <FontAwesomeIcon icon={faPlus} size="xl" className="text-white p-2" />
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="py-2 px-1 w-[170px] bg-white shadow-md rounded">
                        <DropdownMenu.Item>
                            <a
                                href="https://www.themoviedb.org/movie/new?language=vi"
                                className="block px-4 py-2 hover:bg-primary-1150 hover:text-primary-50 text-sm text-primary-1150 text-opacity-80 font-bold"
                            >
                                Add New Movie
                            </a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <a
                                href="https://www.themoviedb.org/tv/new?language=vi"
                                className="block px-4 py-2 hover:bg-primary-1150 hover:text-primary-50 text-sm text-primary-1150 text-opacity-80 font-bold"
                            >
                                Add New TV Shows
                            </a>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
                <Field className="flex gap-3">
                    <Label className="font-bold text-primary-50 cursor-pointer">Dark Mode</Label>
                    <Switch
                        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-black hover:bg-primary-50 cursor-pointer"
                        onChange={handleChangeDarkMode}
                        checked={dark}
                    >
                        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                    </Switch>
                </Field>
            </div>
            <div className="items-center mobile:flex md:hidden">
                <MobileMenu/>
            </div>
        </>
    );
}

export default MyDropdownMenu;
