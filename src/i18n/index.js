const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const nextI18Next = new NextI18Next({
  defaultNS: 'index',
  defaultLanguage: 'en',
  otherLanguages: ['zh_tw', 'zh_cn'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
})

if (process.env.NODE_ENV !== 'production') {
  if (process.browser) {
    const { applyClientHMR } = require('i18next-hmr/client')
    applyClientHMR(nextI18Next.i18n)
  } else {
    const { applyServerHMR } = require('i18next-hmr/server')
    applyServerHMR(nextI18Next.i18n)
  }
}

module.exports = nextI18Next
