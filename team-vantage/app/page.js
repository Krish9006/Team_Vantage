"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#111827] text-white">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600"
        >
          Empowering Ideas with Team Vantage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10"
        >
          We connect ambitious students with mentorship, real projects, and collaboration opportunities to build the future together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex gap-4"
        >
          <Link
            href="/projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all"
          >
            Explore Projects
          </Link>

          <Link
            href="/mentorship"
            className="border border-indigo-500 hover:bg-indigo-500/20 text-indigo-400 px-8 py-3 rounded-full font-semibold transition-all"
          >
            Get Mentorship
          </Link>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-indigo-400">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            Team Vantage believes every student deserves the opportunity to grow. 
            We provide mentorship, guidance, and practical experience through diverse projects — 
            whether you’re from tech, design, or any other field.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-200 mb-10">
          Join the movement. Let’s create, collaborate, and change the future together.
        </p>
        <Link
          href="/contact"
          className="bg-white text-indigo-700 px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
        >
          Join Team Vantage
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-[#0f172a] border-t border-gray-700">
        © {new Date().getFullYear()} Team Vantage. All rights reserved.
      </footer>
    </main>
  );
}
