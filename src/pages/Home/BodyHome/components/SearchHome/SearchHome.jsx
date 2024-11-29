import { useEffect, useState, memo } from 'react';

import { trendingAll as getTrendingAll } from '../../../../../services/functions/api_call';
import { InputSearchHome } from './components';

function SearchHome() {
    const [sourceBackground, setSourceBackGround] = useState('');

    // Set up API CALL
    useEffect(() => {
        const getDataTrendingAll = async () => {
            const dataTrendingAll = await getTrendingAll('day');
            if (dataTrendingAll.length > 0) {
                setSourceBackGround('https://image.tmdb.org/t/p/w500' + dataTrendingAll[0].backdrop_path);
            }
        };
        getDataTrendingAll();
    }, []);

    return (
        <div className="relative md:py-[35px] sm:py-[20px] mobile:py-[15px] w-full h-[281px] bg-gradient-to-r from-primary-1050 to-primary-200 dark:from-primary-1150 dark:to-primary-950 z-1">
            <div
                style={{ backgroundImage: `url('${sourceBackground}')` }}
                className="absolute inset-0 w-full h-[281px] bg-cover bg-center opacity-20 z-0"
            ></div>
            <div className="relative z-10 px-[200px] py-[20px] max-[720px]:px-[100px] mobile:px-[25px] flex flex-col justify-between items-start">
                <h4 className="xl:text-[3rem] lg:text-[2.6rem] md:text-[2rem] sm:text-[1.6rem] mobile:text-[2.4rem] font-bold text-primary-50">
                    WELCOME TO <span className='xl:text-[4rem] lg:text-[3.5rem] md:text-[2.8rem] sm:text-[2.4rem]
                    mobile:text-[3.3rem] bg-gradient-to-l from-primary-1050 to-primary-900 bg-clip-text text-transparent dark:from-primary-900 dark:to-primary-100'>LETFILM</span>
                </h4>
                <h5 className='xl:text-[1.5rem] md:text-[1.1rem] sm:text-[.8rem] text-primary-1350 font-bold dark:text-primary-100'>Discover A MILLIONS OF Movies, TV Shows and People right now. GO NOW!</h5>
                <InputSearchHome/>
            </div>
        </div>
    );
}

export default memo(SearchHome);
