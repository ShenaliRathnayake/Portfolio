import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {


  const [open, setOpen] = useState(false);



  const menu = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ];



  return (

    <motion.nav

      initial={{
        y: -100
      }}

      animate={{
        y: 0
      }}

      transition={{
        duration: 0.8
      }}

      className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 z-100"

    >



      <div className="flex justify-between items-center">



        {/* Logo */}

        <h1

          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"

        >

          Shenali Rathnayake

        </h1>





        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-gray-300">


          {
            menu.map((item) => (

              <a

                key={item}

                href={`#${item.toLowerCase()}`}

                className="hover:text-cyan-400 transition"

              >

                {item}

              </a>

            ))
          }


        </div>





        {/* Social */}

        <div className="hidden md:flex gap-4 text-xl">

          <ThemeToggle />
          
          <a

            href="https://github.com/ShenaliRathnayake"

            target="_blank"

          >

            <FaGithub />

          </a>



          <a

            href="https://linkedin.com/in/Shenali Rathnayake"

            target="_blank"

          >

            <FaLinkedin />

          </a>


        </div>





        {/* Mobile Button */}

        <button

          className="md:hidden text-2xl"

          onClick={() => setOpen(!open)}

        >

          {
            open
              ? <FaTimes />
              : <FaBars />
          }


        </button>



      </div>






      {/* Mobile Menu */}

      {

        open && (

          <motion.div

            initial={{
              opacity: 0,
              height: 0
            }}

            animate={{
              opacity: 1,
              height: "auto"
            }}

            className="md:hidden mt-5 flex flex-col gap-5 text-center"

          >



            {
              menu.map((item) => (

                <a

                  key={item}

                  href={`#${item.toLowerCase()}`}

                  onClick={() => setOpen(false)}

                  className="hover:text-cyan-400"

                >

                  {item}

                </a>


              ))
            }



          </motion.div>

        )

      }



    </motion.nav>


  );

}


export default Navbar;