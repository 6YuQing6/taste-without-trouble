import { Link } from "react-router-dom";
import type { RecipeProps } from "./RecipeBox";

interface PostProps extends RecipeProps {
  type?: string; // optional label override
}

export default function Post({
  image,
  title,
  link,
  author,
  date,
  type = "Post",
}: PostProps) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedType =
    type.toLowerCase() === "recipe"
      ? "recipes"
      : type.toLowerCase() === "article"
        ? "articles"
        : "";

  const fullPath = formattedType ? `/${formattedType}/${link}` : `/${link}`;
  return (
    <li className="w-full border-b border-gray-200 pb-10 mb-10 list-none">
      <Link
        to={fullPath}
        className="group flex flex-col md:flex-row md:items-center md:gap-8">
        {/* Text Content (LEFT) */}
        <div className="flex-1 order-2 md:order-1 mt-6 md:mt-0">
          <span className="text-xs uppercase tracking-wide text-gray-500">
            {type}
          </span>

          <h2 className="mt-2 text-2xl font-semibold text-black group-hover:text-green-700 transition-colors">
            {title}
          </h2>

          <div className="mt-2 text-sm text-gray-500 space-x-2">
            <span>{date.toLocaleDateString(undefined, options)}</span>
            <span>•</span>
            <span>By {author}</span>
          </div>

          <div className="mt-4 text-green-700 font-medium group-hover:underline">
            Read more →
          </div>
        </div>

        {/* Image (RIGHT) */}
        <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-72 aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
    </li>
  );
}
