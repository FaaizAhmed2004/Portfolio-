"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { Icon } from "../components/ui/Icon";
import { SectionHeading } from "../components/ui/SectionHeading";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleChange = (key: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("Message sent successfully. I will respond as soon as possible.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const result = await response.json();
        setStatus(result.error || "Unable to send the message. Please try again later.");
      }
    } catch (error) {
      setStatus("Unable to send the message. Please check your connection.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Contact"
        title="Ready to collaborate on your next premium software experience."
        description="Send a message with your project details, request a quote, or let me know how I can help build your next digital product."
      />

      <div className="grid gap-8 xl:grid-cols-[1fr_0.85fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(6,10,23,0.5)] backdrop-blur-xl">
          <p className="text-lg font-semibold text-white">Let’s start a conversation</p>
          <p className="mt-4 text-slate-300 leading-8">
            Share your idea, ask about availability, or request a premium web experience built for scale.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-slate-300">
              <Icon name="mail" className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Email</p>
                <p className="mt-1 text-sm text-slate-200">Available via SMTP form</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-slate-300">
              <Icon name="phone" className="h-5 w-5 text-violet-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">WhatsApp</p>
                <p className="mt-1 text-sm text-slate-200">Reach out for quick syncs and project planning.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { href: "https://github.com/FaaizAhmed2004", label: "GitHub" },
              { href: "https://www.linkedin.com/in/faaiz-ahmed-bscs92/", label: "LinkedIn" },
              { href: "https://www.instagram.com/faaiz_ahmed/", label: "Instagram" },
              { href: "https://wa.me/+923323106423", label: "WhatsApp" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-slate-950/75 px-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/10"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_rgba(6,10,23,0.55)] backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              Name
              <input
                value={form.name}
                onChange={handleChange("name")}
                required
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Email
              <input
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                required
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
              />
            </label>
          </div>

          <label className="mt-4 block space-y-2 text-sm text-slate-300">
            Subject
            <input
              value={form.subject}
              onChange={handleChange("subject")}
              required
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
            />
          </label>

          <label className="mt-4 block space-y-2 text-sm text-slate-300">
            Message
            <textarea
              value={form.message}
              onChange={handleChange("message")}
              rows={6}
              required
              className="w-full rounded-[28px] border border-white/10 bg-white/5 px-4 py-4 text-slate-100 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/15 px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending message..." : "Send message"}
            <Icon name="send" className="h-4 w-4" />
          </button>

          {status ? <p className="mt-4 text-sm text-black">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
