import React from "react";
import Reveal from "./partials/reveal";

export default function PageHeader(props) {
  return (
    <header className="flex justify-center items-center font-lato bg-[url('../images/pharma.jpg')] bg-cover bg-no-repeat px-[3.3rem] bg-center py-[10.6rem]">
      <Reveal
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1.5 }}
        dur={1}
      >
        <div className="max-w-[1440px] w-[100%] text-center">
          <h1 className=" font-bold font-montserrat text-[4rem] text-[var(--color-text-dark)]">
            {props.title}
          </h1>
        </div>
      </Reveal>
    </header>
  );
}
