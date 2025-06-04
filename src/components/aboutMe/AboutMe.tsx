export function AboutMe() {
  return (
    <section
      id="about-me"
      className="relative isolate bg-black/80 text-[#00FF41] font-mono px-6 py-10 lg:px-8 border-t border-[#00FF41]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl lg :text-5xl font-bold mb-8">About Me</h2>
        <p className="text-lg sm:text-xl leading-relaxed text-pretty">
          Full-stack developer with a talent for creating seamless digital experiences. I transform ideas into dynamic,
          easy-to-use web applications. I love combining creativity and code to deliver solutions that not only work,
          but also achieve goals in the most effective way possible.
        </p>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-pretty">
          I believe programming is a way to improve people's lives, and the aspiration to achieve something like this is
          my greatest motivation on a daily basis. I strive to achieve not only that, but also to deliver well-tested
          code that makes my coworkers' lives easier and creates a positive environment for everyone.
        </p>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-pretty">
          I was born in Córdoba, Argentina, on July 17, 2003. From a very young age, I developed a strong interest in
          computers, creating Pokémon hackroms and Renpy games.
        </p>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-pretty">
          Today, I'm dedicated solely to improving my programming skills and maximizing my potential to deliver the best
          I can to the industry I'm passionate about.
        </p>
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=LorenzoDrovandi7&theme=github_dark"
          alt="GitHub Profile Card"
          className="mx-auto mt-8 w-full max-w-3xl rounded-lg shadow-lg font-mono border border-[#00FF41] hover:scale-105 transition-transform duration-300 bg-black/80 text-[#00FF41] font-mono p-6"
        />
      </div>
    </section>
  );
}
