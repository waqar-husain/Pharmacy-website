import React from "react";
import PageHeader from "../components/pageHeader";
import Image from "next/image";
import med1 from "@/images/medecine2.jpg";
import tablet from "@/icons/tablet.svg";
import latest from "@/icons/latest.svg";
import certified from "@/icons/certificate.svg";

export default function page() {
  return (
    <>
      <PageHeader title="About Us" />
      <main>
        <section className="flex justify-center my-[15rem] px-[3rem]">
          <div className="max-w-[1440px] w-[100%] flex flex-col items-center ">
            <div className="grid max-w-[500px] md:max-w-[100%] grid-cols-1 md:grid-cols-2 gap-[7rem] items-center">
              <div className="w-fit">
                <h1 className="text-[5rem] font-bold font-montserrat text-[#143450] leading-[1]">
                  About Reactome Pharma
                </h1>
                <p className="text-[2rem] font-lato text-[var(--color-text-light)] mt-[4rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  amet dicta molestias quod earum sequi velit nulla expedita
                  inventore? Nemo, nobis eius totam velit ad recusandae
                  repudiandae ducimus laudantium veritatis. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Harum amet dicta
                  molestias quod earum sequi velit nulla expedita inventore?
                  Nemo, nobis eius totam velit ad recusandae repudiandae ducimus
                  laudantium veritatis.
                </p>
              </div>
              <div>
                <div className="rounded-[0.5rem] overflow-hidden border-[3px] border-[var(--color-secondary)] p-[2rem] shadow-xl">
                  <Image src={med1} alt="med" className="rounded-[0.5rem] " />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] mt-[10rem] justify-center">
              <div className="border-[1px] rounded-lg shadow-md justify-self-center max-w-[400px] flex flex-col items-center font-lato text-[var(--color-text-light)] font-medium p-[6rem] ">
                <div className="flex items-center">
                  <Image src={tablet} alt="tablet" />
                </div>
                <div className="flex items-center flex-col text-center mt-[2rem]">
                  <h6 className="text-[2.5rem] font-bold font-montserrat text-[var(--color-text-dark)]">
                    Pharmacy
                  </h6>
                  <p className="mt-[2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi, facilis impedit maxime quibusdam, tempore incidunt
                    suscipit officiis
                  </p>
                </div>
              </div>
              <div className="border-[1px] rounded-lg  shadow-md justify-self-center max-w-[400px] flex flex-col items-center font-lato text-[var(--color-text-light)] font-medium p-[6rem]">
                <div className="flex items-center">
                  <Image src={latest} alt="latest" />
                </div>
                <div className="flex items-center flex-col text-center mt-[2rem]">
                  <h6 className="text-[2.5rem] font-bold font-montserrat text-[var(--color-text-dark)]">
                    Latest Technology
                  </h6>
                  <p className="mt-[2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi, facilis impedit maxime quibusdam, tempore incidunt
                    suscipit officiis
                  </p>
                </div>
              </div>
              <div className="border-[1px] rounded-lg shadow-md justify-self-center max-w-[400px] flex flex-col items-center font-lato text-[var(--color-text-light)] font-medium p-[6rem]">
                <div className="flex items-center">
                  <Image src={certified} alt="certified" />
                </div>
                <div className="flex items-center flex-col text-center mt-[2rem]">
                  <h6 className="text-[2.5rem] font-bold font-montserrat text-[var(--color-text-dark)]">
                    Chemically Certified
                  </h6>
                  <p className="mt-[2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi, facilis impedit maxime quibusdam, tempore incidunt
                    suscipit officiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
