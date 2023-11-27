import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import customMedia from 'postcss-custom-media';
import postcssGlobalData from '@csstools/postcss-global-data';

export default {
	plugins: [
		autoprefixer(),
		nested(),
		postcssGlobalData({
			files: ['./src/app.pcss']
		}),
		customMedia()
	]
};
