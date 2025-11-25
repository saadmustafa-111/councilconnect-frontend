"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function HeroSection() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <section className="w-full px-2 pt-4 md:px-4 md:pt-6">
      <div className="relative mx-auto h-[85vh] min-h-[600px] max-w-7xl overflow-hidden rounded-2xl bg-slate-900">
        <Image
          src="/HeroImg.jpg" 
          alt="Clients consulting a lawyer"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

        <div className="relative z-10 flex h-full flex-col justify-between">
     
          <div className="flex items-center justify-between px-5 pt-4 md:px-8 md:pt-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <span className="text-sm font-semibold text-white">CC</span>
              </div>
              <span className="text-sm font-semibold tracking-wide text-white" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                {t.hero.brandName}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-1.5 py-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                    language === "en"
                      ? "bg-emerald-500 text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ur")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                    language === "ur"
                      ? "bg-emerald-500 text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ fontFamily: "system-ui" }}
                >
                  اردو
                </button>
              </div>

              <Link
                href="/login"
                className="rounded-full border border-white/30 px-4 py-1.5 text-xs md:text-sm text-white/90 hover:bg-white/10 transition"
                style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}
              >
                {t.hero.login}
              </Link>
            </div>
          </div>

          <div className="flex flex-1 flex-col px-6 pb-8 pt-4 md:flex-row md:items-center md:px-10 md:pb-10 md:pt-2">
         
            <div className="w-full md:w-3/5" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
           
              <div className="mb-6 flex gap-8 text-xs md:text-sm">
                <div>
                  <div className="text-xl font-bold text-white md:text-2xl drop-shadow-lg" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.verified}</div>
                  <div className="text-white/90 font-medium" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.verifiedText}</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white md:text-2xl drop-shadow-lg">{t.hero.availability}</div>
                  <div className="text-white/90 font-medium" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.availabilityText}</div>
                </div>
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-2xl" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                {t.hero.mainHeading}
                <br />
                <span className="text-emerald-400">{t.hero.subHeading}</span>
              </h1>

              {/* Subtext */}
              <p className="mt-5 max-w-lg text-base text-white font-medium md:text-lg drop-shadow-lg leading-relaxed" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                {t.hero.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/signup?role=client"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/50 hover:bg-emerald-400 hover:shadow-xl transition-all"
                  style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}
                >
                  {t.hero.joinClient}
                  <span className="ml-2 text-xl">{language === "ur" ? "←" : "→"}</span>
                </Link>

                <Link
                  href="/signup?role=lawyer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm px-7 py-3 text-base font-semibold text-white hover:bg-white/20 hover:border-white transition-all"
                  style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}
                >
                  {t.hero.joinLawyer}
                </Link>
              </div>
            </div>

            {/* Right: side text (desktop only) */}
            <div className="mt-8 hidden w-2/5 text-base text-white md:block md:pl-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
                <h3 className="text-xl font-bold mb-3 text-emerald-300" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.whyTitle}</h3>
                <ul className="space-y-2 text-white/95 font-medium">
                  <li className="flex items-start gap-2">
                    <span className={language === "ur" ? "order-last" : ""}>✓</span>
                    <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.feature1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className={language === "ur" ? "order-last" : ""}>✓</span>
                    <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.feature2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className={language === "ur" ? "order-last" : ""}>✓</span>
                    <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.feature3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className={language === "ur" ? "order-last" : ""}>✓</span>
                    <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.feature4}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className={language === "ur" ? "order-last" : ""}>✓</span>
                    <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.hero.feature5}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-white/30 bg-black/30 backdrop-blur-sm px-6 py-3 text-xs text-white/90 font-medium md:px-10 md:text-sm" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
            <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.footer.supportText}</span>
            <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.footer.securityText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
