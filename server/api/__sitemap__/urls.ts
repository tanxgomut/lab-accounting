import { articles } from '#shared/utils/blogs'
import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(() => {
    // Static pages
    const staticPages = [
        { loc: '/', changefreq: 'weekly' as const, priority: 1 as const },
        { loc: '/about', changefreq: 'monthly' as const, priority: 0.8 as const },
        { loc: '/services', changefreq: 'weekly' as const, priority: 0.9 as const },
        { loc: '/blogs', changefreq: 'daily' as const, priority: 0.8 as const },
        { loc: '/contact', changefreq: 'monthly' as const, priority: 0.7 as const },
    ]

    // Dynamic blog pages
    const blogPages = articles.map(article => ({
        loc: `/blog/${article.id}/${article.slug}`,
        changefreq: 'weekly' as const,
        priority: 0.6 as const,
        lastmod: new Date().toISOString(),
    }))

    return [...staticPages, ...blogPages]
})
