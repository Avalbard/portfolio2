"use client";
import "./globals.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "../../public/logo/79/text-1704839433239.png";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.main_container}>
          <div className={styles.main_wrapper}>
            <header className={styles.header_container}>
              <div className={styles.logo_wrapper}>
                <Image
                  className={styles.logo_image}
                  src={logo}
                  fill={true}
                  alt="로고이미지"
                />
              </div>
              <nav>
                <ol className={styles.ol_style}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ol>
              </nav>
            </header>
            <div className={styles.landing_container}></div>
          </div>
        </section>
      </main>
    </>
  );
}
