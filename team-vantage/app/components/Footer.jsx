"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Mentorship", path: "/mentorship" },
  ];

  const resources = [
    { name: "Blog", path: "#" },
    { name: "Community", path: "#" },
    { name: "Events", path: "#" },
    { name: "FAQ", path: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-purple-950/10 to-black text-white border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-md opacity-50"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Team Vantage
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering students to build the future through mentorship, real projects, and a community of passionate builders.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg ${social.color} hover:bg-white/10 hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      