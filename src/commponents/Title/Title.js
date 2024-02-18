import React from 'react'
// import { Fade } from 'react-awesome-reveal'
import "./Title.css"

  function Title(props) {
  return (
  // <Fade direction='up' triggerOnce={true} >
 <div style={{backgroundColor:`${props.bgColor}`}}id='title'>
   {`${props.text}`}
   <p>{`${props.text}`}</p>
    </div> 
      // </Fade>

  )
  
  
}
export default Title;