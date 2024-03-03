
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './commponents/Hero/Hero';
import Nav from './commponents/Nav/Nav';
import Title from './commponents/Title/Title';
import TopAnemi from './commponents/TopAnemi/TopAnemi';
import AnimeBeyID from './commponents/AnimeBeyID/AnimeBeyID';

function App() {

  // get property
  const BgColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--bg-color");

  return (
    <div className="App position-relative">
     
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<TopAnemi/>} path='/topanemi'/>
      <Route element={<AnimeBeyID/>} path='/:id'/>
    
      
     </Routes>
  
   
      
      
      {/* <Title text={"top anime"} bgColor={BgColor}/> */}
      {/* <Slide/> */}
      {/* <Title text={"SeasonNow "} bgColor={BgColor}/> */}

    {/* <SeasonNow/> */}
    </div>
  );
}

export default App;
