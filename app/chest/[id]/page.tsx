import Link from "next/link";
import React from "react";
import styles from "./one.module.css";
import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `AnKr | Chest | ${id}`,
  };
}

export default async function OneCard({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <>
      <div className={styles.general}>
        <Link href="/chest">Назад</Link>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.id}</p>
      </div>
    </>
  );
}
