module.exports = function(env) {
	return require(`./webpackenv/webpack.${env}.js`);
}