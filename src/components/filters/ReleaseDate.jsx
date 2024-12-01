import { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';

function ReleaseDate({ getDataFromReleaseDateFilter, type = 'movie' }) {
    const [dataSubmit, setDataSubmit] = useState([]);
    const [releaseDateGte, setReleaseDateGte] = useState();
    const [releaseDateLte, setReleaseDateLte] = useState();

    // Submit data
    useEffect(() => {
        getDataFromReleaseDateFilter(dataSubmit);
    }, [dataSubmit, getDataFromReleaseDateFilter]);

    useEffect(() => {
        const today = new Date();
        setReleaseDateLte(today.toISOString().split('T')[0]);
    }, []);

    useEffect(() => {
        setDataSubmit(() => {
            return [
                releaseDateLte ? {
                    type: 'Release Date Lte',
                    value: {
                        key: type === 'movie' ? 'primary_release_date.lte' : 'first_air_date.lte',
                        value: releaseDateLte,
                    },
                } : null,
                releaseDateGte ? {
                    type: 'Release Date Gte',
                    value: {
                        key: type === 'movie' ? 'primary_release_date.gte' : 'first_air_date.gte',
                        value: releaseDateGte,
                    },
                } :  null,
            ];
        });
    }, [releaseDateGte, releaseDateLte, type]);

    return (
        <div className="w-full py-3 border-b flex flex-col flex-wrap justify-start items-start gap-3">
            <h4 className="text-md font-thin select-none text-gray-700 dark:text-gray-50">Release Date</h4>
            <div className="flex flex-col w-full gap-3">
                <div className="w-full flex flex-row justify-between items-center gap-3">
                    <span className="text-sm text-gray-400 font-thin">from</span>
                    <input
                        type="date"
                        className="p-2 w-[80%] border rounded-lg text-[14px] dark:bg-gray-300 outline-primary-200"
                        onChange={(e) => setReleaseDateGte(e.target.value)}
                    />
                </div>
                <div className="w-full flex flex-row justify-between items-center gap-3">
                    <span className="text-sm text-gray-400 font-thin">to</span>
                    <input
                        type="date"
                        className="p-2 w-[80%] border rounded-lg text-[14px] dark:bg-gray-300 outline-primary-200"
                        value={releaseDateLte || ''}
                        onChange={(e) => setReleaseDateLte(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(ReleaseDate);

ReleaseDate.propTypes = {
    getDataFromReleaseDateFilter: PropTypes.func.isRequired,
    type: PropTypes.string,
};
