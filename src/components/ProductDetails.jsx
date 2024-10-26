// components/ProductDetails.jsx
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/ApiService";
import { VscLoading } from "react-icons/vsc";
import { CartContext } from "../context/CartContext"; // Import your CartContext

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext); // Access the CartContext

  useEffect(() => {
    fetchProducts().then((data) => {
      const selectedProduct = data.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: { id: product.id, title: product.title, price: product.price, quantity: 1 } });
      alert(`${product.title} has been added to your cart!`);
    }
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center text-3xl h-screen">
        <VscLoading />
      </div>
    );
  }

  return (
    <div className="pt-10 flex flex-col lg:flex-row justify-around items-center lg:items-start gap-12 font-poppins px-12 lg:px-24">
      <img src={product.image} alt={product.title} className="lg:h-72 lg:w-72 h-60 w-60" />
      <div className="space-y-6">
        <h1 className="lg:text-3xl font-bold text-xl">{product.title}</h1>
        <p className="text-justify">{product.description}</p>
        <p className="text-xl font-bold border-2 border-orange-400 text-orange-400 inline-block px-4 py-2">
          ${product.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="mx-8 bg-green-500 text-white border-2 border-green-600 px-6 py-3 rounded-lg font-bold transition  hover:bg-white hover:text-green-500 hover:border-green-600"
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

