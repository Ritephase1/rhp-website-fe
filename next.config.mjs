/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "", // Optional: If the URL includes a port, specify it here
        pathname: "/**", // Allows all paths from this domain
      },
    ],
  },
};

export default nextConfig;
