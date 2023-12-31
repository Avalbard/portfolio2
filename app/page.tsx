"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import "./globals.css";
import { Link } from "react-scroll";
import mainImage from "../public/images/main-image.jpg";
import aboutImage from "../public/images/about-image.jpg";
import item1 from "../public/images/item/item1.jpg";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import store1 from "../public/images/store-image/store-image1.jpg";
import store2 from "../public/images/store-image/store-image2.jpg";
import store3 from "../public/images/store-image/store-image3.jpg";
import banner from "../public/images/banner/banner.jpg";
import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
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
    <Fragment>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=040c5bb116750422de3452e081e62cb1&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <main className={styles.container}>
        <div className={styles.main_image_wrapper}>
          <section className={styles.main_text_wrapper}>
            <h1 className={styles.main_text_title}>바쁘니까, 더 맛있게</h1>
            <h2 className={styles.main_text_description}>
              시간과 맛 어느 하나도 포기할 수 없는 현대인을 위한 치킨을
              만듭니다.
            </h2>
          </section>

          {/* <div className={styles.image_gradient}></div> */}
          <Image
            className={styles.main_image}
            src={mainImage}
            fill={true}
            alt="메인이미지"
          />
        </div>

        <div className={styles.about_container}>
          <div className={styles.about_wrapper}>
            <div className={styles.about_left_wrapper}>
              <h2 className={styles.about_title}>
                매일매일 신선한 <span style={{ color: "#ebb403" }}>기름</span>을
                씁니다
              </h2>
              <p className={styles.about_description}>
                2013년 '깨끗한 기름'이라는 신념으로 창업한 참치킨은 선도적인
                <br />
                치킨 회사로서 고객을 위한 상품 및 서비스의 질적 향상을 목표로
                최선을 다하고 있습니다. 고객의 다양한 눈높이에 맞추고자 항상
                감사한 마음과 정성을 다하는 자세로 좋은 제품을 만들고 있습니다.
              </p>
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

        <div className={styles.menu_container}>
          <div className={styles.menu_wrapper}>
            <div className={styles.menu_left_wrapper}>
              <h2 className={styles.menu_text_title}>추천 메뉴</h2>
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
                    src={item1}
                    fill={true}
                    alt="치킨1"
                  />
                </div>
                <p className={styles.item_name}>후라이드</p>
                <p className={styles.item_price}>18,000원</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.store_container}>
          <div className={styles.store_wrapper}>
            <div className={styles.store_text_wrapper}>
              <h2 className={styles.store_text_title}>주방 사진</h2>
              <p className={styles.store_text_description}>
                청결을 1순위로 생각하기 때문에, 항상 깨끗한 주방을 유지하기 위해
                노력합니다.
              </p>
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

        <div className={styles.location_inquire_container}>
          <div className={styles.map_container}>
            <div className={styles.location_detail_container}>
              <div className={styles.location_detail_wrapper}>
                <h2 className={styles.location_title_text}>오시는 길</h2>
                <p className={styles.location_detail_text}>
                  <FaLocationDot />
                  &nbsp;&nbsp;&nbsp; 인천광역시 부평구 부평1동 대림아파트
                </p>
                <p className={styles.phone_detail_text}>
                  <FaPhoneAlt />
                  &nbsp;&nbsp;&nbsp; 010-8681-7883
                </p>
              </div>
            </div>
            <Map
              center={{ lat: 37.580314, lng: 126.926204 }}
              style={{ width: "100%", height: "100%" }}
            >
              <MapMarker position={{ lat: 37.5803099, lng: 126.922669 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker>
            </Map>
          </div>
        </div>

        <section className={styles.reservation_container}>
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
        </section>

        <footer className={styles.footer_container}>
          <div className={styles.footer_wrapper}>
            <div className={styles.logo_wrapper}>
              <Image />
            </div>
          </div>
          <p>
            대표이사: 홍길동|주소: 인천광역시 부평구 부평1동|대표전화:
            010-1234-5678
          </p>
          <p>Copyright Ⓒ 2023</p>
        </footer>
      </main>
    </Fragment>
  );
}
