import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import GithubSlugger from "github-slugger"


const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/**/*.mdx',
    contentType: "mdx",
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        publishedAt: {
            type: 'date',
            required: true,
        },
        updatedAt: {
            type: 'date',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'image'
        },
        isPublished: {
            type: 'boolean',
            default: true,
            required: true,
        },
        author: {
            type: 'list',
            of: { type: 'string' },
            required: true,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            required: true,
        },
    },
    computedFields: {
        url_path: {
            type: 'string',
            resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
        },
        readingTime: {
            type: "json",
            resolve: (doc) => readingTime(doc.body.raw),
        },
        toc: {
            type: "json",
            resolve: async (doc) => {
                const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const heading = Array.from(doc.body.raw.matchAll(regularExp)).map(({ groups }) => {
                    const flag = groups?.flag;
                    const content = groups?.content;
                    const slugger = new GithubSlugger
                    return {
                        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
                        text: content,
                        slug: content ? slugger.slug(content) : undefined
                    }
                })
                return heading;
            },
        },
    },
}))

const codeOptions = {
    theme: "github-dark",
}

export default makeSource({
    /* options */
    contentDirPath: 'content',
    documentTypes: [Blog],
    mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }], [rehypePrettyCode, codeOptions]] }
})