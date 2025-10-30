"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
                 bg-gradient-to-r from-indigo-600/90 via-purple-600/80 to-pink-500/80
                 backdrop-blur-lg border-b border-white/10
                 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-tight
                     text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
        >
          Team Vantage
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`relative transition-all duration-300 hover:text-yellow-300 ${
                path === link.path ? "text-yellow-300" : "text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-300 
                  transition-transform duration-300 
                  ${path === link.path ? "scale-x-100" : "scale-x-0"} origin-left`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700/95 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`transition-all duration-300 hover:text-yellow-300 ${
                  path === link.path ? "text-yellow-300" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
