
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './commponents/Hero/Hero';
import Nav from './commponents/Nav/Nav';
import SeasonNow from './commponents/SeasonNow/SeasonNow';
import Title from './commponents/Title/Title';
import Slide from './commponents/slide/Slide';
import TopAnemi from './commponents/TopAnemi/TopAnemi';

function App() {

  // get property
  const BgColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--bg-color");

  return (
    <div className="App position-relative">
      <Nav/>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<TopAnemi/>} path='/topanemi'/>
    
      
     </Routes>
      
      
      
      {/* <Title text={"top anime"} bgColor={BgColor}/> */}
      {/* <Slide/> */}
      {/* <Title text={"SeasonNow "} bgColor={BgColor}/> */}

    {/* <SeasonNow/> */}
    </div>
  );
}

export default App;
