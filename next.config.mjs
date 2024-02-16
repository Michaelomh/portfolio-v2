/** @type {import('next').NextConfig} */
const nextConfig = {}

if (!process.env.RESEND_API_KEY) {
  throw `
  -------------------------
  ENV MISSING ERROR 
  -------------------------
  Please define \`RESEND_API_KEY\` in the .env file.
  `
}

export default nextConfig
