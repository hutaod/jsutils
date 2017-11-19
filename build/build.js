const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const chalk = require('chalk')
const webpack = require('webpack')

const webpackConfig = require('./webpack.config')
const pkg = require('../package')
const rootPath = path.resolve(__dirname,  '../')

new Promise((resolve,reject)=>{
  // 构建压缩包
  let building = ora('building...');
  building.start();
  rm(path.resolve(rootPath,'dist',`${pkg.name}.min.js`), err=>{
    if(err) throw err;
    webpack(webpackConfig, function (err,stats) {
      building.stop();
      if(err) throw err;
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')
      resolve();
      console.log(chalk.cyan('  Build complete.\n'))
    })
  })
}).then(() => {
  // 替换模块文件
  let copying = ora('copying...')
  copying.start();
  rm('*.js', err => {
    if(err) throw err;
    let folderLists = fs.readdirSync(path.resolve(rootPath, 'src'))
    folderLists.forEach((item,index)=>{
      // 拷贝`src`下面一层目录的所有`js`文件至根目录
      copy(`src/${item}/*.js`,rootPath, function (err,files){
        if(err) throw err;
        if(index === folderLists.length-1){
          console.log(chalk.cyan('  Copy complete.\n'))
          copying.stop();
        }
      })
    })

  })
}).catch((err) => {
    throw err
})

