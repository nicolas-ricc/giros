/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  strictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'images.pexels.com']
  },
  env: {
    sanityToken: "sk4tKo4o8p7nzIAWPhnqioyKC1Uz8Jbpb9B0teI7xpwUlqLckpAhWavzkWwYo7eN1ytBSOwOBNwnZizgNzu5j96R2UYF3XfJg6R5UlZjPWNfci76EbeBVjXTNPwdC6JjnPDIfCVGayYt0kVM7OpkIA44t94P3IqDu5csBxQpjBuCA2cDuJsA"
  },
  optimizeFonts: false
}

module.exports = nextConfig
