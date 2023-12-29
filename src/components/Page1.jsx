import React, { useEffect, useState } from 'react'
import './page1.css'
import video from '/video.mp4'
import {motion} from 'framer-motion'

const Page1 = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "black",
      // mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <div id="page1">
        <h1>Change</h1>
        <h1>the course</h1>
        <div id="video-container">
          {/* <div id="play">PLAY</div> */}
          <video autoPlay loop muted src={video} 
            onMouseEnter={textEnter} onMouseLeave={textLeave}
          ></video>
        </div>
      </div>
      <motion.img
        className='cursor'
        src="/img.png" 
        variants={variants}
        animate={cursorVariant}
      ></motion.img>
      
    </>
  )
}

export default Page1

