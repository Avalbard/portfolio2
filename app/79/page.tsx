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
import { Map, MapMarker } from "react-kakao-maps-sdk";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

import { EventHandler, MouseEvent, useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  const [image, setImage] = useState(Image1);

  useEffect((): void => {
    AOS.init();
  }, []);

  const handleClick =
    (data: StaticImageData) => (event: MouseEvent<HTMLButtonElement>) => {
      setImage(data);
    };
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=040c5bb116750422de3452e081e62cb1&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
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
                  <Link
                    style={{ zIndex: 30 }}
                    duration={600}
                    to="1"
                    spy={true}
                    smooth={true}
                  >
                    <li>1</li>
                  </Link>
                  <Link duration={600} to="2" spy={true} smooth={true}>
                    <li>2</li>
                  </Link>
                  <Link duration={600} to="3" spy={true} smooth={true}>
                    <li>3</li>
                  </Link>
                </ol>
              </nav>
            </header>
            <div className={styles.landing_container}>
              <div className={styles.landing_text_wrapper}>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="0"
                >
                  <h1>New fashion</h1>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  <h2>A new fashion revolution begins</h2>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="800"
                >
                  <button>More detail</button>
                </div>
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
        <section id="1" className={styles.clothing_type_container}>
          <div className={styles.clothing_type_wrapper}>
            <div className={styles.casual_clothing_wrapper}>
              <div className={styles.casual_clothing_image_wrapper}>
                <div className={styles.casual_clothing_info_wrapper}>
                  <div className={styles.casual_clothing_info_text_wrapper}>
                    <div
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-duration="400"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                      data-aos-delay="0"
                    >
                      <h2>Casual</h2>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-duration="400"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                      data-aos-delay="200"
                    >
                      <h3>Simple and trendy</h3>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-duration="400"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                      data-aos-delay="400"
                    >
                      <button>More detail</button>
                    </div>
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
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="400"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                      data-aos-delay="0"
                    >
                      <h2>Daily</h2>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="400"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                      data-aos-delay="200"
                    >
                      <h3>Easy and unassuming</h3>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="400"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                      data-aos-delay="400"
                    >
                      <button>More detail</button>
                    </div>
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
        <section id="2" className={styles.today_clothing_container}>
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
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="0"
                >
                  <h2>Outfit of the Day</h2>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="200"
                >
                  <h3>Your first thing in the morning</h3>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  <button>More detail</button>
                </div>
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
        <section id="3" className={styles.address_container}>
          <div className={styles.address_wrapper}>
            <div className={styles.address_wrapper_left}>
              <Map
                center={{ lat: 37.552998017, lng: 126.972548728 }}
                style={{ width: "100%", height: "100%" }}
              >
                <MapMarker position={{ lat: 37.552987017, lng: 126.972591728 }}>
                  <div
                    style={{
                      color: "#000",
                      textAlign: "center",
                    }}
                  >
                    Cloth
                  </div>
                </MapMarker>
              </Map>
            </div>
            <div className={styles.address_wrapper_right}>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <h2>010-1234-5678</h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <h3>서울 용산구 한강대로 405</h3>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer_container}>
          <div className={styles.footer_wrapper}>
            <span
              onClick={() =>
                (window.location.href = "http://www.instagram.com")
              }
            >
              Instagram
            </span>
            <span
              onClick={() => (window.location.href = "http://www.facebook.com")}
            >
              Facebook
            </span>
            <span onClick={() => (window.location.href = "http://www.x.com")}>
              Twitter
            </span>
            <span
              onClick={() => (window.location.href = "http://www.youtube.com")}
            >
              Youtube
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
