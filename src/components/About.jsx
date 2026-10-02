import { motion } from "framer-motion";

import genai from "../assets/certificates/genai.png";
import aws from "../assets/certificates/aws.png";
import frontend from "../assets/certificates/frontend.png";
import backend from "../assets/certificates/backend.png";
import IOT from "../assets/certificates/IOT.png";
import cloude from "../assets/certificates/cloude.png";


function About() {


const certificates=[

{
image:genai,
title:"Generative AI",
category:"Artificial Intelligence"
},

{
image:aws,
title:"AWS Cloud",
category:"Cloud Computing"
},

{
image:frontend,
title:"Frontend Development",
category:"React & UI Engineering"
},

{
image:backend,
title:"Backend Development",
category:"API & Server Engineering"
},

{
image:IOT,
title:"Internet of Things",
category:"Smart Systems"
},

{
image:cloude,
title:"Cloud Computing",
category:"Cloud Technologies"
}

];



return (

<section
id="about"
className="
relative
min-h-screen
px-6
py-32
overflow-hidden
"
>


{/* Background Atmosphere */}


<div
className="
absolute
w-[500px]
h-[500px]
bg-cyan-500/20
rounded-full
blur-[140px]
top-20
-left-20
"
/>


<div
className="
absolute
w-[500px]
h-[500px]
bg-purple-500/20
rounded-full
blur-[140px]
bottom-0
right-0
"
/>




<motion.div

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

viewport={{
once:true
}}

className="
max-w-7xl
mx-auto
relative
z-10
"

>



{/* Title */}


<h2

className="
text-center
text-5xl
md:text-6xl
font-black
mb-10
bg-gradient-to-r
from-cyan-400
via-purple-500
to-pink-500
bg-clip-text
text-transparent
"

>

About Me

</h2>





<p

className="
max-w-4xl
mx-auto
text-center
text-gray-400
text-lg
leading-relaxed
"

>

I am a Software Engineer and Frontend Developer
focused on creating modern, scalable and interactive
digital experiences.

I build applications using React.js, JavaScript,
Laravel and modern UI/UX technologies.

My interests include Artificial Intelligence,
Computer Vision, Cloud Computing and emerging
technologies.

</p>







{/* Expertise Section */}


<div

className="
grid
md:grid-cols-3
gap-8
mt-20
"

>


<Expertise

number="01"

title="Frontend Engineering"

text="Creating immersive interfaces using React.js, Tailwind CSS, animations and modern component architecture."

/>


<Expertise

number="02"

title="Backend Engineering"

text="Developing secure APIs, authentication systems and scalable backend solutions using Laravel."

/>



<Expertise

number="03"

title="AI & Innovation"

text="Exploring Machine Learning, Computer Vision, Generative AI and intelligent applications."

/>



</div>








{/* Certificates */}


<div className="mt-32">


<h3

className="
text-center
text-4xl
md:text-5xl
font-bold
mb-14
"

>

Certifications & Learning Journey

</h3>




<div

className="
overflow-hidden
relative
"

>


<motion.div

animate={{

x:["0%","-50%"]

}}

transition={{

duration:35,
repeat:Infinity,
ease:"linear"

}}

className="
flex
gap-10
w-max
"

>


{

[...certificates,...certificates].map((certificate,index)=>(


<motion.div


key={index}


whileHover={{

scale:1.08,
rotateY:12,
y:-15

}}


transition={{

type:"spring",
stiffness:200

}}


className="
group
w-[330px]
rounded-3xl
overflow-hidden
bg-white/10
dark:bg-white/10
backdrop-blur-2xl
border
border-white/20
shadow-[0_20px_50px_rgba(0,0,0,0.3)]
"

>



<div

className="
relative
overflow-hidden
"

>


<img

src={certificate.image}

alt={certificate.title}

className="
w-full
h-56
object-cover
group-hover:scale-110
transition
duration-700
"

/>


<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/70
to-transparent
"

/>


</div>




<div

className="
p-6
"

>


<h4

className="
text-xl
font-bold
text-cyan-300
"

>

{certificate.title}

</h4>


<p

className="
text-sm
text-gray-400
mt-2
"

>

{certificate.category}

</p>



</div>



</motion.div>


))


}



</motion.div>


</div>


</div>






</motion.div>


</section>

);

}






function Expertise({number,title,text}){


return (

<motion.div

whileHover={{

y:-12

}}

className="
relative
p-8
rounded-3xl
bg-white/10
backdrop-blur-xl
border
border-white/20
overflow-hidden
"

>


<span

className="
text-6xl
font-black
text-white/10
absolute
right-5
top-3
"

>

{number}

</span>



<h3

className="
text-2xl
font-bold
text-cyan-400
mb-4
relative
"

>

{title}

</h3>



<p

className="
text-gray-400
leading-relaxed
relative
"

>

{text}

</p>


</motion.div>

)

}



export default About;