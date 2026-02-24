import { Link } from "react-router-dom";

export interface RecipeProps {
  image: string;
  title: string;
  link: string;
  author: string;
  date: Date;
}

function RecipeBox({ image, title, link, author, date }: RecipeProps) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <Link to={link} className="block group">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      {/* Text Below */}
      <div className="mt-3">
        <h5 className="text-sm text-gray-900 group-hover:text-green-700 transition-colors">
          {title}
        </h5>

        <div className="mt-1 text-sm text-gray-500">
          <div>{date.toLocaleDateString(undefined, options)}</div>
          <div>By {author}</div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeBox;
