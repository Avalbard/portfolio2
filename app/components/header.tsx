"use client";
import React, { Fragment } from "react";
import style from "./header.module.css";
import Image from "next/image";
import "../globals.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <Fragment>
      <header className={style.header_container}>
        <div className={style.header_wrapper}>
          <h1 className={style.logo_wrapper}>
            {/* <Image
              className={style.logo_image}
              src="/logo/logo.svg"
              fill={true}
              alt="로고이미지"
            /> */}
          </h1>
          <nav className={style.nav_wrapper}>
            <ol className={style.nav_ol}>
              <li>
                <Link to="1" spy={true} smooth={true}>
                  소개
                </Link>
              </li>
              <li>
                <Link to="2" spy={true} smooth={true}>
                  메뉴
                </Link>
              </li>
              <li>
                <Link to="3" spy={true} smooth={true}>
                  주방
                </Link>
              </li>
              <li>
                <Link to="4" spy={true} smooth={true}>
                  오시는 길
                </Link>
              </li>
              <li>
                <Link to="5" spy={true} smooth={true}>
                  예약
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}
