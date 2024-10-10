import { useRef, useEffect } from "react";

import gsap from "gsap";

const Moving_SVG = ()=>{

    //Circles
    const greyCircle_Ref = useRef(null)
    const redCircle_Ref = useRef(null)
    const yellowCircle_Ref = useRef(null)

    //Dishes
    const plate_One_Ref = useRef(null)
    const plate_Two_Ref = useRef(null)
    const plate_Three_Ref = useRef(null)
    const plate_Four_Ref = useRef(null)

    useEffect(()=>{
       const handleMouseMove = (e) =>{
          const x = (e.clientX / window.innerWidth - 0.5) * 22;
          const y = (e.clientY / window.innerHeight - 0.5) * 22;

          gsap.to(greyCircle_Ref.current, {
            x: x,
            y: y,
            duration: 1.5,
            delay: 0.15,
            ease: 'power2.out'
          })

          gsap.to(redCircle_Ref.current, {
            x: x * 2,
            y: y * 2,
            duration: 0.5,
            ease:'ease-in'
          })
         
          gsap.to(yellowCircle_Ref.current, {
            x: x * 4,
            y: y * 4,
            duration: 4.3,
            delay: 0.1,
            ease:'power2.out'
          })

          gsap.to(plate_One_Ref.current, {
            x: x * 2.5,
            y: y * 2.5,
            duration: 5.8,
            ease:'power2.out'
          })

          gsap.to(plate_Two_Ref.current, {
            x: x * 2.5,
            y: y * 2.5,
            duration: 5.8,
            delay: 0.1,
            ease:'power2.out'
          })

          gsap.to(plate_Three_Ref.current, {
            x: x * 2.5,
            y: y * 2.5,
            duration: 5.8,
            delay: 0.2,
            ease:'power2.out'
          })

          gsap.to(plate_Four_Ref.current, {
            x: x * 2.5,
            y: y * 2.5,
            duration: 5.8,
            delay: 0.4,
            ease:'power2.out'
          })
          
       }   
       
       window.addEventListener('mousemove', handleMouseMove)
  

       return () =>{
        window.removeEventListener('mousemove', handleMouseMove)
       }
    }, [])
 
    
    
    return (
        
       <div className="moving_SVG_Container">
        <img ref={yellowCircle_Ref} className="circle circle_1" src="Moving SVGS\circle_1.png" alt="" />
        <img ref={redCircle_Ref} className="circle circle_2" src="Moving SVGS\circle_2.png" alt="" />
        <img ref={greyCircle_Ref} className="circle circle_3" src="Moving SVGS\circle_3.png" alt="" />
        <img ref={plate_One_Ref} className="food_Plate_Icon icon_1" src="Moving SVGS\svg_1.png" alt="" />
        <img ref={plate_Two_Ref} className="food_Plate_Icon icon_2" src="Moving SVGS\svg_2.png" alt="" />
        <img ref={plate_Three_Ref} className="food_Plate_Icon icon_3" src="Moving SVGS\svg_3.png" alt="" />
        <img ref={plate_Four_Ref} className="food_Plate_Icon icon_4" src="Moving SVGS\svg_4.png" alt="" />
       </div>
        
    )
}

export default Moving_SVG;