import React ,{useEffect,useState}from 'react'
import './AnimeBeyID.css'
// slide
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// icon
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

import Nav from '../Nav/Nav'
import Loading from '../loading/Loading';

import {  base_URl } from '../../Api/ApI';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function Slide() {
  const [TopData,setdata]=useState([]);
  const [loading,setloading]=useState(true);
  const {id} =useParams();
  const par =`${base_URl}/anime/${id}`;
  
  useEffect(() => {
    
    getAnime(par);
  }, [])
  
  console.log(TopData);
  TopData.images !== undefined  && console.log(TopData.images.jpg.image_url);
  async function getAnime(par) {
    try{
      const res= await fetch(par)
      const re=await res.json()
      setdata(re.data);
      setloading(false);
      
      // console.log(TopData.images.jpg.image_url);
      // console.log([arry].map((e)=>{return e.jpg.image_url}));
    }catch(err){console.log(err);}
    
    
  }
  
  
  
  
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    }
  };

  return (<>
  {loading && <Loading/>}
  <Nav/>
   

<div id='Carousel'
 style={{backgroundImage:TopData.images && `url(${TopData.images.jpg.large_image_url})`}}
 >
{/* <Carousel responsive={responsive}
    // swipeable={false}
    // draggable={false}
    // showDots={true}
    
    // ssr={true} // means to render carousel on server-side.
    // infinite={true}
    // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    // autoPlaySpeed={1000}
    // keyBoardControl={true}
    // customTransition="all .5"
    // transitionDuration={500}
    // containerClass="carousel-container"
    // removeArrowOnDeviceType={["tablet", "mobile"]}
    // // deviceType={this.props.deviceType}
    // dotListClass="custom-dot-list-style"
    // itemClass="carousel-item-padding-40-px"
  >
  
</Carousel> */}


  <div  id="AnimeBeydi" className="position-relative m-auto "
   style={{ width: "25rem" ,}}>
   <img
     id="imge"
     src={TopData.images && TopData.images.jpg.image_url}
     className="w-100 h-100 "
     alt={TopData.title}
     />
  </div>  


</div> 
    
      
 
  </>)
}
