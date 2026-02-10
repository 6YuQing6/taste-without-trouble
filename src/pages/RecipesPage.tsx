import RecipeBox from "../components/RecipeBox";
import GridPageLayout from "./GridPageLayout";
import { getRecipes } from "../recipes/recipes";

function RecipesPage() {
  const recipeList = getRecipes();

  return (
    <GridPageLayout
      title="Recipes"
      items={recipeList}
      renderItem={(recipe) => (
        <RecipeBox
          key={recipe.link}
          title={recipe.title}
          author={recipe.author}
          link={recipe.link}
          image={recipe.image}
        />
      )}
    />
  );
}

export default RecipesPage;
