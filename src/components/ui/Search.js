import React, { useState } from 'react';

const Search = ({ getQuery }) => {
	const [text, setText] = useState('');

	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};
	
	return (
		<section className='search'>
			<form>
				<input
					type='text'
					value={text}
					className='form-control'
					placeholder='Search characters ...'
					onChange={(e) => onChange(e.target.value)}
				/>
			</form>
		</section>
	);
};

export default Search;
