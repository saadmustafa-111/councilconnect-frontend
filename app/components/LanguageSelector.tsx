"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg px-2 py-1.5">
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
          language === "en"
            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ur")}
        className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
          language === "ur"
            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md"
            : "text-slate-600 hover:text-slate-900"
        }`}
        style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}
      >
        اردو
      </button>
    </div>
  );
}
