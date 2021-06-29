import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Gist({ id, file }) {
	let iframeNode = useRef(null);
	const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;
	useEffect(() => {
		updateContent();
	}, [iframeNode]);

	const getUrl = () => {
		const fileArg = file ? `?file=${file}` : '';

		return `https://gist.github.com/${id}.js${fileArg}`;
	};

	const updateContent = () => {
		let doc = iframeNode.document;
		if (iframeNode.contentDocument) {
			doc = iframeNode.contentDocument;
		} else if (iframeNode.contentWindow) {
			doc = iframeNode.contentWindow.document;
		}

		const gistLink = getUrl();
		const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
		const resizeScript = `onload="parent.document.getElementById('${elementId}-spinner').style.display='none';
		parent.document.getElementById('${elementId}').style.display='block';
		parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px';"`;
		const iframeHtml = `<html><head><base target="_blank"></head><body ${resizeScript}>${gistScript}</body></html>`;

		doc.open();
		doc.writeln(iframeHtml);
		doc.close();
	};

	return (
		<div className="d-flex justify-content-center">
			<div id={`${elementId}-spinner`} className="text-center">
				<p>Loading Gist...</p>
			</div>

			<iframe
				title={id}
				id={elementId}
				className="gist"
				frameBorder={0}
				ref={(n) => {
					iframeNode = n;
				}}
			/>
		</div>
	);
}

Gist.propTypes = {
	id: PropTypes.string.isRequired,
	file: PropTypes.string,
};
