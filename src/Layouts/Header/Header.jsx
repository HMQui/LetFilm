import { useEffect, useRef, memo } from 'react';
import Navbar from './Navbar/Navbar';
import Untilities from './Untilities/Untilities';

function Header() {
    const lastScrollY = useRef(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            if (y <= 50) {
                document.querySelector('header').style.top = '0'
                return
            }

            if (y > lastScrollY.current) {
                // Scrolling down
                document.querySelector('header').style.top = '-70px'
            } else {
                // Scrolling up
                document.querySelector('header').style.top = '0'
            }
            lastScrollY.current = y; // Update last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`w-full
                h-[65px]
                px-[100px]
                bg-primary-950
                flex
                items-center
                justify-between
                dark:bg-primary-1150
                xl:px-[200px]
                lg:px-[75px]
                md:px-[10px]
                mobile:px-[5px]
                mobile:h-[70px]
                fixed
                duration-500
                `}
            >
                <Navbar />
                <Untilities />
            </header>
        </>
    );
}

export default memo(Header);
