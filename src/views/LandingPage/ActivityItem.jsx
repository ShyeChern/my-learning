import React from 'react';
import PropTypes from 'prop-types';

export default function ActivityItem({ date, children }) {
	return (
		<>
			<li className="timeline-item">
				<div className="separator">
					<span className="dot"></span>
					<span className="line"></span>
				</div>
				<div className="content">
					<div className="card p-2 col-md-8 col-xs-12">
						<p className="m-0 font-italic">{date}</p>
						<p className="m-0">{children}</p>
					</div>
				</div>
			</li>
		</>
	);
}

ActivityItem.propTypes = {
	date: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};
