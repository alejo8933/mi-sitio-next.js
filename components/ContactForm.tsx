// components/ContactForm.tsx
"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

const initialState = { success: false, error: "", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <section className="mt-5 px-5 py-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contacto
      </h2>

      {state.success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          {state.message}
        </div>
      )}
      {state.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {state.error}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-4">
        <input name="name" type="text" required placeholder="Tu nombre"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm" />
        <input name="email" type="email" required placeholder="tu@email.com"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm" />
        <input name="subject" type="text" required placeholder="Asunto"
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm" />
        <textarea name="message" rows={5} required placeholder="Tu mensaje..."
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm resize-none" />
        <button type="submit" disabled={isPending}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg">
          {isPending ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </section>
  );
}