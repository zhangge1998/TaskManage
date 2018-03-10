
const webpack =require('webpack');

module.exports = {
    entry: "./public/entry.js",
    output: {                                 //打包后的文件
        path: __dirname + '/public/dist',
        filename: "index.js"
    },
    watch: true,
    module: {
        loaders: [            //用于加载一些静态文件夹（css样式，图片之类）
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
