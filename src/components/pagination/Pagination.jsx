import PropTypes from 'prop-types';
import { useEffect, useState, memo } from 'react';

function Pagination({ totalPage, getPageFromPagination }) {
    const [dataRender, setDataRender] = useState([2, 3, 4, 5, 6]);
    const [page, setPage] = useState(1);

    // Submit page when page got changed
    useEffect(() => {
        getPageFromPagination(page)
    }, [page, getPageFromPagination])

    const handleChangePage = (selected) => {
        if (selected <= 5) {
            setPage(selected);
            setDataRender([2, 3, 4, 5, 6]);
        } 
        else if (selected === totalPage || selected === totalPage - 1)  {
            setPage(selected);
            setDataRender([totalPage - 3, totalPage - 2 , totalPage - 1]);
        }
        else {
            setPage(selected);
            setDataRender([selected - 3, selected - 2, selected - 1, selected, selected + 1, selected + 2, selected + 3]);
        }
    };

    const handleIncrease = () => {
        if (page === totalPage)
                return
        const currPage = page + 1;
        if (currPage <= 5) {
            setPage(currPage);
            setDataRender([2, 3, 4, 5, 6]);
        } 
        else if (currPage === totalPage || currPage === totalPage - 1)  {
            setPage(currPage);
            setDataRender([totalPage - 3, totalPage - 2 , totalPage - 1]);
        }
        else {
            setPage(currPage);
            setDataRender([currPage - 3, currPage - 2, currPage - 1, currPage, currPage + 1, currPage + 2, currPage + 3]);
        }
    }

    const handleDecrease = () => {
        if (page === 1)
                return
        const currPage = page - 1;
        if (currPage <= 5) {
            setPage(currPage);
            setDataRender([2, 3, 4, 5, 6]);
        } 
        else if (currPage === totalPage || currPage === totalPage - 1)  {
            setPage(currPage);
            setDataRender([totalPage - 3, totalPage - 2 , totalPage - 1]);
        }
        else {
            setPage(currPage);
            setDataRender([currPage - 3, currPage - 2, currPage - 1, currPage, currPage + 1, currPage + 2, currPage + 3]);
        }
    }

    return (
        <div className="ml-auto mr-auto mb-5">
            <span
                className={`p-1 m-1 dark:text-primary-50 text-xl select-none cursor-pointer ${page === 1 && 'text-gray-200 cursor-default'}`}
                onClick={handleDecrease}
            >
                &lt;
            </span>
            <span
                className={`p-1 m-1 dark:text-primary-50 text-xl select-none cursor-pointer rounded-lg ${page === 1 && 'bg-gray-400'}`}
                onClick={() => handleChangePage(1)}
            >
                1
            </span>
            {dataRender.length !== 5 && <span className="tracking-wider">...</span>}
            {dataRender.map((currPage) => {
                return (
                    <span
                        key={currPage}
                        className={`p-1 m-1 dark:text-primary-50 text-xl select-none cursor-pointer rounded-lg ${
                            page === currPage && 'bg-gray-400'
                        }`}
                        onClick={() => handleChangePage(currPage)}
                    >
                        {currPage}
                    </span>
                );
            })}
            {page !== totalPage && <span className="tracking-wider">...</span>}
            <span
                className={`p-1 m-1 dark:text-primary-50 text-xl select-none cursor-pointer rounded-lg ${
                    page === totalPage && 'bg-gray-400'
                }`}
                onClick={() => handleChangePage(totalPage)}
            >
                {totalPage}
            </span>
            <span className={`p-1 m-1 dark:text-primary-50 text-xl select-none cursor-pointer ${page === totalPage && 'text-gray-200 cursor-default'}`} onClick={handleIncrease}>&gt;</span>
        </div>
    );
}

export default memo(Pagination);

Pagination.propTypes = {
    totalPage: PropTypes.number.isRequired,
    getPageFromPagination: PropTypes.func,
};
