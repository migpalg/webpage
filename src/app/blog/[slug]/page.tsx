import clsx from "clsx";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../utils";

type PostParams = {
  slug: string;
};

type PostProps = {
  params: Promise<PostParams>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await import(`@/content/${slug}.mdx`);

  return {
    title: `Blog | ${frontmatter.title}`,
    description: frontmatter.description,
  };
}

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
          "transition-opacity",
        )}
      >
        back to posts list
      </Link>

      <main>
        <h2 className="text-6xl font-black mb-2 font-serif">
          {frontmatter.title}
        </h2>
        <p className="text-lg text-gray-500">{frontmatter.author}</p>

        <div className="py-12">
          <Post />
        </div>
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
                "border-1",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}

export const dynamicParams = false;
