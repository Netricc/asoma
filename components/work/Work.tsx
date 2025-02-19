"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/lib/context/store";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { startIcon } from "@/assets/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const { language } = useContext(AppContext) || { language: "en" };
  const { dashboardUrl } = useContext(AppContext) || { dashboardUrl: "#" };

  useEffect(() => {
    const section = document.getElementById("work-section");
    if (!section) return;

    gsap.fromTo(
      section,
      { y: "6%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="w-full min-h-screen bg-white py-[60px] container-max"
    >
      <div id="work-section" className="w-full text-center">
        <h2 className="font-cairo text-2xl font-bold text-gray-dark">
          {language === "en"
            ? "No Projects Yet... Be the first one!"
            : language === "ar"
            ? "!لا يوجد مشاريع بعد... كن أول شخص"
            : "Noch keine Projekte vorhanden... Sei der Erste!"}
        </h2>

        <div className="w-full flex justify-center max-sm:text-base max-sm:mt-[60px] mt-[100px]">
          <Button className="bg-primary text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker">
            <Link
              className="flex w-fit items-center flex-row"
              href={dashboardUrl ? dashboardUrl : "#dashboard"}
            >
              <span>
                {language === "en"
                  ? "Start Now"
                  : language === "ar"
                  ? "ابدأ الآن"
                  : "Jetzt starten"}
              </span>
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
      </div>
    </section>
  );
};

export default Work;
