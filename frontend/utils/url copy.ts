export const getUrl = (url: string) => {
    // if (process.env.PROD) return './' + url
    return './' + url
}

export const getHref = (href: string) => {
    if (href === '#') return href
    
    // if (process.env.PROD ) return href + '.html'
    if (process.env.PROD ) return href
    return href
}

export const getApiUrl = (url: string) => {
    // if (process.env.PROD) return './backoffice/public/index.php' + url
    return 'http://127.0.0.1:8000' + url
}

export const getApiImageUrl = (url: string) => {
    // if (process.env.PROD) return './backoffice/public/images' + url
    return 'http://127.0.0.1:8000/images' + url
}
