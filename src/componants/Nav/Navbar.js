
import React from 'react'
import styles from './page.module.css' ///{styles.logo},{styles.container},.......
import Link from 'next/link'  //////////      <Link href="/" className={styles.logo}>HEXASHOP</Link>
import {links} from './datalink' ///export const links=[
import Button from './../Button/Button'
import Logo from '@/app/elements/logo/Logo'
import Darkmodetoggle from '../Darkmodetoggle/Darkmodetoggle'

function Navbar() {
  return (
    <div className={styles.container}>
      <Logo/>
      <div className={styles.links}>
        <Darkmodetoggle/>
{links.map(link=> <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>)}
<Button/>
      </div>

    </div>

  )
}

export default Navbar