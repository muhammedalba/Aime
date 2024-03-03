import React from 'react'
import "./Hero.css"
// icons
import { IoTimeOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
// commponents
import SeasonNow from '../SeasonNow/SeasonNow';
import Title from '../Title/Title';
import Nav from '../Nav/Nav';
import SerachedContent from '../SerachedContent/SerachedContent';



export default function Hero() {

  return (<>
  <Nav search='true'/>
    <div id='hero' className='w-100 '>
        <div className='col-sm-12 col-md-7  position-relative top-50 px-5 '>
          <h1 className='text-white  fw-bold'>
          Unlimited <span>anime</span> , TVs Shows, & More.
          </h1>
          <ul className='d-flex text-white  fw-bolder flex-wrap p-0'>
             <li className="quality d-flex align-items-center pe-3 ">
                 <span>Pg 18</span>
                 <span>hd</span>
             </li>
             <li className="category d-flex align-items-center pe-3">
                 <a href="/">Romance,</a>
                 <a href="/">Drama</a>
             </li>
             <li className="release-time d-flex align-items-center pe-3">
                 <span className='p-1  d-flex align-items-center'><LuCalendarDays/> 2021</span>
                 <span className='p-1  d-flex align-items-center'><IoTimeOutline/> 128 min</span>
             </li>
          </ul>
        </div>
    </div>
    <SerachedContent/>
    <Title text="Season Now" bgColor="#000"/>  
    <SeasonNow/>

  </>)
}
