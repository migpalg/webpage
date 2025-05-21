import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMdx = createMDX({
  options: {
    jsx: true,
    remarkPlugins: [
      // Parse frontmatter from MDX files to exports
      remarkFrontmatter,
      remarkMdxFrontmatter
    ],
  },
});

export default withMdx(nextConfig);
