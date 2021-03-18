import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>
          About <span>US</span>
        </h2>
      </div>
      <div className={styles.aboutCenter}>
        <div className={styles.aboutImage}>
          <StaticImage src="../images/about.jpeg" layout="fullWidth" alt="" />
        </div>
        <article className={styles.aboutInfo}>
          <h3>explore the diffrence</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
            nisi sed ligula pretium imperdiet at nec ipsum. Phasellus enim erat,
            bibendum nec sodales quis, consectetur a nisi.
          </p>
          <p>
            Duis nec accumsan ipsum. Proin et ligula euismod mi accumsan
            consequat facilisis et augue. Orci varius natoque.
          </p>
          <a href="/" className={styles.btn}>
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
