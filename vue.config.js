const path = require("path");

module.exports = {

    devServer: {
        // host: "localhost",
        /* 本地ip地址 */
        //host: "192.168.1.107",
        disableHostCheck: true,
        host: "10.13.252.231", //局域网和本地访问
        port: "443",
        hot: true,
        /* 自动打开浏览器 */
        open: false,
        overlay: {
            warning: false,
            error: true
        },
        // /* 跨域代理 */
        proxy: {
            "/api": {
                /* 目标代理服务器地址 */
                target: "https://ppp6vjgbyr.xuduan.vip", //
                // target: "http://192.168.1.102:8888", //
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};
