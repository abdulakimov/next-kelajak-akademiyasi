/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'edusoftlearning.com',
                port: '',
                pathname: '/wp-content/uploads/2018/10',
            },
        ],
    },
};

export default nextConfig;
