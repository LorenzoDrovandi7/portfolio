import { useState } from "react";
import { ProjectCard } from "../projects/ProjectCard";
import commutationem from "../../assets/commutationem.png";
import webdex from "../../assets/webdex.png";
import crudpl from "../../assets/crud-pl.png";
import autorents from "../../assets/autorents.png";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import cypressIcon from "../../assets/icons/cypress.svg";
import jestIcon from "../../assets/icons/jest.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import nodejsIcon from "../../assets/icons/nodejs.svg";
import expressIcon from "../../assets/icons/express.svg";
import nunjucksIcon from "../../assets/icons/nunjucks.svg";
import bulmaIcon from "../../assets/icons/bulma.svg";
import sqliteIcon from "../../assets/icons/sqlite.svg";

const projects = [
  {
    image: webdex,
    title: "WebDex",
    description:
      "Webdex is a modern Pokédex built with the PokeAPI. It allows users to search for Pokémon and view detailed information including stats, evolutions, capture rate, growth rate, egg group, generation, and more.",
    githubUrl: "https://github.com/LorenzoDrovandi7/WebDex",
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Cypress", icon: cypressIcon },
      { name: "Jest", icon: jestIcon },
    ],
  },
  {
    image: autorents,
    title: "AutoRents",
    description:
      "AutoRents is a full-featured CRUD application designed to streamline the management of a car rental service. With AutoRents, you can efficiently handle a complete fleet of vehicles, manage customer data, and operate a rental system that connects both.",
    githubUrl: "https://github.com/LorenzoDrovandi7/AutoRents",
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Node.Js", icon: nodejsIcon },
      { name: "Express", icon: expressIcon },
      { name: "Nunjucks", icon: nunjucksIcon },
      { name: "Bulma", icon: bulmaIcon },
      { name: "SQLite", icon: sqliteIcon },
    ],
  },
  {
    image: commutationem,
    title: "Commutationem",
    description:
      "Commutationem is a currency conversion web application that allows users to quickly and easily convert between different currencies. It is designed to be responsive, providing a seamless experience across all devices.",
    githubUrl: "https://github.com/LorenzoDrovandi7/commutationem",
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Cypress", icon: cypressIcon },
      { name: "Jest", icon: jestIcon },
    ],
  },
  {
    image: crudpl,
    title: "Crud Premier League",
    description:
      "A web application that allows you to Create, Read, Update, and Delete Premier League teams and players. It features a user-friendly interface and is built with modern web technologies.",
    githubUrl: "https://github.com/LorenzoDrovandi7/crud-premier-league",
    technologies: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Node.Js", icon: nodejsIcon },
      { name: "Express", icon: expressIcon },
    ],
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleChange = (direction: "next" | "prev") => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return prev === projects.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? projects.length - 1 : prev - 1;
        }
      });
      setFade(true);
    }, 200);
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-transparent px-6 pt-12 pb-28 lg:px-8 text-center"
      id="projects">
      <h3 className="text-5xl font-semibold tracking-tight text-[#00FF41] sm:text-7xl mb-12">Projects</h3>

      <div className="relative transition-opacity duration-300" style={{ opacity: fade ? 1 : 0 }}>
        <ProjectCard {...projects[currentIndex]} />
      </div>

      <div className="mt-6 flex justify-center gap-6">
        <button
          onClick={() => handleChange("prev")}
          className="bg-black/80 px-4 py-2 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition">
          ← Prev
        </button>
        <button
          onClick={() => handleChange("next")}
          className="bg-black/80 px-4 py-2 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition">
          Next →
        </button>
      </div>
    </section>
  );
}
