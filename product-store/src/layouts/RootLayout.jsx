import { Link, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <nav className="flex items-center gap-6 border-b p-4">
        <Link to="/" className="font-display font-bold text-pink-700">
          Product Store
        </Link>

        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <main className="p-8">
        <Outlet />
      </main>
    </div>
  )
}
