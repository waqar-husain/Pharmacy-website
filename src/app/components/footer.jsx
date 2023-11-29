import Link from "next/link";
import React from "react";
import Contact from "./partials/contact";
import Image from "next/image";
import instaIco from "../../icons/insta.svg";
import fbIco from "../../icons/Fb.svg";
import twitterIco from "../../icons/Twitter.svg";
import logo from "@/images/logo.png";

export default function Footer() {
  return (
    <footer className="flex justify-center font-lato bg-[url('../images/footerBg.jpg')] bg-cover bg-no-repeat bg-center px-[1.3rem]  text-[var(--color-text-lightest)]">
      <div className="max-w-[1440px] w-[100%] my-[9.5rem]">
        <div className="flex items-center justify-between ">
          <div className=" flex  items-center">
            <Image
              src={logo}
              alt="reactomepharma"
              className="w-[4.5rem] h-[4.5rem]"
            />
            <p className=" text-[red] whitespace-nowrap ml-[0.5rem] text-[2rem] font-extrabold font-montserrat">
              REACTOME
              <span className="ml-[0.5rem] text-[var(--color-secondary)]">
                PHARMA
              </span>
            </p>
          </div>
          <div className="flex max-w-[66.2rem] w-[100%] justify-end space-x-[4rem] sm:justify-between items-center">
            <div className="hidden sm:inline-block">
              <Contact phone="true" footer="true" text="+(91) 9808559417" />
            </div>
            <Contact footer="true" text="reactomepharma@gmail.com" />
            <ul className="hidden space-x-[2.7rem]  sm:flex">
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

        {/* screen width = 700  grid-cols-3 grid-row-2 gap-[2rem] || 1st column  col-span-3 */}
        <div className="mt-[6.3rem] grid grid-cols-4  sm:grid-cols-3 sm:grid-row-2 gap-y-[5rem] gap-[2rem] md:grid-cols-[minmax(0%,_40%)_1fr_1fr_minmax(0%,_25%)] md:gap-[9.2rem]  ">
          <div className=" font-montserrat text-[var(--color-text-dark)] font-[600] text-[3rem] col-span-4 sm:col-span-3 max-w-[400px] leading-[1.4] grid md:col-span-1">
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
          <div className="">
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
            <div>
              <p>+(91) 9808559417</p>
              <p>+(91) 8475817286</p>
              <p>+(91) 9927114578</p>
            </div>
          </div>
          <ul className="flex space-x-[2.7rem]  sm:hidden">
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
    </footer>
  );
}
