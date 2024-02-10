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

    // base path is like en-IN before next path
    // basePath: "/docs",

    // async redirects() {
    //     return [
    //         {
    //             source: "/blogs",
    //             destination: "/",
    //             permanent: true
    //         }
    //     ]
    // },
    
    // async rewrites() {
    //     return [
    //         {
    //             source: '/blogs',
    //             destination: '/',
    //         },
    //     ]
    // },

    // to prevent bundling without this 
    // generateBuildId: async () => {
    //     return process.env.GIT_HASH
    // },
};

export default nextConfig;
