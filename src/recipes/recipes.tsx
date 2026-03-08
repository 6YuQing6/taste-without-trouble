import recipesJson from "./recipes.json";

export function getRecipes() {
  return recipesJson.map((recipe) => ({
    title: recipe.title,
    author: recipe.author,
    image: recipe.image ?? "./images/placeholder.png",
    link: recipe.link,
    date: new Date(recipe.date),
  }));
}

import articlesJson from "./articles.json";
export function getArticles() {
  return articlesJson.map((recipe) => ({
    title: recipe.title,
    author: recipe.author,
    image: recipe.image ?? "./images/placeholder.png",
    link: recipe.link,
    date: new Date(recipe.date),
  }));
}

export function getAllPosts() {
  const articles = articlesJson.map((item) => ({
    title: item.title,
    author: item.author,
    image: item.image ?? "./images/placeholder.png",
    link: item.link,
    date: new Date(item.date),
    type: "Article",
  }));

  const recipes = recipesJson.map((item) => ({
    title: item.title,
    author: item.author,
    image: item.image ?? "./images/placeholder.png",
    link: item.link,
    date: new Date(item.date),
    type: "Recipe",
  }));

  const allItems = [
    ...articles.map((item) => ({ ...item, type: "Article" })),
    ...recipes.map((item) => ({ ...item, type: "Recipe" })),
  ];
  return allItems;
}

import ingredients from "./ingredients.json";
export function getIngredients(): Record<
  string,
  {
    description?: string[];
    summarized_description: string;
  }
> {
  return ingredients;
}
