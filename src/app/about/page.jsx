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
                  Reactome Pharma is a leading pharmaceutical company dedicated
                  to improving health and wellness in communities around the
                  world. We are committed to providing innovative solutions and
                  high-quality medications to healthcare professionals and
                  patients. Our team of experienced professionals works
                  tirelessly to research, develop, and distribute effective
                  treatments for a wide range of medical conditions. At Reactome
                  Pharma, we believe in the power of science to transform lives
                  and are dedicated to making a positive impact on global
                  health.
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
                    At Reactome Pharma, we provide a wide range of
                    pharmaceutical products, ensuring the highest quality and
                    safety standards.
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
                    We leverage the latest technology to research and develop
                    innovative solutions for healthcare professionals and
                    patients.
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
                    Our products are chemically certified, ensuring the highest
                    level of safety and effectiveness for our customers.
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
