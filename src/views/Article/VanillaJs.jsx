import React from 'react';
import Gist from 'components/Gist';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = [
	'https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks',
	'https://designmodo.com/bootstrap-5/',
	'and some Stack Overflow...',
];

export default function VanillaJs() {
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

						{/* Vanilla Javascript */}
						<ArticleSection title="Vanilla Javascript">
							<p className="article-text">
								VanillaJS means using plain JavaScript without any additional libraries like jQuery.
								People use it as a joke to remind other developers that many things can be done
								nowadays without the need for additional JavaScript libraries. At the below, I will
								show some common jQuery action which can be done via plain Javascript.
							</p>
						</ArticleSection>

						{/* Display */}
						<ArticleSection title="Display">
							<p className="article-text">
								In jQeury, we use <i>show()</i> and <i>hide()</i>. Now in can be replaced by{' '}
								<i>document.querySelector.style</i>. It is not limited to the display style but
								every style.
							</p>
							<Gist id="acbea18f1892a7310b271c120d0b0e88" file="Display.html" />
						</ArticleSection>

						{/* Get Value */}
						<ArticleSection title="Get Value">
							<p className="article-text">
								Ways of getting and modifying value in jQeury and plain javascript
							</p>
							<Gist id="acbea18f1892a7310b271c120d0b0e88" file="GetValue.html" />
						</ArticleSection>

						{/* Listener */}
						<ArticleSection title="Listener">
							<p className="article-text">Sample event listener of jQuery and plain javascript</p>
							<Gist id="acbea18f1892a7310b271c120d0b0e88" file="Listener.html" />
						</ArticleSection>

						{/* Delegate */}
						<ArticleSection title="Delegate">
							<p className="article-text">For dynamic element event handling</p>
							<Gist id="acbea18f1892a7310b271c120d0b0e88" file="Delegate.html" />
						</ArticleSection>

						{/* Api Call */}
						<ArticleSection title="Api Call">
							<p className="article-text">
								One of the most important thing in software development, api call.
							</p>
							<Gist id="acbea18f1892a7310b271c120d0b0e88" file="ApiCall.js" />
							<p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"
								>
									Click for more info about the fetch
								</a>
							</p>
						</ArticleSection>

						{/* Other Info */}
						<ArticleSection title="Other Info">
							<p className="article-text">
								In Bootstrap 5, jQeury was removed and switched to Vanilla Javascript. The current
								Javascript can really achieved what jQuery can do and it has better performance
								compared with it. Moreover, JavaScript frameworks like Angular, Vue and React
								dominate the web development community nowadays, jQuery has been losing its
								popularity as most of these modern frameworks have a better performance...
							</p>
						</ArticleSection>
						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
