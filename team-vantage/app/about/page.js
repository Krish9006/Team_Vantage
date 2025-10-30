"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-[-200px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-full blur-[200px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-200px] right-[-150px] w-[400px] h-[400px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500 rounded-full blur-[200px] opacity-40 animate-pulse delay-1000"></div>

      <section className="relative z-10 flex flex-col items-center justify-center py-28 px-6 text-center space-y-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight"
        >
          We Don’t Just Build Projects,  
          <br />We Build <span className="text-fuchsia-400">People Who Create Impact.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed"
        >
          At <span className="text-purple-400 font-semibold">Team Vantage</span>,  
          we believe innovation starts when creativity meets courage.  
          We guide students to think beyond boundaries — not just to code or design,  
          but to **lead, collaborate, and inspire**.
        </motion.p>

        {/* Floating Glass Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
          {[
            {
              title: "Vision",
              desc: "To empower every student with the mindset, mentorship, and motivation to turn ideas into impact.",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "What Drives Us",
              desc: "A belief that true growth happens when you step outside your comfort zone and create fearlessly.",
              color: "from-indigo-500 to-blue-500",
            },
            {
              title: "The Mission",
              desc: "To bridge the gap between learning and doing — connecting talent with the right opportunities and mentors.",
              color: "from-fuchsia-500 to-purple-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <Card className={`bg-gradient-to-br ${item.color} p-[2px] rounded-2xl shadow-lg hover:scale-105 transition-all duration-300`}>
                <CardContent className="bg-zinc-950/90 rounded-2xl p-6 backdrop-blur-xl">
                  <h2 className="text-2xl font-semibold text-white mb-2">{item.title}</h2>
                  <p className="text-zinc-300 text-base leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlight Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mt-16 text-zinc-400 italic text-lg leading-relaxed"
        >
          “We’re not here to compete with others — we’re here to **create** what doesn’t exist yet.”
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <Button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-purple-600 hover:to-fuchsia-500 text-white text-lg px-8 py-3 rounded-2xl shadow-xl shadow-fuchsia-500/40 hover:scale-105 transition-all">
            Join the Movement 🚀
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
