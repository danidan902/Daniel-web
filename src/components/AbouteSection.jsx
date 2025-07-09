import { ArrowDown, Briefcase, Code, Download, Eye, User } from "lucide-react";

function AbouteSection() {
  return (
    <section id="Aboute" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          About<span className="text-primary ">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            {" "}
            Passinate Web Developer & Deployer
          </h3>
          <p className="text-muted-foreground ">
            Hi I,M Daniel Sheleme web developer & deployment , I specialize very
            responsive, accessible and performat website using more modern
            technologies.
          </p>

          <p className="text-muted-foreground ">
            turning ideas into reality through clean code, seamless deployments,
            and optimized performance.
          </p>

          <div className="flex flex-col sm:flex-row pt-4 justify-center gap-5">
            <a
  href="../assets/daniel.pdf" // 🔁 Change this to your actual file path
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full border text-primary hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2"
>
  View CV
  <Eye
    size={30}
    className="h-5 w-5 text-primary top-0 "
  />
</a>

            <a
              href="../assets/daniel.pdf"
              download="daniel.pdf"
              className="px-6 py-2 rounded-full border text-primary hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2 justify-center"
            >
              Download CV
              <Download
                size={30}
                className="h-5 w-5 text-primary top-0 animate-bounce"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-b-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg ">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive website and more interactive modern web
                  application and website.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            {" "}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-b-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>

              <div className="text-left">
                <h4 className="font-semibold text-lg ">Web Designe</h4>
                <p className="text-muted-foreground">
                  My goal is to design interfaces that not only look beautiful
                  but also provide a smooth and responsive experience across all
                  devices.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-b-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <div className="text-left">
                <h4 className="font-semibold text-lg ">Project Management</h4>
                <p className="text-muted-foreground">
                  Leading project from conception to complation with diffrent
                  methdologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AbouteSection;
