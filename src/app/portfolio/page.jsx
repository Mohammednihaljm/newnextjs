import React from 'react'
import style from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={style.cotainer}>
      <h1 className={style.selecttitle}>Choose a gallery</h1>
      <div className={style.items}>
        <Link href="/portfolio/illustrations" className={style.item}>
          <span className={style.title}>illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={style.item}>
          <span className={style.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={style.item}>
          <span className={style.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio