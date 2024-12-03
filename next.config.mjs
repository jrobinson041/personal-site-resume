/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => ([
    {
      source: "/resume",
      destination: "/John Robinson Resume.pdf",
      permanent: false,
    },
    {
      source: "/business-resume",
      destination: "/John Robinson Resume - Business Management.pdf",
      permanent: false,
    }
  ])
};

export default nextConfig;
