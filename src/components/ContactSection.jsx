
import clsx from "clsx";
import "./Home.css";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Locate,
  Mail,
  Phone,
  Send,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
 import axios from "axios";

function ContactSection() {
  const [isLook, setIsLook] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("success");

  // at the top of your file
// http://localhost:5001/api/contact


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5001/api/contact",
      {
        name,
        email,
        password,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status !== 200) {
      throw new Error("Failed to send");
    }

    setStatusType("success");
    setStatusMessage("✅ Thank you for your message!");
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  } catch (error) {
    setStatusType("error");
    setStatusMessage("❌ Failed to send message. Please try again.");
  }

  setTimeout(() => {
    setStatusMessage("");
  }, 3000);
};



  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out via
          email or connect with me.
        </p>

        

               <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-3 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium "> Phone</h4>
                  <a className="text-muted-foreground hover:text-primary transation-colors">
                    +251921225887
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium"> Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transation-colors"
                    href="dand93575@gmail.com"
                  >
                    dand93575@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Locate className="w-6 h-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Location </h4>
                  <a
                    className="text-muted-foreground hover:text-primary transation-colors"
                    href=""
                  >
                    Addis Abeba Ethiopia
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Contact With Me</h4>
            </div>
            <div className="flex space-x-4 justify-center">
              <a href=" https://github.com/danidan902" target="_blank">
                <Github size={24} className="text-primary size={24} " />
              </a>

              <a
                href="  https://www.youtube.com/channel/UCayBp_hT_UVjNE2LWQQkZLQ"
                target="_blank"
              >
                <Youtube size={24} className="text-primary  bg-shadow " />
              </a>

              <a
                href="https://www.instagram.com/ "
                className="text-primary"
                target="_blank"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                className="text-primary"
                target="_blank"
              >
                <Linkedin size={24} className="text-primary" />
              </a>

              <a
                href="https://www.facebook.com/share/15fDQeUVVL/?mibextid=qi2Omg"
                target="_blank"
              >
                <Facebook size={24} className="text-primary" />
              </a>

              <a href="https://x.com/DaniDan43961658">
                <TwitterIcon size={24} className="text-primary" />
              </a>
            </div>
          </div>




          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
                      {statusMessage && (
  <p
    className={`mt-4 px-4 py-2 rounded text-sm font-medium ${
      statusType === "success"
        ? "bg-green-100 text-green-700 border border-green-400"
        : "bg-red-100 text-red-700 border border-red-400"
    }`}
  >
    {statusMessage}
  </p>
)}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <h4 className="text-primary">Name</h4>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  required
                  placeholder="Enter Your Name..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-gray-400 focus:outline-hidden focus:ring focus:ring-primary"
                />
              </div>

              <div>
                <h4 className="text-primary">Email</h4>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  required
                  placeholder="Enter Your Email..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-gray-400 focus:outline-hidden focus:ring focus:ring-primary"
                />
              </div>

              <div>
                <h4 className="text-primary mb-2">Password</h4>
                <div className="relative">
                  <input
                    type={isLook ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password..."
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-primary pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setIsLook(!isLook)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {isLook ? (
                      <IoEyeOutline size={20} color="gray" />
                    ) : (
                      <IoEyeOffOutline size={20} color="gray" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-primary">Message</h4>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  required
                  placeholder="Hello, I would like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-gray-400 focus:outline-hidden focus:ring focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-20"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

    
    </section>
  );
}

export default ContactSection;

