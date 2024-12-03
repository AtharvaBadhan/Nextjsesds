import Image from "next/image";
import styles from "./page.module.css";
import Colocation from "../../pages/Colocation/Colocation";
export default function Home() {
  return (
    <div className={styles.page}>
      <Colocation />
    </div>
  );
}
