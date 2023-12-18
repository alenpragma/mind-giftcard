import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/_nav/Nav";
import TopNav from "./_components/_topNav/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MindChain Gift Card",
  description: "MindChain Gift Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <TopNav/>
        <div className="flex ">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
