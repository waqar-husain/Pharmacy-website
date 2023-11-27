import PhoneIcon from "@/icons/phone";
import Image from "next/image";
import React from "react";
import mail from "@/icons/mail.svg";

export default function TopBar() {
  return (
    <div className="bg-[var(--color-secondary)] flex justify-center  font-inter text-[1.6rem] p-[1.3rem]">
      <div className="max-w-[1440px] w-[100%] text-white flex justify-between items-center">
        <p>Welcome to Rectome Pharma. We provide medicines</p>
        <div className=" max-w-[450px] w-[100%] flex justify-between ">
          <span className="flex items-center">
            <div className=" h-[3.4rem] w-[3.4rem] rounded-full bg-[#085FBA] flex justify-center items-center mr-[0.8rem] ">
              <PhoneIcon />
            </div>
            <p>(404) 850 - 7080</p>
          </span>
          <span className="flex items-center">
            <div className="h-[3.4rem] w-[3.4rem] rounded-full bg-[#085FBA] flex justify-center items-center mr-[0.8rem]">
              <Image src={mail} alt="mail" />
            </div>
            <p>(404) 850 - 7080</p>
          </span>
        </div>
      </div>
    </div>
  );
}
