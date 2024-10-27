import { useEffect } from 'react';
import { Header } from '../../Layouts';
import { ButtonScrollUpPage } from '../../Layouts'

function Home() {
    useEffect(() => {
        // Scroll to the top when the page loads or is refreshed
        window.document.body.scrollIntoView({ behavior: "smooth", block: "start" });;
    }, []);

    return (
        <main className="h-[10000px] dark:bg-primary-1250 relative">
            <Header/>
            <ButtonScrollUpPage />
        </main>
    );
}

export default Home;
