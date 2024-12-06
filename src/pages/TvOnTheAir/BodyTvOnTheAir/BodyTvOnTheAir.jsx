import { useCallback, useState } from 'react';

import ContentArea from '../../../components/contentArea/ContentArea'
import SearchBar from '../../../components/searchBar/SearchBar';
import { onTheAirTV } from '../../../services/functions/api_call';

function BodyTvOnTheAir() {
    const [dataRender, setDataRender] = useState([])

    const getDataRender = useCallback((data) => {
        setDataRender(data);
    }, [])    

    return (
        <div className="p-10 mobile:px-3 xl:px-g-0.5 flex-grow flex mobile:flex-col lg:flex-row mt-[69px]">
            <SearchBar getDataRender={getDataRender} title="On The Air TV Shows" type='tv'/>
            <ContentArea data={dataRender} option={onTheAirTV} type="tv"/>
        </div>
    );
}

export default BodyTvOnTheAir;