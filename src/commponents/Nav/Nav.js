import { React, useState } from "react";
import "./nav.css";

import logo from "../../imges/logo (1).png";
// icons
import { CiSearch } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

import { IoChevronUpOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { base_URl } from "../../Api/ApI";
import Title from "../Title/Title";

export default function Nav() {
  const [scroll, setscroll] = useState(false);
  const [value, setvalue] = useState("");
  const [opin, setopin] = useState(false);
  const [trans, settrans] = useState(false);
  const [error, seterror] = useState(false);
  const [data, setdata] = useState([]);




  // get property
  const bgColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--bg-color");
   
  window.onscroll = () => {
    
    if(window.scrollY > 60 && window.scrollY < 300){
        settrans(true);
        
    }
    else if (window.scrollY > 130) {
        settrans(false);
        setscroll(true);
    } else {
      setscroll(false);
      settrans(false);
    }
  };


  
  const Scrolto=()=>{
    window.scrollTo(0,0);
  }
  // navLink
  const nav_link = [
    { title: "home", path: "/" },
    { title: "top anemi", path: "topanemi" },
    { title: "tv show", path: "/" },
    { title: "pricing", path: "/" },
    { title: "blog", path: "/" },
    { title: "contact", path: "/" },
  ];
  // navLink in map

  const nav_link_show = nav_link.map((e, index) => {
    return (
      <li key={index} className="me-4">
        <a href={e.path}>{e.title}</a>
      </li>
    );
  });
  // Nav in mobile
  const nav_in_mobile = nav_link.map((e, index) => {
    return (
      <li key={index} className="p-3 text-center">
        <a onClick={() => setopin(!opin)} href={e.path}>
          {e.title}
        </a>
      </li>
    );
  });


  // 
async function searchAnemi() {
  
 if( value.length > 3) {
   try{
      const res= await fetch(`${base_URl}/anime?q=${value}&sfw`)
      const re=await res.json();
      re.data.length === 0 && seterror(true);
      setdata(re.data);
      
      }catch(err){console.log(err);} }






}
console.log(data);
  //ShowData
  const ShowData=data.map((e,index)=>{return <div key={index} id="card" className="  position-relative " style={{ width: "14rem" ,}}>
 <div className="position-absolute top-0 left-0 overflow-hidden h-100 w-100">
  <img
    id="imge"
    src={e.images.jpg.image_url}
    className=" "
    alt={e.title}
    />
    {e.synopsis && <p id="cardText" className="position-absolute px-2 w-100 m-0">{e.synopsis.slice(0,200)}</p>}  
 </div>

  <a href={e.url}>
  <div id="cartBody" className=" w-100 h-100 position-relative z-3">
    <div  className="px-2 w-100 position-absolute  d-flex justify-content-between align-items-center ">
      <span id="cardSpanColor"> {e.title.slice(0,20)}</span>
      <span>{e.year}</span>
    </div>
    <div id="anemiContent" className="px-2 position-absolute  d-flex justify-content-between align-items-center my-2 px-1 w-100">
     <span id="cardSpanColor" className=" d-flex  align-items-center"> <IoMdTime/>{e.duration}</span>
     <span  className=" d-flex  align-items-center"><AiFillLike color="#0d6efd" />{e.favorites}</span>
      
      
    </div>
 

  </div> 
  </a>
</div>
  
  
  
 
  });

  return (
    <>
      <header
        style={{
          position: "fixed",
          backgroundColor: scroll ? `${bgColor}` : "transparent",
          transform: trans ? "translateY(-150%)" : "translateY(0)",
        }}
        className="w-100 text-uppercase"
      >
        <nav
          style={{
            backgroundColor: scroll ? `${bgColor}` : "transparent",
            borderBottom: scroll && "1px solid var(--spanColor)",
          }}
          className="nav "
        >
          <div className=" d-flex w-100 px-2 py-2 d-lg-justify-content-evenly  justify-content-between container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="d-none d-lg-block">
              <ul className=" d-flex text-light ">{nav_link_show}</ul>
            </div>
            <div className="d-flex d-lg-none align-items-center ps-2 ">
              <span style={{ transform: !opin ? "scale(1)" : "scale(0)" }}>
                <FaBars
                  color={opin ? "#e3d704" : "white"}
                  fontSize={"35px"}
                  cursor={"pointer"}
                  onClick={() => setopin(!opin)}
                />
              </span>
            </div>
          </div>

          {/* input  */}
        </nav>
        <div className="serch position-relative my-3">
          <div className="">
            <CiSearch onClick={searchAnemi} />
            <input
              style={{ backgroundColor: scroll ? "#171d22" : "transparent" }}
              type="search"
              className="h-100  w-100"
              placeholder="serch..."
              onChange={(e) => setvalue(e.target.value)}
            />
          </div>

          {error && <p className="position-absolute w-100"> not fonde </p>}
        </div>
      </header>
      {/* list in mobile start*/}
      <ul
        style={{
          transform: opin ? "translateX(0)" : "translateX(200%)",
          backgroundColor: scroll ? "#171d22" : "transparent",
        }}
        id="mobile"
        className="p-4"
      >
        <span>
          <img src={logo} alt="logo" />
          <IoClose
            style={{ transform: opin && "rotate(-180deg)" }}
            color={opin ? "#e3d704" : "white"}
            fontSize={"35px"}
            cursor={"pointer"}
            onClick={() => setopin(!opin)}
          />
        </span>
        {nav_in_mobile}
      </ul>
      {/* list in mobile end */}
      {/* go to top start */}
      <span
        style={{
          transform: scroll ? "translateY(0)" : "translateY(-1500px)",
        }}
        onClick={Scrolto}
        id="span"
      >
        <IoChevronUpOutline />
        <IoChevronUpOutline />
      </span>
      {/* go to top end */}

      {/* searh anime */}

      <div
        id="searchAnemi"
        style={{ display: data.length > 0 ? "block" : "none" }}
        className="w-100"
      >
        <Title text={value} bgColor={"#000"} />
        <div className="container-fluid ">
          <div className="col-sm-12">
            <div className="row justify-content-center ">
              {ShowData}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
