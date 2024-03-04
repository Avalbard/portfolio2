"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import { Link } from "react-scroll";
import mainImage from "../../public/images/2/main-image.jpg";
import aboutImage from "../../public/images/2/about-image.jpg";
import item1 from "../../public/images/2/item/item1.jpg";
import item2 from "../../public/images/2/item/09.png";
import item3 from "../../public/images/2/item/161b8772a6542.jpg";
import item4 from "../../public/images/2/item/23325_detail_067.jpg";
import item5 from "../../public/images/2/item/720X720.jpeg";
import item6 from "../../public/images/2/item/CC0446_thumb_1.png";
import item7 from "../../public/images/2/item/IMG_5627.jpeg";
import item8 from "../../public/images/2/item/cd56a44cc34953697b3b019fd484ebed.jpg";
import item9 from "../../public/images/2/item/ce1a9052ca01427fa857b17172b9390b1.jpg";
import item10 from "../../public/images/2/item/img.jpg";
import item11 from "../../public/images/2/item/31922_22741_3040.jpg";
import item12 from "../../public/images/2/item/pngtree-white-sauce-mayonnaise-png-image_10016745.png";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import store1 from "../../public/images/2/store-image/store-image1.jpg";
import store2 from "../../public/images/2/store-image/store-image2.jpg";
import store3 from "../../public/images/2/store-image/store-image3.jpg";
import banner from "../../public/images/2/main-banner/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=040c5bb116750422de3452e081e62cb1&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <main className={styles.container}>
        <div className={styles.main_image_wrapper}>
          <section className={styles.main_text_wrapper}>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <h1 className={styles.main_text_title}>바쁘니까, 더 맛있게</h1>
              <h2 className={styles.main_text_description}>
                시간과 맛 어느 하나도 포기할 수 없는 현대인을 위한 치킨을
                만듭니다.
              </h2>
            </div>
          </section>

          {/* <div className={styles.image_gradient}></div> */}
          <Image
            className={styles.main_image}
            src={mainImage}
            fill={true}
            alt="메인이미지"
          />
        </div>

        <div id="1" className={styles.about_container}>
          <div className={styles.about_wrapper}>
            <div className={styles.about_left_wrapper}>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
              >
                <h2 className={styles.about_title}>
                  매일매일 신선한 <span style={{ color: "#ebb403" }}>기름</span>
                  을 씁니다
                </h2>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="600"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
              >
                <p className={styles.about_description}>
                  당신의 입맛을 위한 건강한 선택! 저희 치킨집은 신선하고 깨끗한
                  기름을 사용하여 고객님들에게 건강한 맛을 제공하며, 철저한 품질
                  관리와 특별한 비법으로 맛과 건강을 동시에 책임지며, 건강한
                  다이닝을 추구하는 고객들을 위해 최상의 식재료와 깨끗한
                  기름으로 최고의 맛과 건강을 약속합니다.
                </p>
              </div>
            </div>

            <div className={styles.about_right_wrapper}>
              <Image
                className={styles.about_image}
                src={aboutImage}
                fill={true}
                alt="소개이미지"
              />
            </div>
          </div>
        </div>
        <div className={styles.scroll_text_wrapper}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 72">
            <text className={styles.scroll_text_start} x="0" y="30">
              chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;
            </text>
            <text className={styles.scroll_text_end} x="0" y="30">
              chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;chicken&nbsp;&nbsp;
            </text>
          </svg>
        </div>

        <div id="2" className={styles.menu_container}>
          <div className={styles.menu_wrapper}>
            <div className={styles.menu_left_wrapper}>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
              >
                <h2 className={styles.menu_text_title}>추천 메뉴</h2>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="700"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
              >
                <nav>
                  <ol>
                    <li className={styles.menu_text_detail}>
                      <Link to="2-1">피자&치킨</Link>
                    </li>
                    <li className={styles.menu_text_detail}>
                      <Link to="2-2">사이드메뉴</Link>
                    </li>
                    <li className={styles.menu_text_detail}>
                      <Link to="2-3">소스</Link>
                    </li>
                    <li className={styles.menu_text_detail}>
                      <Link to="2-4">음료&주류</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className={styles.menu_right_wrapper}>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item1}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>후라이드</p>
                <p className={styles.item_price}>18,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item2}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>양념치킨</p>
                <p className={styles.item_price}>19,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item3}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>간장치킨</p>
                <p className={styles.item_price}>19,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item4}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>치즈볼</p>
                <p className={styles.item_price}>6,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item10}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>양념감자</p>
                <p className={styles.item_price}>4,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item9}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>소떡소떡</p>
                <p className={styles.item_price}>6,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item7}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>양념 소스</p>
                <p className={styles.item_price}>2,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item8}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>머스타드 소스</p>
                <p className={styles.item_price}>2,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item12}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>마요네즈</p>
                <p className={styles.item_price}>2,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item6}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>콜라</p>
                <p className={styles.item_price}>3,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item5}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>사이다</p>
                <p className={styles.item_price}>3,000원</p>
              </div>
              <div className={styles.item_wrapper}>
                <div className={styles.item_image_wrapper}>
                  <Image
                    className={styles.item_image}
                    src={item11}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>맥주</p>
                <p className={styles.item_price}>4,000원</p>
              </div>
            </div>
          </div>
        </div>

        <div id="3" className={styles.store_container}>
          <div className={styles.store_wrapper}>
            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="600"
              data-aos-easing="ease-out-back"
              data-aos-once="true"
            >
              <div className={styles.store_text_wrapper}>
                <h2 className={styles.store_text_title}>주방 사진</h2>
                <p className={styles.store_text_description}>
                  청결을 1순위로 생각하기 때문에, 항상 깨끗한 주방을 유지하기
                  위해 노력합니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.store_item_wrapper}>
            <Slider {...settings}>
              <div className={styles.store_item_image_wrapper}>
                <Image
                  className={styles.store_item_image}
                  src={store1}
                  fill={true}
                  alt="주방1"
                />
              </div>
              <div className={styles.store_item_image_wrapper}>
                <Image
                  className={styles.store_item_image}
                  src={store2}
                  fill={true}
                  alt="주방2"
                />
              </div>
              <div className={styles.store_item_image_wrapper}>
                <Image
                  className={styles.store_item_image}
                  src={store3}
                  fill={true}
                  alt="주방3"
                />
              </div>
              <div className={styles.store_item_image_wrapper}>
                <Image
                  className={styles.store_item_image}
                  src={store1}
                  fill={true}
                  alt="주방1"
                />
              </div>
              <div className={styles.store_item_image_wrapper}>
                <Image
                  className={styles.store_item_image}
                  src={store2}
                  fill={true}
                  alt="주방2"
                />
              </div>
              <div className={styles.store_item_image_wrapper}>
                <Image
                  className={styles.store_item_image}
                  src={store3}
                  fill={true}
                  alt="주방3"
                />
              </div>
            </Slider>
          </div>
        </div>

        <div id="4" className={styles.location_inquire_container}>
          <div className={styles.map_container}>
            <div className={styles.location_detail_container}>
              <div className={styles.location_detail_wrapper}>
                <h2 className={styles.location_title_text}>오시는 길</h2>
                <p className={styles.location_detail_text}>
                  <FaLocationDot />
                  &nbsp;&nbsp;&nbsp; 서울특별시 용산구 한강대로 405
                </p>
                <p className={styles.phone_detail_text}>
                  <FaPhoneAlt />
                  &nbsp;&nbsp;&nbsp; 010-1234-5678
                </p>
              </div>
            </div>

            <Map
              center={{ lat: 37.552998017, lng: 126.974598728 }}
              style={{ width: "100%", height: "100%" }}
            >
              <MapMarker position={{ lat: 37.552987017, lng: 126.972591728 }}>
                <div
                  style={{
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Dalk
                </div>
              </MapMarker>
            </Map>
          </div>
        </div>

        {/* <section className={styles.reservation_container}>
          <div className={styles.reservation_wrapper}>
            <h3 className={styles.reservation_text}>문&nbsp;&nbsp;의</h3>
            <div className={styles.reservation_form_wrapper}>
              <div className={styles.input_wrapper_50}>
                <p className={styles.input_name}>성함</p>
                <input className={styles.name_input_form} type="text"></input>
              </div>
              <div className={styles.input_wrapper_50}>
                <p className={styles.input_phone}>전화번호</p>
                <input className={styles.phone_input_form} type="text"></input>
              </div>
              <div className={styles.input_wrapper_100}>
                <p className={styles.input_ask}>문의사항</p>
                <textarea className={styles.ask_input_form}></textarea>
              </div>
            </div>
            <input
              className={styles.reservation_submit}
              type="submit"
              value="문의"
            ></input>
          </div>
        </section> */}

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

              <p>Copyright ©DALK CO. All rights reserved</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
