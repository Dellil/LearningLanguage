export interface Size {
	/**
	 * 버튼의 종류를 결정할 수 있습니다.
	 */
	size?: 'large' | 'medium' | 'small' | 'tiny';
}

export interface Theme {
	/**
	 * 버튼의 크기를 결정할 수 있습니다.
	 */
	theme?: 'filled' | 'ghost' | 'warning' | 'neutral' | 'borderless';
}
