import React,{useState,useEffect} from 'react'
// icon
import { SEAON_SNOW } from '../../Api/ApI';
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

export default function SeasonNow() {
    const [TopData,setdata]=useState([]);
    const [loading,setloading]=useState(true);
    
    useEffect(() => {
        getSeasonAnimeNow(SEAON_SNOW) ;
      
     }, [])
    async function getSeasonAnimeNow(SEAON_SNOW) {
        try{
        const res= await fetch(SEAON_SNOW)
        const re=await res.json()
        setdata(re.data);
        setloading(false);  
        }catch(err){console.log(err);}
}

     //ShowData
  const ShowData= TopData !== undefined  && TopData.map((e,index)=>{return <div key={index} id="card" className="  position-relative m-auto " style={{ width: "14rem" ,}}>
  <div className="position-absolute top-0 left-0 overflow-hidden h-100 w-100">
   <img
     id="imge"
     src={e.images.jpg.image_url}
     className=" "
     alt={e.title}
     />
     {e.synopsis && <p id="cardText" className="position-absolute px-2 w-100 m-0">{e.synopsis.slice(0,200)}</p>}  
  </div>
 
   <Link to={`/${e.mal_id}`}>
   <div id="cartBody" className=" w-100 h-100 position-relative z-3">
     <div  className="px-2 w-100 position-absolute  d-flex justify-content-between align-items-center ">
       <span id="cardSpanColor"> {e.title.slice(0,20)}</span>
       <span>{e.year}</span>
     </div>
     <div id="anemiContent" className="px-2 position-absolute  d-flex justify-content-between align-items-center my-2 px-1 w-100">
      <span id="cardSpanColor" className=" d-flex  align-items-center"> <IoMdTime color='#ffff'/>{e.duration && e.duration}</span>
      <span  className=" d-flex  align-items-center"><AiFillLike color="#0d6efd" />{e.favorites}</span>
       
       
     </div>
  
 
   </div> 
   </Link>
 </div>
   
   
   
  
   });
  return (<>
  {loading && <Loading/>}
<div className='container-fluid pt-5 bg-dark'>
<div className='col-sm-12'>
    <div className='row '>
       <div className='container d-flex flex-wrap m-auto  gap-3'>
        {ShowData}
       </div>
    </div>
   </div>
</div>
  </>)
}
