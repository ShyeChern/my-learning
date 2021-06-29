import React from 'react';
import Gist from 'components/Gist';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = [
	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date',
];

export default function JsDateTimeFormat() {
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

						{/* Why bothering to use Javascript datetime library when you can do it without it? */}
						<ArticleSection title="Why bothering to use Javascript datetime library when you can do it without it?">
							<p className="article-text">
								Sometimes when people want to manipulate some simple javascript datetime format,
								they simply use the javascript libraries. They dont know they can do it just with
								the native javascript.
							</p>
						</ArticleSection>

						{/* Type of DateTime Format */}
						<ArticleSection title="Type of DateTime Format">
							<p className="article-text">
								In general, there are 4 types of pattern of datetime format which are default
								format, UTC format, locale format and ISO format.
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="GeneralPattern.js" />
							<p className="article-text">
								<b>1. Default format: </b>
								Return the default javascript datetime format.
								<br />
								<b>2. Locale format: </b>
								Return the datetime which according to your timezone +00:00
								<br />
								<b>3. UTC format: </b>
								Return the datetime which scale to Coordinated Universal Time (UTC) +00:00.
								<br />
								<b>4. ISO format: </b>
								Return the datetime format which follow the ISO 8601 standard (TZD=Time Zone
								Designator )
							</p>
						</ArticleSection>

						{/* Date and Time Format */}
						<ArticleSection title="Date and Time Format">
							<p className="article-text">
								Two types of separated date and time format, default one and the locale one
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="DateAndTime.js" />
						</ArticleSection>

						{/* Modifying Locale DateTime Format */}
						<ArticleSection title="Modifying Locale DateTime Format">
							<p className="article-text">
								There is a second parameter accept by the locale format which allow you to modifying
								the datetime format. (Also for date format and time format)
							</p>
							<p className="article-highlight-text">
								<b>Syntax: </b>
								<br />
								dateObj.toLocaleDateString(<i>[locales[, options]]</i>)
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="LocaleOptions.js" />
							<p>
								More info about locale parameter{' '}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat"
								>
									here
								</a>
							</p>
							<p className="article-text">
								<b>Note: </b> <br />
								If you dont specify the some of the property in options, it wont display
							</p>
						</ArticleSection>

						{/* Date Constructor */}
						<ArticleSection title="Date Constructor">
							<p className="article-text">
								Before we manipulating and formating the datetime, we need to change the string to
								the date object. We can use the date constructor to make our date string into date
								object.
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="DateConstructor.js" />
							<p>
								More info about date constructor{' '}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date"
								>
									here
								</a>
							</p>
						</ArticleSection>

						{/* Get specific value from the date object */}
						<ArticleSection title="Get specific value from the date object">
							<p className="article-text">
								In order to get the specific value of the date such as such as the year, month, date
								and time. Just use the get method will do.
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="GetValue.js" />
							<p>
								More get method{' '}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
								>
									here
								</a>
							</p>
						</ArticleSection>

						{/* Tricks in manipulating datetime format */}
						<ArticleSection title="Tricks in manipulating datetime format">
							<p className="article-text">
								If you are not using any javascript datetime library. The tricks below could help
								you a lot.
							</p>
							<p className="article-highlight-text">
								<b>1. Get Name of Month and Day</b>
								<br />
								Since <i>getMonth()</i> and <i>getDay()</i> method return only number value, there
								are two different ways to get the name of the month or day. First is using the
								appropriate way (can choose short or long name) while second is quick hack to get
								short name of day or month.
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="GetDayMonthName.js" />
							<p className="article-highlight-text">
								<b>2. Add or substract day</b>
								<br />
								In order to add or substract number of day to the date. First convert your date
								object into milliseconds by using <i>Date.parse() </i> or <i>getTime() </i>. Both of
								these function will returns the number of milliseconds since January 1, 1970,
								00:00:00 UTC. After that add the value according to your desired value where 1
								second = 1000 milliseconds. Last, convert the milliseconds back to the date object
								using the date constructor.
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="AddDay.js" />
							<p className="article-highlight-text">
								<b>3. Comparing dates</b>
								<br />
								Same with add or substract day. Convert the date into milliseconds by using{' '}
								<i>Date.parse() </i>
								or <i>getTime() </i>. After that, compare it by using the compare operator.
							</p>
							<Gist id="4981cff6cb21818814e5b7c435d0b005" file="ComparingDate.js" />
						</ArticleSection>

						{/* Javascript datetime library */}
						<ArticleSection title="Javascript datetime library">
							<p className="article-text">
								When you need a complex manipulation on the datetime format, a javascript datetime
								library will make ease of you because the current Javascript datetime capabilities
								is not that great. There are a lot of javascript datetime library available now and
								the most popular one is moment.js. However, moment is now generally consider to be a
								legacy project in maintenance mode (
								<a href="https://momentjs.com/docs/" target="_blank" rel="noopener noreferrer">
									Why stop using moment?
								</a>
								). There are a lot more javascript library avaialble such as date-fns which is
								perform better than moment. Just feel free to use it when necessary.
							</p>
						</ArticleSection>

						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
