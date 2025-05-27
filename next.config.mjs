/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // ou localhost ou o ip da maquina que esta rodando o servidor
        hostname: '10.88.200.177',
        
        port: '3000',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
