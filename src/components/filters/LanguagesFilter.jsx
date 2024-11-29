import { useEffect, useState, useRef, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCheck, faChevronDown, faChevronRight, faQuestion } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { Languges } from '../../services/functions/api_call';

function LanguagesFilter({ getDataFromLanguagesFilter }) {
    const [dataRender, setDataRender] = useState([]);
    const [dataSubmit, setDataSubmit] = useState();
    const [choosedOne, setChoosedOne] = useState('None selected');
    const [showMenu, setShowMenu] = useState(false);

    // Submit data
    useEffect(() => {
        getDataFromLanguagesFilter(dataSubmit);
    }, [getDataFromLanguagesFilter, dataSubmit]);

    // Handle show list languages
    const handleOpenMenu = () => setShowMenu((prev) => !prev);

    // Handle choosed a language
    const handleChoosedOne = (item) => {
        setDataSubmit(item);
        setChoosedOne(item.english_name);
        setShowMenu(false);
    };

    // References
    const parentRef = useRef();
    const menuRef = useRef();

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await Languges();
                data.unshift({
                    iso_639_1: null,
                    english_name: 'None selected'
                })
                setDataRender(data);
            } catch {
                throw new Error('Fail to call Languages List');
            }
        };

        fetch();
    }, []);

    // Handle click outside to hide menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                parentRef.current &&
                !parentRef.current.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="w-full py-3 border-b flex flex-col flex-wrap justify-start items-start gap-3">
            <div className="flex justify-start items-center">
                <h4 className="text-md font-thin select-none text-gray-700 dark:text-gray-50">Languages</h4>
                <div className="relative group">
                    <FontAwesomeIcon
                        icon={faQuestion}
                        className="ml-5 text-[9px] text-white px-[6px] py-1 rounded-full bg-gray-300 dark:bg-primary-1050 select-none cursor-pointer"
                    />
                    <div className="min-w-fit absolute bottom left-2/3 transform -translate-x-1/2 hidden group-hover:block bg-indigo-950 text-white text-xs rounded px-2 py-2 whitespace-nowrap">
                        Filter items based on their original language
                    </div>
                </div>
            </div>
            <HeadlessTippy
                interactive
                placement="bottom-start"
                visible={showMenu}
                render={(attrs) => {
                    const parentWidth = parentRef.current?.offsetWidth || 'auto';
                    return (
                        <div
                            ref={menuRef}
                            {...attrs}
                            tabIndex="-1"
                            style={{ width: parentWidth }}
                            className="max-h-32 bg-white rounded-md shadow-lg overflow-y-scroll custom-scrollbar dark:custom-scrollbar-dark"
                        >
                            {dataRender.map((item) => (
                                <div
                                    key={item.iso_639_1}
                                    className="px-5 py-2 flex flex-row justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleChoosedOne(item)}
                                >
                                    <h5 className={`select-none`}>{item.english_name}</h5>
                                    {item.english_name === choosedOne && (
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    )}
                                </div>
                            ))}
                        </div>
                    );
                }}
            >
                <div
                    ref={parentRef}
                    className="p-2 w-full bg-gray-200 dark:bg-gray-400 flex flex-row justify-between items-center rounded-xl cursor-pointer"
                    onClick={handleOpenMenu}
                >
                    <h4 className="mx-auto select-none">--- {choosedOne} ---</h4>
                    <FontAwesomeIcon icon={showMenu ? faChevronDown : faChevronRight} />
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default memo(LanguagesFilter);

LanguagesFilter.propTypes = {
    getDataFromLanguagesFilter: PropTypes.func.isRequired,
};
