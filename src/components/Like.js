import React, { Component, useState } from 'react';
import { Fa500Px, FaHeart, FaRegHeart } from 'react-icons/fa';
import "./style.css";

class Like extends Component {
state = { liked: false };
toggle = () => {
	let localLiked = this.state.liked;

	localLiked = !localLiked;
	this.setState({ liked: localLiked });
};
render() {
	return (
	<div className="container">
		<center>
		<div
			className="container"
			style={{ width: "40%" }}
			onClick={() => this.toggle()}
		>
			{this.state.liked === false ? (
			<FaHeart className='white'
			style={{
				position: 'absolute',
				right: '2px',
			  }}> </FaHeart>
			) : (
            <FaHeart className='red'
			style={{
				position: 'absolute',
				right: '2px',
			  }}> </FaHeart>
            )}
		</div>
		</center>
	</div>
	);
}
}

export default Like;
