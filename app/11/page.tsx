"use client";
import "./globals.css";
import styles from "./page.module.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import banner5 from "../../public/images/11/main-banner/banner8.jpg";
import banner2 from "../../public/images/11/main-banner/banner5.jpg";
import banner3 from "../../public/images/11/main-banner/banner3.jpg";
import Image from "next/image";
import Script from "next/script";
import logo from "../../public/images/11/logo/11-logo.svg";
import aboutUs from "../../public/images/11/about-us/teacup.png";
import coffee1 from "../../public/images/11/coffee/coffee1.png";
import coffee2 from "../../public/images/11/coffee/coffee2.png";
import coffee3 from "../../public/images/11/coffee/coffee3.png";
import coffee4 from "../../public/images/11/coffee/coffee4.png";
import coffee5 from "../../public/images/11/coffee/coffee5.png";
import coffee6 from "../../public/images/11/coffee/coffee6.png";
import coffee7 from "../../public/images/11/coffee/coffee7.png";
import coffee8 from "../../public/images/11/coffee/coffee8.png";
import gallery1 from "../../public/images/11/gallery/gallery1.jpg";
import gallery2 from "../../public/images/11/gallery/gallery2.jpg";
import gallery3 from "../../public/images/11/gallery/gallery3.jpg";
import gallery4 from "../../public/images/11/gallery/gallery4.jpg";
import gallery5 from "../../public/images/11/gallery/gallery5.jpg";
import gallery6 from "../../public/images/11/gallery/gallery6.jpg";
import gallery7 from "../../public/images/11/gallery/gallery7.jpg";
import gallery8 from "../../public/images/11/gallery/gallery8.jpg";
import mapDetail from "../../public/images/11/map-detail/map-detail.jpg";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  const settings = {
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=040c5bb116750422de3452e081e62cb1&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <main className={styles.container}>
        <div className={styles.header_slider_container}>
          <header className={styles.header_container}>
            <div className={styles.header_wrapper}>
              <div className={styles.logo_wrapper}>
                <Image
                  className={styles.logo}
                  src={logo}
                  fill={true}
                  alt="로고이미지"
                />
              </div>
              <nav>
                <ol className={styles.li_wrapper}>
                  <Link duration={600} to="1" spy={true} smooth={true}>
                    <li>소개</li>
                  </Link>
                  <Link duration={600} to="2" spy={true} smooth={true}>
                    <li>메뉴</li>
                  </Link>
                  <Link duration={600} to="3" spy={true} smooth={true}>
                    <li>갤러리</li>
                  </Link>
                  <Link duration={600} to="4" spy={true} smooth={true}>
                    <li>오시는 길</li>
                  </Link>
                  <Link duration={600} to="5" spy={true} smooth={true}>
                    <li>문의</li>
                  </Link>
                </ol>
              </nav>
            </div>
          </header>

          <Slider {...settings}>
            <div className={styles.main_banner_image_wrapper}>
              <div className={styles.main_banner_text_wrapper}>
                <div
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-duration="600"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <h2 className={styles.main_banner_text}>
                    매일의 한잔, <br />더 특별한 순간을 만나다
                  </h2>
                </div>
              </div>
              <Image
                className={styles.main_banner_image}
                src={banner5}
                fill={true}
                alt="메인배너1"
              />
            </div>
            <div className={styles.main_banner_image_wrapper}>
              <div className={styles.main_banner_text_wrapper}>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="700"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <h2 className={styles.main_banner_text}>
                    신선한 원두, <br />더 진한 즐거움
                  </h2>
                </div>
              </div>
              <Image
                className={styles.main_banner_image}
                src={banner2}
                fill={true}
                alt="메인배너2"
              />
            </div>
          </Slider>
        </div>

        <section id="1" className={styles.about_us_container}>
          <div className={styles.about_us_wrapper}>
            <div className={styles.about_us_image_wrapper}>
              <Image
                className={styles.about_us_image}
                src={aboutUs}
                fill={true}
                alt="정보이미지"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <h2 className={styles.about_us_title}>더 나은 커피를 위해</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="270"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <p className={styles.about_us_description}>
                더 나은 커피를 위해 노력하고 있어 매일 아침 신선하고 고품질의
                원두를 선택하며, 커피 매니아들의 추천을 따라 정확한 추출 시간과
                온도를 조절하여 완벽한 풍미를 창출합니다. 또한, 다양한 원두의
                특징을 이해하고 브루잉 메서드를 실험하여 새로운 맛의 경험을
                즐기며, 끊임없이 커피의 품질을 향상시키고자 노력하고 있습니다.
              </p>
            </div>
          </div>
        </section>
        <section id="2" className={styles.menu_container}>
          <div className={styles.menu_wrapper}>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="350"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <h2 className={styles.menu_text}>메뉴</h2>
            </div>
            <div className={styles.menu_line}></div>
            <div className={styles.item_container}>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee1}
                    fill={true}
                    alt="커피1"
                  />
                </div>
                <div className={styles.item_name}>Caramel Macchiato</div>
                <div className={styles.item_price}>5,500₩</div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee2}
                    fill={true}
                    alt="커피2"
                  />
                </div>
                <div className={styles.item_name}>Moca</div>
                <div className={styles.item_price}>5,500₩</div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee3}
                    fill={true}
                    alt="커피3"
                  />
                </div>
                <div className={styles.item_name}>Capuchino</div>
                <div className={styles.item_price}>5,500₩</div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee4}
                    fill={true}
                    alt="커피4"
                  />
                </div>
                <div className={styles.item_name}>Cafe con leche</div>
                <div className={styles.item_price}>5,500₩</div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee5}
                    fill={true}
                    alt="커피5"
                  />
                </div>
                <div className={styles.item_name}>El mago de Oz</div>
                <div className={styles.item_price}>5,500₩</div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee6}
                    fill={true}
                    alt="커피6"
                  />
                </div>
                <div className={styles.item_name}>Americano</div>
                <div className={styles.item_price}>4,000₩</div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee7}
                    fill={true}
                    alt="커피7"
                  />
                </div>
                <div className={styles.item_name}>Cafe irlandes</div>
                <div className={styles.item_price}>5,500₩</div>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={coffee8}
                    fill={true}
                    alt="커피8"
                  />
                </div>
                <div className={styles.item_name}>Americano de coco</div>
                <div className={styles.item_price}>5,500₩</div>
              </div>
            </div>
          </div>
        </section>
        <section id="3" className={styles.gallery_container}>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="350"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2 className={styles.gallery_text}>갤러리</h2>
          </div>
          <div className={styles.gallery_line}></div>
          <div className={styles.gallery_wrapper}>
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
            <div className={styles.gallery_image_wrapper}>
              <Image
                className={styles.gallery_image}
                src={gallery7}
                fill={true}
                alt="갤러리7"
              />
            </div>
            <div className={styles.gallery_image_wrapper}>
              <Image
                className={styles.gallery_image}
                src={gallery8}
                fill={true}
                alt="갤러리8"
              />
            </div>
          </div>
        </section>
        <section id="4" className={styles.map_container}>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="350"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2 className={styles.map_text}>오시는 길</h2>
          </div>
          <div className={styles.map_line}></div>
          <div className={styles.map_wrapper}>
            <div className={styles.left_container}>
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
                    시그니처원두
                  </div>
                </MapMarker>
              </Map>
            </div>
            <div className={styles.right_container}>
              <div className={styles.right_wrapper}>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <h2 className={styles.right_title_text}>
                    오픈 시간
                    <br />
                    &<br />
                    문의
                  </h2>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="270"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <div className={styles.right_description_wrapper}>
                    <div className={styles.right_time_wrapper}>
                      <p>월요일 - 금요일 // CLOSED</p>
                      <p>토요일 // 09:00 - 18:00</p>
                      <p>일요일 // CLOSED</p>
                    </div>
                    <div className={styles.right_reservation_wrapper}>
                      <p>카페 전화번호:</p>
                      <p>032-123-4567</p>
                      <p>010-1234-5678</p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                className={styles.map_detail_image}
                src={mapDetail}
                fill={true}
                alt="맵이미지"
              />
            </div>
          </div>
        </section>
      </main>

      <footer id="5" className={styles.footer_container}>
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

            <p>Copyright ©시그니처원두 CO. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
