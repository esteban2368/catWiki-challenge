import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**.thecatapi.com',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;
