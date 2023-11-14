import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import useIndex from '@/data/hooks/pages/useIndex.page';
import PostList from '@/ui/components/PostList/PostList';

export default function Home() {

  const { posts } = useIndex();
  console.log(posts);

  return (
      <div>
        <Head>
          <title>Ola mundo</title>
          <link rel="stylesheet" href="./favicon.ico" />
        </Head>
        <h3>Esse é o home do site</h3>

        <Link href="/contatos">
          Contatos
        </Link>

        <main >
          <PostList posts={posts} />
        </main>

      </div>
  )

  
}
