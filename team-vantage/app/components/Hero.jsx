"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const features = [
    { icon: Sparkles, text: "Real Projects", color: "from-purple-500 to-pink-500" },
    { icon: Zap, text: "Expert Mentors", color: "from-blue-500 to-cyan-500" },
    { icon: Target, text: "Career Growth", color: "from-pink-500 to-orange-500" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">🚀 Join 500+ Students Building the Future</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          <span className="text-white">Empowering</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Ambitious Students
          </span>
          <br />
          <span className="text-white">to Build the Future</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Transform your ideas into reality with{" "}
          <span className="text-purple-400 font-semibold">expert mentorship</span>,{" "}
          <span className="text-blue-400 font-semibold">real-world projects</span>, and a
          community of passionate builders.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/projects"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
          >
            Get Started Free
          </Link>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 transition-all"
              >
                <div className={`p-1.5 bg-gradient-to-r ${feature.color} rounded-full`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-300 font-medium">{feature.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Active Students" },
            { number: "150+", label: "Projects Completed" },
            { number: "50+", label: "Expert Mentors" },
            { number: "98%", label: "Success Rate" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
          <div className="w-1.5 h-2 bg-white rounded-full animate-bounce mx-auto"></div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}