import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ isLoading, characters }) => {
	return (
		<div>
			{isLoading ? (
				<h1>Loading ... </h1>
			) : (
				<section className='cards'>
					{characters &&
						characters.map((character) => (
							<CharacterItem key={character.chard_id} character={character} />
						))}
				</section>
			)}
		</div>
	);
};

export default CharacterGrid;
