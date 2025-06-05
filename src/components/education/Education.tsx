const educationItems = [
  {
    title: "Full Stack Developer",
    place: "R/ArgentinaPrograma:",
    date: "2024",
    description:
      "Full Course (In progress - 94.74%) - (HTML - CSS - JavaScript - Jest - Cypress - SOLID - Node js - Express - Etc)",
  },
  {
    title: "Responsive Web Design",
    place: "FreeCodeCamp",
    date: "2024",
    description: "Completed Course - (HTML - CSS - Flexbox - Grid - Accessibility - Responsive Design)",
  },
  {
    title: "Legacy Javascript Algorithms and Data Structures ",
    place: "FreeCodeCamp",
    date: "2025",
    description: "Completed Course - (JavaScript - Algorithms - Data Structures - ES6 - Regular Expressions)",
  },
  {
    title: "Javascript Algorithms and Data Structures ",
    place: "FreeCodeCamp",
    date: "2025",
    description: "Completed Course - (JavaScript - Algorithms - Data Structures - ES6 - Regular Expressions)",
  },
  {
    title: "Computer Science",
    place: "Open Source Society University",
    date: "2023 - 2025",
    description:
      "In progress - 32% - (Computer Science - Algorithms - Data Structures - Operating Systems - Networking)",
  },
];

export function Education() {
  return (
    <section id="education" className="bg-black/80 border-t border-b border-[#00FF41] text-[#00FF41] py-27 px-10">
      <h3 className="text-7xl font-semibold text-center mb-12">Education</h3>
      <div className="max-w-4xl mx-auto space-y-10 border-l border-[#00FF41] pl-6">
        {educationItems.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1 w-3 h-3 bg-[#00FF41] rounded-full"></div>
            <h4 className="text-2xl font-bold">{item.title}</h4>
            <span className="text-sm text-green-300">
              {item.place} — {item.date}
            </span>
            <p className="mt-2 text-sm text-green-200">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
