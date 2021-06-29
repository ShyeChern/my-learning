import { lazy } from 'react';
// Lazy loading UI component
const LandingPage = lazy(() => import('views/LandingPage/LandingPage.jsx'));
const NotFound = lazy(() => import('views/Error/NotFound.jsx'));
const Git = lazy(() => import('views/Article/Git.jsx'));
const HttpRequestMethod = lazy(() => import('views/Article/HttpRequestMethod.jsx'));
const JsArrayMethod = lazy(() => import('views/Article/JsArrayMethod.jsx'));
const JsDateTimeFormat = lazy(() => import('views/Article/JsDateTimeFormat.jsx'));
const ReactHooks = lazy(() => import('views/Article/ReactHooks.jsx'));
const SortMethod = lazy(() => import('views/Article/SortMethod.jsx'));
const SqlVsNosql = lazy(() => import('views/Article/SqlVsNosql.jsx'));
const VanillaJs = lazy(() => import('views/Article/VanillaJs.jsx'));

export const routes = [
	{
		path: '/',
		name: 'Landing Page',
		component: LandingPage,
	},
	{
		path: '/article/react-hooks',
		name: 'React Hooks',
		component: ReactHooks,
	},
	{
		path: '/article/js-datetime-format',
		name: 'Javascript DateTime Format',
		component: JsDateTimeFormat,
	},
	{
		path: '/article/http-request-method',
		name: 'Http Request Method',
		component: HttpRequestMethod,
	},
	{
		path: '/article/git',
		name: 'Git',
		component: Git,
	},
	{
		path: '/article/vanilla-js',
		name: 'Vanilla Javascript',
		component: VanillaJs,
	},
	{
		path: '/article/sql-vs-nosql',
		name: 'SQL vs NoSQL',
		component: SqlVsNosql,
	},
	{
		path: '/article/sort-method',
		name: 'Sort Method',
		component: SortMethod,
	},
	{
		path: '/article/js-array-method',
		name: 'Javascript Array Method',
		component: JsArrayMethod,
	},
	{
		path: '/404',
		name: 'Not Found',
		component: NotFound,
	},
];
