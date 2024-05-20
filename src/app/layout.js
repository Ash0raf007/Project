import { Inter ,Lalezar} from "next/font/google";    /// google font
import "./globals.css";
import Navbar from "@/componants/Nav/Navbar";
import Footer from "@/componants/Footer/Footer";
import { Any } from "@/context/ThemContext";

const inter = Inter({ subsets: ["latin"] });  /// google font
const lalezar = Lalezar({     ////font name lalezar
  subsets: ["arabic"],
  weight:["400"] });   /// google font

export const metadata = {
  title: "HEXASHOP",
  description: "electronic shop",
};
///any thig white in body will show in all pages     <body className={inter.className}>  
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>  
      <Any>
        <div className="container">
<Navbar/>
{children}
<Footer/>
</div>
</Any>
        </body>
    </html>
  );
}
