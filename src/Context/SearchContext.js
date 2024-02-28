import React, { createContext, useState ,useReducer,useEffect} from 'react'
import { base_URl } from '../Api/ApI';

export const Search = createContext();


export default function SearchContext({children}) {
  const [searchValue,setsearchValue]=useState('');
  const [loading,setloading]=useState(true);
  const [anim,setanim]=useState([]);
 const serchInanimes=async(state,action)=>{
 
   try{
      const res=await  fetch(`${base_URl}/anime?q=${action}&sfw`)
      const re=await res.json();
      // re.data.length === 0 && seterror(true);
      setanim(re.data);
      setloading(false)
      }catch(err){console.log(err);}  
    
    }
     
  

  const [state, dispatch] = useReducer(serchInanimes,anim);


 
 
  return (
    <Search.Provider value={{loading,anim,dispatch}}>
      {children}
    </Search.Provider>
  )
}

 

