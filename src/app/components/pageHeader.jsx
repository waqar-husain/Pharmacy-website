import React from "react";

export default function PageHeader(props) {
  return (
    <header className="flex justify-center items-center font-lato bg-[url('../images/pharma.jpg')] bg-cover bg-no-repeat px-[3.3rem] bg-center py-[10.6rem]">
      <div className="max-w-[1440px] w-[100%] text-center">
        <h1 className=" font-bold font-montserrat text-[4rem] text-[var(--color-text-dark)]">
          {props.title}
        </h1>
      </div>
    </header>
  );
}
