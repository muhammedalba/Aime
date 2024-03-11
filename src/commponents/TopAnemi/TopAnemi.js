import React,{useState,useEffect} from 'react'
import './TopAnemi.css'

import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { TOP_URl } from '../../Api/ApI';
import Title from '../Title/Title';

import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Loading from '../loading/Loading';
import { Fade } from 'react-awesome-reveal';



export default function TopAnemi() {
  const [TopData, setTopData] = useState([]);
  const [loading, setloading] = useState(true);



  
  useEffect(() => {
    getToAnime(TOP_URl)
    }
  , [])
  async function getToAnime(TOP_URl) {
    try{
    const res= await fetch(TOP_URl)
    const re=await res.json()
    setTopData(re.data);
       setloading(false);
  
       
    }catch(err){console.log(err);}
  
     
    }
    //ShowData
    const ShowData=TopData && TopData.map((e,index)=>{return <Fade
    key={index}  duration={1000} damping={0.1} cascade direction='up'>
    <div  id="card" className="  position-relative m-auto " style={{ width: "14rem" ,}}>
    <div className="position-absolute top-0 left-0 overflow-hidden h-100 w-100">
     <img
       id="imge"
       src={e.images.jpg.image_url}
       className=" "
       alt={e.title}
       />
       {/* {e.synopsis && <p id="cardText" className="position-absolute px-2 w-100 m-0">{e.synopsis.slice(0,200)}</p>}   */}
    </div>
   
     <Link to={`/${e.mal_id}`}>
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
     </Link>
   </div>
     
     
     </Fade>
    
     });
  return (
    <>
 {loading && <Loading/>}
    <Nav/>
    <div id='Topanemi' className=''>
    </div>
        {TopData && <Title text='Top anemi' bgColor='#000' />}
        <div style={{backgroundColor:"#171d22"}} className=' pt-5 '>
        <div className='container d-flex flex-wrap m-auto   justify-content-around   gap-3'>
        {ShowData}
        </div>
        </div>
    
    
    </>
  )
}
