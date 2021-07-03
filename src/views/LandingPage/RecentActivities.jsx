import React from 'react';
import ActivityItem from 'views/LandingPage/ActivityItem';

export default function RecentActivities() {
	return (
		<>
			<div className="mx-auto col-sm-12 col-md-10">
				<h2 className="title">Recent Activities</h2>
				<div className="row">
					<div className="col-md-3"></div>
					<ul className="timeline">{activities.slice(0, 5).map((value) => value)}</ul>
				</div>
			</div>
		</>
	);
}

const activities = [
	<ActivityItem date="03 July 2021" key={Math.random()}>
		Update <a href="/article/sort-method">Sort Method</a> article
	</ActivityItem>,
	<ActivityItem date="29 Jun 2021" key={Math.random()}>
		Revamp on the website with new UI design.
	</ActivityItem>,
	<ActivityItem date="5 Jun 2021" key={Math.random()}>
		Update{' '}
		<a href="/article/react-hooks" key={Math.random()}>
			Javascript Array Method
		</a>{' '}
		and
		<a href="/article/sort-method"> Sort Method</a> article
	</ActivityItem>,
	<ActivityItem date="15 May 2021" key={Math.random()}>
		Update <a href="/article/react-hooks">React Hooks</a> article
	</ActivityItem>,
	<ActivityItem date="29 April 2021" key={Math.random()}>
		Update <a href="/article/react-hooks">Git</a> article
	</ActivityItem>,
];
