import { Box, Container } from "@mui/material";
import CustomCard from "../components/Card";
/**
 *
 * @return {div} home element
 */
function Home() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, textAlign: "left" }}>
        <CustomCard sx={{ marginTop: "2rem", padding: "1rem" }}>
          <h1>Our Objective</h1>
          <p>
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
        </CustomCard>
      </Box>
    </Container>
  );
}

export default Home;
