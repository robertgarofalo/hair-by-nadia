import { Montserrat, Poiret_One } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
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
  title: "Hair by Nadia",
  description: "Hair studio - Melbourne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
