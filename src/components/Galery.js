import React from "react"
import * as styles from "./Galery.module.css"
import { BiZoomIn } from "react-icons/bi"
import { StaticImage } from "gatsby-plugin-image"

const images = [
  {
    image: (
      <StaticImage
        src="../images/tour-1.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src="../images/tour-2.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src="../images/tour-3.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src="../images/tour-4.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src="../images/tour-5.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src="../images/tour-6.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src="../images/tour-1.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
  {
    image: (
      <StaticImage
        src="../images/tour-2.jpeg"
        layout="fullWidth"
        className={styles.image}
      />
    ),
  },
]

const Card = ({ image }) => {
  return (
    <div className={styles.cardImage}>
      {image}
      <div className={styles.zoomIcon}>
        <BiZoomIn className={styles.icon} />
      </div>
    </div>
  )
}

const Galery = () => {
  return (
    <section id="gallery" className={styles.galery}>
      {images.map((item) => (
        <Card image={item.image} />
      ))}
    </section>
  )
}

export default Galery
