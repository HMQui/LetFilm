import { Header } from '../../Layouts';
import { ButtonScrollUpPage } from '../../Layouts'

function Home() {
    return (
        <main className="h-[10000px] dark:bg-primary-1250 relative">
            <Header/>
            <ButtonScrollUpPage />
        </main>
    );
}

export default Home;
