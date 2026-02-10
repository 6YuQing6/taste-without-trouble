import RecipeBox from "../components/RecipeBox";
import GridPageLayout from "./GridPageLayout";
import { getArticles } from "../recipes/recipes";

function ArticlesPage() {
  const articlesList = getArticles();

  return (
    <GridPageLayout
      title="Articles"
      items={articlesList}
      renderItem={(article) => (
        <RecipeBox
          key={article.link}
          title={article.title}
          author={article.author}
          link={article.link}
          image={article.image}
        />
      )}
    />
  );
}

export default ArticlesPage;
