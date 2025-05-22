import Link from "next/link";
import { PostEntry } from "@/components/post-entry";
import { getBlogPosts } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog posts",
};

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h2 className="text-6xl font-black mb-4 font-serif decoration-solid">
        Blog!
      </h2>

      <p className="text-sm/8 font-sans mb-2 opacity-50">
        Some things that have been around my head
      </p>

      <div className="flex flex-col mt-12">
        {posts.map(({ slug, metadata }) => (
          <PostEntry
            key={slug}
            slug={slug}
            title={metadata.title}
            description={metadata.description}
            date={metadata.date}
          />
        ))}
      </div>
    </div>
  );
}
