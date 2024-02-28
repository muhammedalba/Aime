import React,{useContext,} from 'react'
import Title from '../Title/Title'
import { Search } from '../../Context/SearchContext';
import { AiFillLike } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import Loading from '../loading/Loading';



export default function SerachedContent() {
    const {anim,loading}= useContext(Search);
      //ShowData
  const ShowData=anim.length >0 && anim.map((e,index)=>{return <div key={index} id="card" className="  position-relative " style={{ width: "14rem" ,}}>
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
  return (<>
{/* { loading && <Loading/>} */}
    <div
    id="searchAnemi"
    style={{ display: anim.length > 0 ? "block" : "none" }}
    className="w-100"
  >
    <Title text={'Serached Content'} bgColor={"#000"} />
    <div className="container-fluid ">
      <div className="col-sm-12">
        <div className="row justify-content-center ">
          {ShowData}
        </div>
      </div>
    </div>
  </div>
  </>)
}
