"use client";
import * as React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import "animate.css";
import array from "../app/img/down-arrow_icon-icons.com_64915.svg";
import longArray from "../app/img/down-arrow_icon-icons.com_73592.svg";
import { useNight } from "@/store";

export default function General() {
  const { night } = useNight();

  return (
    <div className={night ? styles.wrapper : styles.wrapperDay}>
      <div className={night ? styles.head : styles.headDay}>
        <div className={night ? styles.text : styles.textDay}>
          <p>Случайные тренировки</p>
          <p>
            Тренируясь регулярно, Вы можете ощутить усталость и нежелание
            тренироваться. На помощь придут случайные тренировки на различные
            группы мышц.
          </p>
        </div>
        <Image
          className={styles.longArray}
          src={longArray}
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
      <div className={night ? styles.general : styles.generalDay}>
        <div className={styles.onediv}>
          <div className={styles.body}>
            <span>
              Когда речь идет о тренировке спины в тренажерном зале, важно
              понимать преимущества работы над этой группой мышц. Хорошо
              развитая спина не только помогает достичь сбалансированного и
              всестороннего телосложения, но и способствует улучшению осанки,
              уменьшению боли, укреплению позвоночника, плеч.
            </span>
          </div>
          <Image
            className={styles.png}
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.border}></div>
        <Image
          className={night ? styles.array : styles.arrayDay}
          src={array}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className={styles.twodiv}>
          <Image
            className={styles.png}
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className={styles.body}>
            <span>
              Для создания эффективных тренировок рук в тренажерном зале важно
              уделять внимание как бицепсам, так и трицепсам. Хотя бицепсы часто
              являются самой популярной группой мышц для тренировки, трицепсы на
              самом деле содержат больше мышечной массы, и ими не следует
              пренебрегать. Кроме того, важно делать выпады на руки под разными
              углами, чтобы стимулировать рост мышц.
            </span>
          </div>
        </div>
        <div className={styles.border}></div>
        <Image
          className={night ? styles.array : styles.arrayDay}
          src={array}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className={styles.threediv}>
          <div className={styles.body}>
            <span>
              Для построения сильной и хорошо развитой грудной клетки
              рекомендуется включать в тренировку разнообразные упражнения,
              направленные на различные области груди и работающие под разными
              углами. Такие жимовые движения, как жим лежа, жим в наклоне и жим
              в наклоне, должны составлять основу вашей тренировки для груди.
            </span>
          </div>
          <Image
            className={styles.png}
            src="https://images.unsplash.com/photo-1584827386894-fc939dad6078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.border}></div>
        <Image
          className={night ? styles.array : styles.arrayDay}
          src={array}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className={styles.fourdiv}>
          <Image
            className={styles.png}
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className={styles.body}>
            <span>
              При разработке тренировки для ног лучше всего придерживаться
              простоты и сосредоточиться на основных движениях нижней части
              тела, таких как приседания, подъемы бедра (дедлифты) и выпады. Эти
              движения направлены на основные группы мышц ног, включая ягодицы,
              квадрицепсы, подколенные сухожилия и икры.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <Image
        className={night ? styles.array : styles.arrayDay}
        src={array}
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <div className={styles.but}>
        <div className={styles.but1}>
          <Link href={"/home"}>Пройти на страницу выбора</Link>
        </div>
        <div className={styles.but2}>
          <Link href={"/user"}>Страница создателя</Link>
        </div>
      </div>
    </div>
  );
}
