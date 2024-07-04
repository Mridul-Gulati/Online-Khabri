import Image from 'next/image'
import { allBlogs } from '../../.contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPosts from '../components/Home/FeaturedPosts'
import RecentPosts from '../components/Home/RecentPosts'

export default function Home() {
  console.log(allBlogs)
  return (
    <head>
      <meta name="google-site-verification" content="tSN9QlQTTpSHBX0GFUyydWMoTfohHzDQfx_XrBjl2jw" />
    </head>
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
