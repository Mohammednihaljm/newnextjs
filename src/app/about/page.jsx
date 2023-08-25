import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import Button from "@/components/Button/Button"


const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image fill={true} src="https://ithemes.com/wp-content/uploads/2022/10/What-is-a-digital-product.png" alt='pictu' className={style.img}/>
        <div  className={style.imgText}>
           <h1  className={style.imgTitle}>Digital stry teler</h1>
           <h2  className={style.imgDesc}>Handcrafting award winning digital experiance</h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div  className={style.item}>
           <h1>Who are You</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum pariatur laborum minima odio excepturi doloribus alias saepe eos consectetur earum. Repellendus odit assumenda dolor id accusantium impedit aperiam maxime veritatis.</p>

        </div>
        <div  className={style.item}>
          <h1>What we do</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto laudantium ipsum quasi molestiae incidunt facilis dignissimos recusandae, molestias nulla amet, reprehenderit consectetur harum officia maxime est ad illo iusto?</p>
         <Button url="/contact" text="Contact"/>
        </div>
      </div>

        
       
    </div>
  )
}

export default About