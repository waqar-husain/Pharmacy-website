"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from "@/images/logo.png";
import menu from "@/icons/menuHam.svg";
import cross from "@/icons/cross.svg";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();
  return (
    <nav className="flex justify-center py-[3rem] px-[1.3rem] text-[1.8rem] font-inter relative">
      <div className=" max-w-[1440px] w-[100%] flex justify-between items-center">
        <Link href="/">
          <div className=" flex  items-center">
            <Image
              src={logo}
              alt="reactomepharma"
              className="w-[7rem] h-[7rem]"
            />

            <p className=" text-[red] whitespace-nowrap ml-[0.5rem] text-[2.2rem] font-extrabold font-montserrat">
              REACTOME
              <span className="ml-[0.5rem] text-[var(--color-secondary)]">
                PHARMA
              </span>
            </p>
          </div>
        </Link>
        <ul className=" hidden sm:flex space-x-[4rem] items-center">
          <li>
            <Link
              href="/"
              className={
                pathName.endsWith("/")
                  ? "text-[var(--color-secondary)] border-b-[1px] border-[var(--color-secondary)] pb-[4.7rem]"
                  : "pb-[4.7rem] hover:text-[var(--color-secondary)]"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                pathName.startsWith("/products")
                  ? "text-[var(--color-secondary)] border-b-[1px] border-[var(--color-secondary)] pb-[4.7rem]"
                  : "pb-[4.7rem] hover:text-[var(--color-secondary)]"
              }
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathName.startsWith("/about")
                  ? "text-[var(--color-secondary)] border-b-[1px] border-[var(--color-secondary)] pb-[4.7rem]"
                  : "pb-[4.7rem] hover:text-[var(--color-secondary)]"
              }
            >
              About
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className="hidden sm:flex max-w-[29.7rem] justify-end w-[100%]"
        >
          <button className="px-[3.6rem] transition duration-200 py-[1.5rem] border-[1px] bg-[var(--color-primary)] text-[var(--color-text-light)] shadow-md hover:border-[1px] border-[var(--color-primary)] hover:bg-[transparent] hover:text-[var(--color-primary)]">
            Contact Us
          </button>
        </Link>
        <button
          className="inline-block sm:hidden"
          onClick={(e) => setShowMenu((prev) => !prev)}
        >
          {!showMenu && <Image src={menu} alt="menu" />}
          {showMenu && <Image src={cross} alt="cross" />}
        </button>

        {showMenu && (
          <div className=" inline-block sm:hidden absolute top-[100%] font-lato left-0 text-[2.5rem] bg-white w-[100%] text-[var(--color-text-dark)]">
            <ul className="flex items-center flex-col py-[1rem] ">
              <li className="pb-[3rem] border-b-[1px] border-[#e1e1e1]">
                <Link
                  href="/"
                  className="w-[40rem] text-center block"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  Home
                </Link>
              </li>

              <li className="py-[3rem]  border-b-[1px] border-[#e1e1e1]">
                <Link
                  href="/products"
                  className="w-[40rem] text-center block"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  Products
                </Link>
              </li>
              <li className="py-[3rem] border-b-[1px] border-[#e1e1e1] ">
                <Link
                  className="w-[40rem] text-center block"
                  href="/about"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  About
                </Link>
              </li>
              <li className="py-[3rem]">
                <Link
                  className="w-[40rem] text-center block"
                  href="/contact"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
