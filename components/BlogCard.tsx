// components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { BlogPostType } from "@/types";

export default function BlogCard({ post }: { post: BlogPostType }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
        <p className="text-sm text-gray-500 flex-1">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-purple-600 hover:underline mt-2"
        >
          Leer más
        </Link>
      </div>
    </div>
  );
}