// 1. import React
import React from 'react';

// 3. define component
function JokesContainer(props) {
	return (
		<section>
			<h3>All the jokes:</h3>
			<p>{props.joke}</p>
		</section>
	);
}

// 2. export default JokesContainer
export default JokesContainer;
