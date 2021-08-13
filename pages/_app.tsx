import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { PageSetup } from '../src/global';

function MyApp({ Component, pageProps }: AppProps) {
	const component = <Component {...pageProps} />;
	return (
		<>
			<Head>
				<title>Time Cap Workshop</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<>
				<PageSetup>{component}</PageSetup>
			</>
		</>
	);
}
export default MyApp;
