import { motion } from 'framer-motion'
import './Carrosel.css'
import img1 from '../img/carrosel/img1.jpeg'
import img2 from '../img/carrosel/img2.jpeg'
import img3 from '../img/carrosel/img3.jpeg'
import img4 from '../img/carrosel/img4.jpeg'
import img5 from '../img/carrosel/img5.jpeg'


import { useEffect, useRef, useState } from 'react'

const imgs = [img1,img2,img3,img4,img5]

function Carrosel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)


  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])



  return(
    <div className='Carrosel'>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
        <motion.div 
        drag="x"
        dragConstraints={{ right: 0,left:-width}}
        className='inner'>
          {imgs.map(image =>(
            <motion.div className='item' key={image}>
              <img src={image} alt="textoalt"/>
               </motion.div>
          ))}
        </motion.div>
         </motion.div>
    </div>
  )
}
export default Carrosel