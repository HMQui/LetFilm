import { useState, useCallback, useEffect, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import GenresFilter from './GenresFilter';
import LanguagesFilter from './LanguagesFilter';
import ReleaseDate from './ReleaseDate';
import VoteAverageFilter from './VoteAverageFilter';
import KeywordsFilter from './KeywordsFilter';

function MoviePopularFilter({ getDataFromFilter, type = 'movie' }) {
    const [showFull, setShowFull] = useState(true);
    const [dataSubmit, setDataSubmit] = useState([]);

    const handleShowFull = () => setShowFull((prev) => !prev);

    // Pass dataSubmit to SearchBar.jsx
    useEffect(() => {
        getDataFromFilter(dataSubmit);
    }, [dataSubmit, getDataFromFilter]);

    // GET data function
    // Gernes
    const getDataFromGenresFilter = useCallback((dataGF) => {
        setDataSubmit((prev) => {
            const existingGenres = prev.findIndex((item) => item.type === 'genres');
            if (existingGenres !== -1) {
                // Replace existing genres data
                const newData = [...prev];
                newData[existingGenres] = { type: 'genres', value: { key: 'with_genres', value: dataGF } };
                return newData;
            } else {
                // Add new genres data
                return [...prev, { type: 'genres', value: { key: 'with_genres', value: dataGF } }];
            }
        });
    }, []);

    // Languages
    const getDataFromLanguagesFilter = useCallback((dataLangF) => {
        if (dataLangF) {
            setDataSubmit((prev) => {
                const existingLanguages = prev.findIndex((item) => item.type === 'languages');
                if (existingLanguages !== -1) {
                    // Replace existing genres data
                    const newData = [...prev];
                    newData[existingLanguages] = {
                        type: 'languages',
                        value: { key: 'with_original_language', value: dataLangF.iso_639_1 },
                    };
                    return newData;
                } else {
                    // Add new genres data
                    return [
                        ...prev,
                        { type: 'languages', value: { key: 'with_original_language', value: dataLangF.iso_639_1 } },
                    ];
                }
            });
        }
    }, []);

    // Release Date
    const getDataFromReleaseDateFilter = useCallback((dataRDF) => {
        if (dataRDF.lenght !== 0) {
            //Release Date Lte
            if (dataRDF[0]) {
                setDataSubmit((prev) => {
                    const existingLte = prev.findIndex((item) => item.type === 'Release Date Lte');
                    if (existingLte !== -1) {
                        // Replace existing lte data
                        const newData = [...prev];
                        newData[existingLte] = dataRDF[0];
                        return newData;
                    } else {
                        // Add new lte data
                        return [...prev, dataRDF[0]];
                    }
                });
            }

            // Release Date Gte
            if (dataRDF[1]) {
                setDataSubmit((prev) => {
                    const existingGte = prev.findIndex((item) => item.type === 'Release Date Gte');
                    if (existingGte !== -1) {
                        // Replace existing gte data
                        const newData = [...prev];
                        newData[existingGte] = dataRDF[1];
                        return newData;
                    } else {
                        // Add new gte data
                        return [...prev, dataRDF[1]];
                    }
                });
            }
        }
    }, []);

    // Vote average
    const getDataFromVoteAverageFilter = useCallback((dataVAF) => {
        if (dataVAF.lenght !== 0) {
            //Vote Average Lte
            if (dataVAF[0]) {
                setDataSubmit((prev) => {
                    const existingLte = prev.findIndex((item) => item.type === 'Vote Average Lte');
                    if (existingLte !== -1) {
                        // Replace existing lte data
                        const newData = [...prev];
                        newData[existingLte] = dataVAF[0];
                        return newData;
                    } else {
                        // Add new lte data
                        return [...prev, dataVAF[0]];
                    }
                });
            }

            // Vote Average Gte
            if (dataVAF[1]) {
                setDataSubmit((prev) => {
                    const existingGte = prev.findIndex((item) => item.type === 'Vote Average Gte');
                    if (existingGte !== -1) {
                        // Replace existing gte data
                        const newData = [...prev];
                        newData[existingGte] = dataVAF[1];
                        return newData;
                    } else {
                        // Add new gte data
                        return [...prev, dataVAF[1]];
                    }
                });
            }
        }
    }, []);

    // Keywords
    const getDataFromKeywordsFilter = useCallback((dataKF) => {
        setDataSubmit((prev) => {
            const existingKeywords = prev.findIndex((item) => item.type === 'Keywords');
            if (existingKeywords !== -1) {
                // Replace existing keywords
                const newData = [...prev];
                newData[existingKeywords] = {
                    type: 'Keywords',
                    value: {
                        key: 'with_keywords',
                        value: dataKF,
                    },
                };
                return newData;
            } else {
                // Add new keywords
                return [
                    ...prev,
                    {
                        type: 'Keywords',
                        value: {
                            key: 'with_keywords',
                            value: dataKF,
                        },
                    },
                ];
            }
        });
    }, []);

    return (
        <div className="px-4 py-3 mt-5 w-full h-fit shadow-lg border rounded-md dark:bg-primary-1050">
            <div
                className={`${
                    showFull && 'pb-3'
                } w-full h-fit flex justify-between items-center cursor-pointer dark:text-primary-50`}
                onClick={handleShowFull}
            >
                <h4 className="text-lg font-semibold select-none">Filters</h4>
                <FontAwesomeIcon icon={showFull ? faChevronDown : faChevronRight} />
            </div>
            <div
                className={`${
                    showFull ? 'block' : 'hidden'
                } pt-3 border-t flex flex-col justify-start items-start gap-3`}
            >
                <GenresFilter getDataFromGenresFilter={getDataFromGenresFilter} type={type}/>
                <LanguagesFilter getDataFromLanguagesFilter={getDataFromLanguagesFilter} />
                <ReleaseDate getDataFromReleaseDateFilter={getDataFromReleaseDateFilter} type={type}/>
                <VoteAverageFilter getDataFromVoteAverageFilter={getDataFromVoteAverageFilter} />
                <KeywordsFilter getDataFromKeywordsFilter={getDataFromKeywordsFilter} type={type}/>
            </div>
        </div>
    );
}

export default memo(MoviePopularFilter);

MoviePopularFilter.propTypes = {
    getDataFromFilter: PropTypes.func.isRequired,
    type: PropTypes.string,
};
