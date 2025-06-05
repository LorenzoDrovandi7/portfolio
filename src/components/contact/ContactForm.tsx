import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm("service_8691hlc", "template_stvds1t", form.current, "SbCCV7okgZsFUvVFK").then(
      () => {
        alert("Message sent successfully");
        form.current?.reset();
      },
      (error) => {
        console.error("Error sending message:", error);
        alert("Error sending message. Please try again later.");
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10 max-w-4xl mx-auto text-[#00FF41] font-mono">
      <input
        type="text"
        name="from_name"
        placeholder="Your name"
        required
        className="bg-black border border-green-500 p-2 rounded-md"
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Your email"
        required
        className="bg-black border border-green-500 p-2 rounded-md"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        className="bg-black border border-green-500 p-2 rounded-md h-32"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-md transition">
        Send Message
      </button>
    </form>
  );
}
