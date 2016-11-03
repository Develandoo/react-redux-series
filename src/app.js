import React, { Component } from 'react';
import {render} from 'react-dom';
import Post from './components/post';

const App = () => {
	return (
		<div>
			<Post/>
		</div>
	)
}

render(<App/>, document.getElementById('container'));