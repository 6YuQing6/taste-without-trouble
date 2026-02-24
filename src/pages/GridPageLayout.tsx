import { Box, Container } from "@mui/material";
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
          paddingBottom: "2rem",
        }}>
        <h1 className="mt-4 mb-4">{title}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(renderItem)}
        </div>
        <Outlet />
      </Box>
    </Container>
  );
}
