import clsx from "clsx";
import { Key } from "lucide-react";
import { useState } from "react";

const skills = [
  { name: "HTLM/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "TailWind CSS", level: 80, category: "frontend" },

  // backend

  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 60, category: "backend" },
  { name: "Next.js", level: 80, category: "backend" },

  { name: "Git/Github", level: 90, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Strikingly", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

function SkillSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkilled = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

  return (
    <section id="Skill" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary ">Skills</span>
        </h2>

        <div className="flex flex-wrap mb-12 justify-center gap-4">
          {categories.map((category, Key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={Key}
              className={clsx(
                "px-5 py-2 rounded-full transaition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkilled.map((skill, Key) => (
            <div
              key={Key}
              className="bg-card p-6 rounded-lg shadow-xl card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-forground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
