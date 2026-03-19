
import Gallery from "@/components/Gallery";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex w-full flex-col">
        <HeroSection imageSrc="/img/header.jpg" imageAlt="Imagen principal" />
        <Gallery />
        <BlogSection />
        <ContactForm />
      </main>
    </div>
  );
}