import { motion } from "framer-motion";
import {
FaGithub,
FaExternalLinkAlt,
FaArrowLeft,
FaReact,
FaLaravel,
FaDatabase,
FaCode,
FaRocket
} from "react-icons/fa";

import ecommerce from "../../assets/projects/ecommerce.png";
import ThreeScene from "../../components/ThreeScene";
import { Link } from "react-router-dom";



function Section({title,color,children}){


return (

<motion.section

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
relative
p-8
rounded-3xl
bg-white/10
dark:bg-white/10
backdrop-blur-2xl
border
border-white/20
shadow-[0_20px_60px_rgba(0,0,0,.25)]
overflow-hidden
"

>


<div className="
absolute
w-40
h-40
bg-cyan-500/20
blur-3xl
rounded-full
-top-10
-right-10
"/>


<h2

className={`
text-3xl
font-bold
mb-6
${color}
`}
>

{title}

</h2>


{children}


</motion.section>

)

}





function Ecommerce(){



const technologies=[

{
icon:<FaReact/>,
name:"React.js",
desc:"Frontend Framework"
},

{
icon:<FaLaravel/>,
name:"Laravel",
desc:"Backend Framework"
},

{
icon:<FaDatabase/>,
name:"MySQL",
desc:"Database"
},

{
icon:<FaCode/>,
name:"REST API",
desc:"Communication Layer"
}

];



const features=[

"User Authentication",
"Product Management",
"Shopping Cart System",
"REST API Integration",
"Responsive UI Design",
"Modern Animations"

];




return (

<div

className="
min-h-screen
relative
overflow-hidden
px-6
py-28
"

>


<ThreeScene/>


<div

className="
absolute
inset-0
bg-black/40
"

/>




<div

className="
relative
z-10
max-w-7xl
mx-auto
"

>




{/* Back */}

<Link

to="/"

className="
inline-flex
items-center
gap-3
px-5
py-3
rounded-xl
bg-white/10
border
border-white/20
hover:bg-cyan-500/20
transition
mb-12
"

>

<FaArrowLeft/>

Back Portfolio

</Link>








{/* HERO */}


<motion.div

initial={{
opacity:0,
y:-50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
text-center
"

>


<p className="
text-cyan-400
text-xl
mb-4
">

Full Stack Project

</p>


<h1

className="
text-6xl
md:text-8xl
font-black
bg-gradient-to-r
from-cyan-400
via-purple-500
to-pink-500
bg-clip-text
text-transparent
"

>

E-Commerce Platform

</h1>


<p

className="
max-w-4xl
mx-auto
mt-8
text-gray-300
text-lg
leading-relaxed
"

>

A complete full-stack ecommerce platform built with
React and Laravel.
This project demonstrates frontend engineering,
backend API development,
authentication and database management.

</p>



</motion.div>







{/* IMAGE */}



<motion.div

whileHover={{
scale:1.03,
rotateY:5
}}

transition={{
type:"spring"
}}

className="
mt-16
rounded-[40px]
overflow-hidden
border
border-white/20
shadow-[0_30px_100px_rgba(0,255,255,.25)]
"

>


<img

src={ecommerce}

alt="Ecommerce"

className="
w-full
"

/>


</motion.div>









{/* TECHNOLOGY */}


<div

className="
grid
md:grid-cols-4
gap-6
mt-16
"

>


{

technologies.map((tech)=>(


<motion.div

key={tech.name}

whileHover={{
y:-10,
scale:1.05
}}

className="
p-6
rounded-3xl
bg-white/10
border
border-white/20
backdrop-blur-xl
text-center
"

>


<div className="
text-4xl
text-cyan-400
mb-4
flex
justify-center
">

{tech.icon}

</div>


<h3 className="
font-bold
text-xl
">

{tech.name}

</h3>


<p className="
text-gray-400
mt-2
text-sm
">

{tech.desc}

</p>


</motion.div>


))

}


</div>









<div className="
space-y-10
mt-20
">


<Section

title="What is this project?"

color="text-cyan-400"

>

<p className="
text-gray-300
leading-relaxed
">

A modern ecommerce application that allows users
to register, login, browse products,
manage shopping carts and interact with
a responsive online shopping platform.

</p>


</Section>







<Section

title="Why I Built This"

color="text-purple-400"

>


<p className="
text-gray-300
leading-relaxed
">

I built this project to understand real-world
full-stack development and learn how frontend,
backend and databases work together.

The goal was to move from beginner-level coding
to building a complete production-style application.

</p>


</Section>









<Section

title="Development Journey"

color="text-green-400"

>


<div className="
space-y-8
border-l
border-cyan-400/40
pl-6
">


{

[

[
"01",
"Planning",
"Designed application structure, pages and database models."
],

[
"02",
"Frontend Development",
"Created React components, routing and responsive UI."
],

[
"03",
"Backend Development",
"Built Laravel APIs, authentication and database operations."
],

[
"04",
"Integration",
"Connected frontend and backend using Axios."
]


].map(item=>(


<div key={item[0]}>

<h3 className="
text-xl
font-bold
text-white
">

{item[0]} — {item[1]}

</h3>


<p className="
text-gray-400
mt-2
">

{item[2]}

</p>


</div>


))

}


</div>


</Section>









<Section

title="Special Features"

color="text-yellow-400"

>


<div className="
grid
md:grid-cols-2
gap-5
">


{

features.map(feature=>(


<div

key={feature}

className="
p-5
rounded-2xl
bg-black/30
border
border-white/10
"

>

✓ {feature}

</div>


))

}


</div>


</Section>









<Section

title="Future Improvements"

color="text-pink-400"

>


<ul className="
space-y-3
text-gray-300
">


<li>💳 Payment Gateway Integration</li>

<li>📊 Admin Dashboard</li>

<li>🔍 Advanced Product Search</li>

<li>📦 Order Tracking System</li>

<li>🌙 Theme Customization</li>


</ul>


</Section>





</div>









{/* BUTTONS */}



<div

className="
flex
justify-center
gap-6
mt-16
flex-wrap
"

>


<a

href="#"

className="
px-8
py-4
rounded-2xl
bg-white/10
border
border-white/20
flex
items-center
gap-3
hover:scale-105
transition
"

>

<FaGithub/>

Github Code

</a>





<a

href="#"

className="
px-8
py-4
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-purple-600
flex
items-center
gap-3
hover:scale-105
transition
"

>

<FaExternalLinkAlt/>

Live Demo

</a>



</div>




</div>


</div>

)


}


export default Ecommerce;