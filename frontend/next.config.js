/** @type {import('next').NextConfig} */


// const nextConfig = {
//     reactStrictMode: true,

//     images: {
//         domains: ['localhost', '127.0.0.1'],
//         loader: "custom"
//     },
//     // env: { PROD: true }
// }


const nextConfig = {
    reactStrictMode: true,

    images: {
        // domains: ['localhost', '127.0.0.1', 'africafintechforum.org', 'front-test-f3stq9pdk-loic-demanou.vercel.app'],
        domains: ['localhost', '127.0.0.1', 'africafintechforum.org', 'testaff.africafintechforum.org'],
        loader: "custom"
    },
    env: { PROD: true }
}

module.exports = nextConfig