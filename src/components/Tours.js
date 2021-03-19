import React from "react"
import * as styles from "./Tours.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { FaPlaceOfWorship as Icon } from "react-icons/fa"

const tourData = [
  {
    title: "Tibet Adventure",
    image: (
      <StaticImage
        src="../images/tour-1.jpeg"
        className={styles.image}
        layout="fullWidth"
      />
    ),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "China",
    days: "6 days",
    price: "From $1600",
    date: "August 26th, 2020",
  },
  {
    title: "Best Of Java",
    image: (
      <StaticImage
        src="../images/tour-2.jpeg"
        className={styles.image}
        layout="fullWidth"
      />
    ),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Indonesia",
    days: "11 days",
    price: "From $2500",
    date: "October 1th, 2020",
  },
  {
    title: "Explore Hong Kong",
    image: (
      <StaticImage
        src="../images/tour-3.jpeg"
        className={styles.image}
        layout="fullWidth"
      />
    ),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Hong Kong",
    days: "8 days",
    price: "From $5000",
    date: "September 15th, 2020",
  },
  {
    title: "Kenya Highlights",
    image: (
      <StaticImage
        src="../images/tour-4.jpeg"
        className={styles.image}
        layout="fullWidth"
      />
    ),
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Kenya",
    days: "20 days",
    price: "From $3300",
    date: "December 5th, 2019",
  },
]

const Tour = ({ title, image, text, country, days, price, date }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImage}>
        {image}
        <div className={styles.date}>{date}</div>
      </div>
      <section className={styles.bg}>
        <div className={styles.cardTitle}>
          <h4>{title}</h4>
          <p>{days}</p>
        </div>
        <p>{text}</p>
        <div className={styles.cardFooter}>
          <p>
            <Icon className={styles.icon} /> {country}
          </p>
          <p> {price}</p>
        </div>
      </section>
    </article>
  )
}

const Tours = () => {
  return (
    <section id="featured" className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>
          Featured <span>Tours</span>
        </h2>
      </div>
      <div className={styles.tours}>
        {tourData.map((item) => (
          <Tour
            title={item.title}
            country={item.country}
            price={item.price}
            days={item.days}
            date={item.date}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}

export default Tours
