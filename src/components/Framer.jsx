import { useState } from "react";
import { motion } from 'framer-motion'
import images from "@/pages/images";
import Image from "next/image";

export default function Framer() {
    const [isActive,setIsActive] = useState(0);
    
      return (
       
        <main>
          
         <div>
          <motion.div className='carousel'>
            <motion.div className='inner-carousel flex justify-center mt-20'>
              {images.map((image,index)  => {
                return(
                  <motion.div  
                  animate={isActive === index ? {width: '400px' } : {width: '100px'}}
                  className={`item h-[400px] cursor-pointer relative mx-4 rounded-3xl overflow-hidden`} onClick={()=>setIsActive(index)}>
                    <motion.div whileHover={isActive !== index ? {scale:1.2}: {scale:1}} className='relative h-[400px] '>
                    <Image src={image.src} alt="asd" fill className='object-cover  rounded-2xl'/>
                    </motion.div>
                   <motion.div animate={isActive === index ? {opacity: '100%',x: 0 ,transition: {duration: 0.5}} : {opacity: '0%', x: -10}} className='absolute bottom-0 h-[100px] w-full bg-gradient-to-t from-[#000] '>
                    <motion.p animate={isActive === index ? {opacity: '100%',x: 0 ,transition: {duration: 0.5}} : {opacity: '0%', x: -10}} className='absolute bottom-4  left-6 text-white text-2xl '>{image.text} </motion.p>
                  </motion.div>
                  </motion.div>
    
                );
              })}
            </motion.div>
          </motion.div>
         </div>
        </main>
      )
    }