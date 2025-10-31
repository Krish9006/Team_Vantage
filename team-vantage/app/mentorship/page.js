"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter, Star, Award, Code, Palette, Database, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Mentorship() {
  const mentors = [
    {
      name: "Deepak Sir",
      title: "Full Stack Developer",
      role: "Lead Developer",
      company: "Tech Innovators",
      desc: "Expert in React, Next.js, and modern backend technologies. Passionate about guiding students to become confident developers.",
      expertise: ["React", "Next.js", "Node.js", "MongoDB"],
      experience: "8+ years",
      students: "50+",
      projects: "100+",
      rating: 4.9,
      avatar: "DS",
      gradient: "from-purple-500 to-blue-500",
      icon: Code
    },
    {
      name: "Jabiz Sir",
      title: "DSA & Competitive Programming Mentor",
      role: "Algorithm Expert",
      company: "CodeMasters",
      desc: "Specializes in problem-solving, algorithms, and logic building. Helps students crack top-tier coding interviews.",
      expertise: ["DSA", "C++", "Python", "Problem Solving"],
      experience: "6+ years",
      students: "80+",
      projects: "200+",
      rating: 5.0,
      avatar: "JS",
      gradient: "from-cyan-500 to-teal-500",
      icon: Database
    },
    {
      name: "Nitin Sir",
      title: "UI/UX Design Expert",
      role: "Design Lead",
      company: "Creative Studios",
      desc: "Creates visually stunning, user-friendly designs that bring ideas to life. Focused on elevating your frontend skills.",
      expertise: ["Figma", "UI/UX", "TailwindCSS", "Framer"],
      experience: "7+ years",
      students: "60+",
      projects: "150+",
      rating: 4.8,
      avatar: "NS",
      gradient: "from-pink-500 to-orange-500",
      icon: Palette
    },
  ];

  const benefits = [
    {
      title: "1-on-1 Guidance",
      desc: "Personalized mentorship sessions tailored to your learning goals and pace.",
      icon: "🎯"
    },
    {
      title: "Real-World Projects",
      desc: "Work on live projects under expert supervision to build your portfolio.",
      icon: "💼"
    },
    {
      title: "Career Support",
      desc: "Interview prep, resume reviews, and job referrals from industry connections.",
      icon: "🚀"
    },
    {
      title: "Lifetime Access",
      desc: "Stay connected with your mentor even after completing the program.",
      icon: "🤝"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-cyan-700/20 blur-[200px] rounded-full top-0 left-0"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[200px] rounded-full bottom-0 right-0"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Header */}
      <section className="relative z-10 text-center py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <span className="text-sm text-cyan-400 font-semibold">👨‍🏫 Expert Mentorship</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Learn from the{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Best in the Industry
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Connect with experienced professionals who have helped countless students
            build projects, strengthen skills, and land dream jobs.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Our Mentorship?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => {
              const Icon = mentor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className={`relative p-[2px] bg-gradient-to-br ${mentor.gradient} rounded-3xl hover:scale-105 transition-all duration-300`}>
                    <div className="bg-black/90 rounded-3xl overflow-hidden h-full backdrop-blur-xl">
                      {/* Header Section */}
                      <div className={`relative h-32 bg-gradient-to-br ${mentor.gradient} flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <Icon className="w-16 h-16 text-white relative z-10" />
                      </div>

                      {/* Avatar */}
                      <div className="relative -mt-12 flex justify-center px-6 z-20">
                        <div className={`w-24 h-24 bg-gradient-to-br ${mentor.gradient} rounded-2xl flex items-center justify-center text-3xl font-bold border-4 border-black shadow-2xl`}>
                          {mentor.avatar}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 pt-4 text-center">
                        <h2 className={`text-2xl font-bold mb-1 bg-gradient-to-r ${mentor.gradient} bg-clip-text text-transparent`}>
                          {mentor.name}
                        </h2>
                        <p className="text-sm text-gray-400 mb-1">{mentor.role}</p>
                        <p className="text-xs text-gray-500 mb-4">{mentor.company}</p>

                        {/* Rating */}
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(mentor.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                            />
                          ))}
                          <span className="text-sm text-gray-400 ml-2">({mentor.rating})</span>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {mentor.desc}
                        </p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {mentor.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded-full text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                          <div>
                            <div className="text-lg font-bold text-cyan-400">{mentor.experience}</div>
                            <div className="text-xs text-gray-500">Experience</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{mentor.students}</div>
                            <div className="text-xs text-gray-500">Students</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-pink-400">{mentor.projects}</div>
                            <div className="text-xs text-gray-500">Projects</div>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-3 mb-4">
                          <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                            <Github className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                            <Twitter className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Connect Button */}
                        <Button className={`w-full bg-gradient-to-r ${mentor.gradient} hover:opacity-90 text-white py-3 rounded-xl transition-all flex items-center justify-center gap-2`}>
                          <MessageCircle className="w-4 h-4" />
                          Connect with {mentor.name.split(' ')[0]}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-12 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Level Up?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free consultation call with our mentors and start your journey today!
            </p>
            <Link href="/contact">
              <Button className="px-10 py-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-500 text-white rounded-xl shadow-2xl shadow-cyan-500/40 hover:scale-110 transition-all">
                Book Free Session 📞
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}