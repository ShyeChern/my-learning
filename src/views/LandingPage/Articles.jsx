import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { articles } from 'utils/articles';

const itemPerPage = 3;

export default function Articles({ page }) {
	const startIndex = itemPerPage * (page - 1);
	// do not mutate original array
	const items = [...articles].reverse().slice(startIndex, startIndex + itemPerPage);

	return (
		<>
			<div className="row">
				{items.map((value, index) => {
					return (
						<div className="article-container col-md-4" key={index}>
							<Link to={value.path} className="article">
								<div className="image-container">
									<img
										src={value.image}
										className="img-fluid"
										alt={value.title}
										style={{ height: 200 }}
									/>
									<div className="article-description-container">
										<div className="article-description">
											<b>Written on</b>
											<br />
											<i>{value.createdDate}</i>
										</div>
									</div>
								</div>
								<h5>{value.title}</h5>
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);
}

Articles.propTypes = {
	page: PropTypes.number.isRequired,
};
