
import './App.css';
import Home from './commponents/Hero/Hero';
import Nav from './commponents/Nav/Nav';
import Title from './commponents/Title/Title';
import Slide from './commponents/slide/Slide';

function App() {

  // get property
  const BgColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--bg-color");

  return (
    <div className="App ">
     
      <Nav/>
      <Home/>
      <Title text={"top anime"} bgColor={BgColor}/>
      <Slide/>
    </div>
  );
}

export default App;
