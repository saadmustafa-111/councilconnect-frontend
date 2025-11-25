"use client";

import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        {/* Developer Info */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-slate-500" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
            {t.footer.copyright}
          </p>

          {/* Developer Credit */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 border border-slate-200">
              <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-slate-900" style={{ fontFamily: language === "ur" ? "system-ui" : "inherit" }}>
                <span className="font-semibold">{t.footer.developedBy}</span> <span className="font-bold text-emerald-600">{t.footer.developerName}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:saadtanoli445@gmail.com"
                className="group flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                aria-label="Email Saad Mustafa"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 group-hover:bg-emerald-100 transition-colors">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="hidden lg:inline">saadtanoli445@gmail.com</span>
              </a>

              <a
                href="tel:+923412041065"
                className="group flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                aria-label="Call Saad Mustafa"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 group-hover:bg-emerald-100 transition-colors">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="hidden lg:inline">0341-2041065</span>
              </a>

             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
