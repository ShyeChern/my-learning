import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'routes';
function App() {
	return (
		<Suspense fallback={<div className="loader" />}>
			<BrowserRouter>
				<Switch>
					<Switch>
						{routes.map((value, index) => {
							return <Route exact path={value.path} component={value.component} key={index} />;
						})}
						<Route render={() => <Redirect to={{ pathname: '/404' }} />} />
					</Switch>
				</Switch>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
