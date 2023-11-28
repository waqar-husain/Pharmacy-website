import React from "react";
import Contact from "./partials/contact";

export default function TopBar() {
  return (
    <div className="bg-[var(--color-secondary)] flex justify-center  font-inter  p-[1.3rem]">
      <div className="max-w-[1440px] w-[100%] text-white flex justify-between items-center">
        <span className="">
          Welcome to Rectome Pharma.
          <p className=" hidden sm:inline"> We provide medicines</p>
        </span>
        <div className=" space-x-[2rem] justify-end max-w-[40rem]    sm:max-w-[45rem] w-[100%] flex sm:justify-between ">
          <Contact phone="true" text="(404) 850 - 7080" />
          <Contact mail="true" text="(404) 850 - 7080" />
        </div>
      </div>
    </div>
  );
}
