/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    SERVER_URI: "http://127.0.0.1:8083/api/"
  }
};

export default nextConfig;
