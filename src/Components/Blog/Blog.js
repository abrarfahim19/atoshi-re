import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const Blog = () => {
    const [cells, setCells] = useState([]);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/samsmusa/python-intermediate/main/class/meta_class.ipynb"
        )
            .then((res) => res.json())
            .then((data) => setCells(data.cells));
    }, []);
    return (
        <div>
            <div className="blog pt-20 pb-20">
                <div className="md:w-8/12 mx-auto">
                    {cells.map((cell) => {
                        if (cell.cell_type === "code") {
                            return (
                                <SyntaxHighlighter
                                    language="python"
                                    style={atomOneDark}
                                >
                                    {cell.source.join("")}
                                </SyntaxHighlighter>
                            );
                        } else if (cell.cell_type === "markdown") {
                            return (
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm, remarkMath]}
                                    rehypePlugins={[rehypeKatex]}
                                    components={{
                                        // Map `h1` (`# heading`) to use `h2`s.
                                        h1: "h2",
                                        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                                        ul: ({ node, ...props }) => (
                                            <div className="px-4 py-8 sm:px-8">
                                                <ul
                                                    className="list-disc list-inside text-slate-900 dark:text-slate-200"
                                                    {...props}
                                                />
                                            </div>
                                        ),
                                        table: ({ node, ...props }) => (
                                            <div className="relative rounded-xl overflow-auto">
                                                <div className="px-4 py-8 sm:px-8">
                                                    <table
                                                        className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm"
                                                        {...props}
                                                    />
                                                </div>
                                            </div>
                                        ),
                                        thead: ({ node, ...props }) => (
                                            <thead
                                                className="bg-slate-50 dark:bg-slate-700"
                                                {...props}
                                            />
                                        ),
                                        th: ({ node, ...props }) => (
                                            <th
                                                className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left"
                                                {...props}
                                            />
                                        ),
                                        td: ({ node, ...props }) => (
                                            <td
                                                className="border border-slate-300  p-4 text-slate-500 font-semibold dark:text-slate-800"
                                                {...props}
                                            />
                                        ),
                                        tbody: ({ node, ...props }) => (
                                            <tbody
                                                className="bg-white "
                                                {...props}
                                            />
                                        ),
                                    }}
                                >
                                    {cell.source.join("")}
                                </ReactMarkdown>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blog;
