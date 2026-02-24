import { Box, Container } from "@mui/material";
import { getAllPosts } from "../recipes/recipes";
import Post from "../components/Post";
import { useState } from "react";
/**
 *
 * @return {div} home element
 */
function Home() {
  const items = getAllPosts();
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<
    "All" | "Recipe" | "Article"
  >("All");

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = selectedType === "All" || item.type === selectedType;

    return matchesSearch && matchesType;
  });
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, textAlign: "left" }}>
        <div className="mt-8 p-8 bg-white rounded-xl outline-1 outline-gray-300">
          <h1 className="text-2xl font-bold mb-4">Our Objective</h1>
          <p className="text-gray-700 leading-relaxed">
            Taste Without Trouble aims to craft allergen-free treats
            specifically designed for individuals with celiac disease,
            Eosinophilic Esophagitis (EOE), and Gastrointestinal Reflux Disease
            (GERD).The projects primary goals are to provide free, gut-friendly
            desserts and snacks, raise awareness about the growing prevalence of
            gastrointestinal disorders and declining gut health—particularly in
            today's youth—and to secure donations to support the Northwestern
            Digestive Health Institute. Additionally, the initiative seeks to
            shed light on the often-overlooked link between chronic digestive
            conditions, and the development of disordered eating patterns,
            emphasizing the importance of both physical and mental well-being in
            dietary management. Through this initiative, Taste Without Trouble
            aims to promote healthier eating habits while providing safe,
            enjoyable treats for individuals managing restrictive diets due to
            gastrointestinal conditions.
          </p>
        </div>
        {/* Posts + Sidebar Layout */}
        <div className="mt-4 p-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT — Posts (2/3) */}
          <div className="lg:col-span-2 space-y-10">
            {filteredItems.map((item) => (
              <Post
                key={item.link}
                title={item.title}
                author={item.author}
                link={item.link}
                image={item.image}
                date={item.date}
                type={item.type}
              />
            ))}
          </div>

          {/* RIGHT — Search / Filter (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 bg-white rounded-xl outline-1 outline-gray-300">
              <h2 className="text-xl font-semibold mb-4">Search Posts</h2>
              <select
                value={selectedType}
                onChange={(e) =>
                  setSelectedType(
                    e.target.value as "All" | "Recipe" | "Article",
                  )
                }
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="All">All</option>
                <option value="Recipe">Recipes</option>
                <option value="Article">Articles</option>
              </select>
              <input
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <p className="mt-4 text-sm text-gray-500">
                Showing {filteredItems.length} of {items.length}
              </p>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default Home;
