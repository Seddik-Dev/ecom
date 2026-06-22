import { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart, ChevronDown, User } from "lucide-react";
// import Cart from "./Cart";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Best Sellers",
    link: "/best-sellers",
  },
  {
    name: "Gift Ideas",
    link: "/gift-ideas",
  },
  {
    name: "Games",
    link: "/games",
  },
  {
    name: "PC",
    link: "/pc",
  },
  {
    name: "Music",
    link: "/music",
  },
];

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Close the cart dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-slate-900 px-6">
      {/* Top row */}
      <div className="flex items-center justify-between py-4">
        {/* Search */}
        <div className="flex items-center gap-2 text-slate-400">
          <Search size={18} />
          <span className="text-sm">Search</span>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">Ecommerce</span>
        </div>

        {/* Right side: cart + account */}
        <div className="flex items-center gap-6">
          <div className="relative" ref={cartRef}>
            <button
              type="button"
              onClick={() => setCartOpen((open) => !open)}
              className="flex items-center gap-2 text-white"
            >
              <span className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                  2
                </span>
              </span>
              <span className="text-sm font-medium">$109.12</span>
              <ChevronDown size={16} className="text-slate-400" />
            </button>

            {/* {cartOpen && <Cart onRemove={(id) => console.log("remove", id)} />} */}
          </div>

          <button type="button" className="flex items-center gap-2 text-white">
            <User size={18} />
            <span className="text-sm font-medium">Account</span>
            <ChevronDown size={16} className="text-slate-400" />
          </button>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-8 border-t border-slate-700/50 py-3">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="text-sm font-medium text-slate-200 hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
