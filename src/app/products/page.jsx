import React from "react";
import PageHeader from "../components/pageHeader";
import Image from "next/image";
import med1 from "@/images/med1.jpg";
import med2 from "@/images/med2.jpg";
import med3 from "@/images/med3.jpg";
import med4 from "@/images/med4.jpg";
import med5 from "@/images/med5.jpg";
import med6 from "@/images/med6.jpg";
import med7 from "@/images/med7.jpg";
import med8 from "@/images/med8.jpg";
import med9 from "@/images/med9.jpg";
import med10 from "@/images/med10.jpg";
import med11 from "@/images/med11.jpg";
import med12 from "@/images/med12.jpg";
import med13 from "@/images/med13.jpg";
import med14 from "@/images/med14.jpg";
import med15 from "@/images/med15.jpg";
import med16 from "@/images/med16.jpg";
import med17 from "@/images/med17.jpg";
import med18 from "@/images/med18.jpg";
import med19 from "@/images/med19.jpg";
import med20 from "@/images/med20.jpg";
import med21 from "@/images/med21.jpg";

import Link from "next/link";

export default function page() {
  return (
    <>
      <PageHeader title="Products" />
      <main>
        <section className="my-[15rem] flex justify-center px-[3rem]">
          <div className="max-w-[1440px] w-[100%] flex flex-col items-center">
            <div className="max-w-[46rem] text-center">
              <p className="uppercase tracking-[0.5rem] text-[1.6rem]">
                Medicines
              </p>
              <h1 className=" font-montserrat text-[var(--color-text-dark)] text-[3rem] mt-[1.3rem] leading-[1.5] font-bold">
                Delivers The Best
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[5rem] mt-[5rem]">
              {[
                med1,
                med2,
                med3,
                med4,
                med5,
                med6,
                med7,
                med8,
                med9,
                med10,
                med11,
                med12,
                med13,
                med14,
                med15,
                med16,
                med17,
                med18,
                med19,
                med20,
                med12,
              ].map((el, i) => (
                <div
                  key={i}
                  className="p-[1rem] relative border-[3px] border-[var(--color-secondary)] group rounded-[0.5rem] shadow-xl max-w-[450px] overflow-hidden"
                >
                  <Image
                    src={el}
                    alt="med1"
                    className="rounded-[0.5rem] transition-[all] duration-500 sm:group-hover:scale-[1.05] "
                  />
                  <div className=" invisible  opacity-0 cursor-pointer transition-[all] duration-500 sm:group-hover:visible group-hover:opacity-100 flex justify-center items-center absolute top-0 left-[0rem] bg-black/80 w-[100%] h-[100%]">
                    <Link href="/contact">
                      <button className="bg-[var(--color-secondary)] mt-[1.4rem] px-[4.1rem] py-[1.7rem] font-inter text-white ">
                        Contact Now!
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
