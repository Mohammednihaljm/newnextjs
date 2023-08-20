import Image from 'next/image'
import styles from './page.module.css'
import home from 'public/Home.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1>Easy to applay visa renew</h1>
        <p>E-Visa is a system developed with the aim of saving passengers from long-term and tiring bureaucratic procedures, as well as creating an alternative to visas issued at the borders. Online users can apply for visas online to the countries they wish to visit.</p>
        <button>APPLAY</button>
      </div>
      <div className={styles.items}>
      <Image src={home} width={800} height={500}  alt='home'/>
      </div>
    </div>
  )
}
