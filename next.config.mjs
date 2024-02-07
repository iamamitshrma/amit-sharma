/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*" //["i.ytimg.com", "yt3.ggpht.com", "*"]
            }
        ] 
    }
};

export default nextConfig;
