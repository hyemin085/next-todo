import Header from "./header";
import styles from "./_layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.layout}>
          <div>
        <Header/>
          </div>

      <main className={styles.main_layout}>{children}</main>
      </div>
    </>
  );
}
