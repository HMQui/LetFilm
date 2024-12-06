import { useEffect, useState, useRef, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

const SORTING_LIST = [
    { title: 'Popularity Descending', key: 'popularity.desc' },
    { title: 'Popularity Ascending', key: 'popularity.asc' },
    { title: 'Rating Descending', key: 'vote_average.desc' },
    { title: 'Rating Ascending', key: 'vote_average.asc' },
    { title: 'Release Date Descending', key: 'primary_release_date.desc' },
    { title: 'Release Date Ascending', key: 'primary_release_date.asc' },
    { title: 'Title (A-Z)', key: 'title.asc' },
    { title: 'Title (Z-A)', key: 'title.desc' },
];

function SortBy({ getDataFromSortBy, type }) {
    const [showFull, setShowFull] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [dataSubmit, setDataSubmit] = useState(SORTING_LIST[0]);

    useEffect(() => {
        if (type === 'tv') {
            SORTING_LIST[4].key = 'first_air_date.desc';
            SORTING_LIST[5].key = 'first_air_date.asc';
            SORTING_LIST[6].key = 'name.asc';
            SORTING_LIST[7].key = 'name.desc';
        }
    }, [type]);

    // References
    const parentRef = useRef();
    const menuRef = useRef();

    const handleShowFull = () => setShowFull((prev) => !prev);
    const handleOpenMenu = () => setShowMenu((prev) => !prev);
    const handleChoosedOne = (item) => {
        setDataSubmit(item);
        setShowMenu(false);
    };

    // Effect to notify parent of changes to `dataSubmit`
    useEffect(() => {
        getDataFromSortBy({ key: 'sort_by', value: dataSubmit.key }); // Pass the current `dataSubmit` item to parent
    }, [dataSubmit, getDataFromSortBy]);

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
        <div className="px-4 py-3 mt-5 w-full h-fit shadow-lg border rounded-md dark:bg-primary-1050">
            <div
                className={`${
                    showFull && 'pb-3'
                } w-full h-fit flex justify-between items-center cursor-pointer dark:text-primary-50`}
                onClick={handleShowFull}
            >
                <h4 className="text-lg font-semibold select-none">Sort</h4>
                <FontAwesomeIcon icon={showFull ? faChevronDown : faChevronRight} />
            </div>
            <div
                className={`${
                    showFull ? 'block' : 'hidden'
                } pt-3 border-t flex flex-col justify-start items-start gap-3`}
            >
                <h4 className="text-sm font-thin dark:text-primary-50">Sort Results By</h4>
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
                                {SORTING_LIST.map((item) => (
                                    <div key={item.key}>
                                        <h5
                                            className={`${
                                                dataSubmit.title === item.title &&
                                                'bg-primary-950 text-primary-50 hover:bg-primary-950 dark:hover:bg-primary-950'
                                            } p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-200 select-none`}
                                            onClick={() => handleChoosedOne(item)}
                                        >
                                            {item.title}
                                        </h5>
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
                        <h4 className="select-none">{dataSubmit.title}</h4>
                        <FontAwesomeIcon icon={showMenu ? faCaretDown : faCaretRight} />
                    </div>
                </HeadlessTippy>
            </div>
        </div>
    );
}

SortBy.propTypes = {
    getDataFromSortBy: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default memo(SortBy);
