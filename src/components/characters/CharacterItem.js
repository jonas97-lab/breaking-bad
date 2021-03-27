import React from 'react';
import { useHistory } from 'react-router-dom';

const CharacterItem = ({ character }) => {
	const { char_id: id, img, name } = character;

	let history = useHistory();

	return (
		<div className='card'>
			<div className='card-inner'>
				<div className='card-front'>
					<img src={img} alt={name} />
				</div>
				<div className='card-back'>
					<h1>{name}</h1>
					<ul></ul>
					<button
						className='btn'
						onClick={() => history.push(`/characters/${id}`)}
					>
						More Information
					</button>
				</div>
			</div>
		</div>
	);
};

export default CharacterItem;
