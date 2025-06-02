export function Projects() {
  return (
    <section
      className="relative isolate overflow-hidden bg-transparent px-6 pt-27 pb-27 lg:px-8 justify-items-center"
      id="projects">
      <div id="root"></div>
      <h3 className="text-5xl font-semibold tracking-tight text-balance text-[#00FF41] sm:text-7xl">Projects</h3>
      <div className="carrousel">
        <img src="src/assets/commutationem.png" alt="project-image" />
        <p>
          Commutationem is a currency conversion web application that allows users to quickly and easily convert between
          different currencies. This project features a clean user interface built with HTML, CSS, JavaScript and
          Cypress.
        </p>
        <button onClick={() => window.open("https://github.com/LorenzoDrovandi7/commutationem", "_blank")}>
          View Project
        </button>
      </div>
    </section>
  );
}
