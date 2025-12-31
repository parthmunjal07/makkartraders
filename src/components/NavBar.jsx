import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Optional: close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    // For SPA sections. If you later use react-scroll, replace this behavior.
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur border-b border-white/20">
      {/* 70% centered container */}
      <div className="w-[70%] mx-auto">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Title / Logo */}
          <a
            href="#home"
            className="text-lg md:text-2xl font-instrument tracking-tight text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            Makkar Traders
          </a>

          {/* Right: Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile: Burger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out",
            open ? "max-h-96" : "max-h-0",
          ].join(" ")}
        >
          <div className="pb-4 pt-2 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
