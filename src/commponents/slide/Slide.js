import React ,{useEffect,useState}from 'react'
import './Slide.css'
// slide
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// icon
import { AiFillLike } from "react-icons/ai";
import Loading from '../loading/Loading';
import { TOP_URl } from '../../Api/ApI';
export default function Slide() {
  const [TopData,setdata]=useState([]);
  const [loading,setloading]=useState(true);
  useEffect(() => {
  
    getTopAnime();
   }, [])




 async function getTopAnime() {
  try{
    await fetch(TOP_URl)
    .then(data=>data.json())
    .then(TopData=>setdata(TopData.data));
    setloading(false);
  }catch(err){console.log(err);}

   
  }
  console.log(TopData);



  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
 
  const ShowData= TopData.map((e,index)=>{return <div key={index} className="card mx-2 " style={{width: '18rem'}}>
  <a target='_blank' href={e.trailer.url}><img id='imge' src={e.images.jpg.image_url} className="card-img-top" alt={e.title}/> </a>
  
  <div className="card-body">
    <h5 className="card-title">{e.title}<span>{e.year}</span></h5>
    <p> <AiFillLike/>{e.favorites}</p>
    {/* <p className="card-text">{e.synopsis.slice(0,150)}...</p> */}
    <a   href={e.url} className="btn btn-primary">Go somewhere</a>
  </div>
 
  <div>
   
  </div>
</div>
  
  
  
  })
  return (<>
  {loading && <Loading/>}
    <div id='Carousel'> 

<div id='Carousel2'>
<Carousel responsive={responsive}
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
 {ShowData}  

     </Carousel>


</div>
    
      
  </div>
  </>)
}
