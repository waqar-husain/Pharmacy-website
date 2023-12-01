import React from "react";
import PageHeader from "../components/pageHeader";
import locIcon from "@/icons/loc.svg";
import callIcon from "@/icons/call.svg";
import mailIcon from "@/icons/mail3.svg";
import Image from "next/image";

export default function page() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <main>
        <section className=" mt-[7rem] font-lato text-[var(--color-text-lightest)] flex justify-center text-[1.6rem] ">
          <div className="bg-[url('../images/image.jpg')] bg-cover max-w-[1200px] w-[100%] flex justify-center bg-center">
            <div className="my-[12.5rem] max-w-[328px] w-[100%] bg-white/[.98] px-[3.1rem] py-[4.6rem] text-center">
              <div className="text-[var(--color-text-dark)]">
                <p className=" border-[1px] tracking-[0.5rem] inline-block uppercase px-[0.9rem] py-[0.3rem] ">
                  Time
                </p>
                <h3 className="mt-[1.3rem] text-[3rem] font-semibold leading-[1.3] font-montserrat">
                  Working Hours
                </h3>
              </div>
              <p className="mt-[0.4rem]">
                Sunday To Friday 9.00 am - 10.00 pm Saturday Closed
              </p>
            </div>
          </div>
        </section>
        <section className="mt-[7rem] mb-[7rem] flex justify-center font-lato text-[var(--color-text-lightest)]">
          <div className="max-w-[1440px] w-[100%] flex flex-col  items-center">
            <div className="max-w-[46rem] text-center">
              <p className="uppercase tracking-[0.5rem] text-[1.6rem]">
                Contact
              </p>
              <h1 className=" font-montserrat text-[var(--color-text-dark)] text-[3rem] mt-[1.3rem] leading-[1.5] font-bold">
                Get In Touch With Us!
              </h1>
            </div>
            <div className="mt-[5rem] grid grid-cols-1 sm:grid-cols-3 gap-[2rem]">
              <div className="border-[1px] shadow-md flex flex-col items-center border-[#e1e1e1] py-[6rem] px-[9rem]">
                <div className=" rounded-full bg-[#E6ECF2] w-[8.5rem] flex justify-center items-center h-[8.5rem]">
                  <Image
                    src={locIcon}
                    alt="location"
                    style={{ width: "2.5rem", height: "3.3rem" }}
                  />
                </div>
                <div className=" text-center mt-[3rem] max-w-[200px] w-[100%]">
                  <h4 className="text-[2rem] font-semibold text-[var(--color-text-dark)]">
                    Address
                  </h4>
                  <p className="mt-[1.4rem]">
                    Near Radha Cinema Nanital Road ,Civil Lines, Rampur - 244901
                  </p>
                </div>
              </div>
              <div className="border-[1px] shadow-md flex flex-col items-center border-[#e1e1e1] py-[6rem] px-[9rem]">
                <div className=" rounded-full bg-[#E6ECF2] w-[8.5rem] flex justify-center items-center h-[8.5rem]">
                  <Image
                    src={callIcon}
                    alt="call"
                    style={{ width: "3.3rem", height: "3.3rem" }}
                  />
                </div>
                <div className=" text-center mt-[3rem] max-w-[200px] w-[100%]">
                  <h4 className="text-[2rem] font-semibold text-[var(--color-text-dark)]">
                    Call Us
                  </h4>
                  <div className="mt-[1.4rem]">
                    <p>+(91) 9808559417</p>
                    <p>+(91) 8475817286</p>
                    <p>+(91) 9927114578</p>
                  </div>
                </div>
              </div>
              <div className="border-[1px] shadow-md flex flex-col items-center border-[#e1e1e1] py-[6rem] px-[9rem]">
                <div className=" rounded-full bg-[#E6ECF2] w-[8.5rem] flex justify-center items-center h-[8.5rem]">
                  <Image
                    src={mailIcon}
                    alt="mail"
                    style={{ width: "3.3rem", height: "3.3rem" }}
                  />
                </div>
                <div className=" text-center mt-[3rem] max-w-[200px] w-[100%]">
                  <h4 className="text-[2rem] font-semibold text-[var(--color-text-dark)]">
                    E-mail Us
                  </h4>
                  <p className="mt-[1.4rem]">reactomepharma@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
