import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Active Job Staus</title>
				<meta name='description' content='Active job status app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}></main>
		</div>
	);
}
