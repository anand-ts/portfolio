import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                hey,
            </h1>
            <h1 className={styles.subtitle}>
                welcome to my space!
            </h1>
            {/* <p className={styles.description}>
                This is a simple Next.js landing page using TypeScript and Tailwind CSS.
            </p> */}
            <Link href="/about" className={styles.button}>
                enter
            </Link>
        </div>
    );
}
