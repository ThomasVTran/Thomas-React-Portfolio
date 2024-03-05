import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <Navigation />
            <main className='portfolio-app'>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </>
    );
}

export default App;
