"use client";
import style from "./header.module.css";
import Image from "next/image";
import "../globals.css";
import { Link } from "react-scroll";
import logo from "../../../public/logo/2/text-1705431189655.png";

export default function Header() {
  return (
    <>
      <header className={style.header_container}>
        <div className={style.header_wrapper}>
          <h1 className={style.logo_wrapper}>
            <Image
              className={style.logo_image}
              src={logo}
              fill={true}
              alt="로고이미지"
            />
          </h1>
          <nav className={style.nav_wrapper}>
            <ol className={style.nav_ol}>
              <li>
                <Link duration={600} to="1" spy={true} smooth={true}>
                  소개
                </Link>
              </li>
              <li>
                <Link duration={600} to="2" spy={true} smooth={true}>
                  메뉴
                </Link>
              </li>
              <li>
                <Link duration={600} to="3" spy={true} smooth={true}>
                  주방
                </Link>
              </li>
              <li>
                <Link duration={600} to="4" spy={true} smooth={true}>
                  오시는 길
                </Link>
              </li>
              <li>
                <Link duration={600} to="5" spy={true} smooth={true}>
                  문의
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </>
  );
}
