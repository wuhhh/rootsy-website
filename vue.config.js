module.exports = {
  lintOnSave: true,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/case-study/zen',
        '/case-study/e-international-relations',
        '/case-study/flip',
        '/case-study/serein',
        '/case-study/drum-networking',
        '/case-study/serein-audiovisual'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
