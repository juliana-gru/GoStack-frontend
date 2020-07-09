const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
	module: {
    rules: [
      {
        test: /\.js$/, //regex that looks for files that end with .js
        exclude: /node_modules/, // excludes js files in this folder
        use: {
          loader: 'babel-loader', //use loader in those .js files
        }
      },
      {
        test: /\.css$/, //regex that looks for files that end with .css
        exclude: /node_modules/, // excludes js files in this folder
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'     
        }
      }
    ]
	},
};