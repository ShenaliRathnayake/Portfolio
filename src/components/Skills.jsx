import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";
import {
  FaReact,
  FaJs,
  FaLaravel,
  FaPython,
  FaDatabase
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTensorflow,
  SiOpencv
} from "react-icons/si";


function Skills() {


  const skills = [

    {
      name: "React.js",
      level: "95%",
      icon: <FaReact />
    },


    {
      name: "JavaScript",
      level: "90%",
      icon: <FaJs />
    },


    {
      name: "Laravel",
      level: "85%",
      icon: <FaLaravel />
    },


    {
      name: "Python",
      level: "90%",
      icon: <FaPython />
    },


    {
      name: "Tailwind CSS",
      level: "90%",
      icon: <SiTailwindcss />
    },


    {
      name: "AI / Computer Vision",
      level: "85%",
      icon: <SiTensorflow />
    },


    {
      name: "OpenCV",
      level: "85%",
      icon: <SiOpencv />
    },


    {
      name: "Database",
      level: "80%",
      icon: <FaDatabase />
    }

  ];





  return (

    <section id="skills" className="min-h-screen px-6 py-24">


      <div className="max-w-6xl mx-auto">



        <motion.h2

          initial={{
            opacity: 0,
            y: 50
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          className="text-center text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"

        >

          Skills

        </motion.h2>





        <div className="grid md:grid-cols-2 gap-8">



          {
            skills.map((skill, index) => (


              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  duration: 0.5
                }}

                whileHover={{
                  scale: 1.05
                }}

                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"

              >




                <div className="flex items-center gap-4 mb-5 text-2xl">


                  <span className="text-cyan-400">

                    {skill.icon}

                  </span>



                  <h3>

                    {skill.name}

                  </h3>



                </div>






                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">



                  <motion.div

                    initial={{
                      width: 0
                    }}

                    whileInView={{
                      width: skill.level
                    }}

                    transition={{
                      duration: 1
                    }}

                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"

                  >


                  </motion.div>



                </div>






                <p className="text-right mt-2 text-gray-400">

                  {skill.level}

                </p>





              </motion.div>


            ))

          }



        </div>


      </div>


    </section>


  );

}


export default Skills;