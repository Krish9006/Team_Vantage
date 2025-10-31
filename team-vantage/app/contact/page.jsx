"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      desc: "Drop us a line anytime",
      value: "hello@teamvantage.com",
      link: "mailto:hello@teamvantage.com",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      desc: "Mon-Fri from 9am to 6pm",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      desc: "Come say hello",
      value: "Greater Noida, UP, India",
      link: "#",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", href: "#", color: "hover:text-cyan-400" },
    { icon: Instagram, name: "Instagram", href: "#", color: "hover:text-pink-400" },
    { icon: Github, name: "GitHub", href: "#", color: "hover:text-purple-400" }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-fuchsia-700/20 blur-[200px] rounded-full top-0 left-0 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-700/20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Header Section */}
      <section className="relative z-10 text-center py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <span className="text-sm text-pink-400 font-semibold">📧 Get in Touch</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a question, idea, or opportunity? We'd love to hear from you.
            Reach out and let's create something extraordinary together.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className={`p-[2px] bg-gradient-to-br ${info.gradient} rounded-2xl hover:scale-105 transition-all`}>
                    <div className="bg-black/90 rounded-2xl p-6 backdrop-blur-xl h-full">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{info.desc}</p>
                      <p className={`text-base font-medium bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Message *
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tell us more about your project, goals, or questions..."
                    className="w-full p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:bg-white/10 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full p-4 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-2xl shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message ✨
                </motion.button>
              </form>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Response */}
              <div className="p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-2xl">
                <MessageCircle className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Quick Response</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We typically respond within 24 hours. For urgent inquiries, feel free to call us directly.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    ● Available Now
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <p className="text-gray-400 text-sm mb-4">Connect with us on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        aria-label={social.name}
                        className={`p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl ${social.color} hover:scale-110 transition-all`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How can I join Team Vantage?",
                a: "Simply fill out the contact form above or send us an email. We'll schedule a call to discuss your goals and how we can help."
              },
              {
                q: "What services do you offer?",
                a: "We provide mentorship, project collaboration opportunities, skill development programs, and career guidance for students."
              },
              {
                q: "Is there any fee for joining?",
                a: "We offer both free and paid programs. Contact us to learn more about the options that fit your needs."
              },
              {
                q: "How long does it take to hear back?",
                a: "We typically respond within 24 hours on business days. For urgent matters, please call us directly."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <h4 className="font-bold text-lg mb-3 text-purple-400">{faq.q}</h4>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}