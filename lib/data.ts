// lib/data.ts
import type { GalleryImageType, BlogPostType } from "@/types";

export const siteConfig = {
  name: "Mi Sitio Web",
  description: "Galería, blog y contacto - Taller SENA CEET",
  url: "https://mi-sitio.azurestaticapps.net",
  author: "SENA CEET - ADSO",
  year: new Date().getFullYear(),
};

export const heroImage = {
  src: "/img/header.jpg",
  alt: "Imagen principal del sitio",
};

export const galleryImages: GalleryImageType[] = [
  { id: 1, src: "/img/img1.jpg", alt: "Ciudad futurista con luces neón", width: 1024, height: 768 },
  { id: 2, src: "/img/img2.jpg", alt: "Caballo en paisaje brumoso", width: 1024, height: 768 },
  { id: 3, src: "/img/img3.jpg", alt: "Imagen 3", width: 1024, height: 768 },
  { id: 4, src: "/img/img4.jpg", alt: "Imagen 4", width: 1024, height: 768 },
  { id: 5, src: "/img/img5.jpg", alt: "Imagen 5", width: 1024, height: 768 },
  { id: 6, src: "/img/img6.jpg", alt: "Imagen 6", width: 1024, height: 768 },
];

export const blogPosts: BlogPostType[] = [
  {
    id: 1,
    slug: "inteligencia-artificial-trabajo",
    title: "IA en el Trabajo",
    date: "15 de marzo de 2025",
    excerpt: "Cómo la IA transforma los espacios de trabajo...",
    image: "/img/img7.jpg",
  },
  {
    id: 2,
    slug: "segundo-post",
    title: "Segundo Post",
    date: "22 de marzo de 2025",
    excerpt: "Resumen del segundo post del blog.",
    image: "/img/img8.jpg",
  },
  {
    id: 3,
    slug: "tercer-post",
    title: "Innovación en Ciencia y Tecnología",
    date: "01 de abril de 2025",
    excerpt: "Descubrimientos recientes que están revolucionando el mundo.",
    image: "/img/img9.jpg",
  },
];