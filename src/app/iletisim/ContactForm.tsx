"use client";

import { useState } from "react";

type Field = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
};

const FIELDS: Field[] = [
  { id: "name",    label: "Ad Soyad",      placeholder: "Adınız ve soyadınız",         required: true },
  { id: "company", label: "Firma",          placeholder: "Firma adı (isteğe bağlı)" },
  { id: "phone",   label: "Telefon",        placeholder: "(0___) ___ __ __",            required: true },
  { id: "email",   label: "E-posta",        type: "email", placeholder: "ornek@firma.com", required: true },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", subject: "", message: "",
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
      <div className="flex flex-col items-start justify-center h-full min-h-[400px] gap-6">
        <div
          className="w-12 h-12 flex items-center justify-center border"
          style={{ borderColor: "#000" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polyline points="3,10 8,15 17,5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="font-medium uppercase tracking-wide text-sm mb-2" style={{ color: "#000" }}>
            Mesajınız İletildi
          </p>
          <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
            En kısa sürede sizinle iletişime geçeceğiz.
          </p>
        </div>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", company: "", phone: "", email: "", subject: "", message: "" }); }}
          className="text-xs font-light uppercase tracking-widest underline underline-offset-4"
          style={{ color: "#888" }}
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {FIELDS.map((f) => (
          <div key={f.id} className="flex flex-col gap-2">
            <label
              htmlFor={f.id}
              className="text-xs font-light uppercase tracking-[0.15em]"
              style={{ color: "#888" }}
            >
              {f.label}{f.required && <span style={{ color: "#000" }}> *</span>}
            </label>
            <input
              id={f.id}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              value={form[f.id as keyof typeof form]}
              onChange={handleChange}
              required={f.required}
              className="w-full border-b py-2.5 text-sm font-light bg-transparent outline-none transition-colors placeholder:text-[#bbb]"
              style={{ borderColor: "#ddd", color: "#000" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#ddd")}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-xs font-light uppercase tracking-[0.15em]"
          style={{ color: "#888" }}
        >
          Konu
        </label>
        <select
          id="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border-b py-2.5 text-sm font-light bg-transparent outline-none appearance-none cursor-pointer"
          style={{ borderColor: "#ddd", color: form.subject ? "#000" : "#bbb" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#ddd")}
        >
          <option value="" disabled>Lütfen bir konu seçin</option>
          <option value="fiyat">Fiyat Teklifi</option>
          <option value="teknik">Teknik Bilgi</option>
          <option value="sevkiyat">Sevkiyat & Lojistik</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-light uppercase tracking-[0.15em]"
          style={{ color: "#888" }}
        >
          Mesajınız <span style={{ color: "#000" }}>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="İhtiyacınızı, proje detaylarını veya sorularınızı buraya yazın..."
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border-b py-2.5 text-sm font-light bg-transparent outline-none resize-none placeholder:text-[#bbb]"
          style={{ borderColor: "#ddd", color: "#000" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#ddd")}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-8 py-3.5 text-sm text-white transition-opacity disabled:opacity-60"
          style={{ backgroundColor: "#000" }}
        >
          {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
          {status === "idle" && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
