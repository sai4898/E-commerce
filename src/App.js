import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import CartPage from "./components/CartPage";
import "./index.css";

// Sample data
import products from "./db/data";
import Footer from "./Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to filter and map products
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          addToCart={addToCart}
        />
      )
    );
  }

  // Function to add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.title === item.title);
    if (existingItem) {
      // Item already exists in cart, update its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Item does not exist in cart, add it
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to increase quantity of cart item
  const increaseQuantity = (title) => {
    setCartItems(
      cartItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity of cart item
  const decreaseQuantity = (title) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };
  
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Router>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} cartItemCount={cartItems.length} />
        <Recommended handleClick={handleClick} cartItems={cartItems} />
        <Routes> 
          <Route exact path="/" element={<Products result={result} />} /> 
          <Route path="/cart" element={<CartPage cartItems={cartItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} /> {/* Use element prop */}
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
