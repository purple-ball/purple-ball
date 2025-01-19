import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>我的个人网站</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
            <div className="lg:px-4 lg:mt-12 ">
              <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl">
                你好，我是XXX
              </h1>
              <div className="mt-6 text-gray-800">
                <p className="mb-4">
                  这里是我的个人简介。我是一名热爱创作的开发者，专注于...
                  （请在这里添加您的个人简介）
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
              <Image
                src="/profile.jpg"
                alt="Profile"
                priority={true}
                className="rounded-full"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 