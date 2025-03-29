/* import { useState } from 'react' */
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home';
import Expenses from './pages/Expenses/Expenses';
import Education from './pages/Education/Education';
import Groups from './pages/Groups/Groups';

function App() {

  return (
    <main>
      <Sidebar/>
      <div className="main-content">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="gastos" element={<Expenses />}></Route>
            <Route path="grupos" element={<Groups />}></Route>
            <Route path="educacion" element={<Education />}></Route>
        </Routes>
      </div>
    </main>
  )
}

export default App
