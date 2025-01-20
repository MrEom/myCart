import "./App.css";
import HomePage from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/Products/ProductsPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HomePage />
        <ProductsPage />
      </main>
    </div>
  );
};

export default App;
