import { Container } from "@mui/material";
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
      <div className="m-2 pt-4">
        <div className="pb-2 w-full border-b border-gray-200 mb-10">
          <h1> {title} </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(renderItem)}
        </div>
        <Outlet />
      </div>
    </Container>
  );
}
