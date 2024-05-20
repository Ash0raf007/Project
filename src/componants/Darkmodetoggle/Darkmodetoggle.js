"use client"
import { useContext } from 'react'
import styles from './Darkmodetoggle.module.css'
import { ThemContext } from '@/context/ThemContext'
function Darkmodetoggle() {
//         style={mode==="light"?{left:"2px"}:{right:"2px"}}
const {mode,toggle}=useContext(ThemContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌑</div>
      <div
       className={styles.switcher}
       style={mode==="light"?{left:"2px"}:{right:"2px"}}
       />
    </div>
  )
}

export default Darkmodetoggle