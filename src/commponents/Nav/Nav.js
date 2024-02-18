import { React, useState } from "react";
import "./nav.css";

import logo from "../../imges/logo (1).png";
// icons
import { CiSearch } from "react-icons/ci";
import { IoChevronUpOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [scroll, setscroll] = useState(false);
  const [opin, setopin] = useState(false);
  const [trans, settrans] = useState(false);
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
    { title: "movie", path: "/" },
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
  return (
    <>
      <header
        style={{ position:"fixed" ,transform: trans?"translateY(-150%)":"translateY(0)",
      }}
        className="w-100 text-uppercase"
      >
        <nav
          style={{ backgroundColor: scroll ? `${bgColor}` : "transparent" ,borderBottom:scroll && "1px solid var(--spanColor)"}}
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

          {/* button */}
        </nav>
        <div className="serch position-relative my-3">
          <CiSearch />
          <input
            type="search"
            className="h-100  w-100"
            placeholder="serch..."
          />
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
    </>
  );
}
