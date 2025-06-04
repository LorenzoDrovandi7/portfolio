type Tech = { name: string; icon: string };

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  githubUrl: string;
  technologies: Tech[];
};

export function ProjectCard({ image, title, description, githubUrl, technologies }: ProjectProps) {
  return (
    <div className="flex flex-col items-center text-[#00FF41] border border-[#00FF41] rounded-xl p-6 bg-black/80 shadow-md max-w-2xl mx-auto">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="mb-4 rounded shadow-lg w-full h-75 object-cover rounded shadow-lg"
      />
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-md mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 px-2 py-1 text-sm border border-[#00FF41] rounded bg-black/60 hover:bg-[#00FF41] hover:text-black transition">
            <img src={tech.icon} alt={`${tech.name} icon`} className="w-4 h-4" />
            {tech.name}
          </span>
        ))}
      </div>

      <button
        onClick={() => window.open(githubUrl, "_blank")}
        className="mt-2 px-4 py-2 border border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition">
        View Project
      </button>
    </div>
  );
}
