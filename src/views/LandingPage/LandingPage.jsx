import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Intro from 'views/LandingPage/Intro';
import Articles from 'views/LandingPage/Articles';
import RecentActivities from 'views/LandingPage/RecentActivities';
import AdSense from 'components/AdSense';

const totalPage = 3;
export default function LandingPage() {
	const [tab, setTab] = useState(0);

	const switchTab = (e, tab) => {
		e.preventDefault();
		setTab(tab);
	};

	const AllNavItem = () => {
		let links = [];
		for (let i = 0; i < totalPage; i++) {
			links.push(
				<NavItem key={i}>
					<NavLink className={tab === i ? 'active' : ''} href="#" onClick={(e) => switchTab(e, i)}>
						{i + 1}
					</NavLink>
				</NavItem>
			);
		}
		return links;
	};

	const AllTabPane = () => {
		let tabs = [];
		for (let i = 0; i < totalPage; i++) {
			tabs.push(
				<TabPane tabId={`tab${i}`} key={i}>
					<Articles page={i + 1} />
				</TabPane>
			);
		}
		return tabs;
	};

	return (
		<div>
			<Intro />
			<div className="landing-content mx-auto landing-page">
				<div className="card shadow">
					<div className="card-body">
						<div className="section-about-us">
							<div className="mx-auto col-sm-12 col-md-10">
								<h2 className="title">My Articles</h2>
								<div className="card">
									<Nav
										className="nav-tabs-neutral"
										data-background-color="blue"
										role="tablist"
										tabs
									>
										<AllNavItem />
									</Nav>
									<div className="card-body">
										<TabContent className="text-center" activeTab={'tab' + tab}>
											<AllTabPane />
										</TabContent>
									</div>
								</div>
							</div>
							<RecentActivities />
						</div>
					</div>
				</div>

				<AdSense />
			</div>
		</div>
	);
}
