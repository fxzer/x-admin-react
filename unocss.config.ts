// unocss.config.ts
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetAttributify(),
    presetIcons({}), // 以 CSS 方式使用 iconify
    presetUno(),
    presetAnimations(),
    presetShadcn({
    }),
  ],
  transformers: [
    transformerDirectives(), // @apply, @screen, @variants
    transformerVariantGroup(), // 样式分组
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
})
