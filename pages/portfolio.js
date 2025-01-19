import Head from 'next/head'

export default function Portfolio() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>作品集 - 我的个人网站</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <h1 className="text-3xl font-bold mb-8">我的作品集</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 这里后续会添加作品展示卡片 */}
        </div>
      </main>
    </div>
  );
} 