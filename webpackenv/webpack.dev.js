const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.scss$/, 
				use: ['style-loader', 'css-loader', 'sass-loader']
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
	devServer: {
	    contentBase: path.join(__dirname, "dist"),
	    compress: true,
  		port: 8000,
  		historyApiFallback: true,
  		noInfo: false,
  		hot: true,
  		stats: "errors-only"
  	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			// filename: '../index.html',
			template: './src/index.ejs'
		}),
		new ExtractTextPlugin({
			filename: 'app.bundle.css',
			disable: true,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}