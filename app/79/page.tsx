"use client";
import "./globals.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./page.module.css";
import Image, { StaticImageData } from "next/image";
import logo from "../../public/logo/79/text-1704839433239.png";
import landingImage from "../../public/images/79/icons8-team-6LZuSzSwso0-unsplash-ImgCreatorAI.png";
import casualImage from "../../public/images/79/engin-akyurt-jaZoffxg1yc-unsplash.jpg";
import dailyImage from "../../public/images/79/mark-adriane--uJ3N7HLiEg-unsplash.jpg";
import Image1 from "../../public/images/79/dateImage/bin-thi-u-JB173YX-jus-unsplash.jpg";
import Image2 from "../../public/images/79/dateImage/gbarkz-vqKnuG8GaQc-unsplash.jpg";
import Image3 from "../../public/images/79/dateImage/luobulinka-FO4mQZi1c0M-unsplash.jpg";
import Image4 from "../../public/images/79/dateImage/oleg-ivanov-sg_gRhbYXhc-unsplash.jpg";
import Image5 from "../../public/images/79/dateImage/pietra-schwarzler-lSLq_xQdFNI-unsplash.jpg";

import { EventHandler, MouseEvent, useEffect, useState } from "react";

export default function Home() {
  const [image, setImage] = useState(Image1);

  const handleClick =
    (data: StaticImageData) => (event: MouseEvent<HTMLButtonElement>) => {
      setImage(data);
    };
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
            <div className={styles.landing_container}>
              <div className={styles.landing_text_wrapper}>
                <h1>New fashion</h1>
                <h2>A new fashion revolution begins</h2>
                <button>More detail</button>
              </div>

              <div className={styles.image_wrapper}>
                <div className={styles.landing_image_behind_circle}></div>
                <Image
                  className={styles.image}
                  src={landingImage}
                  fill={true}
                  alt="랜딩이미지"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.clothing_type_container}>
          <div className={styles.clothing_type_wrapper}>
            <div className={styles.casual_clothing_wrapper}>
              <div className={styles.casual_clothing_image_wrapper}>
                <div className={styles.casual_clothing_info_wrapper}>
                  <div className={styles.casual_clothing_info_text_wrapper}>
                    <h2>Casual</h2>
                    <h3>Simple and trendy</h3>
                    <button>More detail</button>
                  </div>
                </div>
                <Image
                  className={styles.casual_clothing_image}
                  src={casualImage}
                  fill={true}
                  alt="상의이미지"
                />
              </div>
            </div>
            <div className={styles.daily_clothing_wrapper}>
              <div className={styles.daily_clothing_image_wrapper}>
                <div className={styles.daily_clothing_info_wrapper}>
                  <div className={styles.daily_clothing_info_text_wrapper}>
                    <h2>Daily</h2>
                    <h3>Easy and unassuming</h3>
                    <button>More detail</button>
                  </div>
                </div>
                <Image
                  className={styles.daily_clothing_image}
                  src={dailyImage}
                  fill={true}
                  alt="하의이미지"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.today_clothing_container}>
          <div className={styles.today_clothing_wrapper}>
            <div className={styles.today_image_wrapper}>
              <Image
                className={styles.today_image}
                src={image}
                fill={true}
                placeholder="blur"
                alt="오늘의옷"
              />
            </div>
            <div className={styles.today_text_wrapper}>
              <div className={styles.today_text_top}>
                <h2>Outfit of the Day</h2>
                <h3>Your first thing in the morning</h3>
                <button>More detail</button>
              </div>
              <div className={styles.week_wrapper}>
                <div className={styles.span_wrapper}>
                  <span
                    style={
                      image === Image1
                        ? { color: "black" }
                        : { color: "#b6b6b6" }
                    }
                    onClick={handleClick(Image1)}
                  >
                    Monday
                  </span>
                  <span
                    style={
                      image === Image2
                        ? { color: "black" }
                        : { color: "#b6b6b6" }
                    }
                    onClick={handleClick(Image2)}
                  >
                    Tuesday
                  </span>
                  <span
                    style={
                      image === Image3
                        ? { color: "black" }
                        : { color: "#b6b6b6" }
                    }
                    onClick={handleClick(Image3)}
                  >
                    Wednesday
                  </span>
                  <span
                    style={
                      image === Image4
                        ? { color: "black" }
                        : { color: "#b6b6b6" }
                    }
                    onClick={handleClick(Image4)}
                  >
                    Thursday
                  </span>
                  <span
                    style={
                      image === Image5
                        ? { color: "black" }
                        : { color: "#b6b6b6" }
                    }
                    onClick={handleClick(Image5)}
                  >
                    Friday
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.address_container}></section>
      </main>
    </>
  );
}
