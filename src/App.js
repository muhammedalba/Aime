
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './commponents/Hero/Hero';
import TopAnemi from './commponents/TopAnemi/TopAnemi';
import AnimeByID from './commponents/AnimeByID/AnimeByID';
import Footer from './commponents/Footer/Footer';
import ContactMe from './commponents/Contactme/ContactMe';

function App() {

  // get property
  //  const BgColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--bg-color");

  return (<>
 
    <div className="App position-relative">
     
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<ContactMe/>} path='/ContactMe'/>

      <Route element={<TopAnemi/>} path='/topanemi'/>
      <Route element={<AnimeByID/>} path='/:id'/>
    
      
     </Routes>
  
   
      
      
      {/* <Title text={"top anime"} bgColor={BgColor}/> */}
      {/* <Slide/> */}
      {/* <Title text={"SeasonNow "} bgColor={BgColor}/> */}

    {/* <SeasonNow/> */}
    
    </div>
   <Footer/> </>);
}

export default App;
