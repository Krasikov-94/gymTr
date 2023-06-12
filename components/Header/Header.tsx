"use client";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./header.module.css";
import { Button, Switch } from "@nextui-org/react";
import { Category, TwoUsers } from "react-iconly";
import { useRouter } from "next/navigation";
import Image from "next/image";
import random from "../../app/img/icons8-random-100.png";
import { useNight } from "@/store";

export const Header = () => {
  const router = useRouter();

  const { night, increment, decrement } = useNight();

  const viewDay = (event: any) => {
    if (event.checked) {
      decrement();
    } else {
      increment();
    }
  };

  const randomNumber = Math.floor(Math.random() * 6);

  const ran = () => {
    switch (randomNumber) {
      case 1:
        return router.push("/chest");
      case 2:
        return router.push("/back");
      case 3:
        return router.push("/legs");
      case 4:
        return router.push("/arms");
      case 5:
        return router.push("/shoulders");
      case 0:
        return router.push("/chest");
    }
    return;
  };

  return (
    <>
      <header className={night ? styles.header : styles.headerDay}>
        <div style={{ display: "flex" }}>
          <Button
            className={styles.but1}
            auto
            color="error"
            icon={<AiOutlineHome fill={night ? "currentColor" : "grey"} />}
            onPress={() => router.push("/")}
            as="button"
          />
          <Button
            className={styles.but1}
            auto
            color="error"
            icon={
              <Category
                set="bold"
                primaryColor={night ? "currentColor" : "grey"}
              />
            }
            onPress={() => router.push("/home")}
            as="button"
          />
          <Button
            className={styles.but}
            color={night ? "gradient" : "warning"}
            onPress={() => router.push("/user")}
            as="button"
          >
            <TwoUsers set="bold" primaryColor="white" />
          </Button>
          <div className={styles.random}>
            <Button
              className={styles.but}
              color={night ? "gradient" : "warning"}
              onPress={() => ran()}
              as="button"
            >
              <Image
                className={night ? styles.png : styles.pngDay}
                src={random}
                width={27}
                height={27}
                alt="Picture of the author"
              />
            </Button>
          </div>
        </div>
        <Switch
          squared
          color="warning"
          checked={true}
          onChange={(event) => viewDay(event.target)}
        ></Switch>
      </header>
    </>
  );
};
