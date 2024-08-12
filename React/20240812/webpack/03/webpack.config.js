const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin") // html 생성 설정 속성을 줄 수 있는 플러그인

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template 우리가 번들링 된곳에 생성할 html의 내용을 제공할 파일
            template: "src/index.html",
            filename: "myIndex.html"
        })
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    }
}