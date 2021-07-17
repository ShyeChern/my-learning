import React from 'react';
import Gist from 'components/Gist';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = [
	'https://reactjs.org/docs/hooks-reference.html',
	'https://webbrainsmedia.com/blogs/react-hooks-explained-useEffect-hook',
	'and some Stack Overflow...',
];

export default function ReactHooks() {
	const { pathname } = useLocation();
	const article = articles.find((value) => pathname === value.path);
	return (
		<>
			<div className="profile-page article-bg">
				<Link to="/">
					<button className="btn btn-primary text-white ml-5">
						<h3 className="mb-0">Back to Home</h3>
					</button>
				</Link>
				<div className="card bg-transparent">
					<ArticleHeader article={article} articles={articles} />
					<div className="card-body article-content">
						<p className="article-date">Last modified: {article.lastModified}</p>

						{/* What is React Hooks */}
						<ArticleSection title="What is React Hooks?">
							<p className="article-text">
								Hooks is a new feature introduce by React in 2018. With Hooks, we can easily reuse
								the state logic easily. It breaks down the classes into smaller function and
								increase the code reusability. The code below shows the original class pattern and
								the function pattern (Hooks cannot use in the class pattern).
							</p>
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="ClassPattern.js" />
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="FunctionPattern.js" />
							<p className="article-text">
								Since the coding pattern is changed from class pattern to function pattern, the
								React Component Lifecycle method can no longer be used. But there are several type
								of hooks is used to replace it.
							</p>
						</ArticleSection>

						{/* useState */}
						<ArticleSection title="1. useState">
							<p className="article-text">
								This hooks is use to get a value from variable or set a value to variable. It
								replace the setState() in Class Component.
							</p>
							<p className="article-highlight-text">
								<b>Syntax: </b> <br />
								const [<i>value, setValue</i>] = useState(<i>initialValue</i>);
							</p>
							<p className="article-highlight-text">
								<b>Explanation: </b> <br />
								<i>value</i> is a variable while <i>setValue</i> is a setter function. Simply call{' '}
								<i>value</i> variable to get the value of it while <i>setValue(newValue)</i>&nbsp;
								to set a new value into the variable. useState(<i>initialValue</i>) is the initial
								value at the first render. useState can store any type of variable such as number,
								string, boolean, array, object...
							</p>
						</ArticleSection>

						{/* useEffect */}
						<ArticleSection title="2. useEffect">
							<p className="article-text">
								This hooks will run on everytime screen is render. It replace componentDidMount,
								componentDidUpate and componentWillUnmount in Class Component
							</p>
							<p className="article-highlight-text">
								<b>Syntax: </b>
								<br /> useEffect( <i>function</i> [,<i>variable</i>] )
							</p>
							<p className="article-highlight-text">
								<b>Explanation: </b> <br />
								<i>function</i> will run everytime screen is render. Return function can be set to
								do the cleanup before component unmount. When <i>variable</i> is set, the useEffect
								function will only run when the <i>variable</i> value is changed. A clearer
								explanation with code is attached to make easier understanding.
							</p>
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseEffect.js" />
						</ArticleSection>

						{/* createContext, useContext */}
						<ArticleSection title="3. createContext, useContext">
							<p className="article-text">
								useContext allow us to pass variable without using props as long as the child
								component is still inside the parent component. It make ease of passing data from
								parent to child in the component. This hook can combine with useReducer to perform
								logic to update the variable from child component to parent component.
							</p>
							<p className="article-highlight-text">
								<b>Syntax: </b>
								<br />
								const <i>myContext</i> = createContext(<i>defaultValue</i>);
								<br />
								const <i>value</i> = useContext(<i>MyContext</i>);
							</p>
							<p className="article-highlight-text">
								<b>Explanation: </b> <br />
								We must create the context before using it. The defaultValue will only used when
								component did not find the matching provider (parent) in the tree. When we want to
								pass data from parent to child, myContext.Provider tag is used as parent and the
								value prop is used to pass the data. While useContext(myContext) is used to get the
								data of parent from any of the child component. An example code is attached to make
								easier understanding.
							</p>
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="CreateContextUseContext.js" />
						</ArticleSection>

						{/* useReducer */}
						<ArticleSection title="4. useReducer">
							<p className="article-text">
								An advanced version of useState. It is used when we need to execute a complex logic
								or state action. This hook can combine with useContext to perform logic to update
								the variable from child component to parent component.
							</p>
							<p className="article-highlight-text">
								<b>Syntax: </b>
								<br />
								const [<i>state, dispatch</i>] = useReducer(
								<i>reducerFunction, initialState, initialAction</i>);
							</p>
							<p className="article-highlight-text">
								<b>Explanation: </b> <br />
								Work almost same like useState. When <i>dispatch</i> is called,{' '}
								<i>reducerFunction</i> will received 2 parameter and execute logic to save as new
								state (previousState, action) =&#62; nextState. All the value passed in dispatch
								will received inside the action parameter. After the logic execute, the result will
								save as the current state.
							</p>
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseReducer.js" />
						</ArticleSection>

						{/* useMemo, useCallback */}
						<ArticleSection title="5. useMemo, useCallback">
							<p className="article-text">
								Hooks that help to store a callback or result of a callback. The value will not
								change unless the value in array of dependencies is changed. By using these hooks,
								it avoid re-render of the callback everytime. It is recommend to use these hooks if
								there are large data or computation in the function that depend on certain value.
								For example, useMemo use to store the calculated result from backend while
								useCallback use to perform some task like export csv.
							</p>
							<p className="article-highlight-text">
								<b>Syntax: </b>
								<br />
								const <i>memoizedValue</i> = useMemo(() =&#62;{' '}
								<i>computeExpensiveValue(a, b), [a, b]</i>);
								<br />
								const <i>memoizedCallback </i> = useCallback(() =&#62;{' '}
								<i>computeExpensiveValue(a, b), [a, b]</i>);
							</p>
							<p className="article-highlight-text">
								<b>Explanation: </b> <br />
								useMemo store value while useCallback store callback. Look at the example.
							</p>
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseMemoUseCallback.js" />
						</ArticleSection>

						{/* useRef */}
						<ArticleSection title="6. useRef">
							<p className="article-text">
								useRef helps to get an object instance by using the element ref attribute. It can be
								use to make certain action such as focus the element or modify the value inside the
								reference element. Since useRef will not cause any re-render in React component,
								sometime it is used to store value that does not need to change too often or value
								that changed frequently but does not require re-render.
							</p>
							<p className="article-highlight-text">
								<b>Syntax: </b>
								<br />
								const <i>refContainer</i> = useRef(<i>initialValue</i>);
							</p>
							<p className="article-highlight-text">
								<b>Explanation: </b> <br />
								Just look at the example below
							</p>
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseRef.js" />
						</ArticleSection>

						{/* Custom Hooks */}
						<ArticleSection title="7. Custom Hooks">
							<p className="article-text">
								React also allow us to create a our own hook. By creating our own hooks, we can
								extract our component logic into reusable function. Note that the custom hooks must
								start with &#34;use&#34; to ensure it follows the rules of Hooks
							</p>
							<p className="article-highlight-text">
								<b>Explanation: </b> <br />
								The sample below shows a custom hooks that update the noti object on a button click.
							</p>
							<Gist id="b7b49f4939da8f9d76443a1be49853d4" file="CustomHooks.js" />
						</ArticleSection>

						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
