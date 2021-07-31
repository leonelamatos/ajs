import Head from 'next/head';
import Image from 'next/image';
import Header from '../layouts/header';
import Sidebard from '../layouts/Sidebard';

export default function Home() {
	return (
		<div className='test'>
			<Head>
				<title>Active Job Staus</title>
				<meta name='description' content='Active job status app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<div className='row'>


			<Sidebard />
			<main>
				<h1>Main content</h1>
			</main>
			</div>
		</div>
	);
}
