"use client";

import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function CTASection() {
  const { t, language } = useLanguage();
  
  return (
    <SectionContainer id="get-started">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-12 text-white shadow-2xl md:px-12 md:py-16" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="legal-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#legal-pattern)" />
          </svg>
        </div>

        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Left: main message */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                {t.cta.badge}
              </p>
            </div>
            
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
              {t.cta.heading}{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                {t.cta.headingHighlight}
              </span>
              {t.cta.headingEnd}
            </h2>
            
            <p className="mt-4 text-base text-slate-300 leading-relaxed md:text-lg" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
              {t.cta.description}
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <svg className={`h-5 w-5 text-emerald-400 ${language === "ur" ? "order-last" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.cta.trustBadge1}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <svg className={`h-5 w-5 text-emerald-400 ${language === "ur" ? "order-last" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.cta.trustBadge2}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <svg className={`h-5 w-5 text-emerald-400 ${language === "ur" ? "order-last" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span className="font-medium" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.cta.trustBadge3}</span>
              </div>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col gap-4 md:w-96">
            <Link
              href="/signup?role=client"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-5 shadow-xl shadow-emerald-500/30 transition-all hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-center justify-between" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
                <div className="flex flex-col text-left" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
                  <span className="text-lg font-bold text-white" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.cta.primaryButton}</span>
                  <span className="mt-1 text-sm text-emerald-50" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                    {t.hero.joinClient}
                  </span>
                </div>
                <div className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <svg className={`h-5 w-5 text-white ${language === "ur" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link
              href="/signup?role=lawyer"
              className="group relative overflow-hidden rounded-2xl border-2 border-slate-600 bg-slate-800/50 backdrop-blur-sm px-6 py-5 transition-all hover:border-emerald-500 hover:bg-slate-800 hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div className="flex items-center justify-between" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
                <div className="flex flex-col text-left" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
                  <span className="text-lg font-bold text-white" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{t.cta.secondaryButton}</span>
                  <span className="mt-1 text-sm text-slate-300" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                    {t.hero.joinLawyer}
                  </span>
                </div>
                <div className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-600 group-hover:border-emerald-500 transition-all">
                  <svg className={`h-5 w-5 text-slate-300 group-hover:text-emerald-400 ${language === "ur" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
