import React from 'react';
import Gist from 'components/Gist';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = [
	'https://morioh.com/p/3ba421a8a63d?f=5c21fb01c16e2556b555ab32',
	'and some Stack Overflow...',
];

export default function JsArrayMethod() {
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

						{/* Javascript Array Method */}
						<ArticleSection title="Javascript Array Method">
							<p className="article-text">
								There are a lot of useful array manipulating method in javascript to get our desired
								output. Now, I will list some of the array method which I think that is useful and
								can be used in some situation. It is separate into two section which are array
								method to find result and array method to manipulate array.
							</p>
						</ArticleSection>

						{/* Find Result */}
						<ArticleSection title="Find Result">
							<p className="article-text">
								Find result section contains the array method which return a single value output.
							</p>

							{/* Array.reduce() */}
							<center>
								<h4>1. Array.reduce()</h4>
								<p className="article-text">
									Reduce method apply a function or logic to array element and result into a single
									output. The most common usage of reduce method is adding all the array element or
									concat string into one.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="Reduce.js" />
							</center>

							{/* Array.includes(), Array.some(), Array.every() */}
							<center>
								<h4>2. Array.includes(), Array.some(), Array.every()</h4>
								<p className="article-text">
									For Includes method, it only works for primitive type value and check whether the
									given value exist in the array. Some and Every method check both primitive or
									non-primitive value whether the element in array pass a given condition. The
									difference is Some method return true if at least one element pass the condition
									while Every method return true if and only if all the element pass the condition.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="Check.js" />
							</center>

							{/* Array.find(), Array.findIndex(), Array.IndexOf() */}
							<center>
								<h4>3. Array.find(), Array.findIndex(), Array.IndexOf()</h4>
								<p className="article-text">
									Find method return the first matching element and undefined if nothing is matched.
									While FindIndex and IndexOf method return the first matching element&#39;s index
									of the given value. Return -1 if there is no matching element. IndexOf only works
									in primitive type value while FindIndex can use for both primitive type or
									non-primitive type value (e.g. object)
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="Find.js" />
							</center>
						</ArticleSection>

						{/* Manipulate Array */}
						<ArticleSection title="Manipulate Array">
							<p className="article-text">
								Manipulate array section contains the array method which return modified array as
								the output. However, some of the array method will mutate the original array. Please
								be careful when you use it. Ways to not mutate original array is provided in the
								next section.
							</p>

							{/* Array.filter() */}
							<center>
								<h4>1. Array.filter()</h4>
								<p className="article-text">
									Return an array of element that pass the given condition
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="Filter.js" />
							</center>

							{/* Array.sort() */}
							<center>
								<h4>2. Array.sort()</h4>
								<p className="article-text">
									Sort method can sort the element inside the array. More about array sort method
									can be see in another article <a href="/article/sort-method">here</a>. Note that
									splice method mutate the original array
								</p>
							</center>

							{/* Array.map() */}
							<center>
								<h4>3. Array.map()</h4>
								<p className="article-text">
									Map method creates a new array with the function or logic apply to array element.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="Map.js" />
							</center>

							{/* Array.splice(start, [removeCount], [item1], [item2]....) */}
							<center>
								<h4>4. Array.splice(start, [removeCount], [item1], [item2]....)</h4>
								<p className="article-text">
									Splice method is used to removing, replacing or adding new element start from a
									specific index (start). If removeCount parameter is ignore, all the element from
									start to end will be removed. If removeCount is 0, there will be no element
									removed, we can add new element into the given index (start). Note that Splice
									method does not return a new copy of array, it directs modify the array instead.
									Note that splice method mutate the original array.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="Splice.js" />
							</center>

							{/* Array.slice(start, [end]) */}
							<center>
								<h4>5. Array.slice(start, [end])</h4>
								<p className="article-text">
									Slice method return a new array by given the start to end index. If end parameter
									is ignored, it will return new array from start to the end of array. Note that end
									index does not include in the returning array.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="Slice.js" />
							</center>
						</ArticleSection>

						{/* Others */}
						<ArticleSection title="Others">
							<p className="article-text">
								This section contains some useful tricks and ways to modify an array.
							</p>

							{/* Copy an Array */}
							<center>
								<h4>1. Copy an Array</h4>
								<p className="article-text">
									Spread operator and slice method can be used to copy array without mutate the
									original array.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="CopyArray.js" />
							</center>

							{/* Remove Duplicates */}
							<center>
								<h4>2. Remove Duplicates</h4>
								<p className="article-text">
									Set constructor create Set objects that store unique values. Then, we can use
									spread operator to transform the Set object into new array to achieve the result.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="RemoveDuplicates.js" />
							</center>

							{/* Remove Duplicates (Array of Object) */}
							<center>
								<h4>3. Remove Duplicates (Array of Object)</h4>
								<p className="article-text">
									There are two ways provided to filter array of object. First one is using the
									combination of filter method and findIndex method. By using this method, we can
									modify the condition according our desired output (such as{' '}
									<i>v.name === value.name && v.age === value.age</i>). However this method could be
									a limitation when working on large array because of its O(n<sup>2</sup>)
									complexity. The second method is using Map constructor. Map constructor requires
									key (unique) and values. So, we can use one of the object property (to be unique)
									as key while whole object as the value. Map constructor will only keep last
									occurrence of the duplicate key and value pairs. Then, we use spread operator and
									values() function to transform the Map object values into new array to achive the
									result.
								</p>
								<Gist id="1efcb96bcf8777c474f58450bfe7d36f" file="RemoveDuplicatesAOB.js" />
							</center>
						</ArticleSection>

						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
