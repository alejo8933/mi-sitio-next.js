import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section className="bg-white py-8 px-5">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Últimas entradas del blog
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex gap-4 border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative w-48 h-36 shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-3 gap-1">
              <h3 className="text-base font-bold text-gray-800">{post.title}</h3>
              <p className="text-xs text-gray-400">{post.date}</p>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-1 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded w-fit"
              >
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}