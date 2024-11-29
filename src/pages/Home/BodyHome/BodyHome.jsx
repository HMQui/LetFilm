import { SearchHome, TrendingSideBar, TopRated, PopularPeople } from './components';

function BodyHome() {
    return (
        <div className="mobile:px-0 xl:px-g-1 flex-grow flex flex-col w-g-12 dark:bg-primary-1250 mt-[69px]">
            <SearchHome />
            <TrendingSideBar />
            <TopRated />
            <PopularPeople />
        </div>
    );
}

export default BodyHome;
