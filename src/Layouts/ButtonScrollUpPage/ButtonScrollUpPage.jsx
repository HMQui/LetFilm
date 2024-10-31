import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

function ButtonScrollUpPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setIsVisible(false);
    };

    return (
        <div className="mobile:hidden lg:block">
            {isVisible && (
                <button
                    className="fixed right-14 top-[75%] w-8 h-8 border-solid border-[0.5px] border-primary-1350 opacity-70 rounded-full flex items-center justify-center dark:bg-primary-950 dark:border-primary-50 z-0"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className="text-primary-1350 dark:text-primary-50"
                    ></FontAwesomeIcon>
                </button>
            )}
        </div>
    );
}

export default ButtonScrollUpPage;
