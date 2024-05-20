import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import facbok from '/imges/facebook.png'
import insta from '/imges/instagram.png'
import whatsap from '/imges/whatsapp.png'

function Footer() {
  return (
    <div className='styles.container'>
      <div>©2024 HExshop.all right reserved</div>
      <div className={styles.social}>
      <Image 
        src={facbok}
        width={20}
        height={20}
        className={styles.icon}
        alt='hexa shopfascelink'
        />
          <Image 
        src={insta}
        width={20}
        height={20}
        className={styles.icon}
        alt='hexa shopfascelink'
        />
          <Image 
        src={whatsap}
        width={20}
        height={20}
        className={styles.icon}
        alt='hexa shopfascelink'
        />
      </div>
    </div>
  )
}

export default Footer