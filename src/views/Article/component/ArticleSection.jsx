import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleSection({ title, children }) {
	return (
		<>
			<div className="article-section">
				<h3 className="text-center mb-2">{title}</h3>
				{children}
			</div>
			<hr />
		</>
	);
}

ArticleSection.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
};
