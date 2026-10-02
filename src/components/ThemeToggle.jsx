import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";


function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);


  useEffect(() => {

    setMounted(true);

  }, []);


  if (!mounted) {
    return null;
  }


  return (

    <button

    onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
    }

    className="
    w-9
    h-9
    flex
    items-center
    justify-center
    rounded-full
    bg-white/10
    border
    border-white/20
    hover:scale-110
    transition
    "

    >

    {
    theme === "dark"
    ?
    <FaSun className="text-yellow-400 text-xs" />
    :
    <FaMoon className="text-purple-500 text-xs" />
    }

    </button>

  );

}


export default ThemeToggle;