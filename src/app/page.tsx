import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Heading</h2>Main page
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At hic
          nostrum cum facere molestiae, voluptas nobis perferendis voluptate
          temporibus ex culpa dolorum doloribus odio nemo eligendi ipsa facilis
          error rem!
        </p>
      </main>
    </div>
  );
}
