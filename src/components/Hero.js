import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Hero.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const Hero = () => {
  return (
    <div id="nav" className={styles.hero}>
      <StaticImage
        src="../images/main.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        className={styles.heroImage}
      />
      <div className={styles.heroBanner}>
        <h1>Continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel pretium mauris. In vel congue odio. Pellentesque vitae vehicula
          dolor, vel molestie sapien.
        </p>
        <button className={styles.btn} onClick={() => scrollTo("#featured")}>
          explore tours
        </button>
      </div>
    </div>
  )
}

export default Hero
