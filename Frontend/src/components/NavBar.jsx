import { Link } from "react-router-dom"

function NavBar(){
    return (
        <header className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
  <div className="px-4">
    <div className="flex items-center justify-between">
      <div className="flex shrink-0">
        <Link aria-current="page" className="flex items-center" to="/">

       <span className="inline-block rounded-lg px-2 py-1 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 transition-all duration-200 hover:from-pink-600 hover:via-purple-600 hover:to-orange-500">
  किताबMart
</span>
          
        </Link>
      </div>
<div className="hidden md:flex md:items-center md:justify-center md:gap-5">
  <a
    aria-current="page"
    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 transition-all duration-200 hover:from-pink-600 hover:via-purple-600 hover:to-orange-500"
    href="#"
  >
    How it works
  </a>
  <a
    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 transition-all duration-200 hover:from-pink-600 hover:via-purple-600 hover:to-orange-500"
    href="#"
  >
    Pricing
  </a>
</div>

      <div className="flex items-center justify-end gap-3">
<Link
  className="hidden items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:from-pink-600 hover:via-purple-600 hover:to-orange-500 sm:inline-flex"
  to="/create-page"
>
  Add Book
</Link>

 
      </div>
    </div>
  </div>
</header>

    )
}

export default NavBar