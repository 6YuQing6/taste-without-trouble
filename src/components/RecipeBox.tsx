import type { ImageListItemProps } from "@mui/material";
// import CustomCard from "./Card";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from "react-router-dom";

interface RecipeProps extends ImageListItemProps {
  image: string;
  title: string;
  link: string;
  author: string;
}

function RecipeBox({ image, title, link, author }: RecipeProps) {
  return (
    <ImageListItem key={image}>
      <Link to={link}>
        <img
          srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${image}?w=248&fit=crop&auto=format`}
          alt={title}
          loading="lazy"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <ImageListItemBar
          title={title}
          subtitle={<span>by: {author}</span>}
          position="below"
        />
      </Link>
    </ImageListItem>

    // <Box>
    //   <CustomCard>

    //     <Link to={link}> </Link>
    //   </CustomCard>

    // </Box>
  );
}

export default RecipeBox;
