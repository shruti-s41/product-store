import { Star, Search, ShoppingCart, X } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex items-center gap-2 text-pink-700">
        <Star size={24} />
        <span className="font-display text-xl font-bold">
          Product Store
        </span>
      </div>
      <main className="mt-12">
        <h1 className="font-display text-4xl font-bold ">
          All products
        </h1>

        <p className="mt-4 text-gray-600">here are all the producst</p>
        <div className="mt-6 flex gap-4">
          <button className="flex items-center gap-2 text-gray-700">
            <Search size={20} />
            Search
          </button>

          <button className="flex items-center gap-2 text-gray-700">
            <ShoppingCart size={20} />
            Cart
          </button>
        </div>
      </main>
    </div>
  )
}

export default App