import "./globals.css";
import { ViewTransitions } from "next-view-transitions";


export const metadata = {
  title: "3d Website",
  description: "Creating something crazy and new with 3d",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className="bg-neutral-50 h-full antialiased"
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ViewTransitions>
  );
}
