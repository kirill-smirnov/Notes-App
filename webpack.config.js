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
      },
      {
            test: /\.sass$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
            // use: [{
            //     loader: "style-loader" // creates style nodes from JS strings
            // }, {
            //     loader: "css-loader" // translates CSS into CommonJS
            // }, {
            //     loader: "sass-loader" // compiles Sass to CSS
            // }]
        }
    ]
  },
  // module: {
  //       rules: []
  //   }
}