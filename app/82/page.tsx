"use client";
import "./globals.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./page.module.css";
import Image, { StaticImageData } from "next/image";
import Script from "next/script";
import logo from "../../public/logo/82/text-1705066801378-ImgCreatorAI.png";
import banner from "../../public/images/82/imgpanda.com-4DvStN-ImgCreatorAI.png";
import item1 from "../../public/images/82/items/optimize.jpeg";
import item2 from "../../public/images/82/items/20788_33958_1510.jpg";
import item3 from "../../public/images/82/items/21745_35202_4245.jpg";
import item4 from "../../public/images/82/items/KakaoTalk_Photo_2022-05-19-10-45-52_004.jpeg";
import item5 from "../../public/images/82/items/4768_7082_2842.jpg";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { IoIosCall } from "react-icons/io";
import { MouseEvent, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const onClickHandlerNaver = (): void => {
    window.location.href = "http://naver.com";
  };

  const onClickHandlerYoutube = (): void => {
    window.location.href = "http://youtube.com";
  };

  const onClickHandlerInsta =
    (url: string) =>
    (event: MouseEvent<HTMLDivElement>): void => {
      window.location.href = `${url}`;
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
              <div className={styles.header_wrapper}>
                <Image
                  style={{
                    filter:
                      "invert(100%) sepia(99%) saturate(2%) hue-rotate(76deg) brightness(104%) contrast(101%)",
                    cursor: "pointer",
                  }}
                  width={170}
                  height={39}
                  src={logo}
                  alt="로고이미지"
                />
                <nav>
                  <ol
                    style={{ marginRight: "100px" }}
                    className={styles.ol_wrapper}
                  >
                    <Link duration={600} to="1" spy={true} smooth={true}>
                      <li>ABOUT</li>
                    </Link>
                    <Link duration={600} to="2" spy={true} smooth={true}>
                      <li>REVIEW</li>
                    </Link>
                    <Link duration={600} to="3" spy={true} smooth={true}>
                      <li>PRICE</li>
                    </Link>
                    <Link duration={600} to="4" spy={true} smooth={true}>
                      <li>CONTACT US</li>
                    </Link>
                  </ol>
                </nav>
              </div>
            </header>
            <div className={styles.banner_text_wrapper}>
              <div
                style={{ zIndex: 30 }}
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <h1>
                  Preminum Beauty <br /> Hair Service
                </h1>
              </div>
              <div
                style={{ zIndex: 30 }}
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <button onClick={onClickHandlerYoutube}>More Detail</button>
              </div>
            </div>
            <Image
              className={styles.banner_image}
              src={banner}
              fill={true}
              alt="배너이미지"
            />
          </div>
        </section>
        <section id="1" className={styles.about_container}>
          <div className={styles.about_wrapper}>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <h2>All About Hairstyles</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <div className={styles.about_line}></div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="250"
            >
              <h3>
                고객들에게 최상의 미용 경험을 선사하기 위해 최신 트렌드와 전문
                지식을 통해 늘 발전하고 있습니다. 따뜻하고 친근한 분위기에서
                전문 미용사들이 고객 개개인에게 맞춤형 서비스를 제공하며,
                고객들이 자신을 더욱 자신감 있게 표현할 수 있도록 돕고 있습니다.
                아름다움과 편안함을 동시에 추구하는 곳으로 손님들에게 특별한
                경험을 선사합니다.
              </h3>
            </div>
          </div>
        </section>

        <section id="2" className={styles.review_container}>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-easing="ease-out"
            data-aos-once="true"
            data-aos-delay="0"
          >
            <h2>Review</h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-easing="ease-out"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <div className={styles.line_style}></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-easing="ease-out"
            data-aos-once="true"
            data-aos-delay="250"
          >
            <h3>
              참고용 계정입니다. 실제 리뷰가 아닙니다. <br />이 섹션은 작업
              받으신 고객님들의 계정사진을 넣는 곳입니다.
            </h3>
          </div>
          <div className={styles.review_wrapper}>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/jenaissante/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item1}
                src={item1}
                fill={true}
                alt="리뷰1"
              />
              <div className={styles.item_hover_text}>
                <h4>@jenaissante</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/tiny.pretty.j/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item2}
                src={item2}
                fill={true}
                alt="리뷰2"
              />
              <div className={styles.item_hover_text}>
                <h4>@tiny.pretty.j</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/yoo__sha/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item3}
                src={item3}
                fill={true}
                alt="리뷰3"
              />
              <div className={styles.item_hover_text}>
                <h4>@yoo__sha</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/_yujin_an/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item4}
                src={item4}
                fill={true}
                alt="리뷰4"
              />
              <div className={styles.item_hover_text}>
                <h4>@_yujin_an</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/_chaechae_1/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item5}
                src={item5}
                fill={true}
                alt="리뷰5"
              />
              <div className={styles.item_hover_text}>
                <h4>@_chaechae_1</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/jenaissante/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item1}
                src={item1}
                fill={true}
                alt="리뷰1"
              />
              <div className={styles.item_hover_text}>
                <h4>@jenaissante</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/tiny.pretty.j/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item2}
                src={item2}
                fill={true}
                alt="리뷰2"
              />
              <div className={styles.item_hover_text}>
                <h4>@tiny.pretty.j</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/yoo__sha/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item3}
                src={item3}
                fill={true}
                alt="리뷰3"
              />
              <div className={styles.item_hover_text}>
                <h4>@yoo__sha</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/_yujin_an/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item4}
                src={item4}
                fill={true}
                alt="리뷰4"
              />
              <div className={styles.item_hover_text}>
                <h4>@_yujin_an</h4>
              </div>
            </div>
            <div
              onClick={onClickHandlerInsta(
                "https://www.instagram.com/_chaechae_1/"
              )}
              className={styles.item_container}
            >
              <Image
                className={styles.image_item5}
                src={item5}
                fill={true}
                alt="리뷰5"
              />
              <div className={styles.item_hover_text}>
                <h4>@_chaechae_1</h4>
              </div>
            </div>
          </div>
        </section>
        <section id="3" className={styles.price_container}>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-easing="ease-out"
            data-aos-once="true"
            data-aos-delay="0"
          >
            <h2>Price</h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="400"
            data-aos-easing="ease-out"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <div className={styles.line_style}></div>
          </div>
          <div className={styles.price_wrapper}>
            <div
              style={{ width: "100%" }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <div className={styles.cut_wrapper}>
                <h3>Cut</h3>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    남성 커트 Man Cut
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>22,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    여성 커트 Woman Cut
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>25,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>드라이 Dry</span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>20,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    학생 커트 Student Cut
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>20,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>샴푸 Shampoo</span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>10,000</span>
                </div>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <div className={styles.cut_wrapper}>
                <h3>Color</h3>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    프리미엄 Premium
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>100,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    프리미엄(루트) Premium(root)
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>70,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>베이직 Basic</span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>70,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    베이직(루트) Basic(root)
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>50,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    매니큐어 Manicure
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>80,000</span>
                </div>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <div className={styles.cut_wrapper}>
                <h3>Perm</h3>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    일반펌 Normal perm
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>60,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    프리미엄 Premium
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>100,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    베이직매직 Basic straightening
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>100,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    볼륨매직 Volume straightening
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>130,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    매직세팅 Straightening setting
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>150,000</span>
                </div>
                <div className={styles.price_item_wrapper}>
                  <span className={styles.price_item_title}>
                    세팅/디지털 Setting/Digital
                  </span>
                  <div className={styles.price_item_line}></div>
                  <span className={styles.price_item_price}>100,000</span>
                </div>
              </div>
              <div
                style={{ width: "100%" }}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={styles.cut_wrapper}>
                  <h3>Clinic</h3>
                  <div className={styles.price_item_wrapper}>
                    <span className={styles.price_item_title}>
                      모발클리닉 Hair clinic
                    </span>
                    <div className={styles.price_item_line}></div>
                    <span className={styles.price_item_price}>80,000</span>
                  </div>
                  <div className={styles.price_item_wrapper}>
                    <span className={styles.price_item_title}>
                      두피클리닉 Scalp clinic
                    </span>
                    <div className={styles.price_item_line}></div>
                    <span className={styles.price_item_price}>70,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="4" className={styles.map_container}>
          <Map
            center={{ lat: 37.552998017, lng: 126.972548728 }}
            style={{ width: "50%", height: "100%" }}
          >
            <MapMarker position={{ lat: 37.552987017, lng: 126.972591728 }}>
              <div
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
              >
                LEBEGA
              </div>
            </MapMarker>
          </Map>
          <div className={styles.map_detail_container}>
            <div className={styles.map_detail_wrapper}>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <h2>Contact Us</h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <div className={styles.line_style}></div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="150"
              >
                <p>010-1234-5678</p>
                <p>서울특별시 용산구 한강대로 405</p>
                <p>abc123@gmail.com</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <button onClick={onClickHandlerNaver}>예약하기</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer_container}>
        <div className={styles.footer_wrapper}>
          <p>사업자등록번호: 123-45-67890 대표자 : 홍길동</p>
          <p>주소: 서울특별시 용산구 한강대로 405</p>
          <p>대표번호: 1234-5678</p>
          <p>이메일: abc123@naver.com</p>
          <p>Copyright ©LEBEGA CO. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
