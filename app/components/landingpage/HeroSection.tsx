import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
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
              <span className="text-sm font-semibold tracking-wide text-white">
                CounselConnect
              </span>
            </div>

            <Link
              href="/login"
              className="rounded-full border border-white/30 px-4 py-1.5 text-xs md:text-sm text-white/90 hover:bg-white/10 transition"
            >
              Login
            </Link>
          </div>

          <div className="flex flex-1 flex-col px-6 pb-8 pt-4 md:flex-row md:items-center md:px-10 md:pb-10 md:pt-2">
         
            <div className="w-full md:w-3/5">
           
              <div className="mb-6 flex gap-8 text-xs md:text-sm">
                <div>
                  <div className="text-xl font-bold text-white md:text-2xl drop-shadow-lg">Verified</div>
                  <div className="text-white/90 font-medium">Licensed Pakistani Lawyers</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white md:text-2xl drop-shadow-lg">24/7</div>
                  <div className="text-white/90 font-medium">Legal Access From Anywhere</div>
                </div>
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-2xl">
                Connect, Consult & Resolve
                <br />
                <span className="text-emerald-400">Your Legal Matters</span>
              </h1>

              {/* Subtext */}
              <p className="mt-5 max-w-lg text-base text-white font-medium md:text-lg drop-shadow-lg leading-relaxed">
                <span className="text-emerald-300">For Clients:</span> Find trusted lawyers, book consultations, and manage your cases seamlessly.
                <br />
                <span className="text-blue-300 mt-2 inline-block">For Lawyers:</span> Expand your practice, connect with clients, and streamline your workflow.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/signup?role=client"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-900/50 hover:bg-emerald-400 hover:shadow-xl transition-all"
                >
                  Join as Client
                  <span className="ml-2 text-xl">→</span>
                </Link>

                <Link
                  href="/signup?role=lawyer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm px-7 py-3 text-base font-semibold text-white hover:bg-white/20 hover:border-white transition-all"
                >
                  Join as Lawyer
                </Link>
              </div>
            </div>

            {/* Right: side text (desktop only) */}
            <div className="mt-8 hidden w-2/5 text-base text-white md:block md:pl-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-emerald-300">Why CounselConnect?</h3>
                <ul className="space-y-2 text-white/95 font-medium">
                  <li>✓ AI-powered lawyer matching</li>
                  <li>✓ Secure case tracking & documentation</li>
                  <li>✓ Integrated payment system</li>
                  <li>✓ Available in English & Urdu</li>
                  <li>✓ Mobile-friendly platform</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-white/30 bg-black/30 backdrop-blur-sm px-6 py-3 text-xs text-white/90 font-medium md:px-10 md:text-sm">
            <span>Supporting clients and lawyers across Pakistan</span>
            <span>Secure • Confidential • Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
