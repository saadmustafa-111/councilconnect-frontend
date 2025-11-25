// app/components/landing/AudienceSection.tsx
import SectionContainer from "./SectionContainer";

export default function AudienceSection() {
  return (
    <SectionContainer id="audience">
      {/* Heading block */}
      <div className="mb-10 text-center md:mb-14">
        <p className="text-xs font-bold tracking-[0.25em] text-emerald-600 uppercase">
          Who We Serve
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Built for <span className="text-emerald-600">Clients</span> &amp; <span className="text-slate-700">Lawyers</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-base text-slate-600 md:text-lg leading-relaxed">
          CounselConnect bridges the gap between justice seekers and legal professionals,
          creating a modern platform that empowers both sides of the legal journey.
        </p>

        {/* accent line under heading */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-1 w-14 rounded-full bg-emerald-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
          <span className="h-1 w-14 rounded-full bg-slate-700" />
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {/* Clients card */}
        <div className="group relative overflow-hidden rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-300 md:p-8">
          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-sky-400/15 blur-2xl" />
          
          {/* Top gradient bar */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-400" />

          <div className="relative">
            {/* Icon */}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/40 md:h-14 md:w-14">
              <svg className="h-6 w-6 text-white md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 uppercase tracking-wide">
                For Clients
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Individuals &amp; Families
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
              Access Justice with <span className="text-emerald-600">Confidence</span>
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed md:text-base md:mt-4">
              Navigate your legal journey with verified lawyers, transparent pricing, 
              and complete case tracking—in English or Urdu, from your phone.
            </p>

            <ul className="mt-4 space-y-2.5 md:mt-6 md:space-y-3">
              <li className="flex gap-2.5 items-start md:gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 md:h-6 md:w-6">
                  <svg className="h-3 w-3 text-white md:h-3.5 md:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">
                  <strong className="text-slate-900">Smart Search:</strong> Find lawyers by city, expertise, language & budget
                </span>
              </li>
              <li className="flex gap-2.5 items-start md:gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 md:h-6 md:w-6">
                  <svg className="h-3 w-3 text-white md:h-3.5 md:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">
                  <strong className="text-slate-900">AI-Matching:</strong> Get personalized lawyer recommendations instantly
                </span>
              </li>
              <li className="flex gap-2.5 items-start md:gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 md:h-6 md:w-6">
                  <svg className="h-3 w-3 text-white md:h-3.5 md:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">
                  <strong className="text-slate-900">Case Hub:</strong> Track timeline, documents & updates securely
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lawyers card */}
        <div className="group relative overflow-hidden rounded-3xl border-2 border-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-400 md:p-8">
          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-slate-600/20 blur-3xl" />
          <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-blue-500/15 blur-2xl" />
          
          {/* Top gradient bar */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-slate-700 via-blue-600 to-sky-500" />

          <div className="relative">
            {/* Icon */}
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg shadow-slate-700/40 md:h-14 md:w-14">
              <svg className="h-6 w-6 text-white md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-200 px-2.5 py-1 text-xs font-bold text-slate-800 uppercase tracking-wide">
                For Lawyers
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Advocates &amp; Law Firms
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
              Elevate Your <span className="text-slate-700">Legal Practice</span>
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed md:text-base md:mt-4">
              Streamline your workflow, expand your client base, and manage your practice 
              with modern tools designed for Pakistani legal professionals.
            </p>

            <ul className="mt-4 space-y-2.5 md:mt-6 md:space-y-3">
              <li className="flex gap-2.5 items-start md:gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 md:h-6 md:w-6">
                  <svg className="h-3 w-3 text-white md:h-3.5 md:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">
                  <strong className="text-slate-900">Verified Profile:</strong> Showcase expertise, credentials & client reviews
                </span>
              </li>
              <li className="flex gap-2.5 items-start md:gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 md:h-6 md:w-6">
                  <svg className="h-3 w-3 text-white md:h-3.5 md:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">
                  <strong className="text-slate-900">Smart Scheduling:</strong> Manage appointments, availability & breaks
                </span>
              </li>
              <li className="flex gap-2.5 items-start md:gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 md:h-6 md:w-6">
                  <svg className="h-3 w-3 text-white md:h-3.5 md:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 font-medium">
                  <strong className="text-slate-900">Practice Dashboard:</strong> Case notes, documents & earnings in one place
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
