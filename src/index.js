import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from 'react-error-boundary';
import WentWrong from 'views/Error/WentWrong.jsx';
// css assets
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
	process.env.NODE_ENV === 'production' ? (
		<ErrorBoundary FallbackComponent={WentWrong}>
			<App />
		</ErrorBoundary>
	) : (
		<React.StrictMode>
			<ErrorBoundary FallbackComponent={WentWrong}>
				<App />
			</ErrorBoundary>
		</React.StrictMode>
	),
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
