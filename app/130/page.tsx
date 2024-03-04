"use client";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import style from "./style.module.css";
import Link from "next/link";
import item1 from "../../public/images/130/food-list/item1.webp";
import item2 from "../../public/images/130/food-list/item2.webp";
import item3 from "../../public/images/130/food-list/item3.webp";
import item4 from "../../public/images/130/food-list/item4.webp";
import item5 from "../../public/images/130/food-list/item5.webp";
import item6 from "../../public/images/130/food-list/item6.webp";
import item7 from "../../public/images/130/food-list/item7.webp";
import item8 from "../../public/images/130/food-list/item8.webp";
import item9 from "../../public/images/130/food-list/item9.webp";
import rest1 from "../../public/images/130/rest-image/rest1.webp";
import rest2 from "../../public/images/130/rest-image/rest2.webp";
import rest3 from "../../public/images/130/rest-image/rest3.webp";
import rest4 from "../../public/images/130/rest-image/rest4.webp";
import rest5 from "../../public/images/130/rest-image/rest5.webp";
import banner from "../../public/images/130/header-food/food3.png";
import logo from "../../public/logo/130/text-1706049914116.png";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.wrap_main_image}>
          <div className={style.main_image_grad}>
            <div className={style.wrap_main_image_text}>
              <div
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-duration="600"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h1 className={style.main_image_text}>
                  A passion
                  <br />
                  for food
                </h1>
              </div>
            </div>
          </div>
          <Image
            className={style.main_image}
            src={banner}
            fill={true}
            alt="logo image"
          />
          <header className={style.main_banner}>
            <div className={style.wrap_logo_nav}>
              <div className={style.logo_image}>
                <Image
                  className={style.logo}
                  src={logo}
                  width={180}
                  height={34}
                  alt="logo image"
                />
              </div>
              <nav className={style.wrap_nav}>
                <ul>
                  <li>
                    <Link className={style.nav_link} href="/">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link className={style.nav_link} href="/">
                      menu
                    </Link>
                  </li>
                  <li>
                    <Link className={style.nav_link} href="/">
                      gallery
                    </Link>
                  </li>
                  <li>
                    <Link className={style.nav_link} href="/">
                      reservation
                    </Link>
                  </li>
                  <li>
                    <Link className={style.nav_link} href="/">
                      about us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>

        <main className={style.main_introd_container}>
          <div className={style.main_introd_wrap}>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="550"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <h1 className={style.main_introd_title}>
                Elegant plates, service, and ambiance
              </h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="550"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <p className={style.main_introd_description}>
                Since 2015, The Plate has been welcoming guests with elegant
                course meals and service. Enjoy special moments in an elegant
                atmosphere. Our diverse menu and gourmet cuisine are waiting for
                you. We will welcome you with the best service and make your
                special day even more memorable.
              </p>
            </div>
          </div>
        </main>

        <section className={style.menu_list_container}>
          <h3 className={style.menu_text}>Menu</h3>
          <div className={style.menu_list_wrapper}>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item1}
                  fill={true}
                  alt="item1 image"
                  placeholder="blur"
                />
              </div>
              <div className={style.item_detail_container}>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="800"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                  data-aos-delay="0"
                >
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>Tomato Pasta</p>
                    <p className={style.item_detail_price}>18,000₩</p>
                    <p className={style.item_detail_description}>
                      Taste the flavor of tomatoes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item2}
                  fill={true}
                  alt="item2 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>Cheese Pasta</p>
                    <p className={style.item_detail_price}>18,000₩</p>
                    <p className={style.item_detail_description}>
                      Pasta with savory cheese
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item3}
                  fill={true}
                  alt="item3 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>Cream Pasta</p>
                    <p className={style.item_detail_price}>18,000₩</p>
                    <p className={style.item_detail_description}>
                      Pasta with savory cream
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item4}
                  fill={true}
                  alt="item4 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>Pepperoni Pizza</p>
                    <p className={style.item_detail_price}>25,000₩</p>
                    <p className={style.item_detail_description}>
                      Pizza with salty pepperoni
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item5}
                  fill={true}
                  alt="item5 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>Vegetable Pizza</p>
                    <p className={style.item_detail_price}>25,000₩</p>
                    <p className={style.item_detail_description}>
                      Pizza with lots of fresh vegetables
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item6}
                  fill={true}
                  alt="item6 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>
                      Single Patty Hamburger
                    </p>
                    <p className={style.item_detail_price}>7,500₩</p>
                    <p className={style.item_detail_description}>
                      A burger for one
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item7}
                  fill={true}
                  alt="item7 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>
                      Double Patty Hamburger
                    </p>
                    <p className={style.item_detail_price}>11,500₩</p>
                    <p className={style.item_detail_description}>
                      Meaty, meaty burgers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item8}
                  fill={true}
                  alt="item8 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>Steak salad</p>
                    <p className={style.item_detail_price}>7,300₩</p>
                    <p className={style.item_detail_description}>
                      Fresh salad with juicy steaks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.item_wrapper}>
              <div className={style.item_image_wrapper}>
                <Image
                  className={style.item_image}
                  src={item9}
                  fill={true}
                  alt="item9 image"
                  placeholder="blur"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <div className={style.item_detail_container}>
                  <div className={style.item_detail_wrapper}>
                    <p className={style.item_detail_name}>Vegetable Salad</p>
                    <p className={style.item_detail_price}>5,300₩</p>
                    <p className={style.item_detail_description}>
                      Healthy salads for dieters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={style.store_image_container}>
          <div className={style.store_text_wrapper}>
            <div className={style.store_text_square}></div>
            <h3 className={style.store_text}>Gallery</h3>
          </div>
          <div className={style.store_image_wrapper}>
            <div className={style.store_image_2x_ratio}>
              <Image
                className={style.store_image}
                src={rest1}
                fill={true}
                alt="rest1 image"
                placeholder="blur"
              />
            </div>
            <div className={style.store_image_2x_ratio}>
              <Image
                className={style.store_image}
                src={rest2}
                fill={true}
                alt="rest2 image"
                placeholder="blur"
              />
            </div>
            <div className={style.store_image_3x_ratio}>
              <Image
                className={style.store_image}
                src={rest3}
                fill={true}
                alt="rest3 image"
                placeholder="blur"
              />
            </div>
            <div className={style.store_image_3x_ratio}>
              <Image
                className={style.store_image}
                src={rest4}
                fill={true}
                alt="rest4 image"
                placeholder="blur"
              />
            </div>
            <div className={style.store_image_3x_ratio}>
              <Image
                className={style.store_image}
                src={rest5}
                fill={true}
                alt="rest5 image"
                placeholder="blur"
              />
            </div>
          </div>
        </section>

        <section className={style.reservation_container}>
          <div className={style.reservation_wrapper}>
            <h3 className={style.reservation_text}>Reservation</h3>
            <div className={style.reservation_line}></div>
            <div className={style.reservation_form_wrapper}>
              <div className={style.input_wrapper}>
                <p className={style.input_name}>Name</p>
                <input className={style.name_input_form} type="text"></input>
              </div>
              <div className={style.input_wrapper}>
                <p className={style.input_phone}>Phone</p>
                <input className={style.phone_input_form} type="text"></input>
              </div>
              <div className={style.input_wrapper}>
                <p className={style.input_count}>Headcount</p>
                <input className={style.count_input_form} type="number"></input>
              </div>
              <div className={style.input_wrapper}>
                <p className={style.input_date}>Date</p>
                <input
                  className={style.date_input_form}
                  type="datetime-local"
                  style={{ colorScheme: "white" }}
                ></input>
              </div>
            </div>
            <input
              className={style.reservation_submit}
              type="submit"
              value="SUBMIT"
            ></input>
          </div>
        </section>
      </div>

      <footer id="5" className={style.footer_container}>
        <div className={style.footer_wrapper}>
          <div className={style.footer_left}>
            <p>사업자등록번호: 123-45-67890 대표자 : 홍길동</p>
            <p>주소: 서울특별시 용산구 한강대로 405</p>
            <p>대표번호: 1234-5678</p>
            <p>이메일: abc123@naver.com</p>
          </div>
          <div className={style.footer_right}>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Follow Us{" "}
              <FaYoutube
                className={style.icons}
                onClick={() =>
                  (window.location.href = "http://www.youtube.com")
                }
              />
              <FaInstagram
                className={style.icons}
                onClick={() =>
                  (window.location.href = "http://www.instagram.com")
                }
              />
              <FaFacebook
                className={style.icons}
                onClick={() =>
                  (window.location.href = "http://www.facebook.com")
                }
              />
            </span>

            <p>Copyright ©The Plate CO. All rights reserved</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
