/** @type {import('next').NextConfig} */

require('dotenv').config({path: './.env.development'})

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config){
    config.module.rules.push({
      test:/\.svg$/,
      use:'@svgr/webpack'
    })
    return config
  }
}

module.exports = nextConfig
