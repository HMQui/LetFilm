import { Header } from '../../Layouts';
import cutePig from '../../assets/img/cute_pig.jpg';

function NotFound() {
    return (
        <main className="flex flex-col h-screen dark:bg-primary-1250 w-full z-2 overscroll-x-none">
            <Header />
            <div className="flex-grow flex flex-col items-center justify-center relative">
                <img src={cutePig} alt="" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-[3.0rem] font-bold text-primary-1350">404</h1>
                    <p className="text-lg text-gray-500">Page Not Found</p>
                </div>
            </div>
        </main>
    );
}

export default NotFound;
