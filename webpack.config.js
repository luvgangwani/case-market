var UglifyJsPlugin = require('uglifyjs-webpack-plugin') // create minfied bundle file

module.exports = {
	"entry": "./src/index.js",
	"output": {
		"path": __dirname + "/public/js/",
		"filename": "bundle.min.js"
	},
	"module" : {
		"rules": [
			{
				"test": /\.js$/,
				"loader": "babel-loader",
			},
			{
				"test": /\.(gif|png|jpe?g|svg)$/i,
				"loader": "image-webpack-loader",
			}
		],
	},
	"optimization": {
		"minimize": true,
		"minimizer": [
			new UglifyJsPlugin({
				"include": /\.min\.js$/
			})
		]
	}
}
