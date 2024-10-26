import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Untilities from './Untilities/Untilities';

function Header() {
    const lastScrollY = useRef(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            if (y > lastScrollY.current) {
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            lastScrollY.current = y; // Update last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // setIsVisible(true);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible ? (
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
                    animate-slideIn`}
                >
                    <Navbar />
                    <Untilities />
                </header>
            ) : (
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
                animate-slideOut
                `}
                >
                    <Navbar />
                    <Untilities />
                </header>
            )}
        </>
    );
}

export default Header;
