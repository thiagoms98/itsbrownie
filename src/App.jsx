import styles from './App.module.css';
import Header from "./components/Header";
import ProductCard from './components/ProductCard';

function App() {
  return (
    <>
      <Header />
      <div className={styles.highlights}>
        <h2>Destaques</h2>
        <div className={styles.productsContainer}>
          <ProductCard productImage={'/prod1.png'} productName={'A caixa mágica de brownies'} productPrice={'R$99,90'}/>
        </div>
      </div>
    </>
  );
}

export default App;
