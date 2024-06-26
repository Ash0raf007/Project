import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
export const metadata = {
  title: "HEXASHOP-Product",
  description: "electronic shop",
};





async function getData() {
  const res = await fetch('https://dummyjson.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  } 
  return res.json()
}
async function Blog() {

  const data = await getData()
  const products=data.products

  return (
<div className={styles.maincontainer}>
{
products.map(product=>(
  <Link href={`/blog/${product.id}`} className={styles.post} key={product.id}>
  <div className={styles.imagecontainer}>
<Image
className={styles.image}
src={product.thumbnail}
width={350}
height={250}
alt="sdsdl"
/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>{product.title}</h1>
<p className={styles.desc}>{product.description}</p>

</div>
  </Link>
))
}




</div>
  )
}

export default Blog