"use client";
import "./globals.css";
import styles from "./page.module.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import banner1 from "../../public/images/35/banners/banner1.jpg";
import banner2 from "../../public/images/35/banners/banner2.jpg";
import logo from "../../public/logo/35/logo.png";
import pc from "../../public/images/35/items/pc.png";
import monitor from "../../public/images/35/items/monitor.png";
import mouse from "../../public/images/35/items/mouse.png";
import keyboard from "../../public/images/35/items/keyboard.png";
import gallery1 from "../../public/images/35/gallery/image1.jpg";
import gallery2 from "../../public/images/35/gallery/image2.jpeg";
import gallery3 from "../../public/images/35/gallery/image3.jpeg";
import gallery4 from "../../public/images/35/gallery/image4.png";
import gallery5 from "../../public/images/35/gallery/image5.png";
import gallery6 from "../../public/images/35/gallery/image6.png";
import address1 from "../../public/images/35/address/address1.jpg";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const gallerySettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <main className={styles.container}>
        <section className={styles.main_container}>
          <div className={styles.scroll_down_icon_top}></div>
          <div className={styles.scroll_down_icon_bottom}></div>
          <div className={styles.header_container}>
            <div className={styles.header_wrapper}>
              <div className={styles.logo_wrapper}>
                <Image
                  className={styles.logo_image}
                  src={logo}
                  fill={true}
                  alt="로고"
                />
              </div>

              <nav>
                <ol className={styles.ol_wrapper}>
                  <Link duration={600} to="1" spy={true} smooth={true}>
                    <li>컴퓨터 사양</li>
                  </Link>
                  <Link duration={600} to="2" spy={true} smooth={true}>
                    <li>요금제</li>
                  </Link>
                  <Link duration={600} to="3" spy={true} smooth={true}>
                    <li>갤러리</li>
                  </Link>
                  <Link duration={600} to="4" spy={true} smooth={true}>
                    <li>오시는 길</li>
                  </Link>
                </ol>
              </nav>
            </div>
          </div>
          <Slider {...settings}>
            <div className={styles.main_image_wrapper}>
              <div className={styles.main_text_wrapper}>
                <h2 className={styles.main_text}>
                  고사양, 고성능,
                  <br />
                  그리고 최고의 경험
                </h2>
              </div>
              <Image
                className={styles.main_banner_image}
                src={banner1}
                fill={true}
                alt="메인배너1"
              />
            </div>
            <div className={styles.main_image_wrapper}>
              <div className={styles.main_text_wrapper}>
                <h2 className={styles.main_text}>
                  ㅇㅇPC가 여러분들에게
                  <br />
                  최고의 게임 환경을 선사합니다
                </h2>
              </div>
              <Image
                className={styles.main_banner_image}
                src={banner2}
                fill={true}
                alt="메인배너2"
              />
            </div>
          </Slider>
        </section>
        <section id="1" className={styles.status_container}>
          <div className={styles.status_wrapper}>
            <div className={styles.status_title_wrapper}>
              <div className={styles.stick}></div>
              <h2 className={styles.status_title}>컴퓨터 사양</h2>
            </div>
            <div className={styles.items_container}>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={pc}
                    fill={true}
                    alt="pc이미지"
                  />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-offset="270"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <div className={styles.item_text_wrapper}>
                    <h3 className={styles.item_title}>PC</h3>
                    <p className={styles.item_description}>Intel i5 10400F</p>
                    <p className={styles.item_description_bottom}>
                      GeForce GT 730 D3 2GB
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={monitor}
                    fill={true}
                    alt="pc이미지"
                  />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-offset="270"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <div className={styles.item_text_wrapper}>
                    <h3 className={styles.item_title}>모니터</h3>
                    <p className={styles.item_description}>
                      LG UltraGear 27GQ50F 4k
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={keyboard}
                    fill={true}
                    alt="pc이미지"
                  />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-offset="270"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <div className={styles.item_text_wrapper}>
                    <h3 className={styles.item_title}>키보드</h3>
                    <p className={styles.item_description}>COX CK01 TKL 청축</p>
                  </div>
                </div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper_mouse}>
                  <Image
                    className={styles.item_image}
                    src={mouse}
                    fill={true}
                    alt="pc이미지"
                  />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-offset="270"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <div className={styles.item_text_wrapper}>
                    <h3 className={styles.item_title}>마우스</h3>
                    <p className={styles.item_description}>
                      Logitech G102IC 2세대
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="2" className={styles.plan_container}>
          <div className={styles.plan_wrapper}>
            <div className={styles.plan_title_wrapper}>
              <div className={styles.stick}></div>
              <h2 className={styles.plan_title}>요금제</h2>
            </div>
            <div className={styles.plan_items_container}>
              <div className={styles.plan_item_wrapper}>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="0"
                >
                  <h3>1시간</h3>
                  <p>1,000₩</p>
                </div>
              </div>
              <div className={styles.plan_item_wrapper}>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="200"
                >
                  <h3>3시간</h3>
                  <p>3,000₩</p>
                </div>
              </div>
              <div className={styles.plan_item_wrapper}>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  <h3>7시간</h3>
                  <p>6,000₩</p>
                </div>
              </div>
              <div className={styles.plan_item_wrapper}>
                <div
                  style={{ textAlign: "center" }}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                  data-aos-delay="600"
                >
                  <h3>11시간</h3>
                  <p>10,000₩</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="3" className={styles.gallery_container}>
          <div className={styles.gallery_wrapper}>
            <div className={styles.stick}></div>
            <h2 className={styles.gallery_title}>갤러리</h2>
          </div>
          <div className={styles.gallery_carousel_container}>
            <Slider {...gallerySettings}>
              <div className={styles.gallery_image_wrapper}>
                <Image
                  className={styles.gallery_image}
                  src={gallery1}
                  fill={true}
                  alt="갤러리1"
                />
              </div>
              <div className={styles.gallery_image_wrapper}>
                <Image
                  className={styles.gallery_image}
                  src={gallery2}
                  fill={true}
                  alt="갤러리2"
                />
              </div>
              <div className={styles.gallery_image_wrapper}>
                <Image
                  className={styles.gallery_image}
                  src={gallery3}
                  fill={true}
                  alt="갤러리3"
                />
              </div>
              <div className={styles.gallery_image_wrapper}>
                <Image
                  className={styles.gallery_image}
                  src={gallery4}
                  fill={true}
                  alt="갤러리4"
                />
              </div>
              <div className={styles.gallery_image_wrapper}>
                <Image
                  className={styles.gallery_image}
                  src={gallery5}
                  fill={true}
                  alt="갤러리5"
                />
              </div>
              <div className={styles.gallery_image_wrapper}>
                <Image
                  className={styles.gallery_image}
                  src={gallery6}
                  fill={true}
                  alt="갤러리6"
                />
              </div>
            </Slider>
          </div>
        </section>
      </main>
      <footer id="4" className={styles.footer_container}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_left}>
            <p>사업자등록번호: 123-45-67890 대표자 : 홍길동</p>
            <p>주소: 서울특별시 용산구 한강대로 405</p>
            <p>대표번호: 1234-5678</p>
            <p>이메일: abc123@naver.com</p>
          </div>
          <div className={styles.footer_right}>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Follow Us{" "}
              <FaYoutube
                className={styles.icons}
                onClick={() =>
                  (window.location.href = "http://www.youtube.com")
                }
              />
              <FaInstagram
                className={styles.icons}
                onClick={() =>
                  (window.location.href = "http://www.instagram.com")
                }
              />
              <FaFacebook
                className={styles.icons}
                onClick={() =>
                  (window.location.href = "http://www.facebook.com")
                }
              />
            </span>

            <p>Copyright ©STACK CO. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
