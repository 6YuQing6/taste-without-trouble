import { Box, ImageList } from "@mui/material";
// import { Typography } from "@mui/material";
// import MarkdownComponent from "../components/MarkdownComponent";
// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { Grid } from "@mui/material";
import RecipeBox from "../components/RecipeBox";
// import { theme } from "../components/theme";
/**
 *
 * @return {div} home element
 */
function RecipesPage() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        flexGrow: 1,
        textAlign: "left",
        alignContent: "flex-start",
      }}>
      <h1>Recipes</h1>
      <ImageList
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr) !important", // 1 column on mobile
            sm: "repeat(2, 1fr) !important", // 2 columns on tablet
            md: "repeat(3, 1fr) !important", // 3 columns on desktop
          },
        }}>
        <RecipeBox
          title="Cozy Chai Latte Cookie Recipe"
          author="Melanie"
          link="recipe1"
          image="https://cdn-aegjg.nitrocdn.com/yMKKTawjGqQsyNiOUYKqPxAtxGpXlcWw/assets/images/optimized/rev-6fbc329/pinchspicemarket.com/wp-content/uploads/2020/05/Dirty-chai-masala-chocolate-chip-cookies-scaled.jpg"
        />
        <RecipeBox
          title="Cozy Chai Latte Cookie Recipe"
          author="Melanie"
          link="recipe2"
          image="https://cdn-aegjg.nitrocdn.com/yMKKTawjGqQsyNiOUYKqPxAtxGpXlcWw/assets/images/optimized/rev-6fbc329/pinchspicemarket.com/wp-content/uploads/2020/05/Dirty-chai-masala-chocolate-chip-cookies-scaled.jpg"
        />
        <RecipeBox
          title="Cozy Chai Latte Cookie Recipe"
          author="Melanie"
          link="recipe3"
          image="https://cdn-aegjg.nitrocdn.com/yMKKTawjGqQsyNiOUYKqPxAtxGpXlcWw/assets/images/optimized/rev-6fbc329/pinchspicemarket.com/wp-content/uploads/2020/05/Dirty-chai-masala-chocolate-chip-cookies-scaled.jpg"
        />
      </ImageList>

      <Outlet />
    </Box>
  );
}

export default RecipesPage;
