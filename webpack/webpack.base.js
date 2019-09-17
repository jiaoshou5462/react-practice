const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	//入口文件
	entry: ['react-hot-loader/patch',path.resolve(__dirname, '../src/main.js')],
	module: {
		//各类解析器
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['env', 'stage-0','react']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require("autoprefixer")
									("> 1%", "last 100 versions", "not ie <= 8")
							]
						}
					}
				],
			},
			{
				test: /\.(png|svg|jpg|gif|jpeg|eot|svg|ttf|woff|woff2)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.less$/,
				use: ['style-loader',
				'css-loader?modules',
				'less-loader'
			],
			},
		]
	},
	resolve: {
		//设置import根路径位置，避免每次导入都要输入N个../
		alias: {
			views: require('path').resolve(__dirname,'../views'),
			src: require('path').resolve(__dirname,'../src'),
			'vue$': 'vue/dist/vue.esm.js',
		},
		extensions: ['.js', '.vue', '.json']
	},
	plugins: [
		//接收脚本传进来的参数并注册为全局变量，用来判断接口使用哪个baseUrl
		new webpack.DefinePlugin({
			'process.env': {
				http_env: JSON.stringify(process.env.http_env)
			}
		}),
		new webpack.HotModuleReplacementPlugin(), //设置这里
		// 解决vender后面的hash每次都改变
		new webpack.HashedModuleIdsPlugin(),
		//编译后生成html并引入js和css
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'../index.html'),
			// favicon: path.resolve('assets/images/common/icon/favicon.ico'),
		}),
	],
};