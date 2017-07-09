const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
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
			}
		]
	},
	devServer: {
	    contentBase: path.join(__dirname, "dist"),
	    compress: true,
  		port: 9000,
  		stats: "errors-only"
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
		})
	]
}