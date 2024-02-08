import React,{useEffect} from 'react'
import "./Home.css"

export default function Home() {
  const dark='https://api.jikan.moe/v4/anime/5';

async function name() {
      await fetch(dark)
      .then(data=>data.json())
      .then(dat=>console.log(dat.data))
  }

useEffect(() => {

name()
}, [])



  return (
    <div id='home' className='w-100 '>

      
    

    </div>
  )
}
