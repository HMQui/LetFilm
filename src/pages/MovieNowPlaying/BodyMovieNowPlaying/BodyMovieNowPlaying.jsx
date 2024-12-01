import { useCallback, useState } from 'react';

import ContentArea from '../../../components/contentArea/ContentArea'
import SearchBar from '../../../components/searchBar/SearchBar';
import { nowPlayingMovie } from '../../../services/functions/api_call';

function BodyMovieNowPlaying() {
    const [dataRender, setDataRender] = useState([])

    const getDataRender = useCallback((data) => {
        setDataRender(data);
    }, [])

    return (
        <div className="p-10 mobile:px-3 xl:px-g-0.5 flex-grow flex mobile:flex-col lg:flex-row mt-[69px]">
            <SearchBar getDataRender={getDataRender} title="Now Playing Movie" type='movie'/>
            <ContentArea data={dataRender} option={nowPlayingMovie} type='movie'/>
        </div>
    );
}

export default BodyMovieNowPlaying;