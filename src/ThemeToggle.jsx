import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";


function ThemeToggle(){

const {theme,setTheme}=useTheme();


return (

<button

onClick={()=>{

setTheme(
theme==="dark"
?
"light"
:
"dark"
)

}}

className="
p-3
rounded-full
bg-white/10
border
border-white/20
hover:scale-110
transition
"

>

{

theme==="dark"

?

<FaSun className="text-yellow-400"/>

:

<FaMoon className="text-purple-500"/>

}

</button>

)

}

export default ThemeToggle;