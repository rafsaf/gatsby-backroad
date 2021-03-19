import React, { useState } from "react"
import * as styles from "./Navbar.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { StaticImage } from "gatsby-plugin-image"

const Icons = [
  { icon: <FaFacebook className={styles.navIcon} /> },
  { icon: <FaTwitter className={styles.navIcon} /> },
  { icon: <FaDiscord className={styles.navIcon} /> },
]

const Links = ({ toggleLink }) => {
  return (
    <ul className={styles.links}>
      <li>
        <button
          onClick={() => {
            toggleLink()
            scrollTo("#nav")
          }}
          className={styles.btn}
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            toggleLink()
            scrollTo("#about")
          }}
          className={styles.btn}
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            toggleLink()
            scrollTo("#services")
          }}
          className={styles.btn}
        >
          Services
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            toggleLink()
            scrollTo("#featured")
          }}
          className={styles.btn}
        >
          Featured
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            toggleLink()
            scrollTo("#gallery")
          }}
          className={styles.btn}
        >
          Gallery
        </button>
      </li>
    </ul>
  )
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const toggleLink = () => {
    setToggle(false)
  }
  return (
    <div className={styles.bg}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <StaticImage
            src="../images/logo.svg"
            placeholder="tracedSVG"
            alt="logo"
          />
          <button
            className={styles.toggleBtn}
            onClick={() => setToggle(!toggle)}
          >
            <GiHamburgerMenu className={styles.toggle} />
          </button>
        </div>
        {toggle ? <Links toggleLink={toggleLink} /> : null}
        <div className={styles.navLinks}>
          <Links />
        </div>
        <div className={styles.icons}>
          {Icons.map((item) => (
            <a href="https://www.facebook.com/">{item.icon}</a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
