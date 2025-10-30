"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export default function Contact() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#030014] via-[#09091c] to-[#000000] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-fuchsia-700/30 blur-[200px] rounded-full top-[-10%] left-[-10%]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-700/30 blur-[200px] rounded-full bottom-[-10%] right-[-10%]" />
      </div>

      {/* Header Section */}
      <section className="relative text-center py-20 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let’s Connect
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg"
        >
          Have a question, idea, or opportunity? We’d love to hear from you.  
          Reach out and let’s create something extraordinary together.
        </motion.p>
      </section>

      {/* Contact Form */}
      <section className="relative flex justify-center items-center px-6 md:px-0 z-10 pb-20">
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl"
        >
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-zinc-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white focus:border-purple-500 outline-none transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-zinc-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white focus:border-purple-500 outline-none transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-zinc-300">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white focus:border-purple-500 outline-none transition resize-none"
            ></textarea>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-blue-500 hover:to-fuchsia-500 text-white text-lg py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/30"
            >
              Send Message ✨
            </Button>
          </motion.div>
        </motion.form>
      </section>

      {/* Footer Section */}
      <footer className="relative text-center text-zinc-500 text-sm pb-10 z-10">
        © {new Date().getFullYear()} Team Vantage. Crafted with 💜 Passion & Innovation.
      </footer>
    </main>
  );
}
