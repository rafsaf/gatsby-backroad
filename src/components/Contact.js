import React from "react"
import * as styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.bg}>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3>Want Latest Tour Info And Updates?</h3>
          <p>Sign up for newsletter and stay up to date</p>
        </div>
        <form className={styles.contactForm}>
          <input placeholder="Your email" className={styles.formControl} />
          <button className={styles.btn} type="submit">
            submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
