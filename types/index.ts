// types/index.ts
export type GalleryImageType = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BlogPostType = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};