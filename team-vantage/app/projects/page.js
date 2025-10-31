"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code, ExternalLink, Github, Calendar, Zap } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "AI Career Mentor",
      desc: "A futuristic AI-based mentor that guides students with precision. Built for next-gen learners using real-time AI insights.",
      tech: ["Next.js", "OpenAI", "TailwindCSS"],
      status: "Live",
      students: 12,
      duration: "3 months",
      gradient: "from-purple-600 to-pink-600",
      icon: "🤖"
    },
    {
      title: "Team Collaboration Hub",
      desc: "An elegant dashboard for seamless project management, mentor feedback, and creative collaboration.",
      tech: ["React", "Firebase", "Framer Motion"],
      status: "In Progress",
      students: 8,
      duration: "2 months",
      gradient: "from-blue-600 to-cyan-600",
      icon: "🚀"
    },
    {
      title: "LaunchPad",
      desc: "A dynamic hub for ideas and execution — where creativity meets innovation and teams build greatness together.",
      tech: ["Node.js", "MongoDB", "Express"],
      status: "Completed",
      students: 15,
      duration: "4 months",
      gradient: "from-indigo-600 to-purple-600",
      icon: "💡"
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "Live",
      students: 10,
      duration: "5 months",
      gradient: "from-pink-600 to-orange-600",
      icon: "🛒"
    },
    {
      title: "Social Learning Platform",
      desc: "Connect students with mentors, share resources, and collaborate on projects in a gamified learning environment.",
      tech: ["Vue.js", "Django", "Redis"],
      status: "In Progress",
      students: 14,
      duration: "3 months",
      gradient: "from-green-600 to-teal-600",
      icon: "📚"
    },
    {
      title: "Analytics Dashboard",
      desc: "Real-time data visualization platform for tracking project metrics, student progress, and mentor engagement.",
      tech: ["React", "D3.js", "Python"],
      status: "Completed",
      students: 9,
      duration: "2 months",
      gradient: "from-yellow-600 to-red-600",
      icon: "📊"
    },
  ];

  const stats = [
    { icon: Code, number: "150+", label: "Projects Completed", color: "text-purple-400" },
    { icon: Users, number: "500+", label: "Students Involved", color: "text-blue-400" },
    { icon: Zap, number: "50+", label: "Technologies Used", color: "text-pink-400" },
    { icon: Calendar, number: "3+ Years", label: "Experience", color: "text-cyan-400" },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-700/20 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-700/20 blur-[200px] rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Header */}
      <section className="relative z-10 text-center py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <span className="text-sm text-purple-400 font-semibold">🚀 Our Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Real Projects
            </span>
            <br />
            <span className="text-white">Real Experience</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            We build experiences that redefine creativity and technology together. Join us in creating the future.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all"
                >
                  <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Project Cards */}
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className={`relative p-[2px] bg-gradient-to-br ${project.gradient} rounded-3xl hover:scale-105 transition-all duration-300`}>
                  <div className="bg-black/90 rounded-3xl overflow-hidden h-full backdrop-blur-xl">
                    {/* Project Icon/Image */}
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="relative z-10">{project.icon}</span>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {project.status}
                        </span>
                        <div className="flex gap-2">
                          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <Github className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <h2 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.title}
                      </h2>

                      <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded-full text-gray-300 hover:bg-white/10 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.students} Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all group-hover:bg-white/15 flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Your Vision?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community and start working on real projects that make a difference.
            </p>
            <Link href="/contact">
              <Button className="px-10 py-4 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-pink-500 text-white rounded-xl shadow-2xl shadow-purple-500/40 hover:scale-110 transition-all flex items-center gap-2 mx-auto">
                Start Your Vision 🚀
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}