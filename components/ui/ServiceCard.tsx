"use client";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AppContext } from "@/lib/context/store";
import { tourIcon } from "@/assets/icons";
import { TserviceCard } from "@/lib/types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ServiceCard = ({
  title,
  description,
  reverse,
  img,
  id,
}: TserviceCard) => {
  const { language } = useContext(AppContext) || {};

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      `#service-card-${id}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: `#service-card-${id}`,
          start: "top bottom",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [id]);

  return (
    <article
      id={`service-card-${id}`}
      className={`h-[500px] max-lg:flex-col-reverse max-lg:gap-[40px] service-card max-lg:min-h-[500px] flex items-center justify-between w-full ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div>
        <h3
          className={`text-[42px] max-md:text-[40px] max-w-[460px] font-medium ${
            language === "ar" ? "font-readex" : "font-dm"
          } max-sm:text-[36px]`}
        >
          {title}
        </h3>
        <p className="font-inter text-[22px] max-md:text-[18px] mt-[32px] w-[460px] max-lg:w-full">
          {description}
        </p>
        <Button className="bg-primary mt-[62px] max-sm:text-base max-sm:mt-[62px] text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker">
          <Link
            className="flex w-fit mx-auto flex-row items-center"
            href={"/pricing"}
          >
            <span>
              {language === "en"
                ? "Visit Pricing"
                : language === "ar"
                ? "زيارة الأسعار"
                : "Besuchsgebühren"}
            </span>
            <Image
              className={`${language === "ar" ? "mr-[12px]" : "ml-[12px]"}  `}
              src={tourIcon}
              alt="go icon"
            />
          </Link>
        </Button>
      </div>

      <div className="max-lg:w-[400px] max-md:w-[360px] max-sm:w-[300px]">
        <Image
          src={img}
          className={`object-fill ${reverse ? "scale-x-[-1]" : ""}`}
          alt={title + " Image"}
        />
      </div>
    </article>
  );
};

export default ServiceCard;
