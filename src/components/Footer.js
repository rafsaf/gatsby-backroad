import React from "react"
import * as styles from "./Footer.module.css"
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

const footersIcons = [
  { icon: <FaFacebook className={styles.footerIcon} /> },
  { icon: <FaTwitter className={styles.footerIcon} /> },
  { icon: <FaDiscord className={styles.footerIcon} /> },
]

const Links = () => {
  return (
    <ul className={styles.links}>
      <li>
        <button onClick={() => scrollTo("#nav")} className={styles.btn}>
          Home
        </button>
      </li>
      <li>
        <button onClick={() => scrollTo("#about")} className={styles.btn}>
          About
        </button>
      </li>
      <li>
        <button onClick={() => scrollTo("#services")} className={styles.btn}>
          Services
        </button>
      </li>
      <li>
        <button onClick={() => scrollTo("#featured")} className={styles.btn}>
          Featured
        </button>
      </li>
      <li>
        <button onClick={() => scrollTo("#gallery")} className={styles.btn}>
          Gallery
        </button>
      </li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article className={styles.footerContainer}>
        <Links />
        <div className={styles.footerText}>
          {footersIcons.map((item) => (
            <a href="/">{item.icon}</a>
          ))}
        </div>
        <div className={styles.footerText}>
          <h4>
            <span>Backroad</span> Project Based on HTML & CSS course, please
            refer www.johnsmilga.com
          </h4>
          <h4>&#169; rafsaf.pl</h4>
        </div>
      </article>
    </footer>
  )
}

export default Footer
