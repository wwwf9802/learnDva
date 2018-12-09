const path=require('path');
function resolve(url){
    return path.resolve(__dirname,url)
}
export default (config) => {
  const sassResourcesLoader = {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        resolve('src/assets/sass/common.scss')
      ]
    }
  }
  //console.log(config.module.rules.length);
  //console.log(typeof(config.module.rules))
  for (let i = 0; i < config.module.rules.length; i++) {
    if(String(config.module.rules[i].test)==='/\\.(sass|scss)$/'){
        config.module.rules[i].use.push(sassResourcesLoader)
    }
  }
  //   config.module.rules.forEach((rule) => {
  //     if (['/\\.(sass|scss)$/', '/\\.(sass|scss)$/'].indexOf(rule.test.toString()) !== -1) {
  //       console.log(rule)
  //       //rule.use.push(sassResourcesLoader)
  //     }
  //   })
  return config
}
