import Image from "next/image";
import styles from "./page.module.css";
import avatar from "/imges/Avatar.svg"
export const metadata = {
  title: "HEXASHOP-Home",
  description: "electronic shop",
};
export default function Home() {
  return (
<div className={styles.container}>
  <div className={styles.col}>
    <h1 className={styles.title}>YOUR BEST SHOP</h1>
    <p className={styles.description}>discription Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed sint, natus atque cum eius, accusamus rerum corporis aliquam quos, voluptates unde nemo dolorem mollitia. Reprehenderit iste quaerat nihil dolores?</p>
  <a href="/blog"><button className={styles.button}>Shop Now</button></a>
  </div>
  <div className={styles.col}>
<Image className={styles.img} src={avatar} alt="hexastore"/>
  </div>
</div>
  );
}
