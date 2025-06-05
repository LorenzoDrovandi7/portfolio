import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="bg-transparent text-[#00FF41] py-20 px-6" id="contact">
      <h3 className="text-7xl font-semibold text-center mb-20">Contact</h3>
      <ContactForm />
      <div className="mt-45 flex flex-col sm:flex-row gap-10 justify-center items-center">
        <a
          href="https://github.com/LorenzoDrovandi7"
          target="_blank"
          rel="noreferrer"
          className="bg-black/80 flex items-center gap-3 px-6 py-3 border border-[#00FF41] rounded-md hover:bg-[#00FF41] hover:text-black transition text-lg font-mono w-full sm:w-auto justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.55v-2.17c-3.19.7-3.86-1.54-3.86-1.54-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.17-3.11-.12-.28-.51-1.42.11-2.96 0 0 .96-.31 3.15 1.18a10.8 10.8 0 0 1 2.88-.39c.98 0 1.97.13 2.88.39 2.19-1.5 3.15-1.18 3.15-1.18.62 1.54.23 2.68.11 2.96.73.81 1.17 1.85 1.17 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.02.77 2.06v3.05c0 .3.21.65.79.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/lorenzo-drovandi"
          target="_blank"
          rel="noreferrer"
          className="bg-black/80 flex items-center gap-3 px-6 py-3 border border-[#00FF41] rounded-md hover:bg-[#00FF41] hover:text-black transition text-lg font-mono w-full sm:w-auto justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8h4.96V24H.02V8zm7.98 0h4.76v2.39h.07c.66-1.25 2.28-2.57 4.7-2.57C22.4 7.82 24 10.05 24 14.08V24h-4.98v-8.77c0-2.09-.04-4.79-2.92-4.79-2.92 0-3.37 2.28-3.37 4.63V24H8V8z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
