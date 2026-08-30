/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/fashion-store",
  assetPrefix: "/fashion-store/",
  images: {
    unoptimized: true,
  },
  // allowedDevOrigins: ['10.89.160.207'],
  // images: {
  //   remotePatterns: [
  //     {
  //     protocol: "https",
  //     hostname: "res.cloudinary.com",
  //     },
  //   ],
  // },
};
export default nextConfig;
