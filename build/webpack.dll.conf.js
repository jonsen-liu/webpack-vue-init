const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'vue/dist/vue.esm.js',//提前打包一些基本不怎么修改的文件  一般都是放生产环境要用到的第三方库
      // 'vue-router',
      // 'vuex',
      'element-ui',
    ]
  },
  output: {
    path: path.resolve(__dirname, '../static/dll/js'), //放在项目的static/dll/js目录下面
    filename: '[name]_[hash].dll.js', //打包文件的名字
    library: '[name]_library' //可选 暴露出的全局变量名
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'static/dll/*')],
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../static/dll', '[name]-manifest.json'), //生成上文说到清单文件，放在static/dll文件下面，这个看你自己想放哪里了。
      name: '[name]_library'
    }),
  ]
};