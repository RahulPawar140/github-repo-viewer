import "./globals.css";
import TopLoader from "../components/TopLoader";
import RouteLoader from "../components/RouteLoader";

export const metadata = {
  title: "GitHub Repo Explorer",
  description: "Search and explore repositories",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <TopLoader />
        <RouteLoader />
        {children}
      </body>
    </html>
  );
}