import Image from "next/image";
import Gallery from "@/components/Gallery";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex w-full flex-col">
        <Gallery />
        <BlogSection />
        <ContactForm />
      </main>
    </div>
  );
}
