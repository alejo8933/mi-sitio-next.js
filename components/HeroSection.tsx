import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
}

export default function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative w-full h-48 bg-gray-800 overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}