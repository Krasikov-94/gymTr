"use client";
import { useNight } from "@/store";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const { night } = useNight();

  console.log(night);

  return (
    <>
      <div className={night ? styles.general : styles.generalDay}>
        <div className={styles.chest}>
          <Link href={"/chest"}>chest</Link>
        </div>
        <div className={styles.back}>
          <Link href={"/back"}>back</Link>
        </div>
        <div className={styles.legs}>
          <Link href={"/legs"}>legs</Link>
        </div>
        <div className={styles.arms}>
          <Link href={"/arms"}>arms</Link>
        </div>
        <div className={styles.shoulders}>
          <Link href={"/shoulders"}>shoulders</Link>
        </div>
      </div>
    </>
  );
}
