// function resolve (dir) {
//     console.log(__dirname);
//     return '../'
//     //return path.join(__dirname, '..', dir)
//   }

console.log(123123);
console.log(process.env)
export default {
  define: {
    "process.env": {
        NODE_ENV: process.env.NODE_ENV,
        yhn: process.env.yhn
    },
  },
  disableCSSModules: true,
}
