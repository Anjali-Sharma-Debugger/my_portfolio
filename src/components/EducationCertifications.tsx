import { Award, GraduationCap } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolio';

export function EducationCertifications() {
  return (
    <section
      id="education"
      className="border-b border-[#E4E5E9] bg-[#FAF9F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#2563EB] tabular-nums">
            04 · Education &amp; Credentials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#111318] sm:text-4xl">
            Academic pathway &amp; certifications.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Education Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 border-b border-[#E4E5E9] pb-3 font-mono text-xs uppercase tracking-[0.14em] text-[#4E5563]">
              <GraduationCap className="h-4 w-4 text-[#2563EB]" />
              <span>Education</span>
            </div>

            <div className="divide-y divide-[#E4E5E9] border-b border-[#E4E5E9]">
              {EDUCATION.map((item) => (
                <article
                  key={item.degree}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12"
                >
                  <div className="sm:col-span-4">
                    <p className="font-mono text-xs text-[#6A7180] tabular-nums">
                      {item.index} · {item.period}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#4E5563]">
                      {item.location}
                    </p>
                  </div>

                  <div className="sm:col-span-8">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#111318]">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#1D4ED8]">
                      {item.institution}
                    </p>
                    {item.note && (
                      <p className="mt-2 text-sm leading-relaxed text-[#4E5563]">
                        {item.note}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications & Workshops Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 border-b border-[#E4E5E9] pb-3 font-mono text-xs uppercase tracking-[0.14em] text-[#4E5563]">
              <Award className="h-4 w-4 text-[#2563EB]" />
              <span>Certifications &amp; Workshops</span>
            </div>

            <div className="mt-5 space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <article
                  key={cert.title}
                  className="border border-[#D9DCE3] bg-white p-5 transition-colors hover:border-[#111318]"
                >
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.12em]">
                    <span className="text-[#2563EB]">{cert.type}</span>
                    <span className="text-[#9BA1AE] tabular-nums">
                      {cert.index}
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-display text-base font-bold tracking-tight text-[#111318]">
                    {cert.title}
                  </h3>

                  <p className="mt-1 font-mono text-xs text-[#4E5563]">
                    {cert.issuer}
                  </p>

                  <p className="mt-3 border-t border-[#F0F1F4] pt-3 text-sm leading-relaxed text-[#4E5563]">
                    {cert.focus}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
