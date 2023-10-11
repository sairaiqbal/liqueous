/** @type {import('next').NextConfig} */
const nextConfig = {

async rewrites() {
    return [
        {
            source: '/api/:slug*',
            destination: 'https://liqueous.logixsy.com/api/:slug*', // Matched parameters can be used in the destination
        },
    ]
},
}


module.exports = nextConfig
