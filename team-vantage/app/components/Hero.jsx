"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center 
                        bg-gradient-to-b from-[var(--background)] via-[#1e1b4b] to-[var(--background)]">
      <h1 className="text-6xl font-extrabold text-[var(--accent)] mb-6 tracking-tight">
        Team Vantage
      </h1>
      <p className="text-lg text-[var(--secondary)] max-w-2xl mb-10">
        Empowering students through real mentorship and project-based growth.
      </p>
      <Link
        href="/projects"
        className="bg-[var(--accent)] text-white px-8 py-3 rounded-full text-lg font-semibold 
                   hover:bg-[var(--accent-hover)] shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      >
        Explore Projects
      </Link>
    </section>
  );
}
