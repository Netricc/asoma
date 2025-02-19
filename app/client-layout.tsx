"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/lib/context/store";
import { Header, Footer } from "@/components";
import Loading from "@/components/main/Loading";
import Lenis from "lenis";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useContext(AppContext) || {
    language: "en",
  };

  useEffect(() => {
    console.log("First useEffect is running");

    const lenis = new Lenis({
      lerp: 0.07,
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div lang={language}>
      {<Loading />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
