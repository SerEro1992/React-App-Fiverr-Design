import React from 'react';
import Featured from '../../components/featured/featured';
import Slide from '../../components/Slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './Home.scss';

import { cards } from '../../data.js';
import CatCard from '../../components/catCard/CatCard';

function Home() {
	return (
		<div>
			<Featured />
			<TrustedBy />
			<Slide slidesToShow={5} arrowsScroll={5}>
				{cards.map((card) => (
					<CatCard key={card.id} item={card} />
				))}
			</Slide>
		</div>
	);
}

export default Home;
