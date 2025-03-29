import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home';
import Expenses from './pages/Expenses/Expenses';
import Education from './pages/Education/Education';
import Groups from './pages/Groups/Groups';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Landing from './pages/Landing/Landing';

function App() {

    const location = useLocation(); 
    const isNavbarRequired = !['/login', '/register', '/'].includes(location.pathname);
  
    return (
      <main>
        {isNavbarRequired && <NavBar  />} {}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="gastos" element={<Expenses />} />
            <Route path="grupos" element={<Groups />} />
            <Route path="educacion" element={<Education />} />
          </Routes>
        </div>
      </main>
    );
  
  
}

export default App
