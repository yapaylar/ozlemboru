"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Field = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
};

const FIELDS: Field[] = [
  { id: "name", label: "Ad Soyad", placeholder: "Adınız ve soyadınız", required: true },
  { id: "company", label: "Firma", placeholder: "Firma adı (isteğe bağlı)" },
  { id: "phone", label: "Telefon", placeholder: "(0___) ___ __ __", required: true },
  {
    id: "email",
    label: "E-posta",
    type: "email",
    placeholder: "ornek@firma.com",
    required: true,
  },
];

const labelClass = "text-[11px] font-light uppercase tracking-[0.14em] text-zinc-500";
const fieldBase =
  "w-full border-b border-zinc-200 bg-transparent py-2.5 text-sm font-light text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[400px] flex-col items-start justify-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center border border-zinc-200 bg-white">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <polyline
              points="3,10 8,15 17,5"
              className="stroke-zinc-900"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="mb-2 text-base font-light text-zinc-900">Mesajınız iletildi</p>
          <p className="section-body text-zinc-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", company: "", phone: "", email: "", subject: "", message: "" });
          }}
          className="text-sm font-light text-zinc-500 underline underline-offset-4 transition-colors hover:text-navy"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.id} className="flex flex-col gap-2">
            <label htmlFor={f.id} className={labelClass}>
              {f.label}
              {f.required ? <span className="text-zinc-900"> *</span> : null}
            </label>
            <input
              id={f.id}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              value={form[f.id as keyof typeof form]}
              onChange={handleChange}
              required={f.required}
              className={fieldBase}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className={labelClass}>
          Konu
        </label>
        <select
          id="subject"
          value={form.subject}
          onChange={handleChange}
          className={cn(`${fieldBase} cursor-pointer appearance-none`, !form.subject && "text-zinc-400")}
        >
          <option value="" disabled>
            Lütfen bir konu seçin
          </option>
          <option value="fiyat">Fiyat teklifi</option>
          <option value="teknik">Teknik bilgi</option>
          <option value="sevkiyat">Sevkiyat ve lojistik</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Mesajınız <span className="text-zinc-900">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="İhtiyacınızı, proje detaylarını veya sorularınızı buraya yazın..."
          value={form.message}
          onChange={handleChange}
          required
          className={`${fieldBase} resize-none`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-cta btn-cta--primary disabled:opacity-60"
        >
          {status === "sending" ? "Gönderiliyor..." : "Mesaj gönder"}
        </button>
      </div>
    </form>
  );
}
