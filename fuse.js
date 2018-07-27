const { src, task, exec, context } = require('fuse-box/sparky')
const { FuseBox, WebIndexPlugin } = require('fuse-box')

context(class {
  getConfig() {
    return FuseBox.init({
      homeDir: 'src',
      output: 'dist/$name.js',
      useTypescriptCompiler: true,
      experimentalFeatures: true,
      plugins: [
        !this.isProduction && WebIndexPlugin()
      ]
    })
  }
})

task('default', async context => {
  const fuse = context.getConfig()
  fuse.bundle('thisnamedoesnotmatter')
                      .watch('app/**')
                      .instructions('> app/index.tsx')
  fuse.dev({port: 4445})
  fuse.run()
})
