module.exports = {
  entry: './src/ts/index.ts',
  
  output: {
    filename: "./dist/bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },


  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
}