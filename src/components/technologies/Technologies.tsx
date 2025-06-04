import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import tsIcon from "../../assets/icons/ts.svg";
import cypressIcon from "../../assets/icons/cypress.svg";
import jestIcon from "../../assets/icons/jest.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import nodejsIcon from "../../assets/icons/nodejs.svg";
import expressIcon from "../../assets/icons/express.svg";
import sqliteIcon from "../../assets/icons/sqlite.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import gitIcon from "../../assets/icons/git.svg";
import reactIcon from "../../assets/icons/react.svg";
import npmIcon from "../../assets/icons/npm.svg";
import vercelIcon from "../../assets/icons/vercel.svg";

const technologies = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Cypress", icon: cypressIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "Express", icon: expressIcon },
  { name: "SQLite", icon: sqliteIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Git", icon: gitIcon },
  { name: "Jest", icon: jestIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "React", icon: reactIcon },
  { name: "npm", icon: npmIcon },
  { name: "Vercel", icon: vercelIcon },
];

export function Technologies() {
  return (
    <section id="technologies" className="bg-transparent text-black py-46 px-6 border-t border-[#00FF41] font-mono">
      <h3 className="text-5xl font-semibold tracking-tight text-[#00FF41] sm:text-7xl mb-12 text-center">
        Technologies
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 border border-black rounded-lg bg-[#009a22]/90  shadow-md hover:scale-120 hover:bg-[#00FF41] transition transform duration-300">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
            <span className="text-lg font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
