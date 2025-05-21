import Link from "next/link";
import { getBlogPosts } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog posts",
};

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h2 className="text-6xl font-black mb-4 font-serif">Blog!</h2>
      <p className="text-base/7 mb-2 font-sans">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        atque accusantium accusamus necessitatibus saepe nobis nam quia placeat
        earum adipisci, officiis cum doloribus esse voluptas, animi quidem magni
        numquam dicta?
      </p>
      {posts.map(({ slug, metadata }) => (
        <div key={slug} className="mb-4">
          <h3 className="text-2xl font-bold mb-2 font-serif">
            <Link href={`/blog/${slug}`}>{metadata.title}</Link>
          </h3>
          <p className="text-base/7 mb-2 font-sans">{metadata.description}</p>
          <p className="text-sm font-sans text-gray-500">{metadata.date}</p>
        </div>
      ))}
    </div>
  );
}
