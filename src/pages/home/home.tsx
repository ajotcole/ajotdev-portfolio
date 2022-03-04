import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.innerContent}>
        <div className={styles.headline}>AJOT.DEV</div>
        <div>Image and Text goes here</div>
        <div>Welcome Text goes here</div>
        <div>CV goes here</div>
      </div>
    </div>
  );
};
