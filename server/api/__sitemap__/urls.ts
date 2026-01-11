import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(() => {
    const staticPages = [
        { loc: '/', changefreq: 'weekly' as const, priority: 1 as const },
        { loc: '/about', changefreq: 'monthly' as const, priority: 0.8 as const },
        { loc: '/services', changefreq: 'weekly' as const, priority: 0.9 as const },
        { loc: '/contact', changefreq: 'monthly' as const, priority: 0.7 as const },
    ]

    return staticPages
})
