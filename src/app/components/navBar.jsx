"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/images/logo.png";

export default function NavBar() {
  const pathName = usePathname();
  return (
    <nav className="flex justify-center py-[3rem] px-[1.3rem] text-[1.8rem] font-inter">
      <div className=" max-w-[1440px] w-[100%] flex justify-between items-center">
        <div className=" flex  items-center">
          <Image
            src={logo}
            alt="reactomepharma"
            className="w-[5rem] h-[5rem]"
          />
          <p className=" text-[red] whitespace-nowrap ml-[0.5rem] text-[2.2rem] font-extrabold font-montserrat">
            REACTOME
            <span className="ml-[0.5rem] text-[var(--color-secondary)]">
              PHARMA
            </span>
          </p>
        </div>
        <ul className=" hidden sm:flex space-x-[4rem] items-center">
          <li>
            <Link
              href="/"
              className={
                pathName.endsWith("/")
                  ? "text-[var(--color-secondary)] border-b-[1px] border-[var(--color-secondary)] pb-[4.7rem]"
                  : "pb-[4.7rem]"
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
                  : "pb-[4.7rem]"
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
                  : "pb-[4.7rem]"
              }
            >
              About
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className=" flex max-w-[29.7rem] justify-end w-[100%]"
        >
          <button className="px-[3.7rem] py-[1.6rem] bg-[var(--color-primary)] text-[var(--color-text-light)]">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
}
