export default {
  components: './src/components/index.ts', // Playroomで利用するコンポーネントがexportされているファイル
  outputPath: './playroom', // Playroomのビルド結果を出力するパス
  frameComponent: './.playroom/Frame.tsx',
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],
  openBrowser: false,
  webpackConfig: () => ({
    resolve: {
      extensions: ['.ts', '.tsx', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }],
                  '@babel/preset-typescript'
                ],
              },
            },
          ],
        },
      ],
    },
  }),
}