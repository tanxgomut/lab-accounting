import { articles } from '#shared/utils/blogs'

export default defineEventHandler((event) => {
    const id = Number(getRouterParam(event, 'id'))

    const currentIndex = articles.findIndex(a => a.id === id)

    if (currentIndex === -1) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Article not found'
        })
    }

    const article = articles[currentIndex]

    const prevArticle = currentIndex > 0 ? {
        id: articles[currentIndex - 1].id,
        title: articles[currentIndex - 1].title,
        slug: articles[currentIndex - 1].slug,
        description: articles[currentIndex - 1].description,
    } : null

    const nextArticle = currentIndex < articles.length - 1 ? {
        id: articles[currentIndex + 1].id,
        title: articles[currentIndex + 1].title,
        slug: articles[currentIndex + 1].slug,
        description: articles[currentIndex + 1].description,
    } : null

    return {
        ...article,
        prevArticle,
        nextArticle
    }
})
