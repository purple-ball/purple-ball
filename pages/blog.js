import Head from 'next/head'

export default function Blog() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>博客 - 我的个人网站</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <h1 className="text-3xl font-bold mb-8">我的博客</h1>
        <div className="grid grid-cols-1 gap-6">
          {/* 这里后续会添加博客文章列表 */}
        </div>
      </main>
    </div>
  );
} 