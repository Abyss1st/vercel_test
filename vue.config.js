const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,

    publicPath: './',// 适配Android webview
    assetsDir: 'assets', // 静态文件路径
    filenameHashing: true,
})
