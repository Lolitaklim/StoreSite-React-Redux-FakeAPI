import styles from './../Home/Home.module.css'
import bannerImg from './../../images/banner.png'

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={styles.more}>See more</button>
      </div>
      <div
        className={styles.right}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <p className={styles.discount}>
          save up <span>50%</span> off
        </p>
      </div>
    </section>
  )
}

export default Banner
