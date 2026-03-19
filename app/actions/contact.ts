// app/actions/contact.ts
"use server";

export async function submitContact(prevState: any, formData: FormData) {
  const name    = formData.get("name")?.toString().trim();
  const email   = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !subject || !message) {
    return { success: false, error: "Todos los campos son obligatorios.", message: "" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "El email no es válido.", message: "" };
  }

  console.log("Nuevo mensaje:", { name, email, subject, message });

  return { success: true, error: "", message: "Mensaje enviado correctamente!" };
}