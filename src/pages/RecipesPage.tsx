import { Box, ImageList } from "@mui/material";
import { Typography } from "@mui/material";
// import MarkdownComponent from "../components/MarkdownComponent";
// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import RecipeBox from "../components/RecipeBox";
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
      }}>
      <Typography variant="h4">Recipes</Typography>
      <Grid container spacing={2}>
        {/* <Link to="recipe1">Cozy Chai Latte Cookie Recipe</Link>
        <Link to="recipe2">Cozy Chai Latte Cookie Recipe 2</Link>
        <Link to="recipe1">Cozy Chai Latte Cookie Recipe</Link> */}
        <ImageList sx={{ maxWidth: "100%", height: "auto" }}>
          <RecipeBox
            title="Cozy Chai Latte Cookie Recipe"
            author="Melanie"
            link="recipe1"
            image="https://cdn-aegjg.nitrocdn.com/yMKKTawjGqQsyNiOUYKqPxAtxGpXlcWw/assets/images/optimized/rev-6fbc329/pinchspicemarket.com/wp-content/uploads/2020/05/Dirty-chai-masala-chocolate-chip-cookies-scaled.jpg"
          />
          <RecipeBox
            title="Cozy Chai Latte Cookie Recipe"
            author="Melanie"
            link="recipe1"
            image="https://cdn-aegjg.nitrocdn.com/yMKKTawjGqQsyNiOUYKqPxAtxGpXlcWw/assets/images/optimized/rev-6fbc329/pinchspicemarket.com/wp-content/uploads/2020/05/Dirty-chai-masala-chocolate-chip-cookies-scaled.jpg"
          />
          <RecipeBox
            title="Cozy Chai Latte Cookie Recipe"
            author="Melanie"
            link="recipe1"
            image="https://cdn-aegjg.nitrocdn.com/yMKKTawjGqQsyNiOUYKqPxAtxGpXlcWw/assets/images/optimized/rev-6fbc329/pinchspicemarket.com/wp-content/uploads/2020/05/Dirty-chai-masala-chocolate-chip-cookies-scaled.jpg"
          />
        </ImageList>
      </Grid>

      <Outlet />
    </Box>
  );
}

export default RecipesPage;
