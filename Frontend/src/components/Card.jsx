import { Link } from "react-router-dom"

function Card({book}){
    return (
      <Link to={`/single-page/${book.id}`}>
  <div className="flex px-3 py-3">
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-64 object-cover"
        src={book.bookImage}
        alt="Error! while loading image."
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400">
          {book.bookName}
        </div>
        <p className="text-gray-700 text-base">
          {book.bookDescription}
        </p>
      </div>
      <div className="px-6 py-4 flex flex-wrap gap-2">
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400">
          ${book.bookPrice}
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400">
          {book.bookAuthor}
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400">
          {book.bookGenre}
        </span>
      </div>
    </div>
  </div>
</Link>

    )
}

export default Card