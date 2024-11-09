import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { queryMulti } from '../../../../../services/functions/api_call';
import { trendingAll as getTrendingAll } from '../../../../../services/functions/api_call';
import { faArrowTrendUp, faFilm, faMagnifyingGlass, faSpinner, faTv, faUser } from '@fortawesome/free-solid-svg-icons';

function HandleRenderInputHome({ valueInput }) {
    const [trendingAll, setTrendingAll] = useState([]);
    const [dataGotValue, setDataGotValue] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                setLoading(true); // Set loading to true before fetching data
                const trendingData = await getTrendingAll('day');
                setTrendingAll(trendingData);
                if (valueInput.trim()) {
                    const data = await queryMulti(valueInput);
                    setDataGotValue(data);
                }
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(true)
            }
        };
        fetchTrending();
    }, [valueInput]);

    let renderContent = <></>;

    // Check if there's no input, and render the trending results
    if (!valueInput.trim()) {
        renderContent = trendingAll.map((trend, index) => {
            let icon = null;
            if (trend.media_type === 'movie') {
                icon = faFilm;
            } else if (trend.media_type === 'tv') {
                icon = faTv;
            } else {
                icon = faUser;
            }

            return (
                <li key={index} className="border-b">
                    <Link
                        to={`/search?q=${encodeURIComponent(trend.id)}`}
                        className="px-10 py-2 flex justify-start items-center hover:bg-gray-100"
                    >
                        <FontAwesomeIcon icon={icon} className="text-primary-1050" />
                        <span className="pl-4 text-lg text-primary-1350 tracking-wide">
                            {trend.title ? trend.title : trend.name}
                        </span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-auto opacity-50" />
                    </Link>
                </li>
            );
        });
    } else {
        // Render the data based on user input search
        renderContent = dataGotValue.map((result, index) => {
            return (
                <li key={index} className="border-b">
                    <Link
                        to={`/search?q=${encodeURIComponent(result.id)}`}
                        className="px-10 py-2 flex justify-start items-center hover:bg-gray-100"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="opacity-50" />
                        <span className="pl-4 text-lg text-primary-1350 tracking-wide truncate">
                            {result.title ? result.title : result.name}
                        </span>
                    </Link>
                </li>
            );
        });
    }

    return (
        <ul className="bg-white 2xl:w-[1100px] xl:w-[1290px] lg:w-[1030px] md:w-[760px] max-h-[350px] overflow-y-auto custom-scrollbar rounded-md shadow-xl">
            {!valueInput && !loading ? (
                <span className="p-2 text-[1.6rem] flex justify-start items-center gap-3 font-bold text-primary-1350 select-none border-b">
                    <FontAwesomeIcon icon={faArrowTrendUp} className="text-rose-600" />
                    Trending
                </span>
            ) : (
                <>
                    <li className="border-b">
                        <Link
                            to={`/search/movie?q=${valueInput}`}
                            className="group px-10 py-2 flex justify-start items-center hover:bg-gray-100"
                        >
                            <FontAwesomeIcon icon={faFilm} className="pr-3 group-hover:text-rose-600" />
                            <b className="text-lg text-primary-1350 tracking-wide truncate group-hover:text-rose-600">
                                Search Movies For:{' '}
                                <span className="font-thin group-hover:text-primary-1350">{valueInput}</span>
                            </b>
                        </Link>
                    </li>
                    <li className="border-b">
                        <Link
                            to={`/search/tv?q=${valueInput}`}
                            className="group px-10 py-2 flex justify-start items-center hover:bg-gray-100"
                        >
                            <FontAwesomeIcon icon={faTv} className="pr-3 group-hover:text-rose-600" />
                            <b className="text-lg text-primary-1350 tracking-wide truncate group-hover:text-rose-600">
                                Search TV Shows For:{' '}
                                <span className="font-thin group-hover:text-primary-1350">{valueInput}</span>
                            </b>
                        </Link>
                    </li>
                    <li className="border-b">
                        <Link
                            to={`/search/people?q=${valueInput}`}
                            className="group px-10 py-2 flex justify-start items-center hover:bg-gray-100"
                        >
                            <FontAwesomeIcon icon={faUser} className="pr-3 group-hover:text-rose-600" />
                            <b className="text-lg text-primary-1350 tracking-wide truncate group-hover:text-rose-600">
                                Search People For:{' '}
                                <span className="font-thin group-hover:text-primary-1350">{valueInput}</span>
                            </b>
                        </Link>
                    </li>
                </>
            )}

            {loading ? (
                // Show Spinner when loading is true
                <div className="flex justify-center items-center py-11">
                    <FontAwesomeIcon
                        icon={faSpinner}
                        size="xl"
                        className="animate-spin text-primary-1350"
                    ></FontAwesomeIcon>
                </div>
            ) : (
                // Show content when loading is false
                renderContent
            )}
        </ul>
    );
}

export default HandleRenderInputHome;

HandleRenderInputHome.propTypes = {
    valueInput: PropTypes.string.isRequired,
};
