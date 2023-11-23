import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';

export default {
	plugins: [autoprefixer(), nested()]
};
