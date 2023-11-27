import Link from "next/link";
import React from "react";
import Contact from "./partials/contact";
import Image from "next/image";
import instaIco from "../../icons/insta.svg";
import fbIco from "../../icons/Fb.svg";
import twitterIco from "../../icons/Twitter.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center font-lato bg-[url('../images/footerBg.jpg')] bg-cover bg-no-repeat bg-center px-[1.3rem]  text-[var(--color-text-lightest)]">
      <div className="max-w-[1440px] w-[100%] my-[9.5rem]">
        <div className="flex items-center justify-between ">
          <div>LOGO</div>
          <div className="flex max-w-[66.2rem] w-[100%] justify-between items-center">
            <Contact phone="true" footer="true" text="(404) 850 - 7080" />
            <Contact footer="true" text="support@doctorate.com" />
            <ul className="flex space-x-[2.7rem]">
              <li>
                <Link href="/">
                  <Image src={instaIco} alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={fbIco} alt="Facebook" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={twitterIco} alt="Twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[6.3rem] grid  grid-cols-[minmax(0%,_40%)_1fr_1fr_minmax(0%,_25%)] gap-[9.2rem]">
          <div className=" font-montserrat text-[var(--color-text-dark)] font-[600] text-[3rem] max-w-[450px] leading-[1.4]">
            “A Simple Story About The Doctorate Medical Center & Health Care
            Foundation
          </div>
          <div>
            <h6 className="font-montserrat text-[var(--color-text-dark)] text-[2rem] font-[600]">
              Explore
            </h6>
            <ul className="mt-[1.4rem] leading-[2]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className=" font-montserrat text-[var(--color-text-dark)] text-[2rem] font-[600]">
              Something
            </h6>
            <ul className="mt-[1.4rem] leading-[2]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className=" font-montserrat text-[var(--color-text-dark)] text-[2rem] font-[600]">
              Contact Us
            </h6>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
