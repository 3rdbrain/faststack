/** @type {import('next').NextConfig} */
const nextConfig = {
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
            : "http://127.0.0.1:8000/backend/py/:path*",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "production"
            ? "http://127.0.0.1:8000/backend/py/docs"
            : "http://127.0.0.1:8000/backend/py/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "production"
            ? "http://127.0.0.1:8000/backend/py/openapi.json"
            : "http://127.0.0.1:8000/backend/py/openapi.json",
      },
    ];
  },
};

module.exports = nextConfig;