import { useState } from 'react'
import { Star, Search, ShoppingCart } from 'lucide-react'
import Modal from '/components/Modal.jsx'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen p-8">
      <div className="flex items-center gap-2 text-pink-700">
        <Star size={24} />
        <span className="font-display text-xl font-bold">
          Product Store
        </span>
      </div>

      <main className="mt-12">
        <h1 className="font-display text-4xl font-bold">
          All products
        </h1>

        <p className="mt-4 text-gray-600">
          Here are all the products
        </p>

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

        <button
          onClick={() => setIsOpen(true)}
          className="mt-8 rounded bg-pink-700 px-4 py-2 text-white hover:bg-pink-800"
        >
          Open Modal
        </button>
      </main>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Modal"
      >
        <p className="text-gray-600">
          This is a simple modal for testing.
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 rounded bg-gray-200 px-4 py-2 text-gray-700"
        >
          Close
        </button>
      </Modal>
    </div>
  )
}

export default App
