import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message"
      );
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#FFD700]/10 rounded-full">
            <Mail className="text-[#FFD700]" size={20} />
            <span className="text-sm text-black">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-black">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Send us a message and we&apos;ll get back to you at{" "}
            <a
              href="mailto:info@jbacademy.ltd"
              className="text-black font-medium hover:text-[#FFD700] transition-colors"
            >
              info@jbacademy.ltd
            </a>
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              disabled={status === "loading"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              disabled={status === "loading"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we help you?"
              disabled={status === "loading"}
            />
          </div>

          {status === "success" && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
              Thank you! Your message has been sent. We&apos;ll reply soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              {errorMessage}
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className="w-full sm:w-auto bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <>
                <Send className="mr-2" size={18} />
                Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
