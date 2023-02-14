const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-icons/webpack')({ /* options */ }),
    ],
  },
})

// module.exports = {
//   configureWebpack: {
//     plugins: [
//       require('unplugin-icons/webpack')({ /* options */ }),
//     ],
//   },
// }