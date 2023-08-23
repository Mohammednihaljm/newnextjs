import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fname}>@Developed By Nihal JM</div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} alt='fb'/>
        <Image src='/2.jpg' width={15} height={15} alt='insta'/>
      </div>
      
    </div>
  )
}

export default Footer