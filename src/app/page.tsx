import Image from "next/image";
import styles from "./page.module.css";
import { Button, Header } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Button label="Hello World" primary={true} />
        <Button label="Hello World 2"  />
        <Button label="Hello World 3" primary={true} size="large" />
        <Button label="Hello World 4" primary={true} />
      </main>
    </>
  );
}
