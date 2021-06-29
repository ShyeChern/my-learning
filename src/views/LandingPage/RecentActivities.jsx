import React from 'react';

export default function RecentActivities() {
	return (
		<>
			<div className="mx-auto col-sm-12 col-md-10">
				<h2 className="title">Recent Activities</h2>
				<div className="row">
					<div className="col-md-3"></div>
					<ul className="timeline">
						<li className="timeline-item">
							<div className="separator">
								<span className="dot"></span>
								<span className="line"></span>
							</div>
							<div className="content">
								<div className="card p-2 col-md-8 col-xs-12">
									<p className="m-0 font-italic">29 Jun 2021</p>
									<p className="m-0">
										Revamp on the website with new UI design.
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-item">
							<div className="separator">
								<span className="dot"></span>
								<span className="line"></span>
							</div>
							<div className="content">
								<div className="card p-2 col-md-8 col-xs-12">
									<p className="m-0 font-italic">5 Jun 2021</p>
									<p className="m-0">
										Update <a href="/article/react-hooks">Javascript Array Method</a> and
										<a href="/article/sort-method"> Sort Method</a> article
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-item">
							<div className="separator">
								<span className="dot"></span>
								<span className="line"></span>
							</div>
							<div className="content">
								<div className="card p-2 col-md-8 col-xs-12">
									<p className="m-0 font-italic">15 May 2021</p>
									<p className="m-0">
										Update <a href="/article/react-hooks">React Hooks</a> article
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-item">
							<div className="separator">
								<span className="dot"></span>
								<span className="line"></span>
							</div>
							<div className="content">
								<div className="card p-2 col-md-8 col-xs-12">
									<p className="m-0 font-italic">29 April 2021</p>
									<p className="m-0">
										Update <a href="/article/react-hooks">Git</a> article
									</p>
								</div>
							</div>
						</li>
						<li className="timeline-item">
							<div className="separator">
								<span className="dot"></span>
								<span className="line"></span>
							</div>
							<div className="content">
								<div className="card p-2 col-md-8 col-xs-12">
									<p className="m-0 font-italic">11 April 2021</p>
									<p className="m-0">
										New article{' '}
										<a href="/article/javascript-array-method">Javascript Array Method</a>
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
