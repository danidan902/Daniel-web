import { ArrowBigRightDashIcon, ArrowRight, ExternalLink, GithubIcon, Key } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Portfolio web",
    description:
      "my own portfolio website that are buld use React and TailwindCSS.",
    image: "/project/projects.png",
    tags: ["React", "TailwindCSS", "Bootstrap"],
  },

  {
    id: 2,
    title: "Top Institute",
    description:
      "Top insitute website that are buld use React, TailwindCSS and modern technology.",
    image: "/project/page.png",
    tags: ["React", "TailwindCSS", "Bootstrap"],
  },

  {
    id: 3,
    title: "Portfolio web",
    description:
      "my own portfolio website that are buld use React and TailwindCSS.",
    image: "/project/blue.png",
    tags: ["React", "TailwindCss", "Bootstrap"],
  },
];

function ProjectSection() {
  return (
    <section id="Project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My<span className="text-primary">Project</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here my project was created with attantion and to give detail explain,
          perfromance and user experience
        </p>

        <div className="grid grid-colos-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Projects.map((Project, Key) => (
            <div
              key={Key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-35 overflow-hidden">
                <img
                  src={Project.image}
                  alt={Project.title}
                  className="w-full h-full obiect-cover transation-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{Project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {Project.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href="#"
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transation-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href="https://github.com/danidan902/Personal-web"
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transation-colors duration-300"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a className="cosmic-button w-fit flex items-center mx-auto" href="https://github.com/danidan902">
            Check My Github <ArrowRight size={30} className="text-muted-foreground animate-pulse-subtle "/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
