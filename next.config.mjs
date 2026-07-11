/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.251.227.5'],
  images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "res.cloudinary.com",
      },
    ],
  },
};
export default nextConfig;
