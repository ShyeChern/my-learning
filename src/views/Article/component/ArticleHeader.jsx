import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleHeader({ article, articles }) {
	const currentIndex = articles.indexOf(article);
	const navigate = (navigate) => {
		let toIndex = currentIndex + navigate;
		if (toIndex >= 0 && toIndex < articles.length) {
			window.location.pathname = articles[toIndex].path;
		}
	};

	return (
		<>
			<div className="card-header p-3 bg-info article-header">
				<div className="d-flex justify-content-around align-items-center text-white">
					<button
						className="btn btn-link text-white"
						onClick={() => navigate(-1)}
						disabled={currentIndex === 0}
					>
						<i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
					</button>
					<h2 className="px-2 card-title mb-0">{article.title}</h2>
					<button
						className="btn btn-link text-white"
						onClick={() => navigate(1)}
						disabled={currentIndex === articles.length - 1}
					>
						<i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		</>
	);
}

ArticleHeader.propTypes = {
	article: PropTypes.object,
	articles: PropTypes.array,
};
