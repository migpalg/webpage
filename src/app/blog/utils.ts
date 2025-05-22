import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "src", "content");

export async function getBlogPosts() {
  const files = await fs.readdir(BLOG_CONTENT_PATH);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const slug = path.basename(fileName, path.extname(fileName));
      const contents = await fs.readFile(
        path.join(BLOG_CONTENT_PATH, fileName),
        "utf-8",
      );

      const { data } = matter(contents);

      return {
        slug,
        metadata: data,
      };
    }),
  );

  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);

    return dateB.getTime() - dateA.getTime();
  });
}
