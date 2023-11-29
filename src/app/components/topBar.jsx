import React from "react";
import Contact from "./partials/contact";

export default function TopBar() {
  return (
    <div className="bg-[var(--color-secondary)] flex justify-center  font-inter  p-[1.3rem]">
      <div className="max-w-[1440px] w-[100%] text-white flex justify-between items-center">
        <span className="">
          Welcome to Reactome Pharma.
          <p className=" hidden sm:inline">
            {" "}
            Providing healthier life for everyone...
          </p>
        </span>
        <div className=" space-x-[2rem] justify-end max-w-[20rem]    sm:max-w-[50rem] w-[100%] flex sm:justify-between ">
          <Contact phone="true" text="+(91) 9808559417" />
          <div className=" hidden sm:inline-block">
            <Contact mail="true" text="rectomepharma@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
