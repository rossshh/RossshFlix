
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    experimental:{
        appDir: true,
        serverComponentsExternalPackages:['mongoose'],
    },
images:{
    domains:['images.unsplash.com'],
    }
}

export default nextConfig;
