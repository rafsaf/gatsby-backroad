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
        <a onClick={() => scrollTo("#nav")} className={styles.btn}>
          Home
        </a>
      </li>
      <li>
        <a onClick={() => scrollTo("#about")} className={styles.btn}>
          About
        </a>
      </li>
      <li>
        <a onClick={() => scrollTo("#services")} className={styles.btn}>
          Services
        </a>
      </li>
      <li>
        <a onClick={() => scrollTo("#featured")} className={styles.btn}>
          Featured
        </a>
      </li>
      <li>
        <a onClick={() => scrollTo("#gallery")} className={styles.btn}>
          Gallery
        </a>
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
