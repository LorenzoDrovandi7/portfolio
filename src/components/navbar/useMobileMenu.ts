import { useState } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return { isOpen, openMenu, closeMenu };
}
