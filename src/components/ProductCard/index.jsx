import Button from "../Button";
import styles from "./styles.module.css";

function ProductCard({productImage, productName, productPrice}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={productImage} alt="Product" />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.productName}>{productName}</p>
        <p className={styles.productPrice}><strong>{productPrice}</strong></p>
        <Button>Comprar</Button>
      </div>
    </div>
  );
}

export default ProductCard;
