import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";


import ecommerce from "../assets/projects/ecommerce.png";
import emotion from "../assets/projects/emotion.png";
import traffic from "../assets/projects/traffic.png";
import bioinformatics from "../assets/projects/bioinformatics.png";
import iot from "../assets/projects/iot.png";
import lms from "../assets/projects/lms.png";
import banking from "../assets/projects/banking.png";
import petcare from "../assets/projects/petcare.png";



function Projects() {


const projects = [


{
title:"E-Commerce Platform",
image:ecommerce,
description:
"Full-stack ecommerce platform with authentication, product management, shopping cart and modern responsive UI.",
tech:[
"React",
"Laravel",
"MySQL",
"REST API"
],
link:"/projects/ecommerce"
},



{
title:"Emotion Detection AI",
image:emotion,
description:
"Real-time facial emotion recognition system using computer vision and deep learning models.",
tech:[
"Python",
"OpenCV",
"TensorFlow",
"AI"
],
link:"#"
},




{
title:"Traffic Sign Detection",
image:traffic,
description:
"Computer vision system that detects and classifies road traffic signs using deep learning techniques.",
tech:[
"Python",
"OpenCV",
"Deep Learning"
],
link:"#"
},




{
title:"Bioinformatics Gene Analysis",
image:bioinformatics,
description:
"Gene identification and functional analysis project using biological databases and sequence analysis.",
tech:[
"Python",
"BioPython",
"NCBI",
"BLAST"
],
link:"#"
},




{
title:"IoT Obstacle Avoiding Car",
image:iot,
description:
"Smart robotic vehicle that detects obstacles and automatically changes direction using sensors.",
tech:[
"Arduino",
"Ultrasonic Sensor",
"C++",
"IoT"
],
link:"#"
},





{
title:"Learning Management System",
image:lms,
description:
"Online learning platform for managing courses, students, instructors and digital learning resources.",
tech:[
"React",
"Laravel",
"MySQL",
"Authentication"
],
link:"#"
},





{
title:"Banking Management System",
image:banking,
description:
"Secure banking application for managing accounts, transactions and customer financial records.",
tech:[
"Java",
"MySQL",
"OOP",
"Database"
],
link:"#"
},






{
title:"PetCare Website",
image:petcare,
description:
"Modern pet care platform providing services, information and user-friendly experience for pet owners.",
tech:[
"React",
"Tailwind CSS",
"JavaScript",
"UI/UX"
],
link:"#"
}



];




return (


<section
id="projects"
className="
min-h-screen
px-6
py-24
"
>


<div className="max-w-7xl mx-auto">



<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
text-center
text-5xl
font-bold
mb-16
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
"

>

Projects

</motion.h2>






<div
className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-10
"
>



{
projects.map((project,index)=>(


<Tilt

key={index}

tiltMaxAngleX={12}

tiltMaxAngleY={12}

glareEnable={true}

glareMaxOpacity={0.2}

scale={1.03}

transitionSpeed={1500}

>


<motion.div


initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6,
delay:index*0.1
}}


whileHover={{
y:-10
}}


className="
rounded-3xl
p-6
bg-white/10
backdrop-blur-xl
border
border-white/20
shadow-[0_20px_60px_rgba(0,0,0,0.35)]
hover:border-cyan-400/40
transition
group
"

>




<div
className="
h-52
rounded-2xl
overflow-hidden
mb-6
"
>


<img

src={project.image}

alt={project.title}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>


</div>






<h3
className="
text-2xl
font-bold
mb-3
"
>

{project.title}

</h3>





<p
className="
text-gray-400
mb-5
leading-relaxed
"
>

{project.description}

</p>






<div
className="
flex
flex-wrap
gap-2
mb-6
"
>


{
project.tech.map((tech)=>(


<span

key={tech}

className="
px-3
py-1
rounded-full
bg-cyan-400/10
text-cyan-300
text-sm
border
border-cyan-400/20
"

>

{tech}

</span>


))

}


</div>







<div
className="
flex
gap-3
"
>


<a

href="#"

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-white/10
border
border-white/20
hover:bg-cyan-500/20
transition
"

>

<FaGithub/>

Code

</a>





<Link

to={project.link}

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-gradient-to-r
from-cyan-500
to-purple-600
hover:scale-105
transition
"

>

<FaExternalLinkAlt/>

Details

</Link>



</div>






</motion.div>


</Tilt>


))

}



</div>


</div>


</section>


);

}


export default Projects;