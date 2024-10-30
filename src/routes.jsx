import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './pages/site empresa/landing.jsx';

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}