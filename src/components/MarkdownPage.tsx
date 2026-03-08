import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CustomImage from "./CustomImage";
import { IngredientPopover } from "./Ingredient";
import { getIngredients } from "../recipes/recipes";
import { Container } from "@mui/material";

// https://medium.com/@dimterion/react-markdown-examples-372fa1b21c0c
function MarkdownPage() {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`./text/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  // if markdown text matches ingredient in ingredients, replace text with IngredientPopover(ingredient, ingredient.summary)
  const ingredients = getIngredients();

  return (
    <Container maxWidth="md">
      <div className="markdown mb-20">
        <ReactMarkdown
          components={{
            img: CustomImage,

            h1({ children }) {
              return (
                <h1 className="text-4xl font-bold mt-8 mb-8">{children}</h1>
              );
            },

            h2({ children }) {
              return (
                <h2 className="text-lg font-medium mt-6 mb-3">{children}</h2>
              );
            },
            h3({ children }) {
              return (
                <h3 className="text-sm font-light mt-4 mb-2">{children}</h3>
              );
            },
            ul({ children }) {
              return (
                <ul className="list-disc list-outside ml-6 mb-4">{children}</ul>
              );
            },
            ol({ children }) {
              return (
                <ol className="list-decimal list-outside ml-6 mb-4">
                  {children}
                </ol>
              );
            },
            li({ children }) {
              return <li className="mb-1">{children}</li>;
            },

            p({ children }) {
              return <p className="mb-4">{children}</p>;
            },
            em({ children }) {
              const text = Array.isArray(children) ? children[0] : children;
              if (typeof text === "string" && ingredients[text]) {
                return (
                  <IngredientPopover
                    name={text}
                    summary={ingredients[text].summarized_description}
                  />
                );
              }
              return <em>{children}</em>;
            },
          }}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </Container>
  );
}

export default MarkdownPage;
