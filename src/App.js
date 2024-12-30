import "./App.scss";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { products, categories } from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header categories={categories} title="PRODUCTS LIST" />
      <ProductCard />
    </div>
  );
}

export default App;
