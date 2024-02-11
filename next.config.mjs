/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["*"],
            bodySizeLimit: '2mb'
        }
    },
    devIndicators: {
        buildActivityPosition: 'bottom-right',
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*" //["i.ytimg.com", "yt3.ggpht.com", "*"]
            }
        ]
    },
};

export default nextConfig;
