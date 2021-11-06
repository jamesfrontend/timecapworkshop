import type { NextPage } from 'next';
import { PageSetup } from '../src/global';
import LandingView from '../src/views/landing';

const Home: NextPage = () => {
	return (
		<PageSetup>
			<LandingView />
		</PageSetup>
	);
};

export default Home;
