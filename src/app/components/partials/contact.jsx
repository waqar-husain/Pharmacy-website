import React from "react";
import Image from "next/image";
import mail from "@/icons/mail.svg";
import PhoneIcon from "@/icons/phone";
import mail2 from "@/icons/mail2.svg";

export default function Contact(props) {
  return (
    <span className="flex items-center">
      <div
        className={`h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] rounded-full ${
          props.footer ? "bg-[var(--color-primary)]" : "bg-[#085FBA]"
        }  flex justify-center items-center mr-[0.8rem]`}
      >
        {props.mail && <Image src={mail} alt="mail" />}
        {props.footer && !props.phone && <Image src={mail2} alt="mail2" />}
        {props.phone && <PhoneIcon footer={props.footer} />}
      </div>
      <p>{props.text}</p>
    </span>
  );
}
