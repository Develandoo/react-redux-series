import React, {Component} from 'react';
import 'whatwg-fetch'; //fetch
import PostsList from './posts-list';

class Post extends Component {

	constructor (props) {
		super(props);

		this.state = {posts : []};
	}

	render () {
		return (
			<div>
				<button onClick={this.onFetchClick.bind(this)}> fetch </button>
				<PostsList posts={this.state.posts}/>
			</div>
		);
	}

	onFetchClick (event) {
		fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
			return response.json();
		}).then((posts) => {
			this.setState({posts : posts});
			console.log(this.state);
		});
	}
}

export default Post;