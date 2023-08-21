import Image from 'next/image'
import styles from './page.module.css'
import home from 'public/Home.jpg'
import home1 from 'public/Home1.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>Better design your digital product</h1>
        <p className={styles.desc}>Digital products are intangible items delivered electronically, such as music, software and ebooks. Essentially, anything that can be downloaded and used digitally can be considered a digital product. Digital products can be sold online or through brick-and-mortar retailers..</p>
        <button className={styles.button}>See our website</button>
      </div>
      <div className={styles.items}>
      <Image className={styles.img} src={home1}  alt='home'/>
      </div>
    </div>
  )
}
