import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { popularPeople } from '../../../services/functions/api_call';
import noneImg from '../../../assets/img/noneImg.png';
import Pagination from '../../../components/pagination/Pagination';

function BodyPeople() {
    const [loading, setLoading] = useState(true);
    const [dataRender, setDataRender] = useState([]);
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            const data = await popularPeople(page);
            setDataRender(data.results);
            setTotalPage(data.total_pages)
            setLoading(false);
        };

        fetch();
    }, [page]);  

    const getPageFromPagination = useCallback((data) => {
        setPage(data)
    }, [])

    return (
        <>
            <h3 className='mt-[85px] ml-28 text-2xl font-semibold dark:text-primary-50'>Popular People</h3>
            {loading ? (
                <FontAwesomeIcon
                    icon={faSpinner}
                    className="mt-[75px] mx-auto flex-1 h-[10%] w-[10%] animate-spin"
                ></FontAwesomeIcon>
            ) : (
                <div className="my-10 md:mx-auto mobile:mx-0 p-0 w-full flex-1 flex flex-row justify-center items-center flex-wrap gap-7">
                    {dataRender.map((render) => (
                        <Link
                            key={render.id}
                            className="flex-shrink-0 w-fit h-fit flex flex-col justify-center items-center group"
                        >
                            <div
                                className="mb-2 md:w-[315px] md:h-[315px] mobile:w-[200px] mobile:h-[315px] bg-center bg-no-repeat rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                                style={{
                                    backgroundImage: `url(${
                                        render.profile_path
                                            ? `https://image.tmdb.org/t/p/w500${render.profile_path}`
                                            : noneImg
                                    })`,
                                }}
                            />
                            <div className='flex flex-col w-full'>
                                <h4 className='text-xl font-semibold dark:text-primary-50'>{render.name}</h4>
                                <p className='text-sm dark:text-primary-50'>{render.known_for_department }</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            <Pagination totalPage={totalPage} getPageFromPagination={getPageFromPagination}/>
        </>
    );
}

export default BodyPeople;
