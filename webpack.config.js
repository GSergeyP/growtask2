//  npm install --save-dev webpack webpack-cli webpack-dev-server
//  npm install --save-dev html-webpack-plugin
//  npm install --save-dev mini-css-extract-plugin
//  npm install --save-dev css-minimizer-webpack-plugin
//  npm install --save-dev sass-loader sass
//  npm install --save-dev css-loader
//  npm install --save-dev svg-sprite-loader

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");

module.exports = {
  entry: { 
    style: [
      path.resolve(__dirname, "src/static/scss/", "typography.scss"),
      path.resolve(__dirname, "src/templates/01section.nav/", "nav.scss"),
      path.resolve(__dirname, "src/templates/02section.info/", "info.scss"),
      path.resolve(__dirname, "src/templates/03section.textPictures/", "textPictures.scss"),
      path.resolve(__dirname, "src/templates/04section.slider/", "slider.scss"),
      path.resolve(__dirname, "src/templates/05section.buttonsPictures/", "buttonsPictures.scss"),
      path.resolve(__dirname, "src/templates/06section.questionAnswer/", "questionAnswer.scss"),
      path.resolve(__dirname, "src/templates/07section.form/", "form.scss"),
    ],
    nav: path.resolve(__dirname, "src/templates/01section.nav/"),
    info: path.resolve(__dirname, "src/templates/02section.info/"),
    textPictures: path.resolve(__dirname, "src/templates/03section.textPictures/"),
    slider: path.resolve(__dirname, "src/templates/04section.slider/"), 
    buttonsPictures: path.resolve(__dirname, "src/templates/05section.buttonsPictures/"), 
    questionAnswer:  path.resolve(__dirname, "src/templates/06section.questionAnswer/"), 
    form:  path.resolve(__dirname, "src/templates/07section.form/"), 
    svg: path.resolve(__dirname, "src/static/img/svg/", "svg.js"),
  },
  output: { 
    path: path.resolve(__dirname, "public"), 
    filename: ({ chunk: { name } }) => {
      return  name === "style" ? "temp/[name].js" : 
              name === "svg" ? "temp/[name].js" : 
              "js/[name][contenthash:8].js";
    },
    clean: true, // Удаление не использующих файлов
  },
  plugins: [
    new HTMLWebpackPlugin({ // HTML - страница
      template: path.resolve(__dirname, "src/pages/", "index.html"), 
      chunks: [
        'nav',
        'info',
        'textPictures',
        'slider',
        'buttonsPictures',
        'questionAnswer',
        'form'
      ],
      scriptLoading: 'blocking' // Где размещать на странице html тег script
    }),
    new MiniCssExtractPlugin({  // Выделение из js в отдельный файл
      filename: "css/[name].css",
    }),
    new SpriteLoaderPlugin({// Создание SVG 
      plainSprite: true 
    }),
    new CssMinimizerPlugin(), // Оптимизация css
  ],
  module: {
    rules: 
    [{
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "fonts/[name][ext]",
      }
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: "img/[name][ext]",
      }
    },
    { // Перевод scss в css
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    { // Создание SVG - спрайта
      test: /\.svg$/,
      use: [{
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          outputPath: 'svg/'
        }
      }]
    },
    /*{
      test: /\.json$/, // подключение json, с задаными путями хранения
      type: "asset/resource",
      generator: {
        filename: "json/[name].json",
      }
    },*/]
  },
};