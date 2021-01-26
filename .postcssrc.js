module.exports = {
  plugins: {
    // 这是为了兼容移动端版本，但是vue的脚手架已进行配置过，再进行配置的话会产生冲突
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*'],
      exclude: 'markdowncss.css'
    }
  }
}
