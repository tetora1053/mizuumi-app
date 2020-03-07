module.exports = {
  entry: { app: "./src/index.js" },
  output: {
    path: __dirname + '/public/js',
    filename: "[name].js"
  },
  devServer: {
    contentBase: __dirname + '/public',
    port: 11080,
    publicPath: '/js/',
    disableHostCheck: true,
    host: '0.0.0.0',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
	  {
	    test: /\.css$/,
		use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
	  }
    ]
  },
  mode: 'none',
  performance: { hints: false }
};
