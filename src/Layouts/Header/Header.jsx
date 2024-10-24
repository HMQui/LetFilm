import Navbar from './Navbar/Navbar';
import Untilities from './Untilities/Untilities';

function Header() {
    return (
        <header
            className="
            w-full
            h-[65px]
            px-[100px]
            bg-primary-950
            flex
            items-center
            justify-between
            dark:bg-primary-1150
            fixed
            xl:px-[200px]
            lg:px-[75px]
            md:px-[10px]
            mobile:px-[5px]
            mobile:h-[70px]
            "
        >
            <Navbar />
            <Untilities />
        </header>
    );
}

export default Header;
