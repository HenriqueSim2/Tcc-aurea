import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './pages/site empresa/landing.jsx';
import Joias from './pages/site joias/index.jsx'

export function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Joias' element={<Joias />} />
            </Routes>
        </BrowserRouter>
    )
}