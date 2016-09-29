import React, { Component } from 'react';
import {render} from 'react-dom';
import Input from './components/Input';

const App = () => {
	return (
		<div>
			<Input/>
		</div>
	)
}

render(<App/>, document.getElementById('container'));