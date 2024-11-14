import LogoFavicon from '../../../favicon_main_lg.png';

function Footer() {
    return ( 
        <div className="py-10 mobile:px-0 xl:px-g-1 w-full min-h-fit bg-primary-1050 flex flex-row items-start">
            {/* Logo Section */}
            <div
                className="flex-shrink-0 w-32 h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${LogoFavicon})` }}
            ></div>
            
            {/* Description Section */}
            <div className="px-16 flex flex-col gap-2 flex-grow">
                <h4 className="text-primary-50 text-center text-[1.6rem] font-bold">About Let Film</h4>
                <h5 className="text-primary-50 text-center text-[0.6rem]">
                    Let Film is your go-to destination for discovering movies, series, and trending people in the world of film. Using reliable data from The Movie Database (TMDb), we bring you the latest in cinema with a sleek, user-friendly design inspired by TMDb&#39;s vibrant interface. Browse top-rated movies, explore trending titles, and stay updated on popular people—all on a site designed with movie enthusiasts in mind. Let’s bring films closer to you!
                </h5>
                <p className="text-orange-400 text-center text-[1.2rem]">
                    <a href="mailto:huynhqui6425@gmail.com">Contact me</a>
                </p>
                <h5 className="text-primary-50 text-center">&copy; 2024 - HuynhQui</h5>
            </div>
        </div>
    );
}

export default Footer;
