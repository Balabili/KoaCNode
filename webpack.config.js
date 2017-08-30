/**
 * Created by mac on 16/7/14.
 */
let webpack = require('webpack'),
    path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        'index': './public/javascripts/index.js',
        'createTopic': './public/javascripts/createTopic.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/bin/',
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=es2015,presets[]=stage-3'],
                include: path.join(__dirname, 'js')
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.jsx']
    }
    //插件项
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'home',
    //         children: true
    //     })
    // ]
};