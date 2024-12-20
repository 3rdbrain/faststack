/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify the custom src directory
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/backend/py/:path*",
        destination:
          process.env.NODE_ENV === "production"
            ? "http://127.0.0.1:8000/backend/py/:path*"
            : "/api/",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "production"
            ? "http://127.0.0.1:8000/backend/py/docs"
            : "/backend/py/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "production"
            ? "http://127.0.0.1:8000/backend/py/openapi.json"
            : "/backend/py/openapi.json",
      },
    ];
  },
};

module.exports = nextConfig;