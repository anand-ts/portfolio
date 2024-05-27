import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to My Landing Page!
      </h1>
      <p className={styles.description}>
        This is a simple Next.js landing page using TypeScript and Tailwind CSS.
      </p>
      <Link href="/about" className={styles.button}>
        Get Started
      </Link>
    </div>
  );
}
