import React, { useRef } from 'react'
import './page2.css'
import { motion, useScroll, useTransform } from 'framer-motion'


const Page2 = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-300%","400%"])

  return (
    <div id="page2">
            <div id="elem1" className="elem">
                <img ref={ref}
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
                    alt=""/>
                <motion.div className="dets" style={{y:y}}></motion.div>

            </div>
            <div id="elem2" className="elem">
                <img ref={ref}
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format"
                    alt=""/>
                <motion.div className="dets" style={{y:y}}></motion.div>

            </div>
            <div id="elem3" className="elem">
                <img ref={ref}
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
                    alt=""/>
                <motion.div className="dets" style={{y:y}}></motion.div>
            </div>

        </div>
  )
}

export default Page2
