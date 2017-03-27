var webpack = require('webpack');


module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'./app/app.jsx'
],
externals: {
    //jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve:{
		root:__dirname,
		alias: {
			// Weather: '/app/components/Weather.jsx'
		},
		extenstions: ['','.js','.jsx']
	},
	module: {
		loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['react','es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}
		]
	}

}
