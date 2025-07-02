import { useRef } from "react";
import Landing from "./Landing"
import {motion, useScroll, useTransform} from 'framer-motion'



const Hero = () => {
    
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["start start", "end end"]
    })

    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.3])
    // const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
    const opacityText = useTransform(scrollYProgress, [0,0.6], [1, 0])
    
  return (
    <>
        <div className="relative h-screen w-full">
        <motion.div className="fixed inset-0 z-0 flex flex-col items-center justify-center text-center overflow-hidden" style={{scale: scaleText, opacity: opacityText}}>
          {/* <h1 className="text-[210px] font-benguiat tracking-wide">INFOTSAV</h1>
          <h3 className="text-[100px] font-benguiat mt-[-120px] cursor-pointer pointer-events-auto">
            <span className="text-stroke transition-all duration-300">
              2025
            </span>
          </h3> */}

          <Landing />
        </motion.div>
        <motion.img 
            src="src/assets/Home/far-mountains-D8gB3uMQ.png" alt="Mountains" 
            className="absolute bottom-0 w-full max-h-[80vh] object-contain z-30 pointer-events-none" 
            style={{zIndex: 10}}
        />

      </div>
    </>
  )
}

export default Hero