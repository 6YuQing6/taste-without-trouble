import { Box, Container, ImageList } from "@mui/material";
import { Outlet } from "react-router-dom";

interface GridPageLayoutProps {
  title: string;
  items: any[];
  renderItem: (item: any) => React.ReactNode;
}

export default function GridPageLayout({
  title,
  items,
  renderItem,
}: GridPageLayoutProps) {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: "100%",
          width: "100%",
          flexGrow: 1,
          textAlign: "left",
          alignContent: "flex-start",
        }}>
        <h1>{title}</h1>

        <ImageList
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, 1fr) !important",
              sm: "repeat(2, 1fr) !important",
              md: "repeat(3, 1fr) !important",
            },
          }}>
          {items.map(renderItem)}
        </ImageList>

        <Outlet />
      </Box>
    </Container>
  );
}
