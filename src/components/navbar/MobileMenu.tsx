import { NavLinks } from "./NavLinks";

export function MobileMenu({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50" onClick={close}></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">
        <div className="flex items-center justify-between">
          <button type="button" onClick={close} className="-m-2.5 rounded-md p-2.5 hover:bg-[#1a1a1a] cursor-pointer">
            <span className="sr-only">Close menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-white/10">
            <div className="space-y-2 py-6">
              <NavLinks className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-[#1a1a1a]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
