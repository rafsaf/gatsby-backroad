import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <StaticImage
        src="../images/main.jpg"
        alt=""
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
        <a href="/" className={styles.btn}>
          explore tours
        </a>
      </div>
    </div>
  )
}

export default Hero
