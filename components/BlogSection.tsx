// components/BlogSection.tsx
import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section className="mt-5 px-5 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Blog
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}