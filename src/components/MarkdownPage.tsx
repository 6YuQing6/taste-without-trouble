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
    <Container maxWidth="sm">
      <div className="markdown">
        <ReactMarkdown
          components={{
            img: CustomImage,
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
