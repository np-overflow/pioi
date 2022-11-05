import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

import { transformerVariantGroup, transformerDirectives } from 'unocss'

export default defineConfig({
  lang: 'en-US',
  title: 'Poly-ITE Infomatics Olympiad',
  description: 'PIOI (Polytechnic-ITE Olympiad in Informatics) is a 5-hour informatics Olympiad open to all polytechnic and ITE students.',
  vite: {
    plugins: [
      UnoCSS({
        transformers: [
          transformerVariantGroup(),
          transformerDirectives()
        ]
      })
    ]
  }
})
