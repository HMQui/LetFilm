import { useEffect } from 'react';
import { Header } from '../../Layouts';
import { ButtonScrollUpPage } from '../../Layouts'
import { BodyHome } from './BodyHome'

function Home() {
    useEffect(() => {
        // Scroll to the top when the page loads or is refreshed
        window.document.body.scrollIntoView({ behavior: "smooth", block: "start" });;
    }, []);

    return (
        <main className="flex flex-col dark:bg-primary-1250 relative w-dvw h-[2000px] z-2 overscroll-x-none">
            <Header/>
            <ButtonScrollUpPage />
            <BodyHome/>
        </main>
    );
}

export default Home;
