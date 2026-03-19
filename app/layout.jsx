import { DM_Sans } from '@next/font/google';
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "3d Website",
  description: "Creating something crazy and new with 3d",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${dmSans.className} bg-neutral-50 h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ViewTransitions>
  );
}
