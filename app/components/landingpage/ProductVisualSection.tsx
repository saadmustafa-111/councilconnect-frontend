"use client";

import Image from "next/image";
import SectionContainer from "./SectionContainer";
import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function ProductVisualSection() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const visuals = [
    {
      label: t.productVisual.feature1.label,
      title: t.productVisual.feature1.title,
      description: t.productVisual.feature1.description,
      cta: t.productVisual.feature1.cta,
      image: "/legalclient.jpg",
      color: "emerald",
    },
    {
      label: t.productVisual.feature2.label,
      title: t.productVisual.feature2.title,
      description: t.productVisual.feature2.description,
      cta: t.productVisual.feature2.cta,
      image: "/legaldocument.jpg",
      color: "blue",
    },
    {
      label: t.productVisual.feature3.label,
      title: t.productVisual.feature3.title,
      description: t.productVisual.feature3.description,
      cta: t.productVisual.feature3.cta,
      image: "/legalhearing.jpg",
      color: "amber",
    },
    {
      label: t.productVisual.feature4.label,
      title: t.productVisual.feature4.title,
      description: t.productVisual.feature4.description,
      cta: t.productVisual.feature4.cta,
      image: "/lawyerdesk.jpg",
      color: "slate",
    },
  ];

  return (
    <SectionContainer id="product-visuals">
      {/* Heading */}
      <div className="mb-10 text-center md:mb-14" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
        <p className="text-xs font-bold tracking-[0.25em] text-emerald-600 uppercase" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
          {t.productVisual.realWorkflows}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
          {t.productVisual.seeWhere}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-base text-slate-600 md:text-lg leading-relaxed" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
          {t.productVisual.journeyDescription}
        </p>
        
        {/* accent line */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-1 w-14 rounded-full bg-emerald-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
          <span className="h-1 w-14 rounded-full bg-slate-700" />
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
        {visuals.map((item, index) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-300"
            style={{ direction: language === "ur" ? "rtl" : "ltr" }}
          >
            {/* Decorative blur */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl group-hover:bg-emerald-400/20 transition-all" />
            
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden lg:h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Label on image */}
              <div className={`absolute top-4 ${language === "ur" ? "right-4" : "left-4"}`}>
                <span className={`inline-flex items-center rounded-full bg-${item.color}-500 bg-opacity-90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-lg`} style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                  {item.label}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 lg:p-7">
              <h3 className="text-lg font-bold text-slate-900 lg:text-xl" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed lg:text-base" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                {item.description}
              </p>
              
              {/* Learn more link */}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:gap-3 transition-all">
                <span style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>{item.cta}</span>
                <svg className={`h-4 w-4 ${language === "ur" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className="md:hidden">
        {/* Active Card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-200 bg-white shadow-xl" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />
          
          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={visuals[activeIndex].image}
              alt={visuals[activeIndex].title}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Label on image */}
            <div className={`absolute top-4 ${language === "ur" ? "right-4" : "left-4"}`}>
              <span className="inline-flex items-center rounded-full bg-emerald-500 bg-opacity-90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white shadow-lg" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                {visuals[activeIndex].label}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6">
            <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
              {visuals[activeIndex].title}
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
              {visuals[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {visuals.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-emerald-500'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveIndex((activeIndex - 1 + visuals.length) % visuals.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 shadow-md transition-all hover:border-emerald-500 hover:text-emerald-600 hover:shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % visuals.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-700 shadow-md transition-all hover:border-emerald-500 hover:text-emerald-600 hover:shadow-lg"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Counter */}
        <div className="mt-4 text-center text-sm font-medium text-slate-600">
          {activeIndex + 1} / {visuals.length}
        </div>
      </div>
    </SectionContainer>
  );
}
