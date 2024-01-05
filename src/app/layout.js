import Topbar from "@/components/topbar";
import Footer from "@/components/footer";
import "@/style/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ListingApp",
  description: "Lets build this  main page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar id="topbar"></Topbar>

        <main>{children}</main>
        {/* <Footer id=""></Footer> */}
      </body>
    </html>
  );
}
