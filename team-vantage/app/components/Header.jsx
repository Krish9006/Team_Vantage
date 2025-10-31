"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-2xl md:text-3xl font-extrabold tracking-tight text-white relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Team Vantage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  path === link.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Active Background */}
                {path === link.path && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30 backdrop-blur-sm"></span>
                )}
                
                {/* Hover Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 hover:from-purple-600/10 hover:to-blue-600/10 rounded-lg transition-all duration-300"></span>
                
                <span className="relative z-10">{link.name}</span>
                
                {/* Active Indicator */}
                {path === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 space-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  path === link.path
                    ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg text-center shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}