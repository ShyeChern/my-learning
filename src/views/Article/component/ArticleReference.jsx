import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleReference({ references }) {
	return (
		<>
			<div className="d-flex justify-content-center flex-wrap">
				<div className="text-left">
					<h6>Reference:</h6>
					<ol>
						{references.map((value, index) => {
							return <li key={index}>{value}</li>;
						})}
					</ol>
				</div>
			</div>
		</>
	);
}

ArticleReference.propTypes = {
	references: PropTypes.array,
};
