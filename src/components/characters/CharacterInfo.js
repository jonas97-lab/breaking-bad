import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const CharacterInfo = () => {
	const { id } = useParams();

	const [todoDetails, setTodoDetails] = useState([]);
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
						<div key={todoDetail.id}>
							<img
								className='card'
								src={todoDetail.img}
								alt={todoDetail.name}
							/>
							<h1>{todoDetail.name}</h1>
							<h2>Nickname: {todoDetail.nickname}</h2>
							<h2>Birthday: {todoDetail.birthday}</h2>
							<h2>Portrayed: {todoDetail.portrayed}</h2>
							<button className='btn' type='button' onClick={handleClick}>
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
