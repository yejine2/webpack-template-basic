// import
// nodeJS 환경에서 언제든지 가져와서 사용할 수 있는 path라는 전역 모듈
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname 경로와, dist 폴더를 합쳐서 절대적 경로를 path에 제공
    filename: 'main.js',
    clean: true, // 기존에 만든 내용 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],

  devServer: {
    host: 'localhost',
  },
};
