"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "AI Career Mentor",
      desc: "A futuristic AI-based mentor that guides students with precision. Built for next-gen learners using real-time AI insights.",
      tech: ["Next.js", "OpenAI", "TailwindCSS"],
    },
    {
      title: "Team Collaboration Hub",
      desc: "An elegant dashboard for seamless project management, mentor feedback, and creative collaboration.",
      tech: ["React", "Firebase", "Framer Motion"],
    },
    {
      title: "LaunchPad",
      desc: "A dynamic hub for ideas and execution — where creativity meets innovation and teams build greatness together.",
      tech: ["Node.js", "MongoDB", "Express"],
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a15] to-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-700/20 blur-[200px] rounded-full top-[-10%] left-[-10%]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-700/20 blur-[200px] rounded-full bottom-[-10%] right-[-10%]" />
      </div>

      {/* Header */}
      <section className="relative text-center py-24 px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Projects
          </span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-4 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg"
        >
          We build experiences that redefine creativity and technology together.
        </motion.p>
      </section>

      {/* Project Cards */}
      <section className="relative grid md:grid-cols-3 gap-10 px-6 md:px-20 pb-28 z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotateX: 5 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="group perspective"
          >
            <Card className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 border border-zinc-700/50 rounded-3xl shadow-xl shadow-black/30 group-hover:shadow-purple-500/30 transition-all duration-500 backdrop-blur-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
                  {p.title}
                </h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-800/60 border border-zinc-700/40 text-sm rounded-full text-zinc-300 group-hover:bg-purple-700/30 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center pb-20 z-10"
      >
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-pink-500 text-white px-10 py-5 rounded-xl text-lg shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
          Start Your Vision 🚀
        </Button>
      </motion.div>
    </main>
  );
}
