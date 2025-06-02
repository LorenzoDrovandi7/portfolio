import { useState } from "react";

const slides = [
  { id: 1, title: "Proyecto 1", image: "/img1.jpg" },
  { id: 2, title: "Proyecto 2", image: "/img2.jpg" },
  { id: 3, title: "Proyecto 3", image: "/img3.jpg" },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const move = (step: number) => {
    setCurrent((prev) => (prev + step + total) % total);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <img key={slide.id} src={slide.image} alt={slide.title} className="w-full shrink-0 object-cover" />
        ))}
      </div>

      <button
        onClick={() => move(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">
        ◀
      </button>
      <button
        onClick={() => move(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">
        ▶
      </button>
    </div>
  );
}
