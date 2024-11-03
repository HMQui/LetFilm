import { SearchHome, TrendingSideBar } from './components';

function BodyHome() {
    return (
        <div className="lg:px-0 xl:px-g-1 absolute top-[69px] flex flex-col w-g-12 dark:bg-primary-1250">
            <SearchHome />
            <TrendingSideBar />
        </div>
    );
}

export default BodyHome;
