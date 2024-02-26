import React,{useState,useEffect} from 'react'
// icon
import { AiFillLike } from "react-icons/ai";
import { SEAON_SNOW } from '../../Api/ApI';

export default function SeasonNow() {
    const [TopData,setdata]=useState([]);
    const [loading,setloading]=useState(true);
    useEffect(() => {
        // getSeasonAnimeNow(SEAON_SNOW) 
        
     }, [])
    async function getSeasonAnimeNow(SEAON_SNOW) {
        try{
        const res= await fetch(SEAON_SNOW)
        const re=await res.json()
          setdata(re.data);
           setloading(false);
           console.log(TopData);
           
        }catch(err){console.log(err);}
      
         
        }

    const ShowData=TopData.map((e,index)=>{return <div key={index} className="card m-auto " style={{width: '14rem'}}>
    <img id='imge' src={e.images.jpg.image_url} className="card-img-top" alt={e.title}/>
    
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
  return (
<div className='container-fluid pt-5'>
<div className='col-sm-12'>
    <div className='row '>
        {ShowData}
    </div>
   </div>
</div>
  )
}
