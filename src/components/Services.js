import React from "react"
import * as styles from "./Services.module.css"
import { FaWallet, FaTree, FaSocks } from "react-icons/fa"

const servicesData = [
  {
    icon: <FaWallet className={styles.icon} />,
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaTree className={styles.icon} />,
    title: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaSocks className={styles.icon} />,
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const Service = ({ icon, title, text }) => {
  return (
    <article className={styles.service}>
      <div className={styles.serviceIcon}>{icon}</div>
      <div className={styles.serviceInfo}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </article>
  )
}

const Services = () => {
  return (
    <div id="services" className={styles.bg}>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>
            Our <span>Services</span>
          </h2>
        </div>
        <div className={styles.servicesCenter}>
          {servicesData.map((item) => (
            <Service icon={item.icon} text={item.text} title={item.title} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
