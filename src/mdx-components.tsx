import clsx from "clsx";
import type { MDXComponents } from "mdx/types";
import type { ElementType, ReactNode } from "react";
import { Prism as Highlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
type TitleProps = {
  element?: ElementType;
  children?: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Title = ({ element, children, variant }: TitleProps) => {
  const Text = element || "h1";
  const slug =
    typeof children === "string"
      ? children
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-")
      : undefined;

  return (
    <Text
      id={slug}
      className={clsx(
        "font-bold",
        "my-12",
        "mb-8",
        "font-serif",
        variant === "h1" && "text-4xl",
        variant === "h2" && "text-3xl",
        variant === "h3" && "text-2xl",
        variant === "h4" && "text-xl",
        variant === "h5" && "text-lg",
        variant === "h6" && "text-base",
      )}
    >
      {slug ? (
        <a href={`#${slug}`} className={clsx("no-underline", "text-inherit")}>
          {children}
        </a>
      ) : (
        children
      )}
    </Text>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <Title element="h2" variant="h1">
        {children}
      </Title>
    ),
    h2: ({ children }) => (
      <Title element="h2" variant="h2">
        {children}
      </Title>
    ),
    h3: ({ children }) => (
      <Title element="h3" variant="h3">
        {children}
      </Title>
    ),
    h4: ({ children }) => (
      <Title element="h4" variant="h4">
        {children}
      </Title>
    ),
    h5: ({ children }) => (
      <Title element="h5" variant="h5">
        {children}
      </Title>
    ),
    h6: ({ children }) => (
      <Title element="h6" variant="h6">
        {children}
      </Title>
    ),
    p: (props) => (
      <p
        {...props}
        className={clsx(
          "font-sans",
          "text-base/8",
          "tracking-wide",
          "white",
          "text-pretty",
          "mb-8",
          props.className,
        )}
      />
    ),
    a: (props) => (
      <a
        {...props}
        className={clsx(
          "text-blue-600",
          "underline",
          "underline-offset-2",
          "hover:text-blue-800",
          "transition-colors",
          props.className,
        )}
      />
    ),
    code: ({ children, className, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");

      return (
        <div className="bg-zinc-900 rounded-2xl text-sm py-4 px-6 my-4">
          <Highlighter
            language={match?.[1]}
            PreTag="div"
            customStyle={{
              backgroundColor: "transparent",
              fontFamily: "inherit",
              margin: 0,
              padding: 0,
            }}
            codeTagProps={{
              style: { backgroundColor: "transparent", fontFamily: "inherit" },
            }}
            style={oneDark}
            {...props}
          >
            {children}
          </Highlighter>
        </div>
      );
    },
    ul: (props) => (
      <ul {...props} className={clsx("list-disc pl-12", props.className)} />
    ),
    li: (props) => <li {...props} className={clsx("my-2", props.className)} />,
  };
}
