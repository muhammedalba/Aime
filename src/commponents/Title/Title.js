import React from 'react'
// import { Fade } from 'react-awesome-reveal'
import "./Title.css"
import { Fade } from 'react-awesome-reveal';

  function Title(props) {
  return (
  <Fade direction='up'cascade triggerOnce={true} >
 <div style={{backgroundColor:`${props.bgColor}`}}id='title'>
   {`${props.text}`}
   <p>{`${props.text}`}</p>
    </div> 
       </Fade>

  )
  
  
}
export default Title;