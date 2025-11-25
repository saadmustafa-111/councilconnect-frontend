"use client";

import { useState, useRef, useEffect } from "react";
import SectionContainer from "./SectionContainer";

const steps = [
  {
    title: "Share Your Legal Issue",
    description:
      "Pick your case type — family, property, civil, criminal, corporate — and tell us what you need help with.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 via-white to-emerald-50/30",
  },
  {
    title: "Get Matched with Lawyers",
    description:
      "See verified lawyers that fit your issue, location, language, and budget. Use AI suggestions or manual search.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 via-white to-blue-50/30",
  },
  {
    title: "Book & Connect Securely",
    description:
      "Choose a time that works for you, pay online, and connect via chat or call through CounselConnect.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 via-white to-purple-50/30",
  },
  {
    title: "Track Your Case Progress",
    description:
      "Follow updates, hearing dates, and documents in one simple timeline, instead of scattered WhatsApp chats.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-50 via-white to-amber-50/30",
  },
];

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && activeIndex < steps.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (movedBy > 50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer id="how-it-works">
      <div className="mb-10 text-center md:mb-14">
        <p className="text-xs font-bold tracking-[0.25em] text-emerald-600 uppercase">
          How It Works
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          From Confusion to <span className="text-emerald-600">Clarity</span> in Four Steps
        </h2>
        <p className="mt-4 text-base text-slate-600 md:text-lg max-w-3xl mx-auto leading-relaxed">
          CounselConnect guides you from "I don't know where to start" to
          "I know who my lawyer is and what's happening next."
        </p>
        
        {/* accent line */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-1 w-14 rounded-full bg-emerald-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
          <span className="h-1 w-14 rounded-full bg-slate-700" />
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white via-slate-50/30 to-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-300 hover:scale-105"
          >
            {/* Decorative blur */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl group-hover:bg-emerald-400/30 transition-all duration-500" />
            
            {/* Step number badge */}
            <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-base font-bold text-white shadow-lg shadow-emerald-500/40 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
              {index + 1}
            </div>
            
            {/* Icon */}
            <div className="relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              {step.icon}
            </div>

            <h3 className="relative text-lg font-bold text-slate-900">
              {step.title}
            </h3>
            <p className="relative mt-3 text-sm text-slate-600 leading-relaxed">
              {step.description}
            </p>

            {/* Progress bar on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>

      {/* Mobile Swipeable Carousel */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          {/* Cards Container */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out touch-pan-y"
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${isDragging ? currentTranslate : 0}px))`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="w-full flex-shrink-0 px-4"
              >
                <div className={`relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br ${step.bgGradient} p-8 shadow-2xl ${
                  index === activeIndex 
                    ? 'border-emerald-300 scale-100' 
                    : 'border-slate-200 scale-95 opacity-60'
                } transition-all duration-500`}>
                  {/* Decorative elements */}
                  <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
                  <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl" />
                  
                  {/* Step number with animation */}
                  <div className={`relative mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-2xl font-bold text-white shadow-2xl ${
                    index === activeIndex ? 'animate-bounce' : ''
                  }`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon with animation */}
                  <div className={`relative mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm text-emerald-600 shadow-lg ${
                    index === activeIndex ? 'animate-pulse' : ''
                  }`}>
                    {step.icon}
                  </div>

                  <h3 className="relative text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="relative text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${step.gradient} transition-all duration-1000 ${
                          index === activeIndex ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-300 ${
                index === activeIndex
                  ? 'w-12 h-3'
                  : 'w-3 h-3'
              }`}
              aria-label={`Go to step ${index + 1}`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? `bg-gradient-to-r ${step.gradient} shadow-lg`
                  : 'bg-slate-300'
              }`} />
            </button>
          ))}
        </div>

        {/* Swipe Hint */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <svg className="h-5 w-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to explore</span>
          <svg className="h-5 w-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </SectionContainer>
  );
}
