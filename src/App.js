import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import CharacterInfo from './components/characters/CharacterInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters/?name=${query}`
			);
			console.log(result.data);
			setCharacters(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, [query]);

	return (
		<div className='container'>
			<Router>
				<Header />
				<Search getQuery={(q) => setQuery(q)} />
				<Switch>
					<Route exact path='/'>
						<CharacterGrid isLoading={isLoading} characters={characters} />
					</Route>
					<Route path='/characters/:id'>
						<CharacterInfo />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
