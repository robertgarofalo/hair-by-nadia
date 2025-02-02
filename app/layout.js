import { Montserrat, Poiret_One } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
  // variable: '--font-poiretone'
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  // variable: '--font-montserrat'
})

export const metadata = {
  title: "Hair by Nadia | Melbourne Hair Studio",
  description: "Melbourne's number 1 hair studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        <div className="relative">
          <Header />
          <PageTransition >
            {children}
          </PageTransition>
        </div>
      </body>
    </html>
  );
}


// Timing
/*

Header desktop and mobile - 
Add header
nav links
setup 4 - 5 pages
functionality for mobile header open and close

2 hours

*/