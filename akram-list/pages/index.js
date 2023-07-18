import Link from "next/link";
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div id="home-page">
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/list" className={styles.btn}>See all List</Link>
    </div>
  )
}
