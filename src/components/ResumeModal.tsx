import { Printer, X } from 'lucide-react';
import { useEffect } from 'react';
import {
  CERTIFICATIONS,
  EDUCATION,
  PORTFOLIO_PROFILE,
  PROJECTS,
  SKILLS,
} from '../data/portfolio';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const groupedSkills = [
    {
      label: 'Programming',
      items: SKILLS.filter((s) => s.category === 'Programming').map((s) => s.name),
    },
    {
      label: 'Database',
      items: SKILLS.filter((s) => s.category === 'Database').map((s) => s.name),
    },
    {
      label: 'Web Development',
      items: SKILLS.filter((s) => s.category === 'Web Development').map((s) => s.name),
    },
    {
      label: 'Tools',
      items: SKILLS.filter((s) => s.category === 'Tools').map((s) => s.name),
    },
    {
      label: 'Currently Strengthening',
      items: SKILLS.filter((s) => s.category === 'Currently Strengthening').map(
        (s) => s.name
      ),
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111318]/75 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="print-only-sheet max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-[#D4D6DC] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Bar (hidden when printing) */}
        <div className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-[#E4E5E9] bg-[#FAF9F6] px-6 py-4 sm:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#2563EB]">
              Resume Preview
            </p>
            <p className="text-xs text-[#4E5563]">
              Formatted for clean browser printing or Save as PDF
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex cursor-pointer items-center gap-2 bg-[#111318] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#2563EB]"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="flex h-9 w-9 cursor-pointer items-center justify-center border border-[#D4D6DC] bg-white text-[#111318] transition-colors hover:border-[#111318]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Sheet (No Declaration / No Signature per documentation) */}
        <div className="space-y-6 px-7 py-8 sm:px-10 sm:py-10">
          <header className="border-b border-[#111318] pb-5">
            <h2
              id="resume-modal-title"
              className="font-display text-3xl font-extrabold tracking-tight text-[#111318]"
            >
              {PORTFOLIO_PROFILE.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-[#1D4ED8]">
              {PORTFOLIO_PROFILE.roleLine}
            </p>
            <p className="mt-2 font-mono text-xs text-[#4E5563] tabular-nums">
              {PORTFOLIO_PROFILE.institution} · {PORTFOLIO_PROFILE.location} ·
              Academic Year {PORTFOLIO_PROFILE.academicYear}
            </p>
          </header>

          <section>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#111318]">
              Career Objective
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#353B47]">
              {PORTFOLIO_PROFILE.careerFocus} {PORTFOLIO_PROFILE.heroIntro}
            </p>
          </section>

          <section>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#111318]">
              Education
            </h3>
            <div className="mt-2.5 space-y-2.5">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col justify-between border-b border-[#ECECEF] pb-2 sm:flex-row sm:items-baseline"
                >
                  <div>
                    <p className="text-sm font-bold text-[#111318]">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-[#4E5563]">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#6A7180] tabular-nums">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#111318]">
              Technical Skills
            </h3>
            <div className="mt-2.5 space-y-1.5 text-sm text-[#353B47]">
              {groupedSkills.map((group) => (
                <p key={group.label}>
                  <span className="font-semibold text-[#111318]">
                    {group.label}:
                  </span>{' '}
                  {group.items.join(', ')}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#111318]">
              Projects
            </h3>
            <div className="mt-3 space-y-4">
              {PROJECTS.map((project) => (
                <div key={project.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-bold text-[#111318]">
                      {project.title}
                    </h4>
                    <span className="font-mono text-[11px] uppercase text-[#1D4ED8]">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[#353B47]">
                    {project.summary}
                  </p>
                  <p className="mt-1 font-mono text-xs text-[#6A7180]">
                    {project.techStack.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#111318]">
              Certifications &amp; Workshops
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-[#353B47]">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.title}>
                  <span className="font-semibold text-[#111318]">
                    {cert.title}
                  </span>{' '}
                  — {cert.issuer}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#111318]">
              Core Strengths
            </h3>
            <p className="mt-1.5 text-sm text-[#353B47]">
              {PORTFOLIO_PROFILE.strengths.map((s) => s.title).join(' · ')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
