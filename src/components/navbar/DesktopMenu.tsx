import { NavLinks } from "./NavLinks";

export function DesktopMenu() {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      <NavLinks className="text-sm/6 font-semibold" />
    </div>
  );
}
