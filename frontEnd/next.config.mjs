/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
      return [
         {
            source: "/",
            destination: "/login",
            permanent: false,
         },
      ];
   },
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "quantumpossibilities.eu",
            port: "82",
         },
         {
            protocol: "https",
            hostname: "quantumpossibilities.eu",
            port: "82",
         },
         {
            protocol: "http",
            hostname: "localhost",
            port: "9000",
         },
      ],
   },
};

export default nextConfig;
