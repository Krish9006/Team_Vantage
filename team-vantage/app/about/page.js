"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Rocket, Users, Zap, Award } from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Vision",
      desc: "To empower every student with the mindset, mentorship, and motivation to turn ideas into impact.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "What Drives Us",
      desc: "A belief that true growth happens when you step outside your comfort zone and create fearlessly.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Rocket,
      title: "The Mission",
      desc: "To bridge the gap between learning and doing — connecting talent with the right opportunities and mentors.",
      color: "from-fuchsia-500 to-purple-500",
    },
  ];

  const achievements = [
    { icon: Users, number: "500+", label: "Students Empowered", color: "text-purple-400" },
    { icon: Rocket, number: "150+", label: "Projects Launched", color: "text-blue-400" },
    { icon: Award, number: "50+", label: "Industry Mentors", color: "text-pink-400" },
    { icon: Zap, number: "98%", label: "Success Rate", color: "text-cyan-400" },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[200px]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <span className="text-sm text-purple-400 font-semibold">✨ Our Story</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              We Don't Just Build{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Projects
              </span>
              <br />
              We Build{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                People Who Create Impact
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              At <span className="text-purple-400 font-semibold">Team Vantage</span>,
              we believe innovation starts when creativity meets courage.
              We guide students to think beyond boundaries — not just to code or design,
              but to <span className="text-fuchsia-400 font-semibold">lead, collaborate, and inspire</span>.
            </motion.p>
          </motion.div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                >
                  <div className={`group relative p-[2px] bg-gradient-to-br ${item.color} rounded-3xl hover:scale-105 transition-all duration-300`}>
                    <div className="bg-black/90 rounded-3xl p-8 h-full backdrop-blur-xl">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, i) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center hover:bg-white/10 hover:scale-105 transition-all"
                  >
                    <Icon className={`w-10 h-10 ${achievement.color} mx-auto mb-4`} />
                    <div className={`text-4xl font-bold ${achievement.color} mb-2`}>
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="p-12 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-3xl text-center">
              <div className="text-6xl mb-6">💡</div>
              <p className="text-2xl text-gray-300 italic leading-relaxed mb-6">
                "We're not here to compete with others — we're here to{" "}
                <span className="text-purple-400 font-bold">create</span> what doesn't exist yet."
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
            </div>
          </motion.div>

          {/* How We Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How We <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Empower You</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Real Projects, Real Experience",
                  desc: "Work on live projects that solve actual problems. Build your portfolio while making an impact."
                },
                {
                  step: "02",
                  title: "1-on-1 Mentorship",
                  desc: "Get personalized guidance from industry experts who've been where you want to go."
                },
                {
                  step: "03",
                  title: "Community Support",
                  desc: "Join a thriving community of builders, learners, and innovators who push each other to grow."
                },
                {
                  step: "04",
                  title: "Career Acceleration",
                  desc: "Fast-track your career with hands-on skills, industry connections, and confidence."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact">
              <Button className="px-10 py-6 text-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-purple-600 hover:to-fuchsia-500 text-white rounded-2xl shadow-2xl shadow-fuchsia-500/40 hover:scale-110 transition-all">
                Join the Movement 🚀
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}