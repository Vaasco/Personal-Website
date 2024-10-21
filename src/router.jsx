
import Home from './views/home.jsx';
import About from './views/about.jsx';
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Navbar, { colors } from './views/navbar.jsx'; 

function App() {

    const currentTheme = localStorage.getItem('currentTheme');
    const [theme,setTheme] = useState(currentTheme? currentTheme : colors.white);

    useEffect(() => {
        localStorage.setItem('currentTheme', theme)
    },[theme])


    return(
        <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Router>
            <Routes>
                <Route path="/" element={<Home theme = {theme}/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
        </div>
    )
  }

export function main(){
    const root = createRoot(document.getElementById("root"))
    root.render(
        <App/>
    )
}

