import { useMobileMenu } from "./useMobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { MobileToggle } from "./MobileToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { isOpen, openMenu, closeMenu } = useMobileMenu();

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black/40 text-[#00FF41] font-mono">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden">
          <MobileToggle onClick={openMenu} />
        </div>
        <DesktopMenu />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <MobileMenu isOpen={isOpen} close={closeMenu} />
    </header>
  );
}
