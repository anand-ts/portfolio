import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ShaderAnimation from '../app/shader_animation';

export default function Home() {
    return (
        <div className={styles.container}>
            <ShaderAnimation/>
            <h1 className={styles.title}>
                hey,
            </h1>
            <h1 className={styles.subtitle}>
                welcome to my space!
            </h1>
            <Link href="/about" className={styles.button}>
                enter
            </Link>
        </div>
    );
}
