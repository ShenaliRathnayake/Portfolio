import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeScene from "./ThreeScene";

function Loader() {

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);


    return () => clearTimeout(timer);


  }, []);




  return (

    <AnimatePresence>


      {
        loading && (

          <motion.div

            initial={{
              opacity: 1
            }}

            exit={{
              opacity: 0
            }}

            transition={{
              duration: 0.8
            }}

            className="fixed inset-0 bg-black z-[200] flex items-center justify-center"

          >


            <div className="text-center">



              <motion.h1

                initial={{
                  scale: 0.5,
                  opacity: 0
                }}

                animate={{
                  scale: 1,
                  opacity: 1
                }}

                transition={{
                  duration: 1
                }}

                className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"

              >

                Shenali Rathnayake

              </motion.h1>




              <p className="mt-5 text-gray-400">

                Initializing Developer Portfolio...

              </p>




              <motion.div

                initial={{
                  width: 0
                }}

                animate={{
                  width: "250px"
                }}

                transition={{
                  duration: 2
                }}

                className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-8 mx-auto"

              />



            </div>


          </motion.div>

        )

      }


    </AnimatePresence>

  );

}


export default Loader;