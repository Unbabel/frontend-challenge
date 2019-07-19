const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
  let sourceMap = undefined;

  if (env === "development") {
    sourceMap = true;
  }

  if (env === "production") {
    sourceMap = false;
  }

  const config = {
    stats: "verbose",
    entry: "./src/index.tsx",
    output: {
      filename: "./assets/[name].[hash].js",
      sourceMapFilename: "./assets/[name].[hash].js.map",
      path: path.resolve(__dirname, "dist"),
      publicPath: process.env.PUBLIC_PATH || "/"
    },
    devtool: "source-map",
    devServer: {
      port: 8080,
      host: "front-end-challenge",
      historyApiFallback: true,
      inline: true,
      contentBase: path.resolve(__dirname, "dist"),
      publicPath: process.env.PUBLIC_PATH || "/",
      disableHostCheck: true,
      stats: "errors-only"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /.*\/node_modules\/.*\.svg$/,
          use: ["file-loader"]
        },
        {
          test: /\.svg$/,
          loader: "raw-loader"
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            {
              loader: "style-loader",
              options: {
                sourceMap: sourceMap
              }
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: sourceMap
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: sourceMap,
                includePaths: [path.resolve("./styles")]
              }
            }
          ]
        },
        {
          test: /\.(png)$/,
          loader: "url-loader?limit=8192"
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Front-End Challenge",
        filename: "index.html",
        template: path.resolve(__dirname, "./public/index.html")
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, "./public/icons/images"),
          to: path.join(__dirname, "dist/assets/images")
        }
      ]),
      new ZipPlugin({
        path: "zip",
        filename: "front-end-challenge.zip",
        exclude: ["config.json"]
      })
    ]
  };

  return [config];
};
