import React from "react";
import PageHeader from "./components/pageHeader";
import Link from "next/link";
import Image from "next/image";

export default function notFound() {
  return (
    <>
      <PageHeader title="Page Not Found" />
      <main className="flex justify-center items-center font-lato">
        <div className="my-[15rem] max-w-[858px] w-[100%] flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-[25rem] sm:text-[30rem] font-extrabold font-montserrat text-[var(--color-secondary)] leading-[1.1]">
              404
            </h1>
            <h2 className="text-[var(--color-text-dark)] text-[5rem] sm:text-[7.5rem] font-montserrat font-bold leading-[1.2]">
              Oops! Page not found
            </h2>
            <p className="text-[1.8rem] text-[var(--color-text-lightest)] mt-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              doloremque, corporis voluptas soluta enim sed magnam in! Adipisci
            </p>
          </div>
          <div className="mt-[4.8rem]">
            <Link href="/">
              <button className="bg-[var(--color-secondary)] px-[4.1rem] py-[1.7rem] font-inter text-white ">
                Homepage
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
