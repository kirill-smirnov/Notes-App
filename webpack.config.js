module.exports = {
  entry: './src/ts/main.ts',
  
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