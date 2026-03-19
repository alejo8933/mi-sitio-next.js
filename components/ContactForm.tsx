"use client";
import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

const initialState = { success: false, error: "", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <section className="bg-gray-800 py-8 px-5">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Contacto</h2>

      {state.success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg max-w-md mx-auto">
          {state.message}
        </div>
      )}
      {state.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg max-w-md mx-auto">
          {state.error}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-3 max-w-md mx-auto">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white">Nombre:</label>
          <input name="name" type="text" required
            className="border border-gray-600 bg-white rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white">Asunto:</label>
          <input name="subject" type="text" required
            className="border border-gray-600 bg-white rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white">Email:</label>
          <input name="email" type="email" required
            className="border border-gray-600 bg-white rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white">Mensaje:</label>
          <textarea name="message" rows={4} required
            className="border border-gray-600 bg-white rounded px-3 py-2 text-sm resize-none" />
        </div>
        <button type="submit" disabled={isPending}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded w-fit">
          {isPending ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}