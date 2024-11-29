import { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';

import { movieGenres } from '../../services/functions/api_call';

function GenresFilter({ getDataFromGenresFilter }) {
    const [dataRender, setDataRender] = useState([]);
    const [dataSubmit, setDataSubmit] = useState([]);

    // SET data to parent
    useEffect(() => {
        getDataFromGenresFilter(dataSubmit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataSubmit]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await movieGenres();
                setDataRender(data);
            } catch {
                throw new Error('Failed to call Movie Genre List');
            }
        };

        fetch();
    }, []);

    const handleChooseOption = (option) => {
        if (dataSubmit.includes(option.id)) {
            // Remove the option if it already exists in dataSubmit
            setDataSubmit(dataSubmit.filter((item) => item !== option.id));
        } else {
            // Add the option if it does not exist
            setDataSubmit([...dataSubmit, option.id]); // Create a new array with the added option
        }
    };

    return (
        <div className="py-3 border-b flex flex-col flex-wrap justify-start items-start gap-3">
            <h4 className="text-md font-thin select-none text-gray-700 dark:text-gray-50">Genres</h4>
            <div className="flex flex-row flex-wrap justify-start items-center gap-3">
                {dataRender.map((render) => {
                    return (
                        <div
                            key={render.id}
                            className={`py-[2px] px-3 border border-x-2 rounded-2xl cursor-pointer select-none ${
                                dataSubmit.includes(render.id)
                                    ? 'bg-primary-1150 text-primary-50 dark:bg-primary-100 dark:text-primary-1350'
                                    : 'dark:bg-primary-950 dark:text-primary-50'
                            }`}
                            onClick={() => handleChooseOption(render)}
                        >
                            {render.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(GenresFilter);

GenresFilter.propTypes = {
    getDataFromGenresFilter: PropTypes.func.isRequired,
};
