import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const CharacterInfo = () => {
	const [todoDetails, setTodoDetails] = useState([]);

	const { id } = useParams();
	let history = useHistory();

	function handleClick() {
		history.push('/');
	}

	useEffect(() => {
		axios
			.get(`https://www.breakingbadapi.com/api/characters/${id}`)
			.then((result) => {
				setTodoDetails(result.data);
			});
	});

	return (
		<>
			{todoDetails ? (
				<div>
					{todoDetails.map((todoDetail) => (
						<div className='card-info' key={todoDetail.id}>
							<img
								className='card'
								src={todoDetail.img}
								alt={todoDetail.name}
							/>
							<h2>{todoDetail.name}</h2>
							<p>Nickname: {todoDetail.nickname}</p>
							<p>Birthday: {todoDetail.birthday}</p>
							<p>Portrayed: {todoDetail.portrayed}</p>
							<button
								className='btn btn__homePage'
								type='button'
								onClick={handleClick}
							>
								Homepage
							</button>
						</div>
					))}
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

export default CharacterInfo;
