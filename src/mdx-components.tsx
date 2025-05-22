import type { MDXComponents } from "mdx/types";
import { Prism as Highlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: ({ children }) => {
      return <h2 className="text-2xl">{children}</h2>;
    },
    code: ({ children, className, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");

      return (
        <div className="dark:bg-zinc-900 rounded-2xl text-sm py-4 px-6 my-4">
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
  };
}
