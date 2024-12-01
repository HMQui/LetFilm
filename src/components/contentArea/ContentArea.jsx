import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { filterFunction } from '../../services/functions/filterCallAPI/filterCallAPI';
import MainCard from '../cards/MainCard'
import { Link } from 'react-router-dom';

function ContentArea({ data = [], option, type = "movie" }) {
    const [dataRender, setDataRender] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false); // Separate state for "Load More" loading

    // Reset dataRender and page when `data` changes
    useEffect(() => {
        setDataRender([]); // Reset dataRender
        setPage(1); // Reset page to 1
    }, [data]);

    // Fetch data on initial load or when the page changes
    useEffect(() => {
        const fetch = async () => {
            try {
                if (page === 1) setLoading(true);
                else setLoadingMore(true); // Show loading for "Load More"

                const fetchData = data && data.length > 0 
                    ? await filterFunction(data, page, type) 
                    : await option(page);

                setDataRender((prev) => (page === 1 ? fetchData : [...prev, ...fetchData])); // Reset or append
            } catch {
                console.error('Failed to call API.');
            } finally {
                setLoading(false);
                setLoadingMore(false); // Stop both loading indicators
            }
        };

        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, page]);

    // Handle "Load More" button click
    const handleLoadingMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <>
            {loading ? (
                <div className="w-g-10 h-lvh animate-pulse bg-gray-200 flex justify-center items-center">
                    <FontAwesomeIcon icon={faSpinner} className="text-[50px] animate-spin" />
                </div>
            ) : (
                <div className="xl:w-g-10 lg:w-g-11 mobile:w-full flex flex-col justify-start items-center">
                    <div className="flex flex-row flex-wrap justify-center items-start gap-2">
                        {dataRender.map((render) => (
                            <Link
                                to={`/LetFilm/${type}/${render.id}`}
                                key={render.id}
                                className="mb-8 flex-shrink-0 border rounded-xl md:w-g-2.5 mobile:w-g-5.5 h-[410px] shadow-xl"
                            >
                                <MainCard
                                    id={render.id}
                                    vote_average={render.vote_average}
                                    title={render.title || render.original_name}
                                    release_date={render.release_date || render.first_air_date}
                                    poster_path={render.poster_path}
                                    path={`${render.id}`}
                                />
                            </Link>
                        ))}
                        {dataRender.length === 0 && <h1>No items</h1>}
                    </div>
                    <button
                        className="py-5 w-[80%] bg-primary-800 text-xl rounded-xl font-bold"
                        onClick={handleLoadingMore}
                        disabled={loadingMore} // Disable button while loading more
                    >
                        {loadingMore ? (
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                        ) : (
                            'Load More'
                        )}
                    </button>
                </div>
            )}
        </>
    );
}

export default ContentArea;

ContentArea.propTypes = {
    data: PropTypes.array,
    option: PropTypes.func,
    type: PropTypes.string
};
