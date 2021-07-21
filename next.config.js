const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

// module.exports = {
//   mode: 'development',
//   entry: './fixture-use.scss',
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               webpackImporter: false,
//               sassOptions: {
//                 includePaths: ['node_modules']
//               },
//               implementation: require('sass')
//             }
//           }
//         ]
//       }
//     ]
//   }
// };
