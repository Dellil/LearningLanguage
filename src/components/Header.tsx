import { css } from '@emotion/react';

import Logo from '../Icons/Logo';

export interface Props {}

const Header = (props: Props) => {
	return (
		<header
			css={css`
				width: 100%;
				height: 80px;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #7048e8;
			`}
		>
			<div
				css={css`
					width: 1400px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				`}
			>
				<div
					css={css`
						display: flex;
						align-items: center;
					`}
				>
					<div
						css={css`
							margin-right: 14px;
						`}
					>
						<Logo />
					</div>
					<span
						css={css`
							font-size: 18px;
							color: #f8f9fa;
						`}
					>
						LEARNING LANGUAGE
					</span>
				</div>
				<button
					css={css`
						font-size: 18px;
						color: #f8f9fa;
					`}
				>
					LOGIN
				</button>
			</div>
		</header>
	);
};

export default Header;
