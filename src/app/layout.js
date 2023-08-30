import TopNavBar from "@/components/NavBar/TopNavBar/TopNavBar";
import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI Sandbox",
  description: "Web where I host my UI/UX component study cases",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavBar></TopNavBar>
        {children}
      </body>
    </html>
  );
}
