import { articles } from '#shared/utils/blogs'

export default defineEventHandler((event) => {
    return articles
})
