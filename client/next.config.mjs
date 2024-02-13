/** @type {import('next').NextConfig} */

const HOST = '54.66.184.178:8083/api/'
const PROTOCOL = 'http'

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    SERVER_URI: `${PROTOCOL}://${HOST}`
  }
};

export default nextConfig;
