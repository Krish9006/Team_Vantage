"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Target, Users, Code, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    { icon: Sparkles, text: "Real Projects", color: "from-purple-500 to-pink-500" },
    { icon: Zap, text: "Expert Mentors", color: "from-blue-500 to-cyan-500" },
    { icon: Target, text: "Career Growth", color: "from-pink-500 to-orange-500" },
  ];

  const whyChooseUs = [
    {
      icon: Code,
      title: "Real-World Projects",
      description: "Work on live projects that matter. Build your portfolio with actual production-ready applications.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry professionals who guide you through every step of your journey.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Career Acceleration",
      description: "Fast-track your career with hands-on experience, skills, and industry connections.",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Community Support",
      description: "Join a thriving community of passionate builders, learners, and innovators.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Tech Corp",
      text: "Team Vantage transformed my career. The real projects and mentorship helped me land my dream job!",
      avatar: "PS",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "UI/UX Designer",
      company: "Design Studio",
      text: "Best decision ever! I learned more in 6 months here than 2 years of college.",
      avatar: "RV",
      rating: 5
    },
    {
      name: "Ananya Singh",
      role: "Data Scientist",
      company: "Analytics Inc",
      text: "The mentorship program is incredible. My mentor guided me to crack multiple interviews.",
      avatar: "AS",
      rating: 5
    }
  ];

  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto pt-20">
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

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            <span className="text-white">Empowering</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
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
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Team Vantage?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to launch your tech career successfully
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-400">Hear from students who transformed their careers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ students who are already building their dream careers with Team Vantage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all"
            >
              Join Team Vantage Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}