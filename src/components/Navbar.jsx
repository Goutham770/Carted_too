// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

const Navbar = () => {
  const { state } = useContext(CartContext);
  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  ); // Total items in the cart

  return (
    <nav className=" p-4 text-white flex justify-around items-center cursor-pointer">
      <Link to="/" className="lg:text-4xl text-lg font-bold text-purple-400 font-orbitron tracking-widest">
        carted
      </Link>
      <div className="flex items-center justify-center">
        <div className="text-lg font-poppins font-bold text-green-300 mr-4 hover:text-purple-400 transition">
          Products
        </div>
        <div className="relative hover:scale-90">
          <Link
            to="/cart"
            className="flex items-center border-2 text-sm px-2 py-1 text-green-400 border-green-600 lg:px-6 lg:py-2 rounded-xl font-poppins font-bold active:scale-90 hover:bg-green-200"
          >
            <FaShoppingCart className="mr-2" /> {/* Cart icon */}
            Cart - <span className="pl-2">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
