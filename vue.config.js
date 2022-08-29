const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        host: 'localhost',
        port: 9999,
        open: true,
        proxy: {
            '/api': {
                target: 'http://corpvpn.tracyenergy.cn:9999',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
                Host: 'corpvpn.tracyenergy.cn:9999',
                referer: 'http://corpvpn.tracyenergy.cn/',
                origin: 'http://corpvpn.tracyenergy.cn',
            },
        },
    },
});
