import React from 'react'
import style from './page.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image fill={true} src="https://www.corporatevision-news.com/wp-content/uploads/2020/11/digitalisation.jpg" alt='pictu' className={style.img}/>
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

        </div>
      </div>

        
       
    </div>
  )
}

export default About