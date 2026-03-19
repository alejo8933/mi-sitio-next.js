import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>
          {currentYear} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p>
          Hecho con Next.js
        </p>
      </div>
    </footer>
  );
}