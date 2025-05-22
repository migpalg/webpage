import clsx from "clsx";
import Link from "next/link";

export type PostEntryProps = {
  title: string;
  slug: string;
  description: string;
  date: string;
};

export const PostEntry = ({
  slug,
  title,
  description,
  date,
}: PostEntryProps) => (
  <div
    key={slug}
    className={clsx(
      "dark:border-zinc-100/30",
      "border-b",
      "border-dotted",
      "py-8",
    )}
  >
    <h3 className={clsx("text-xl", "font-bold", "mb-2", "font-serif")}>
      <Link href={`/blog/${slug}`}>{title}</Link>
    </h3>
    <p className={clsx("text-sm/8", "mb-2", "font-sans")}>{description}</p>
    <p className={clsx("text-sm", "font-sans", "opacity-50")}>{date}</p>
  </div>
);
