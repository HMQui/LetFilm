import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoute } from './routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoute.map((route, index) => {
                    return <Route key={index} path={route.path} element={<route.component />} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;
