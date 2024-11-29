import { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';

function VoteAverageFilter({ getDataFromVoteAverageFilter }) {
    const [minValue, setMinValue] = useState(0); // State for minimum value
    const [maxValue, setMaxValue] = useState(10); // State for maximum value

    // Submit data
    useEffect(() => {
        getDataFromVoteAverageFilter(
            [
                {
                    type: 'Vote Average Lte',
                    value: {
                        key: "vote_average.lte",
                        value: maxValue,
                    },
                },
                {
                    type: 'Vote Average Gte',
                    value: {
                        key: "vote_average.gte",
                        value: minValue,
                    },
                },
            ]
        )
    }, [getDataFromVoteAverageFilter, maxValue, minValue])

    // Update minValue
    const handleMinChange = (e) => {
        const newMinValue = Number(e.target.value);
        if (newMinValue <= maxValue) {
            setMinValue(newMinValue); // Update minValue if it's less than or equal to maxValue
        }
    };

    // Update maxValue
    const handleMaxChange = (e) => {
        const newMaxValue = Number(e.target.value);
        if (newMaxValue >= minValue) {
            setMaxValue(newMaxValue); // Update maxValue if it's greater than or equal to minValue
        }
    };

    return (
        <div className="w-full py-3 border-b flex flex-col flex-wrap justify-start items-start gap-3">
            <h4 className="text-md font-thin select-none text-gray-700 dark:text-gray-50">Vote Average</h4>
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-between items-center">
                        <span className='text-primary-1350 dark:text-primary-50'>Min</span>
                        <input
                            type="number"
                            className="ml-2 py-1 w-full h-full outline-primary-200 text-sm text-center rounded-md border appearance-none dark:bg-gray-300"
                            value={minValue}
                            onChange={handleMinChange} // Use updated handler
                        />
                    </div>
                    <div className="w-20 flex flex-row justify-center items-center select-none">
                        <span>-</span>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <span className='text-primary-1350 dark:text-primary-50'>Max</span>
                        <input
                            type="number"
                            className="ml-2 py-1 w-full h-full outline-primary-200 text-sm text-center rounded-md border appearance-none dark:bg-gray-300"
                            value={maxValue}
                            onChange={handleMaxChange} // Use updated handler
                        />
                    </div>
                </div>
                <div className="h-1 w-full rounded-sm bg-gray-100 relative">
                    <div
                        className="h-1 rounded-sm bg-primary-1050 dark:bg-primary-700 absolute"
                        style={{
                            left: `${(minValue / 10) * 100}%`,
                            right: `${100 - (maxValue / 10) * 100}%`,
                        }}
                    ></div>
                </div>
                <div className="range-input relative">
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={minValue}
                        onChange={handleMinChange} // Use updated handler
                        className="absolute w-full"
                    />
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={maxValue}
                        onChange={handleMaxChange} // Use updated handler
                        className="absolute w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(VoteAverageFilter);

VoteAverageFilter.propTypes = {
    getDataFromVoteAverageFilter: PropTypes.func.isRequired,
}
