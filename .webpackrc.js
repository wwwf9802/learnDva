// function resolve (dir) {
//     console.log(__dirname);
//     return '../'
//     //return path.join(__dirname, '..', dir)
//   }

export default {
  extraBabelPlugins: [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }]
  ],
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV,
      yhn: process.env.yhn
    },
  },
  disableCSSModules: true,
}
