import Image from 'next/image'
import styles from './page.module.css'
export const metadata = {
  title: "HEXASHOP-Prouduct-Details",
  description: "electronic shop",
};

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  } 
  return res.json()
}

////params
async function Post({params}) {

  const product = await getData(params.id)

  return (
    <div className={styles.container}>

    <header className={styles.header}>
    <div className={styles.info}>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.desc}>{product.description}</p>
    </div>
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
      src={product.thumbnail}
      fill={true}
      alt={product.title}
    
      />
      <span className={styles.author}>{product.category}</span>
    </div>
</header>
<div className={styles.content}>
<div className={styles.gallery}>
  {product.images.map(image=>(
      <Image
      key={product.id}
    src={image}
    alt={product.title}
    width={100}
height={100}
    />

  ))}

</div>
</div>
</div>
  )
}

export default Post