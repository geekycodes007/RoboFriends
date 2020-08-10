import React from 'react';

const Scroll =(props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid lightblue' , height: '500px'}}>
          {props.children}
        </div>
		);
 };

export default Scroll;