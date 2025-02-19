"use client";

import { useContext } from "react";
import { AppContext } from "@/lib/context/store";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { startIcon } from "@/assets/icons";
const Contact = () => {
  const { language } = useContext(AppContext) || {
    language: "en",
  };
  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="w-full min-h-screen bg-white container-max py-[60px] flex justify-between"
    >
      <div className={`w-full`}>
        <h2
          className={`text-[26px] ${
            language === "ar" ? "font-readex font-semibold" : "font-dm"
          }`}
        >
          {language === "en"
            ? "Let's Work Together!"
            : language === "ar"
            ? "دعونا نعمل معًا!"
            : "Lass uns zusammenarbeiten!"}
        </h2>
        <p className="text-gray-dark text-lg  font-inter mt-[20px]">
          {language === "en"
            ? "Please contact us through this email while our dashboard is being completed."
            : language === "ar"
            ? "يرجى الاتصال بنا عبر هذا البريد الإلكتروني بينما يتم الانتهاء من لوحة التحكم الخاصة بنا."
            : "Bitte kontaktieren Sie uns über diese E-Mail, während unser Dashboard fertiggestellt wird."}
        </p>

        <Button className="bg-primary mt-[42px] text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker">
          <Link
            className="flex w-fit items-center flex-row"
            href={"mailto:contact@asoma.com"}
          >
            <span>contact@asoma.com</span>
            <Image
              className={
                language === "ar" ? "mr-[12px] scale-x-[-1]" : "ml-[12px]"
              }
              src={startIcon}
              alt="Start Icon"
            />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
