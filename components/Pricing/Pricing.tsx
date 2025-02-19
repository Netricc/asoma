"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/lib/context/store";
import { PricingCard } from "@/components/";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const { language } = useContext(AppContext) || { language: "en" };

  useEffect(() => {
    const section = document.getElementById("pricing-section");
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      className="w-full container-max min-h-screen py-[74px] max-lg:py-[62px] max-sm:py-[42px]"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div
        id="pricing-section"
        className="w-full  flex flex-wrap gap-[20px] max-lg:justify-center"
      >
        <PricingCard
          title={
            language === "en"
              ? "Showcase Website"
              : language === "ar"
              ? "موقع عرض"
              : "Präsentationswebsite"
          }
          description={
            language === "en"
              ? "We offer responsive design, smooth animations, optimized performance, and much more!"
              : language === "ar"
              ? "نقدم لك تصميماً متجاوباً، ورسوم متحركة سلسة، وأداءً محسّناً، والمزيد!"
              : "Wir bieten responsives Design, flüssige Animationen, optimierte Leistung und vieles mehr!"
          }
          price="800 - 1,200"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "E-Commerce Website"
              : language === "ar"
              ? "موقع تجارة إلكترونية"
              : "E-Commerce-Website"
          }
          description={
            language === "en"
              ? "Secure, responsive, and fast e-commerce websites."
              : language === "ar"
              ? "مواقع تجارة إلكترونية آمنة ومتجاوبة وسريعة"
              : "Sichere, responsive und schnelle E-Commerce-Websites"
          }
          price="3,000 - 6,000"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Consultation Service"
              : language === "ar"
              ? "خدمة الاستشارات"
              : "Beratungsdienstleistung"
          }
          description={
            language === "en"
              ? "Get a free 2-hour consultation with tailored solutions and expert advice."
              : language === "ar"
              ? "احصل على استشارة مجانية لمدة ساعتين مع حلول مخصصة ونصائح من خبراء."
              : "Erhalten Sie eine kostenlose 2-stündige Beratung mit maßgeschneiderten Lösungen und Expertenrat."
          }
          price="10/Free"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Full-Stack Website"
              : language === "ar"
              ? "موقع كامل الطبقات"
              : "Full-Stack-Website"
          }
          description={
            language === "en"
              ? "We create dynamic websites with custom backends, secure architecture, and optimized performance for SEO."
              : language === "ar"
              ? "نُنشئ مواقع ديناميكية مع خلفيات مخصصة، هيكل أمني، وأداء محسن لـ SEO."
              : "Wir erstellen dynamische Websites mit benutzerdefinierten Backends, sicherer Architektur und optimierter Leistung für SEO."
          }
          price="2,000 - 3,500"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Basic App"
              : language === "ar"
              ? "تطبيق أساسي"
              : "Grundlegende App"
          }
          description={
            language === "en"
              ? "A Basic App developed to meet your essential needs, offering core functionalities and ease of use."
              : language === "ar"
              ? "تطبيق أساسي تم تطويره لتلبية احتياجاتك الأساسية، مع تقديم الوظائف الرئيسية وسهولة الاستخدام."
              : "Eine grundlegende App, die entwickelt wurde, um Ihre wesentlichen Bedürfnisse zu erfüllen, mit den wichtigsten Funktionen und benutzerfreundlicher Bedienung."
          }
          price="5,000 - 10,000"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Data Analysis & Prediction"
              : language === "ar"
              ? "تحليل البيانات والتنبؤ"
              : "Datenanalyse & Vorhersage"
          }
          description={
            language === "en"
              ? "Data analysis for insights and predictive model development."
              : language === "ar"
              ? "تحليل البيانات لاستخلاص الرؤى وتطوير النماذج التنبؤية."
              : "Datenanalyse zur Gewinnung von Erkenntnissen und Entwicklung prädiktiver Modelle."
          }
          price="5,000 – 30,000"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Chatbot Development"
              : language === "ar"
              ? "بناء Chatbot"
              : "Chatbot-Entwicklung"
          }
          description={
            language === "en"
              ? "Basic chatbot for answering common questions."
              : language === "ar"
              ? "روبوت دردشة أساسي للإجابة على الأسئلة الشائعة."
              : "Einfacher Chatbot zur Beantwortung häufiger Fragen."
          }
          price="3,000 – 5,000"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Advanced Version (NLP Support) "
              : language === "ar"
              ? "إصدار متقدم (يدعم NLP)"
              : "Erweiterte Version (NLP-Unterstützung)"
          }
          description={
            language === "en"
              ? "Advanced chatbot with NLP support."
              : language === "ar"
              ? "روبوت متقدم يدعم معالجة اللغة الطبيعية (NLP)."
              : "Fortschrittlicher Chatbot mit NLP-Unterstützung."
          }
          price="6,000 – 15,000"
          type="fix"
          unity=""
        />
        <PricingCard
          title={
            language === "en"
              ? "Basic Recommendation Systems"
              : language === "ar"
              ? "أنظمة توصية أساسي"
              : "Einfache Empfehlungssysteme"
          }
          description={
            language === "en"
              ? "Basic recommendation system using fundamental data."
              : language === "ar"
              ? "نظام توصية يعتمد على البيانات الأساسية."
              : "Einfaches Empfehlungssystem basierend auf Basisdaten."
          }
          price="8,000 – 12,000"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Advance Recommendation Systems"
              : language === "ar"
              ? "أنظمة توصية متطور"
              : "Erweiterte Empfehlungssysteme"
          }
          description={
            language === "en"
              ? "Advanced recommendation system with smart algorithms."
              : language === "ar"
              ? "نظام توصية متقدم يعتمد على خوارزميات ذكية."
              : "Fortschrittliches Empfehlungssystem mit intelligenten Algorithmen."
          }
          price="8,000 – 12,000"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Computer Vision (PoC)"
              : language === "ar"
              ? "معالجة الصور والفيديو (PoC)"
              : "Computer Vision (PoC)"
          }
          description={
            language === "en"
              ? "Experimental model for image and video processing."
              : language === "ar"
              ? "نموذج تجريبي لمعالجة الصور والفيديو."
              : "Experimentelles Modell zur Bild- und Videobearbeitung."
          }
          price="5,000 – 10,000"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Computer Vision (full Aplication)"
              : language === "ar"
              ? "معالجة الصور والفيديو (تطبيق متكامل)"
              : "Computer Vision (Vollständige Anwendung) "
          }
          description={
            language === "en"
              ? "Full-scale application for image and video analysis."
              : language === "ar"
              ? "تطبيق متكامل لمعالجة وتحليل الصور والفيديو."
              : "Vollständige Anwendung zur Bild- und Videoanalyse."
          }
          price="20,000 – 40,000+"
          type="fix"
          unity=""
        />

        <PricingCard
          title={
            language === "en"
              ? "Maintenance & Support Website/App"
              : language === "ar"
              ? " (تطبيق/موقع) خدمات الصيانة والدعم"
              : "Wartung & Support-Dienste (Website/App)"
          }
          description={
            language === "en"
              ? "Basic maintenance for websites or apps."
              : language === "ar"
              ? "دعم وصيانة أساسية للمواقع أو التطبيقات."
              : "Grundlegende Wartung für Websites oder Apps."
          }
          price="100 – 500"
          type="sub"
          unity={
            language === "en" ? "Month" : language === "ar" ? "شهر" : "Monat"
          }
        />

        <PricingCard
          title={
            language === "en"
              ? "Maintenance & Support Ai"
              : language === "ar"
              ? " (Ai) خدمات الصيانة والدعم"
              : "Wartung & Support-Dienste (Ai)"
          }
          description={
            language === "en"
              ? "Advanced support for large projects & AI applications."
              : language === "ar"
              ? "دعم متقدم للمشاريع الكبيرة وتطبيقات الذكاء الاصطناعي."
              : "Erweiterter Support für große Projekte & KI-Anwendungen."
          }
          price="500 – 2,000+"
          type="sub"
          unity={
            language === "en" ? "Month" : language === "ar" ? "شهر" : "Monat"
          }
        />
      </div>
    </section>
  );
};

export default Pricing;
