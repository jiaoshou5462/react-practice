const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');

module.exports = merge(common, {
	//开发环境
	mode: 'development',
	//把编译后的代码映射回编译前，方便在F12时调试
	devtool: '#eval-source-map',
	devServer: {
		//使history模式路由转向index而不报404
		historyApiFallback: true,
		host: "0.0.0.0",
		useLocalIp: true,
		openPage: '/',
		hot: true, //2热更新
		//设置代理
		proxy: {
			"/platform": {
				target: "https://beta.geexfinance.com/geex-platform-web",
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/platform': ''
				}
			},
		}
	},
	output: {
		filename: 'js/[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: "/"
	},
});