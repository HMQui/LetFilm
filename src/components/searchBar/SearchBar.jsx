import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import SortBy from '../filters/SortBy';
import FilterPart from '../filters/FilterPart';

function SearchBar({ getDataRender, title, type = 'movie' }) {
    const [dataSubmit, setDataSubmit] = useState([]); // Array of data from both components\

    const getDataFromSortBy = useCallback((data) => {
        setDataSubmit((prev) => {
            const existingSortByIndex = prev.findIndex((item) => item.type === 'sortBy');
            if (existingSortByIndex !== -1) {
                // Replace existing sortBy data
                const newData = [...prev];
                newData[existingSortByIndex] = { type: 'sortBy', value: data };
                return newData;
            } else {
                // Add new sortBy data
                return [...prev, { type: 'sortBy', value: data }];
            }
        });
    }, []);

    const getDataFromFilter = useCallback((data) => {
        setDataSubmit((prev) => {
            const existingFilterIndex = prev.findIndex((item) => item.type === 'filter');
            if (existingFilterIndex !== -1) {
                // Replace existing filter data
                const newData = [...prev];
                newData[existingFilterIndex] = { type: 'filter', value: data };
                return newData;
            } else {
                // Add new filter data
                return [...prev, { type: 'filter', value: data }];
            }
        });
    }, []);

    return (
        <div className="lg:w-g-3 mobile:w-full flex flex-col justify-start items-center">
            <h2 className="text-3xl text-primary-1350 dark:text-primary-50 font-semibold">{title}</h2>
            <SortBy getDataFromSortBy={getDataFromSortBy} type={type}/>
            <FilterPart getDataFromFilter={getDataFromFilter} type={type}/>
            <button
                onClick={() => getDataRender(dataSubmit)}
                className="m-3 py-3 px-10 w-full rounded-xl bg-primary-200 dark:bg-primary-800 text-primary-1350 dark:text-primary-50 text-lg font-bold tracking-wider"
            >
                Search
            </button>
        </div>
    );
}

export default memo(SearchBar);

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    getDataRender: PropTypes.func.isRequired,
    type: PropTypes.string,
};
