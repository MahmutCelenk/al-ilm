import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'articles/**/*.md',
        prefix: '/articles'
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        readTime: z.string(),
        order: z.number()
      })
    })
  }
})
