// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: { // 生产环境
        env: {NODE_ENV: '"production"'},
        index: path.resolve(__dirname, '../dist/index.html'), 
        assetsRoot: path.resolve(__dirname, '../dist'), 
        assetsSubDirectory: 'static', 
        assetsPublicPath: '/vue2-happyfri/', 
        /* 总结1 编译后 index.html 引用文件的路径是 先 assetsPublicPath，再 assetsSubDirectory，最后 编译成的静态资源自个儿 */
        /* 总结2 编译后静态资源所在目录为：先 assetsRoot，再 assetsSubDirectory */
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,  // 是否开启 gzip
        productionGzipExtensions: ['js', 'css'] // 需要使用 gzip 压缩的文件扩展名
    },
    dev: { // 开发环境
        env: {NODE_ENV: '"development"'},
        port: 8088, // 运行测试页面的端口
        assetsSubDirectory: 'static',// 编译输出的二级目录
        assetsPublicPath: '/',// 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
        context: [ //代理路径

        ],
        proxypath: 'https://mainsite-restapi.ele.me',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false // 是否开启 cssSourceMap
    }
}