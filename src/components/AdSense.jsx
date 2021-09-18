import React, { useEffect } from 'react';

export default function AdSense() {
	useEffect(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	});

	return (
		<>
			{/* Vertical */}
			<ins
				className="adsbygoogle"
				style={{ display: 'block' }}
				data-ad-client="ca-pub-6900512694231865"
				data-ad-slot="4941364825"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
			{/* Horizontal */}
			<ins
				className="adsbygoogle"
				style={{ display: 'block' }}
				data-ad-client="ca-pub-6900512694231865"
				data-ad-slot="4898160466"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
			{/* Square */}
			<ins
				className="adsbygoogle"
				style={{ display: 'block' }}
				data-ad-client="ca-pub-6900512694231865"
				data-ad-slot="8689038148"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</>
	);
}
