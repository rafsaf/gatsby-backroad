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

const Links = ({ setToggle }) => {
  return (
    <ul className={styles.links}>
      <li>
        <a
          onClick={() => {
            scrollTo("#nav")
            setToggle(false)
          }}
          className={styles.btn}
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            scrollTo("#about")
            setToggle(false)
          }}
          className={styles.btn}
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            scrollTo("#services")
            setToggle(false)
          }}
          className={styles.btn}
        >
          Services
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            scrollTo("#featured")
            setToggle(false)
          }}
          className={styles.btn}
        >
          Featured
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            scrollTo("#gallery")
            setToggle(false)
          }}
          className={styles.btn}
        >
          Gallery
        </a>
      </li>
    </ul>
  )
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={styles.bg}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <StaticImage
            src="../images/logo.svg"
            placeholder="blurred"
            alt="logo"
          />
          <button
            className={styles.toggleBtn}
            onClick={() => setToggle(!toggle)}
          >
            <GiHamburgerMenu className={styles.toggle} />
          </button>
        </div>
        {toggle ? <Links setToggle={setToggle} /> : null}
        <div className={styles.navLinks}>
          <Links />
        </div>
        <div className={styles.icons}>{Icons.map((item) => item.icon)}</div>
      </nav>
    </div>
  )
}

export default Navbar
