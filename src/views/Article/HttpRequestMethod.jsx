import React from 'react';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = ['https://www.restapitutorial.com/lessons/httpmethods.html'];

export default function HttpRequestMethod() {
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

						<ArticleSection title="Method other than GET & POST?">
							<p className="article-text">
								Nowadays, I believe most of us are familiar with the GET and POST method. But have u
								heard PUT, PATCH and DELETE method in http? All of these are the most commonly used
								http methods. POST, GET, PUT, PATCH and DELETE are correspond to Create, Read,
								Update and Delete (CRUD) operations.
							</p>
						</ArticleSection>

						{/* Post */}
						<ArticleSection title="1. POST">
							<p className="article-highlight-text">
								<b>Usage</b>: To create a new resource
							</p>

							<p className="article-text">
								The POST is used to create new resources. On successful creation, return HTTP status
								201 or returning a Location header with a link to the newly-created resource with
								the 201 HTTP status.
							</p>
						</ArticleSection>

						{/* Get */}
						<ArticleSection title="2. GET">
							<p className="article-highlight-text">
								<b>Usage</b>: To read a resource
							</p>
							<p className="article-text">
								The HTTP GET method is used to read a representation of a resource. On success, GET
								returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an
								error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).
							</p>
							<p className="article-text">
								<b>*Data should never be modified on the server side with GET request</b>
							</p>
						</ArticleSection>

						{/* Put */}
						<ArticleSection title="3. PUT">
							<p className="article-highlight-text">
								<b>Usage</b>: To update/replace a resource
							</p>
							<p className="article-text">
								PUT is use for update resource. However, PUT can also be used to create a resource
								in the case where the resource ID is not exist (when resouce ID defined by client is
								not exist). On successful update, return 200 (or 204 if not returning any content in
								the body) from a PUT. If using PUT for create, return HTTP status 201 on successful
								creation.
							</p>
							<p className="article-text">
								<b>*When use PUT request, you need to send all parameter with their value</b>
							</p>
						</ArticleSection>

						{/* Patch */}
						<ArticleSection title="4. PATCH">
							<p className="article-highlight-text">
								<b>Usage</b>: To update/modify a resource
							</p>
							<p className="article-text">
								PATCH is used for modify capabilities. The PATCH request only needs to contain the
								changes to the resource, not the complete resource. The return status code will be
								same as PUT request.
							</p>
							<p className="article-text">
								<b>
									*When use PATCH request, you only need to send the parameter that need to modify
								</b>
							</p>
						</ArticleSection>

						{/* Delete */}
						<ArticleSection title="5. DELETE">
							<p className="article-highlight-text">
								<b>Usage</b>: To update a resource
							</p>
							<p className="article-text">
								It is used to delete a resource identified by a URI. On successful deletion, return
								HTTP status 200 (OK) along with a response body or return HTTP status 204 (NO
								CONTENT) with no response body.
							</p>
						</ArticleSection>
						
						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
