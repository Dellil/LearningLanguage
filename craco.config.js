const CracoAlias = require('craco-alias');

const emotionPresetOptions = {};

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
	undefined,
	emotionPresetOptions,
);

module.exports = {
	babel: {
		plugins: [
			...emotionBabelPreset.plugins,
			// your other plugins
		],
	},
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				baseUrl: './src',
				tsConfigPath: './tsconfig.extend.json',
				debug: true,
			},
		},
	],
};
