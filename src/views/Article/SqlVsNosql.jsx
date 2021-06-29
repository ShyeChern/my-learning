import React from 'react';
import Gist from 'components/Gist';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { Table } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = [
	'https://www.mongodb.com/nosql-explained/nosql-vs-sql',
	'https://www.mongodb.com/scale/nosql-vs-relational-databases',
];

export default function SqlVsNoSql() {
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

						{/* SQL and NoSQL */}
						<ArticleSection title="SQL and NoSQL">
							<p className="article-text">
								SQL database also known as relational database, it have a table-based data
								structure, with a strict, predefined schema required MySQL. NoSQL database or known
								as non-relational database, can be document based, graph databases, key-value pairs,
								or wide-column stores. NoSQL databases do not require any predefined schema,
								allowing you to work more freely with &#34;unstructured data&#34;. Some of the
								sample of SQL databases include MySQL, Oracle, PostgreSQL, and Microsoft SQL Server
								while NoSQL database examples include MongoDB, Cassandra, HBase and CouchDB.
							</p>
						</ArticleSection>

						{/* Diffrences between SQL database and NoSQL database */}
						<ArticleSection title="Diffrences between SQL database and NoSQL database">
							<Table className="article-text" striped bordered hover responsive>
								<thead style={{ textAlign: 'center' }}>
									<tr>
										<th></th>
										<th>SQL</th>
										<th>NoSQL</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<b>Data Storage Model</b>
										</td>
										<td>
											Tabular based design, relational database. Tables with fixed pre-defined
											columns and datatype, all the rows need to follows the columns datatype
											standard
										</td>
										<td>
											Document based design, non-relational database. Collections with dynamic JSON
											type documents, does not have a fixed column or datatype required
										</td>
									</tr>
									<tr>
										<td>
											<b>Flexibility</b>
										</td>
										<td>
											Detailed database model is required before database creation. Not easy to
											scale with their rigid schema restrictions
										</td>
										<td>
											No detailed modeling is required. Can easily scaled with their dynamic schema
											nature
										</td>
									</tr>
									<tr>
										<td>
											<b>Standardization</b>
										</td>
										<td>SQL is standard language</td>
										<td>Lack of a standard query language</td>
									</tr>
									<tr>
										<td>
											<b>Scalability</b>
										</td>
										<td>
											Can only buy another bigger server to enhance your database. (Vertical
											scalability)
										</td>
										<td>
											Can add another server to enhance your database. (Horizontal scalability)
										</td>
									</tr>
									<tr>
										<td>
											<b>Structure</b>
										</td>
										<td>ACID (Atomicity, Consistency, Isolation, and Durability) </td>
										<td>Base (Basically Available, Soft State, Eventually Consistent)</td>
									</tr>
								</tbody>
							</Table>
						</ArticleSection>

						{/* Sample CRUD of MySQL Database (SQL) and MongoDB (NoSQL) */}
						<ArticleSection title="Sample CRUD of MySQL Database (SQL) and MongoDB (NoSQL)">
							<p className="article-text">
								The following example shows the sample CRUD (Create, Read, Update, Delete) using
								MySQL and MongoDB (with mongoose). Note that all the programming language used is
								javascript.
							</p>
							<center>
								<h4>1. Create/Insert</h4>
								<Gist id="0860aa298f0f19d4129072756673b25d" file="Create.js" />
								<h4>2. Read/Select</h4>
								<Gist id="0860aa298f0f19d4129072756673b25d" file="Read.js" />
								<h4>3. Update</h4>
								<Gist id="0860aa298f0f19d4129072756673b25d" file="Update.js" />
								<h4>4. Delete</h4>
								<Gist id="0860aa298f0f19d4129072756673b25d" file="Delete.js" />
								<h4>5. Transaction</h4>
								<Gist id="0860aa298f0f19d4129072756673b25d" file="Transaction.js" />
							</center>
						</ArticleSection>

						{/* Knex.js  */}
						<ArticleSection title="Knex.js">
							<p className="article-text">
								Knex.js is a SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle,
								and Amazon Redshift. We can use this package to build reusable SQL transactions. By
								using knex.js in a proper way, we can reduce the security vulnerabilities and write a
								cleaner code. For more information, please click{' '}
								<a href="http://knexjs.org/">here</a>
							</p>
						</ArticleSection>

						{/* Conclusion */}
						<ArticleSection title="Conclusion">
							<p className="article-text">
								The samples above just a very little part of SQL and NoSQL. There are much more of
								thing that can be achieve in both of these sql. In conclusion, there are nothing
								good or bad in both of the sql and nosql. It just which one is more suitable for
								you. Both of these database have their own benefit.
							</p>
						</ArticleSection>
						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
