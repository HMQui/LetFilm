import { useCallback, useState } from 'react';

import ContentArea from '../../../components/contentArea/ContentArea'
import SearchBar from '../../../components/searchBar/SearchBar';
import { popularMovie } from '../../../services/functions/api_call';

function BodyMovie() {
    const [dataRender, setDataRender] = useState([])

    const getDataRender = useCallback((data) => {
        setDataRender(data);
    }, [])    

    return (
        <div className="p-10 mobile:px-3 xl:px-g-0.5 flex-grow flex mobile:flex-col lg:flex-row mt-[69px]">
            <SearchBar getDataRender={getDataRender} title="Popular Movie" type='movie'/>
            <ContentArea data={dataRender} option={popularMovie} type="movie"/>
        </div>
    );
}

export default BodyMovie;
