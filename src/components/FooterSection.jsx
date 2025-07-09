import  './Home.css'
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  TwitterIcon,
  Youtube,
} from "lucide-react";


function FooterSection() {
  return (
  
      <footer className="py-4 bg-background/10 backdrop-blur-md shadow-md text-[10px] md:text-xs">
  <div className="container  mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-2">
    
    <h2 className="font-bold text-2xs">
      © {new Date().getFullYear()} Developed by <span className="text-primary">Daniel Shelem</span>
    </h2>

    <div className="flex gap-3">
          <a href=" https://github.com/danidan902" target="_blank">
                <Github size={16}  className="text-primary hover:text-blue-500 hover:scale-110 transition duration-300" />
              </a>

              <a
                href="  https://www.youtube.com/channel/UCayBp_hT_UVjNE2LWQQkZLQ"
                target="_blank"
              >
                <Youtube size={16} className="text-primary hover:text-blue-500 hover:scale-110 transition duration-300" />
              </a>

              <a
                href="https://www.instagram.com/ "
                className="text-primary"
                target="_blank"
              >
                <Instagram size={16} className="text-primary hover:text-blue-500 hover:scale-110 transition duration-300"/>
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                className="text-primary"
                target="_blank"
              >
                <Linkedin size={16} className="text-primary hover:text-blue-500 hover:scale-110 transition duration-300" />
              </a>

              <a
                href="https://www.facebook.com/share/15fDQeUVVL/?mibextid=qi2Omg"
                target="_blank"
              >
                <Facebook size={16} className="text-primary hover:text-blue-500 hover:scale-110 transition duration-300" />
              </a>

              <a href="https://x.com/DaniDan43961658">
                <TwitterIcon size={16} className="text-primary hover:text-blue-500 hover:scale-110 transition duration-300" />
              </a>
    </div>

  </div>
</footer>

  
  )
}

export default FooterSection