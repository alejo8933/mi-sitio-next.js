"use client";
import { useState } from "react";
import Image from "next/image";
import type { GalleryImageType } from "@/types";

export default function GalleryImage({ image }: { image: GalleryImageType }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      className="relative overflow-hidden rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-64">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
      <figcaption
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-sm">{image.alt}</p>
      </figcaption>
    </figure>
  );
}