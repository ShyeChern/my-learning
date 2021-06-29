import React from 'react';
import Gist from 'components/Gist';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = [
	'https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_sorts',
	'https://www.javascripttutorial.net/javascript-array-sort/',
	'https://stackoverflow.com/a/979325/10068816',
	'and some Stack Overflow...',
];

export default function SortMethod() {
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

						{/* Sort Method */}
						<ArticleSection title="Sort method">
							<p className="article-text">
								Sorting is frequently used when we developed the project. Nowadays, sort method have
								been provided in most of the programming language. But do we really understand how
								it works? Although the efficiency of the sort cannot perform better than{' '}
								<b>O(n log n)</b> but it is considered as stable. At the below, I will show and
								explain some of the concept of in javascipt.
							</p>
						</ArticleSection>

						{/* Concept */}
						<ArticleSection title="Concept">
							<p className="article-text">
								Sort data always comes in array. The sort function will compare two data of the
								array from index to index, batch by batch. If the first element is greater than
								second element, it will return result &#62; 0 (normally use 1), else it will return
								result &#60; 0 (normally use -1). If it is same, it will return result = 0. After
								that, if the return value is greater than 0, it will move the first element to a
								higher index, which mean the second element will show first and vice versa.{' '}
								<b>
									In short, it will compare the element two by two, the greater value (&#62;0) will
									move backward, lower value (&#60;0) move forward, same value (=0) remain
									unchanged.
								</b>{' '}
								Let&#39;s see the example below for a better understanding.
							</p>
						</ArticleSection>

						{/* Sort Number */}
						<ArticleSection title="Sort Number">
							<p className="article-text">
								When we sort the number, we can simply use - to substract the first element to
								second element to check the value whether it is greater or lower as it will return
								the desired result (&#62;0, &#60;0, =0).
							</p>
							<Gist id="cb3a20edaee3c9ac4f41e3cd7419bf09" file="SortNumber.js" />
						</ArticleSection>

						{/* Sort String */}
						<ArticleSection title="Sort String">
							<p className="article-text">
								To compare the string case-insensitively, we have to change the string to lowercase
								or uppercase. Since, the value is not a number anymore, we cannot simply substract
								and return the value. We have to compare the string value and check if it is
								greater, lower or equal.
							</p>
							<Gist id="cb3a20edaee3c9ac4f41e3cd7419bf09" file="SortString.js" />
						</ArticleSection>

						{/* Reusable Sort Function */}
						<ArticleSection title="Reusable Sort Function">
							<p className="article-text">
								Reusable sort function found at stackoverflow in javascript. The sortBy function
								receive 2 required parameters and 1 optional parameter. First, we have to specify
								which field we need to sort, and follow by ascending (false) or descending order
								(true). At last, we can specify how we want to modify the value such as parseFloat,
								toLowerCase.
							</p>
							<Gist id="cb3a20edaee3c9ac4f41e3cd7419bf09" file="ReusableSort.js" />
						</ArticleSection>
						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
