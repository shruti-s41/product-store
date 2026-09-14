import { Navigate, Outlet, Route, Routes, Link } from 'react-router-dom'
import { Star, Search, ShoppingCart } from 'lucide-react'
import Modal from './components/Modal.jsx'
import { useState } from 'react'

function RootLayout() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex items-center gap-2 text-pink-700">
        <Star size={24} />

        <Link to="/" className="font-display text-xl font-bold">
          Product Store
        </Link>
      </div>

      <div className="mt-4 flex gap-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </div>

      <main className="mt-12">
        <Outlet />
      </main>
    </div>
  )
}

function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <h1 className="font-display text-4xl font-bold">
        All products
      </h1>

      <p className="mt-4 text-gray-600">
        here are all the producst
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
        className="mt-6 rounded bg-pink-700 px-4 py-2 text-white"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Modal"
      >
        <p className="text-gray-600">
          This is my modal.
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 rounded bg-gray-200 px-4 py-2"
        >
          Close
        </button>
      </Modal>
    </>
  )
}

function ProductDetailPage() {
  return (
    <h1 className="font-display text-3xl font-bold">
      Product Detail Page
    </h1>
  )
}

function CartPage() {
  return (
    <h1 className="font-display text-3xl font-bold">
      Cart Page
    </h1>
  )
}

function AdminPage() {
  return (
    <h1 className="font-display text-3xl font-bold">
      Admin Page
    </h1>
  )
}

function NotFoundPage() {
  return (
    <h1 className="font-display text-3xl font-bold">
      Page Not Found
    </h1>
  )
}

function RequireAdmin({ children }) {
  const isAdmin = false

  if (!isAdmin) {
    return <Navigate to="/products" replace />
  }

  return children
}

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={<Navigate to="/products" replace />}
        />

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetailPage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminPage />
            </RequireAdmin>
          }
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  )
}

export default App