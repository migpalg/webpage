import Link from "next/link";
import clsx from "clsx";
import { getBlogPosts } from "../utils";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PostParams = {
  slug: string;
};

type PostProps = {
  params: Promise<PostParams>;
};

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const { default: Post, frontmatter } = await import(`@/content/${slug}.mdx`);

  return (
    <div>
      <Link
        href="/blog"
        className={clsx(
          "text-sm",
          "font-sans",
          "mb-6",
          "inline-block",
          "opacity-50",
          "hover:opacity-100",
          "before:content-['←']",
          "before:pr-2",
          "before:opacity-50",
          "before:font-bold",
          "transition-opacity"
        )}
      >
        back to posts list
      </Link>

      <h2 className="text-6xl font-black mb-4 font-serif">
        {frontmatter.title}
      </h2>
      <p>{frontmatter.author}</p>

      <Post />

      <div className="flex gap-2 mt-8">
        {frontmatter.tags?.map((tag: string) => (
          <span
            key={tag}
            className={clsx(
              "text-sm",
              "font-sans",
              "px-4",
              "select-none",
              "py-1",
              "rounded-full",
              "border-1"
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export const dynamicParams = false;
