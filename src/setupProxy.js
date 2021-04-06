const createProxyMiddleware = require('http-proxy-middleware');
module.exports = (app) => {
  app.use(createProxyMiddleware('/devApi', {
    // target: 'http://www.web-jshtml.cn/api/react',
    target: 'http://127.0.0.1:7001',
    changeOrigin: true,
    pathRewrite: {
      "^/devApi": ""
    }
  }))
}