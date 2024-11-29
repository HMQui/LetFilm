import { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';

import { keyWordsQuery } from '../../services/functions/api_call';
import useDebounce from '../../hooks/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

function KeywordsFilter({ getDataFromKeywordsFilter }) {
    const [dataRender, setDataRender] = useState([]);
    const [dataInput, setDataInput] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dataSubmit, setDataSubmit] = useState([]);

    const debounceValue = useDebounce(dataInput, 700);

    const parentRef = useRef();
    const menuRef = useRef();

    // Submit data
    useEffect(() => {
        const newData = dataSubmit.map(item => item.id)
        getDataFromKeywordsFilter(newData)
    }, [getDataFromKeywordsFilter, dataSubmit])

    // [GET] id keywords
    useEffect(() => {
        if (!debounceValue.trim()) {
            setDataRender([]);
            return;
        }

        const fetch = async () => {
            setLoading(true);
            try {
                const data = await keyWordsQuery(debounceValue);
                setDataRender(data);
            } catch (error) {
                console.error('Fail to get keywords', error);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [debounceValue]);

    // Automatically show menu when input is not empty
    useEffect(() => {
        if (dataInput.trim()) {
            setShowMenu(true); // Always show menu when input is not empty
        } else {
            setShowMenu(false); // Hide menu when input is empty
        }
    }, [dataRender, dataInput]);

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

    const handleInputClick = () => {
        if (dataInput.trim()) {
            setShowMenu(true);
        }
    };

    const handleChooseKeyword = (data) => {
        const contained = dataSubmit.some((item) => item.id === data.id); // Check if the item is already added
        if (!contained) {
            setDataSubmit((prev) => [...prev, data]); // Add the selected keyword to the state
        }
        setShowMenu(false); // Close the menu after selection
    };

    const handleDeleteOne = (data) => {
        setDataSubmit(prev => {
            return prev.filter(item => {
                return item.id !== data.id
            })
        })
    }

    return (
        <div className="w-full py-3 border-b flex flex-col flex-wrap justify-start items-start gap-3">
            <h4 className="text-md font-thin select-none text-gray-700 dark:text-gray-50">Keywords</h4>
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
                            className="py-3 max-h-32 bg-white rounded-md shadow-lg overflow-y-scroll custom-scrollbar dark:custom-scrollbar-dark flex flex-col gap-3"
                        >
                            {dataRender.length > 0 ? (
                                dataRender.map((render) => (
                                    <span
                                        key={render.id}
                                        className="px-3 py-1 text-lg hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleChooseKeyword(render)}
                                    >
                                        {render.name}
                                    </span>
                                ))
                            ) : (
                                <div className="flex items-center justify-center h-36 text-lg text-gray-500">
                                    No Datas
                                </div>
                            )}
                        </div>
                    );
                }}
            >
                <div
                    className="w-full h-fit flex flex-row justify-between items-center rounded-md border dark:bg-gray-300"
                    ref={parentRef}
                >
                    <input
                        type="text"
                        className={`px-2 py-3 w-full h-full text-base appearance-none dark:bg-gray-300 ${
                            loading ? 'outline-none' : 'outline-primary-200'
                        }`}
                        placeholder="Filter by keywords"
                        value={dataInput}
                        onChange={(e) => setDataInput(e.target.value)}
                        onClick={handleInputClick}
                    />
                    {loading && <FontAwesomeIcon icon={faSpinner} className="mr-3 animate-spin"></FontAwesomeIcon>}
                </div>
            </HeadlessTippy>
            <div className="w-full h-fit flex flex-row flex-wrap gap-3">
                {dataSubmit.map((render) => (
                    <div
                        key={render.id}
                        className="px-2 py-1 border rounded-lg flex flex-row justify-between items-center gap-2"
                    >
                        <span className="select-none dark:text-primary-50">{render.name}</span>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="py-1 px-[6px] bg-primary-1050 text-primary-50 rounded-full text-xs cursor-pointer"
                            onClick={() => handleDeleteOne(render)}
                        ></FontAwesomeIcon>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(KeywordsFilter);

KeywordsFilter.propTypes = {
    getDataFromKeywordsFilter: PropTypes.func.isRequired,
};
