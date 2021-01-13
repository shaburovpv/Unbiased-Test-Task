module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Form To Hire A Taxi',
    },
  },
}
