const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    // module 모듈의 규칙을 설정
    module: {
        rules: [{
            test: /\.css$/, // css가 붙은 파일을 읽어오고 어떤 로더로 읽을지 확인
            use: ["style-loader", "css-loader"]

        }]
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    }
}