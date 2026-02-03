import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CustomImage from "./CustomImage";
// https://medium.com/@dimterion/react-markdown-examples-372fa1b21c0c
function MarkdownPage() {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  console.log(filename);

  useEffect(() => {
    fetch(`./text/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          img: CustomImage,
        }}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownPage;
