import { useEffect, useState } from "react";
import { motion } from "framer-motion";


function Cursor() {

  const [position, setPosition] = useState({
    x: -100,
    y: -100
  });



  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      });

    };


    window.addEventListener(
      "mousemove",
      moveCursor
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };


  }, []);



  return (

    <motion.div

      animate={{
        x: position.x,
        y: position.y
      }}

      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}

      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 bg-cyan-400/20 pointer-events-none z-[150] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_30px_rgba(0,255,255,0.8)]"

    />


  );

}


export default Cursor;