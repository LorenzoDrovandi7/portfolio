import { HeroTitle } from "./HeroTitle";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroCTA } from "./HeroCTA";

export function Hero() {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8 min-h-screen bg-transparent text-[#00FF41] font-mono flex items-center justify-center">
      <div className="relative z-10 max-w-3xl p-8 border-2 border-[#00FF41] rounded-xl shadow-lg shadow-green-900/30 bg-black/70">
        <div className="text-center">
          <HeroTitle />
          <HeroSubtitle />
          <HeroCTA />
        </div>
      </div>
    </section>
  );
}
