import { useEffect } from 'react';
import { Header, Footer } from '../../Layouts';

import { ButtonScrollUpPage } from '../../Layouts';
import { BodyTV } from './BodyTv';

function Tv() {
    useEffect(() => {
        // Scroll to the top when the page loads or is refreshed
        window.document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    return (
        <main className="flex flex-col min-h-screen dark:bg-primary-1250 relative w-full z-2 overscroll-x-none">
            <Header/>
            <ButtonScrollUpPage/>
            <BodyTV/>
            <Footer/>
        </main>
    );
}

export default Tv;
