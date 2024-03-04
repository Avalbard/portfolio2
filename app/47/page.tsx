"use client";
import "./globals.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "../../public/logo/47/logo.png";
import mainImage from "../../public/images/47/mob-alizadeh-93or5BgHobk-unsplash.jpg";
import aboutUsImage from "../../public/images/47/samuel-girven-VJ2s0c20qCo-unsplash.jpg";
import gallery1 from "../../public/images/47/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";
import gallery2 from "../../public/images/47/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg";
import gallery3 from "../../public/images/47/humphrey-muleba-dDp-6pXrYik-unsplash.jpg";
import gallery4 from "../../public/images/47/jelmer-assink-gzeTjGu3b_k-unsplash.jpg";
import gallery5 from "../../public/images/47/mark-bertulfo-XKimW0pke6w-unsplash.jpg";
import addressImage from "../../public/images/47/victor-freitas-Yuv-iwByVRQ-unsplash.jpg";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

export default function Home() {
  const [tableRender, setTableRender] = useState(false);
  useEffect((): void => {
    AOS.init();
    setTableRender(true);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      <main className={styles.container}>
        <section className={styles.main_container}>
          <div className={styles.main_container_left}>
            <div className={styles.logo_wrapper}>
              <Image
                className={styles.logo}
                src={logo}
                fill={true}
                alt="로고이미지"
              />
            </div>
            <div className={styles.main_image_wrapper}>
              <Image
                className={styles.main_image}
                src={mainImage}
                fill={true}
                alt="메인이미지"
              />
            </div>
          </div>
          <div className={styles.main_container_right}>
            <div className={styles.main_wrapper_right}>
              <header className={styles.header_container}>
                <ol className={styles.header_wrapper}>
                  <Link duration={600} to="1" spy={true} smooth={true}>
                    <li>소개</li>
                  </Link>
                  <Link duration={600} to="2" spy={true} smooth={true}>
                    <li>프로그램</li>
                  </Link>
                  <Link duration={600} to="3" spy={true} smooth={true}>
                    <li>갤러리</li>
                  </Link>
                  <Link duration={600} to="4" spy={true} smooth={true}>
                    <li>이용요금</li>
                  </Link>
                  <Link duration={600} to="5" spy={true} smooth={true}>
                    <li>주소</li>
                  </Link>
                </ol>
              </header>

              <div className={styles.main_text_wrapper}>
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <h1>
                    2024년에는
                    <br /> 짐헬스와 성공하자!
                  </h1>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="150"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <p>더 나은 미래를 위해서 2024년 달려봅시다!</p>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-delay="300"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <button>
                    <span>짐헬스 유튜브 바로가기&nbsp;&nbsp;≫</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="1" className={styles.about_us_container}>
          <div className={styles.about_us_wrapper}>
            <div className={styles.about_us_wrapper_left}>
              <div className={styles.about_us_title_wrapper}>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <p>about our gym</p>
                  <h2>짐헬스를 소개합니다!</h2>
                </div>
              </div>

              <div className={styles.about_us_line}></div>
              <div className={styles.about_us_description_wrapper}>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <p className={styles.about_us_description_first}>
                    건강과 행복의 체험, 서울 최고의 헬스장을 소개합니다!
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  <p className={styles.about_us_description_second}>
                    짐헬스는 최신식의 운동 장비와 전문 트레이너가 함께하는
                    건강한 라이프스타일을 위한 최고의 장소입니다.
                    <br />
                    <br />
                    다양한 프로그램과 그룹 클래스를 통해 회원분들은 즐겁게
                    운동하며 목표 달성에 도움을 받을 수 있습니다. 편안하고
                    청결한 환경에서 효과적인 운동 경험을 느끼세요!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.about_us_wrapper_right}>
              <Image
                className={styles.about_us_image}
                src={aboutUsImage}
                fill={true}
                alt="헬스장사진"
              />
            </div>
          </div>
        </section>
        <section id="2" className={styles.program_container}>
          <div className={styles.program_wrapper}>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="350"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <div className={styles.program_title_wrapper}>
                <p>our program</p>
                <h2>프로그램</h2>
              </div>
            </div>
            <div className={styles.program_line}></div>
            <div className={styles.program_table_wrapper}>
              {tableRender && (
                <table border={1}>
                  <tr>
                    <th
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      시간/요일
                    </th>
                    <th
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      월
                    </th>
                    <th
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      화
                    </th>
                    <th
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      수
                    </th>
                    <th
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      목
                    </th>
                    <th
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      금
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      AM 09:30
                    </td>
                    <td>버닝팻</td>
                    <td>버닝팻</td>
                    <td>버닝팻</td>
                    <td>버닝팻</td>
                    <td>버닝팻</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                      rowSpan={2}
                    >
                      AM 10:30
                    </td>
                    <td>점프스포츠</td>
                    <td>다빈치바디보드</td>
                    <td>점프스포츠</td>
                    <td>다빈치바디보드</td>
                    <td>점프스포츠</td>
                  </tr>
                  <tr>
                    {/* <td></td> */}
                    <td>점프스포츠</td>
                    <td>다빈치바디보드</td>
                    <td>점프스포츠</td>
                    <td>다빈치바디보드</td>
                    <td>점프스포츠</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "rgb(255, 163, 0)",
                        fontFamily: "NEXON-Lv2-Gothic-Bold",
                      }}
                    >
                      AM 11:30
                    </td>
                    <td>힐링</td>
                    <td>필라테스</td>
                    <td>빈야사</td>
                    <td>아디다스</td>
                    <td>아쉬탕가</td>
                  </tr>
                </table>
              )}
            </div>
          </div>
        </section>
        <section id="3" className={styles.gallery_container}>
          <Slider {...settings}>
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
          </Slider>
        </section>
        <section id="4" className={styles.membership_container}>
          <div className={styles.membership_wrapper}>
            <div
              data-aos="fade-up"
              data-aos-duration="350"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <div className={styles.membership_title_wrapper}>
                <p>our membership</p>
                <h2>이용요금</h2>
              </div>
            </div>
            <div className={styles.membership_line}></div>
            <div className={styles.membership_detail_wrapper}>
              <div className={styles.gym_membership_title}>
                <div></div>
                <h3>헬스장</h3>
              </div>
              <div className={styles.gym_membership_wrapper}>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="0"
                  >
                    <h4>1개월</h4>
                    <h5>50,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="200"
                  >
                    <h4>3개월</h4>
                    <h5>130,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="400"
                  >
                    <h4>6개월</h4>
                    <h5>280,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="600"
                  >
                    <h4>12개월</h4>
                    <h5>550,000</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.membership_detail_wrapper}>
              <div className={styles.gym_membership_title}>
                <div></div>
                <h3>P.T</h3>
              </div>
              <div className={styles.gym_membership_wrapper}>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="0"
                  >
                    <h4>8회</h4>
                    <h5>400,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="200"
                  >
                    <h4>12회</h4>
                    <h5>500,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="400"
                  >
                    <h4>20회</h4>
                    <h5>900,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="600"
                  >
                    <h4>30회</h4>
                    <h5>1,300,000</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ marginBottom: "0px" }}
              className={styles.membership_detail_wrapper}
            >
              <div className={styles.gym_membership_title}>
                <div></div>
                <h3>G.X</h3>
              </div>
              <div className={styles.gym_membership_wrapper}>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="0"
                  >
                    <h4>1개월</h4>
                    <h5>75,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="200"
                  >
                    <h4>3개월</h4>
                    <h5>150,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="400"
                  >
                    <h4>6개월</h4>
                    <h5>300,000</h5>
                  </div>
                </div>
                <div className={styles.gym_membership_detail_wrapper}>
                  <div
                    style={{ textAlign: "center" }}
                    data-aos="fade-up"
                    data-aos-duration="350"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-delay="600"
                  >
                    <h4>12개월</h4>
                    <h5>570,000</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="5" className={styles.address_container}>
          <Image
            className={styles.address_image}
            src={addressImage}
            fill={true}
            alt="주소이미지"
          />
          <div className={styles.address_wrapper}>
            <div
              style={{ textAlign: "center" }}
              data-aos="fade-up"
              data-aos-duration="350"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <p>CALL US</p>
            </div>
            <div
              style={{ textAlign: "center" }}
              data-aos="fade-up"
              data-aos-duration="350"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <h2>010-1234-5678</h2>
            </div>
            <div
              style={{ textAlign: "center" }}
              data-aos="fade-up"
              data-aos-duration="350"
              data-aos-easing="ease-out"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <h3>서울특별시 용산구 한강대로 405</h3>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer_container}>
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

            <p>Copyright ©GYM FITNESS CENTER CO. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
