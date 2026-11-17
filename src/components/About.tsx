import { Briefcase, GraduationCap } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="border-b border-[#E4E5E9] bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Section Header & Career Focus */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#2563EB] tabular-nums">
                01 · About Me
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#111318] sm:text-4xl">
                Learning by building practical software.
              </h2>
            </div>

            <div className="border border-[#E4E5E9] bg-[#FAF9F6] p-5">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#1D4ED8]">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Career Focus</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#252A34]">
                {PORTFOLIO_PROFILE.careerFocus}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative + Coursework & Strengths */}
          <div className="lg:col-span-8">
            <div className="space-y-5 text-[15.5px] leading-[1.75] text-[#353B47] sm:text-base">
              {PORTFOLIO_PROFILE.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Academic Foundations Strip */}
            <div className="mt-10 border-t border-[#E4E5E9] pt-8">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[#4E5563]">
                <GraduationCap className="h-4 w-4 text-[#2563EB]" />
                <span>Core Academic Coursework</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#111318]">
                {PORTFOLIO_PROFILE.academicCoursework.join(' · ')}
              </p>
            </div>

            {/* Strengths Grid */}
            <div className="mt-8 grid grid-cols-1 gap-px border border-[#E4E5E9] bg-[#E4E5E9] sm:grid-cols-2">
              {PORTFOLIO_PROFILE.strengths.map((strength, idx) => (
                <div key={strength.title} className="bg-white p-5">
                  <p className="font-mono text-[11px] text-[#6A7180] tabular-nums">
                    0{idx + 1}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-bold text-[#111318]">
                    {strength.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4E5563]">
                    {strength.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
