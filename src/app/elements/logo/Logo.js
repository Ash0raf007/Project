import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import { Montserrat} from "next/font/google";    /// google font
const logofont = Montserrat({     /// google font
  subsets: ["latin"],
  weight:["400"]
}); 

function Logo() {
  return (
<Link href="/" className={`${styles.logo}${logofont.className}`}>HEXASHOP</Link>  )
}

export default Logo