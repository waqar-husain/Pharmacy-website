import Image from "next/image";
import Link from "next/link";
import cols from "@/icons/cols.svg";
import star from "@/icons/star.svg";
import pers from "@/images/photo.png";

import UserReview from "./components/partials/userReview";
export default function Home() {
  return (
    <>
      {/*HEADER */}
      <header className="flex justify-center items-center font-lato bg-[url('../images/homeBg.jpg')] bg-cover bg-no-repeat px-[3.3rem] bg-center">
        <div className=" max-w-[1440px]  w-[100%] text-[var(--color-text-dark)] ">
          <div className="max-w-[53rem] w-[100%] my-[18rem]">
            <span className="uppercase bg-[var(--color-primary)] tracking-[0.8rem] pl-[0.8rem] text-center font-[500]">
              Medical Professionals
            </span>

            <h1 className="text-[5rem] mt-[1.4rem] font-bold text-[#143450] font-montserrat leading-[1.2]">
              Makes Your Health Better Will Makes Us Better
            </h1>
            <p className="mt-[2.3rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis mollitia, vitae similique laboriosam dolores neque
              itaque odit quae nam error doloribus saepe consequuntur omnis
              dignissimos est eum enim officiis nihil.
            </p>
            <Link href="/products">
              <button className="bg-[var(--color-secondary)] mt-[1.4rem] px-[4.1rem] py-[1.7rem] font-inter text-white ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="flex justify-center">
        <div className="max-w-[1440px] w-[100%] px-[1.3rem] my-[15rem]">
          SECTION 1
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="flex justify-center font-lato">
        <div className="max-w-[1440px] w-[100%] px-[1.3rem] my-[15rem] flex flex-col items-center">
          <div className="max-w-[46rem] text-center">
            <p className="uppercase tracking-[0.5rem] text-[1.6rem]">
              Feedback
            </p>
            <h1 className=" font-montserrat text-[var(--color-text-dark)] text-[3rem] mt-[1.3rem] leading-[1.5] font-bold">
              Feedbacks about our service from the bottom of heart
            </h1>
          </div>
          {/* screen 600px => change grid to flex */}
          <div className="  flex items-center flex-col sm:grid grid-cols-2 grid-rows-2 mt-[4.1rem]  gap-[2.2rem] w-[100%]">
            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
          </div>
        </div>
      </section>
    </>
  );
}
