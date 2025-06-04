const educationItems = [
  {
    title: "Full Stack Developer",
    place: "R/ArgentinaPrograma:",
    date: "2024",
    description:
      "Full Course (In progress - 94.74%) - (HTML - CSS - JavaScript - Jest - Cypress - SOLID - Node js - Express - Etc)",
  },
  {
    title: "Technical High School",
    place: "Escuela Técnica N°X",
    date: "2018 - 2023",
    description: "Electronics-oriented technical education with a solid base in programming and systems.",
  },
];

export function Education() {
  return (
    <section className="bg-black text-[#00FF41] py-20 px-6">
      <h3 className="text-5xl font-semibold text-center mb-12">Education</h3>
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
