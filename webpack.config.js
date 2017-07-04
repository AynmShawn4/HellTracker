var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './client/main.js',

	output: {
		path: path.join(__dirname, 'client'),
		filename: 'bundle.js',
	},

	module:{
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		},
		{	
			test: /\.(jpe?g|png|gif|svg)$/i, 
		 	loader: "file-loader"
		},
		{
	    	test: /\.css$/,
	    	loaders: ["style-loader","css-loader"]
	    }
		]
	}

}
