"use client";

import { useContext } from "react";
import { AppContext } from "@/lib/context/store";
import { featureCheckIcon } from "@/assets/icons";
import Image from "next/image";
import { TpriceCard } from "@/lib/types";
import Link from "next/link";
const PricingCard = ({
  type,
  price,
  unity,
  description,
  title,
}: TpriceCard) => {
  const context = useContext(AppContext);
  const language = (context?.language as "en" | "ar" | "de") || "en";
  const dashboardUrl = context?.dashboardUrl;
  return (
    <article className="min-h-[350px] max-md:w-full hover:scale-105 hover:shadow-lg duration-200  relative py-[16px] px-[23px] w-[360px] border-2 rounded-[16px] border-gray-light/2">
      <div>
        <h4 className="font-cairo flex items-center text-gray-dark">
          <span className="font-bold text-primary text-[26px] max-sm:text-[20px]">
            € {price}
          </span>
          {type === "sub" ? (
            <span className={`${language === "ar" ? "mr-4" : "ml-4"}`}>
              / {unity}
            </span>
          ) : null}
        </h4>
        <h3
          className={`text-black ${
            language === "ar" ? "font-readex font-semibold" : "font-dm"
          } text-[28px] mt-[10px] max-sm:text-[20px]`}
        >
          {title}
        </h3>
      </div>
      <div className="border-t-2 border-gray-light mt-[22px] pt-[16px]">
        <div className="flex items-start flex-row gap-4">
          <Image src={featureCheckIcon} alt="featureCheckIcon"></Image>
          <p className="text-base max-sm:text-[14px] font-medium text-gray-dark font-inter">
            {description}
          </p>
        </div>

        <div className="w-full absolute bottom-0 py-[16px]">
          <Link
            className="font-cairo font-black text-black text-base max-sm:text-[14px] hover:text-primary duration-200"
            href={dashboardUrl ? dashboardUrl : "#dashboard"}
          >
            {language === "en"
              ? "CHOOSE PLAN"
              : language === "ar"
              ? "أختيار الخطة"
              : "PLAN WÄHLEN"}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PricingCard;
