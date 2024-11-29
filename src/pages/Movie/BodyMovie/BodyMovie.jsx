import { SearchBar } from './components/SearchBar';
import { ContentArea } from './components/ContentArea';
import { useCallback, useState } from 'react';

function BodyMovie() {
    const [dataRender, setDataRender] = useState([])

    const getDataRender = useCallback((data) => {
        setDataRender(data);
    }, [])

    return (
        <div className="p-10 mobile:px-3 xl:px-g-0.5 flex-grow flex mobile:flex-col lg:flex-row mt-[69px]">
            <SearchBar getDataRender={getDataRender}/>
            <ContentArea data={dataRender}/>
        </div>
    );
}

export default BodyMovie;
