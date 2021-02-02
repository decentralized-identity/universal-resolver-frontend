// This library allows us to combine paths easily
const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
             test: /\.(js|jsx)$/,
             use: {
                loader: 'babel-loader',
                options: {
                   presets: ['@babel/preset-env', '@babel/react'],
                   plugins:['@babel/plugin-proposal-class-properties']
                }
             }
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
            use: ['url-loader']
         }
      ]
   }
};
