import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [IsDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    if (IsDarkMode) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };
  
  
// className={{"fixed w-full z-40 transition-all duration-300" : isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"}}
// className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       )}

  return (
   <button
  onClick={toggle}
  className=" fixed top-15 right-9 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer"
>
  {IsDarkMode ? (
    <Moon className="h-6 w-6 text-primary" size={30}/>
    
  ) : (
    <Sun className="h-6 w-6 text-yellow-300" />
  )}
</button>
  );
};

export default ThemeToggle;
