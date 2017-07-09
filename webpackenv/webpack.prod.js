const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, '/../dist'),
		filename: '[name].bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
					publicPath: '/dist'
				})
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader?name=[name].[ext]&outputPath=assets/images/&publicPath=../',
		            'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './src/index.ejs'
		}),
		new ExtractTextPlugin({
			filename: 'app.bundle.css',
			disable: false,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
}