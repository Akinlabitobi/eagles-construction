"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/lib/data";
import Icon from "./Icon";

// Submissions go to Web3Forms, which emails them to the address the access key was created with.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/40 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

function FieldError({ msg }) {
  return msg ? <p className="mt-1.5 text-sm text-red-600">{msg}</p> : null;
}

function validate(data) {
  const errors = {};
  if (!data.name || data.name.length < 2) errors.name = "Please enter your full name.";
  if (!data.phone || data.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!data.message || data.message.length < 10) errors.message = "Tell us a little about your project.";
  return errors;
}

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
  const [sentName, setSentName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      ["name", "phone", "email", "location", "projectType", "budget", "message"].map((k) => [
        k,
        form.get(k)?.toString().trim() ?? "",
      ])
    );

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry from ${data.name} — ${data.projectType}`,
          from_name: `${company.name} website`,
          botcheck: form.get("botcheck") ? true : "",
          Name: data.name,
          Phone: data.phone,
          Email: data.email || "—",
          Location: data.location || "—",
          "Project type": data.projectType,
          Budget: data.budget || "—",
          Message: data.message,
          ...(data.email && { replyto: data.email }),
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setSentName(data.name.split(" ")[0]);
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl bg-white p-10 text-center shadow-sm"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600"
          >
            <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
          </motion.span>
          <h3 className="mt-6 font-display text-2xl font-bold">Request received</h3>
          <p className="mt-3 text-ink-600">
            Thank you, {sentName}! We&apos;ve received your request and will call you within one working day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          exit={{ opacity: 0, y: -20 }}
          className="space-y-5 rounded-3xl bg-white p-6 shadow-sm sm:p-10"
        >
          {/* Honeypot: hidden from people, filled in by spam bots. */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Full name *</label>
              <input id="name" name="name" className={field} placeholder="e.g. Chinedu Okafor" autoComplete="name" />
              <FieldError msg={errors.name} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone / WhatsApp *</label>
              <input id="phone" name="phone" type="tel" className={field} placeholder="0800 000 0000" autoComplete="tel" />
              <FieldError msg={errors.phone} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" className={field} placeholder="you@example.com" autoComplete="email" />
              <FieldError msg={errors.email} />
            </div>
            <div>
              <label htmlFor="location" className="mb-1.5 block text-sm font-medium">Project location</label>
              <input id="location" name="location" className={field} placeholder="e.g. Lekki, Lagos" />
            </div>
            <div>
              <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium">Project type</label>
              <select id="projectType" name="projectType" defaultValue="Building work" className={field}>
                <option>Building work</option>
                <option>Drawings / design</option>
                <option>Interior work</option>
                <option>General work / renovation</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">Estimated budget</label>
              <select id="budget" name="budget" defaultValue="" className={field}>
                <option value="">Select a range</option>
                <option>Under ₦50M</option>
                <option>₦50M – ₦100M</option>
                <option>₦100M – ₦250M</option>
                <option>₦250M+</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Tell us about your project *</label>
            <textarea id="message" name="message" rows={5} className={field} placeholder="What you need done, size of the job, when you'd like to start…" />
            <FieldError msg={errors.message} />
          </div>

          {status === "failed" && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              Sorry, your request couldn&apos;t be sent. Please try again or call us on{" "}
              <a href={company.phoneHref} className="font-semibold underline">{company.phone}</a>.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-semibold text-white transition hover:bg-brand-600 disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? "Sending…" : "Request a free quote"}
            {status !== "sending" && <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
