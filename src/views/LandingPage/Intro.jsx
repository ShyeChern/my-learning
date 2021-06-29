import React from 'react';

export default function Intro() {
	return (
		<>
			<div className="page-header page-header-small">
				<div
					className="page-header-image"
					style={{
						backgroundImage: `url(${require('assets/img/landing-bg.jpg').default})`,
					}}
				></div>
				<div className="content-center">
					<h2 className="title">Hi, Shye Chern here.</h2>
					<p className="description">
						I record some of my learning in the development journey in this website, please feel free to look into
						it.
					</p>
				</div>
			</div>
		</>
	);
}
