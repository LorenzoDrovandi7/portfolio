const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about-me", label: "About me" },
  { href: "#technologies", label: "Technologies" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function NavLinks({ className }: { className?: string }) {
  return (
    <>
      {links.map(({ href, label }) => (
        <a key={href} href={href} className={className}>
          {label}
        </a>
      ))}
    </>
  );
}
