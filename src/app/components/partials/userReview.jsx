import React from "react";
import Image from "next/image";
import cols from "@/icons/cols.svg";
import star from "@/icons/star.svg";

export default function UserReview(props) {
  return (
    <div className="p-[4.6rem] bg-[#F1F1F1] text-[var(--color-text-lightest)] max-w-[300px] sm:max-w-[100%]">
      <div className="flex justify-between pb-[2rem] border-b-[1px] border-[#CDCDCD]">
        <div className="flex items-center">
          <div className=" rounded-full overflow-hidden w-24 h-24">
            <Image
              src={props.personImg}
              alt="person"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-[2rem]">
            <p className=" font-montserrat text-[2rem] font-bold text-[var(--color-text-dark)]">
              {props.name}
            </p>
            <p>{props.patientType}</p>
          </span>
        </div>
        <div className="flex items-center max-w-[35px] md:max-w-[41px]">
          <Image src={cols} alt="cols" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="mt-[2rem]">
        <p>{props.text}</p>
        <div className="mt-[2.3rem] flex space-x-[0.8rem]">
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
        </div>
      </div>
    </div>
  );
}
