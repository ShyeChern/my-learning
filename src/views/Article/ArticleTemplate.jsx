import React from 'react';
import Gist from 'components/Gist';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = [];

export default function Article() {
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
						<ArticleSection title="Sort method">
							<p className="article-highlight-text">
								<b>git config --global user.name [name]</b> <br />
								<b>git config --global user.email [email]</b>
							</p>
							<p className="article-text">
								Sorting is frequently used when we developed the project. Nowadays, sort method have
								been provided in most of the programming language. But do we really understand how
								it works? Although the efficiency of the sort cannot perform better than{' '}
								<b>O(n log n)</b> but it is considered as stable. At the below, I will show and
								explain some of the concept of in javascipt.
							</p>
							<Gist id="cb3a20edaee3c9ac4f41e3cd7419bf09" file="SortNumber.js" />
						</ArticleSection>
						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
