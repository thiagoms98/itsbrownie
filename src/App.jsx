import { Instagram } from "lucide-react";
import styles from "./App.module.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className={styles.highlights}>
        <h2>Destaques</h2>
        <div className={styles.productsContainer}>
          <ProductCard
            productImage={"/prod1.png"}
            productName={"A caixa mágica de brownies"}
            productPrice={"R$99,90"}
          />
          <ProductCard
            productImage={"/prod2.png"}
            productName={"Seleção chocolatudos"}
            productPrice={"R$99,90"}
          />
          <ProductCard
            productImage={"/prod3.png"}
            productName={"Seleção queridinhos"}
            productPrice={"R$99,90"}
          />
          <ProductCard
            productImage={"/prod4.png"}
            productName={"Seleção brownieverso"}
            productPrice={"R$99,90"}
          />
        </div>
      </div>
      <div className={styles.allProducts}>
        <h2>Todos os produtos</h2>
        <div className={styles.productsContainer}>
          <ProductCard
            productImage={"/prod1.png"}
            productName={"A caixa mágica de brownies"}
            productPrice={"R$99,90"}
          />
          <ProductCard
            productImage={"/prod2.png"}
            productName={"Seleção chocolatudos"}
            productPrice={"R$99,90"}
          />
          <ProductCard
            productImage={"/prod3.png"}
            productName={"Seleção queridinhos"}
            productPrice={"R$99,90"}
          />
          <ProductCard
            productImage={"/prod4.png"}
            productName={"Seleção brownieverso"}
            productPrice={"R$99,90"}
          />
        </div>
      </div>
      <div className={styles.instagram}>
        <h4>
          {<Instagram size={20} />}
          <span>brownieitscacau</span>
        </h4>
        <div className={styles.postsContainer}>
          <img src="/post1.jpg" alt="" />
          <img src="/post2.jpg" alt="" />
          <img src="/post3.jpg" alt="" />
          <img src="/post4.jpg" alt="" />
          <img src="/post6.jpg" alt="" />
          <img src="/post7.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
