"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Mentorship() {
  const mentors = [
    {
      name: "Deepak Sir",
      title: "Full Stack Developer",
      desc: "Expert in React, Next.js, and modern backend technologies. Passionate about guiding students to become confident developers.",
    },
    {
      name: "Jabiz Sir",
      title: "DSA & Competitive Programming Mentor",
      desc: "Specializes in problem-solving, algorithms, and logic building. Helps students crack top-tier coding interviews.",
    },
    {
      name: "Nitin Sir",
      title: "UI/UX Design Expert",
      desc: "Creates visually stunning, user-friendly designs that bring ideas to life. Focused on elevating your frontend skills.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"
      >
        Meet Our Mentors
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-center text-gray-300 mb-10"
      >
        Learn directly from industry experts who have helped countless students
        build projects, strengthen DSA, and land great placements.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {mentors.map((m, index) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-white/10 border-none shadow-lg hover:shadow-cyan-500/40 transition-all hover:-translate-y-2 rounded-2xl backdrop-blur-lg">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-cyan-300 mb-1">
                  {m.name}
                </h2>
                <p className="text-sm text-gray-400 mb-3">{m.title}</p>
                <p className="text-gray-200 mb-6">{m.desc}</p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full">
                  Connect
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
