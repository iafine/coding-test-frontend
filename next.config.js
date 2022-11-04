const fs = require('fs')
const path = require('path')
const withLess = require('next-with-less')
const lessToJS = require('less-vars-to-js')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/antd.less'), 'utf8'),
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...withLess({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
    },
  }),
}

module.exports = nextConfig
