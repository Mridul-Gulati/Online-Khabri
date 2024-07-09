import Image from 'next/image'
import { allBlogs } from '../../.contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPosts from '../components/Home/FeaturedPosts'
import RecentPosts from '../components/Home/RecentPosts'
import OneSignal from 'react-onesignal';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    OneSignal.init({ appId: '660d5964-dcf7-44b7-8345-13544b9f2474' })
  });

  console.log(allBlogs)
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
