import { jsx } from '@emotion/react';

const P = (props: any) => (
	<p
		css={{
			margin: 0,
			fontSize: 12,
			lineHeight: '1.5',
			fontFamily: 'sans-serif',
			color: 'black',
		}}
		{...props} // <- props contains the `className` prop
	/>
);

const ArticleText = (props: any) => (
	<P
		css={{
			fontSize: 14,
			fontFamily: 'Georgia, serif',
			color: 'darkgray',
		}}
		{...props} // <- props contains the `className` prop
	/>
);

export default (props: any) => (
	<ArticleText
		css={{
			fontSize: 10,
		}}
		{...props} // <- props contains the `className` prop
	/>
);
