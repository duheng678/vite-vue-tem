import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import path from 'path'
// presetAttributify 属性化模式，属性冲突时，可以通过默认un-前缀来解决：<div m-2 rounded text-teal-400 >代替class</div>
// import presetRemToPx from '@unocss/preset-rem-to-px'
// 此处我用了rem to px的预设，所以后面不加单位的数字的话会直接被转化为px（如果不用这个预设，就需要用m-100px之类的）
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        custom: FileSystemIconLoader(
          path.resolve(__dirname, './src/assets/svg')
        ),
        el: () =>
          import('@iconify-json/ep/icons.json').then((i) => i.default as any)
      },
      scale: 1.5,
      warn: true,
      prefix: ['i-']
    })
  ],
  rules: [
    [/^fs-(\d+)$/, ([, num]) => ({ 'font-size': `${num}px` })],
    [/^lh-(\d+)$/, ([, num]) => ({ 'line-height': `${num}px` })]
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('hover:')) {
        return matcher
      }
      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:hover`
      }
    }
  ],
  shortcuts: {
    center: 'flex items-center justify-center'
  }
})
