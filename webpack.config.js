const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: 'public/img/favicon.png',
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
