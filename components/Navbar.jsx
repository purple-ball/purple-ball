import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow navbar-gradient backdrop-blur-sm">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl font-bold">我的个人空间</h2>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/">首页</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/portfolio">作品集</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/blog">博客</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}; 