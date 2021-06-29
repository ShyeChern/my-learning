import React from 'react';
import ArticleHeader from 'views/Article/component/ArticleHeader';
import ArticleSection from 'views/Article/component/ArticleSection';
import ArticleReference from 'views/Article/component/ArticleReference';
import { useLocation } from 'react-router-dom';
import { articles } from 'utils/articles';
import { Link } from 'react-router-dom';

const references = ['https://en.wikipedia.org/wiki/Git'];

export default function Git() {
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

						{/* What is git? */}
						<ArticleSection title="What is git?">
							<p className="article-text">
								Git is a distributed version-control system for tracking changes in source code
								during software development. It is designed for coordinating work among programmers,
								but it can be used to track changes in any set of files. Its goals include speed,
								data integrity, and support for distributed, non-linear workflows.
							</p>
						</ArticleSection>

						{/* Git Basic Command */}
						<ArticleSection title="Git Basic Command">
							<p className="article-highlight-text">
								<b>git config --global user.name [name]</b> <br />
								<b>git config --global user.email [email]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Define the username and email of the user for all the git command. Only require for
								the first time.
							</p>
							<p className="article-highlight-text">
								<b>git remote add [name] [url]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Add a new connection to a remote repository. After adding a remote, you can use
								[name] as a shortcut for [url] in other commands. For example:{' '}
								<b>
									<i>git remote add origin [url]</i>
								</b>{' '}
								and follow by
								<b>
									<i> git pull origin master</i>
								</b>
							</p>
							<p className="article-highlight-text">
								<b>git add [directory]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Stage all changes in [directory] for the next commit. Replace{' '}
								<b>
									<i>[directory]</i>
								</b>{' '}
								with a{' '}
								<b>
									<i>[filename]</i>
								</b>{' '}
								to change a specific file. If period is used (
								<b>
									<i>git add .</i>
								</b>
								) It will stage all changes in the current directory
							</p>
							<p className="article-highlight-text">
								<b>git commit -m &#34;[message]&#34;</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Commit the staged changes with{' '}
								<b>
									<i>[message]</i>
								</b>{' '}
								as the commit message.
							</p>
							<p className="article-highlight-text">
								<b>git push [remote] [branch]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Push the commit into live and merge with the remote branch. For example,
								<b>
									<i>git push origin master</i>
								</b>{' '}
								will push all your changes in local repository and merge with remote master branch.
							</p>
							<p className="article-highlight-text">
								<b>git pull [remote] [branch]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Fetch the specified remote update and immediately merge it into the local copy. For
								example,
								<b>
									<i> git pull origin master</i>
								</b>{' '}
								will update your local repository with the latest one in the remote master branch.
							</p>

							<p className="article-highlight-text">
								<b>git tag [tagname]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Mark the current code as a reference in git history. Unlike branch, once the tag
								is create, it will not change anymore. Thus, the most common usage of tag is use for
								versioning. Pushing the tag into remote is same like normal flow, after{' '}
								<b>
									<i>git tag v1.0.1</i>
								</b>{' '}
								just continue with{' '}
								<b>
									<i>git push origin v1.0.1</i>
								</b>
								.
							</p>
							<p className="article-text">
								*If you are running{' '}
								<b>
									<i>npm version [version]</i>
								</b>{' '}
								in a git repo, it will also create a tag automatically.
							</p>
						</ArticleSection>

						<ArticleSection title="Git Advanced Command">
							<p className="article-highlight-text">
								<b>git branch </b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								List down all the branch in local repository. User with{' '}
								<b>
									<i>git branch -r</i>
								</b>{' '}
								to view list of branch in remote. There are more branch argument availale....
							</p>

							<p className="article-highlight-text">
								<b>git checkout [branch/commit]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Switched to another branch or commit. If use with{' '}
								<b>
									<i>git checkout -b [branch]</i>
								</b>{' '}
								will create the branch if it is not exist. If branch is not in local yet (in remote)
								use git pull/fetch to pull down the branch then only checkout to switch to it.
							</p>

							<p className="article-highlight-text">
								<b>git merge [branch]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Merge branch into current branch. If you current pointing at the master branch,
								<b>
									<i> git merge [branch]</i>
								</b>{' '}
								will merge the{' '}
								<b>
									<i>[branch]</i>
								</b>{' '}
								into master branch.
							</p>

							<p className="article-highlight-text">
								<b>
									git update-index --assume-unchanged [path-to-file]
									<br />
									git update-index --no-assume-unchanged [path-to-file]
								</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Untrack the file changes for temporary with{' '}
								<b>
									<i>--assumes-unchanged</i>
								</b>
								, and then continue update the changes with{' '}
								<b>
									<i>--no--assumes-unchanged</i>
								</b>
								. Can be use to make some changes to file locally without affecting the source.
							</p>

							<p className="article-highlight-text">
								<b>git stash</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Save all your changes (staged and unstaged) for later use and then revert them from
								your working directory. Use when you want to record your local changes and go back
								to previous commit. Oftenly use to make some experimental changes.
							</p>

							<p className="article-highlight-text">
								<b>git stash pop</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								Re-apply the previous stashed changes to your current working directory.
							</p>

							<p className="article-highlight-text">
								<b>git reset --[state] [commit]</b>
							</p>
							<p className="article-text">
								<b>Explanation: </b>
								There are three states available which are soft, mixed (default) and hard. Soft
								uncommit your changes, mixed uncommit and unstage your changes while hard uncommit,
								unstage and delete your changes. For example, when you want to revert all your
								changes to specific commit, you can use{' '}
								<b>
									<i>git reset --hard eucdf84</i>
								</b>{' '}
								to back to the commit.
							</p>
							
						</ArticleSection>

						<ArticleSection title="gitignore">
							<p className="article-text">
								Gitignore (.gitignore) is a plain text file where each line in file contains a
								pattern for files/directories to ignore. The files/directories will then not staged
								and committed to the repository. Gitignore always used to ignore files like
								node_modules, .env, log and some other file which is sensitive or not related to the
								live project.
							</p>
							<p className="article-text">
								*Files already tracked by Git are not affected when you add it into gitignore, so
								you have to use (
								<b>
									<i>git rm --cached [path-to-file-or-folder]</i>
								</b>
								) to untrack your file
							</p>
						</ArticleSection>
						<ArticleReference references={references} />
					</div>
				</div>
			</div>
		</>
	);
}
