import './App.css';
import '../style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './header.scss'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { ScrollToPlugin } from "gsap/all";
// import { CSSRulePlugin } from 'gsap/all';
import Alternance from './pages/Alternance';
import Home from './pages/home';
function App() {
  
  return (
    <BrowserRouter>
    <div className="App" >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/infoalternance' element={<Alternance/>}/>
    </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
