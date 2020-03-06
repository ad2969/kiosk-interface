module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Kiosk Interface",
        appId: "kiosk-v1",
        mac: {
          icon: ''
        },
        win: {
          icon: '',
          target: [
            {
              target: 'portable',
              arch: ['x64']
            }
          ]
        }
      }
    }
  }
}
