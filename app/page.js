import styles from "./page.module.css";
import ProductList from "./products/ProductList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductList />
      </main>
    </div>
  );
}
