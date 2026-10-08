import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/dhanshribhosale11@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();

        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("error");

        setTimeout(() => {
          setStatus("");
        }, 4000);
      }
    } catch (error) {
      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let’s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
        </motion.div>

        {/* Centered Contact Form */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Message from DevFolio"
              />

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiSend size={18} />

                {sending ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-green-400"
                >
                  <FiCheckCircle size={22} />

                  <div>
                    <p className="font-semibold">
                      Message sent successfully!
                    </p>

                    <p className="text-sm text-green-400/70">
                      Thank you for reaching out.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-red-400"
                >
                  <FiAlertCircle size={22} />

                  <div>
                    <p className="font-semibold">
                      Failed to send message.
                    </p>

                    <p className="text-sm text-red-400/70">
                      Please try again later.
                    </p>
                  </div>
                </motion.div>
              )}

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;