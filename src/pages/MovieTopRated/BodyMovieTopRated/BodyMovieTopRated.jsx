import { useCallback, useState } from 'react';

import ContentArea from '../../../components/contentArea/ContentArea'
import SearchBar from '../../../components/searchBar/SearchBar';
import { topRatedMovie } from '../../../services/functions/api_call';

function BodyMovieTopRated() {
    const [dataRender, setDataRender] = useState([])

    const getDataRender = useCallback((data) => {
        setDataRender(data);
    }, [])    

    return (
        <div className="p-10 mobile:px-3 xl:px-g-0.5 flex-grow flex mobile:flex-col lg:flex-row mt-[69px]">
            <SearchBar getDataRender={getDataRender} title="Top Rated Movie" type='movie'/>
            <ContentArea data={dataRender} option={topRatedMovie} type="movie"/>
        </div>
    );
}

export default BodyMovieTopRated;