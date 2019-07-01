module.exports = {
  proxy: {
    '/apis': {    //将 127.0.0.1:3030印射为/apis
      target: 'http://127.0.0.1:80',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/apis': ''   //需要rewrite的,
      }
    }
  }
}
