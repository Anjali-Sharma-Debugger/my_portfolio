import { ArrowUpRight, BookOpen, Compass, Database, Layers } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS, type ProjectItem } from '../data/portfolio';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [lmsPreviewMode, setLmsPreviewMode] = useState<'gui' | 'json'>('gui');

  return (
    <section
      id="projects"
      className="border-b border-[#E4E5E9] bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#2563EB] tabular-nums">
              03 · Projects
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#111318] sm:text-4xl">
              Selected work &amp; academic explorations.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#4E5563]">
            Each project reflects its real current stage—separating implemented
            modules from early academic concepts.
          </p>
        </div>

        {/* Two-Project Editorial Showcase */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Project 1: Library Management System (Featured 7 cols) */}
          {(() => {
            const project = PROJECTS[0];
            return (
              <article className="flex flex-col justify-between border border-[#D9DCE3] bg-[#FAF9F6] lg:col-span-7">
                <div>
                  {/* Interactive Schematic / Preview Window */}
                  <div className="border-b border-[#D9DCE3] bg-[#111318] p-5 text-[#E4E7EE]">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#252A34] pb-3">
                      <div className="flex items-center gap-2 font-mono text-xs text-[#9BA3B4]">
                        <Database className="h-3.5 w-3.5 text-[#60A5FA]" />
                        <span>library_management_system</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setLmsPreviewMode('gui')}
                          className={`cursor-pointer border-b pb-0.5 font-mono text-xs transition-colors ${
                            lmsPreviewMode === 'gui'
                              ? 'border-[#60A5FA] text-white'
                              : 'border-transparent text-[#8B93A5] hover:text-white'
                          }`}
                        >
                          Tkinter Exploration
                        </button>
                        <button
                          type="button"
                          onClick={() => setLmsPreviewMode('json')}
                          className={`cursor-pointer border-b pb-0.5 font-mono text-xs transition-colors ${
                            lmsPreviewMode === 'json'
                              ? 'border-[#60A5FA] text-white'
                              : 'border-transparent text-[#8B93A5] hover:text-white'
                          }`}
                        >
                          JSON Records
                        </button>
                      </div>
                    </div>

                    {lmsPreviewMode === 'gui' ? (
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {[
                          { code: '01', label: 'Add & View Books' },
                          { code: '02', label: 'Student Records' },
                          { code: '03', label: 'Issue Books' },
                          { code: '04', label: 'Return Books' },
                          { code: '05', label: 'Search Catalogue' },
                          { code: '06', label: 'Issued Records' },
                        ].map((mod) => (
                          <div
                            key={mod.code}
                            className="border border-[#2A303D] bg-[#181B22] p-3"
                          >
                            <p className="font-mono text-[10px] text-[#60A5FA] tabular-nums">
                              MOD · {mod.code}
                            </p>
                            <p className="mt-1 text-xs font-medium text-[#F3F4F6]">
                              {mod.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <pre className="mt-4 overflow-x-auto font-mono text-xs leading-6 text-[#D1D5DB]">
                        <code>{`{
  "books": [{ "id": "B01", "title": "Clean Code", "copies": 3 }],
  "students": [{ "id": "S14", "name": "Anjali S." }],
  "issued_records": [{ "book_id": "B01", "student_id": "S14" }]
}`}</code>
                      </pre>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <span className="text-[#6A7180] tabular-nums">
                        {project.index} · {project.subtitle}
                      </span>
                      <span className="font-semibold uppercase tracking-[0.12em] text-[#B45309]">
                        Status: {project.status}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#111318]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-[#4E5563]">
                      {project.summary}
                    </p>

                    <ul className="mt-5 grid grid-cols-1 gap-2 border-t border-[#E4E5E9] pt-5 sm:grid-cols-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-[#252A34]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 bg-[#2563EB]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E5E9] bg-white px-6 py-4 sm:px-8">
                  <p className="font-mono text-xs text-[#4E5563]">
                    {project.techStack.join(' · ')}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#111318]"
                  >
                    Inspect Case Study &amp; Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })()}

          {/* Project 2: Sahayak AI (5 cols) */}
          {(() => {
            const project = PROJECTS[1];
            return (
              <article className="flex flex-col justify-between border border-[#D9DCE3] bg-[#FAF9F6] lg:col-span-5">
                <div>
                  {/* Conceptual Flow Header */}
                  <div className="border-b border-[#D9DCE3] bg-[#161E2E] p-5 text-[#E4E7EE]">
                    <div className="flex items-center justify-between border-b border-[#28334A] pb-3 font-mono text-xs text-[#9BB0D3]">
                      <span className="flex items-center gap-2">
                        <Compass className="h-3.5 w-3.5 text-[#60A5FA]" />
                        <span>conceptual_flow</span>
                      </span>
                      <span className="uppercase tracking-[0.12em]">
                        Concept Scope
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {[
                        {
                          step: '01',
                          title: 'Citizen Information Need',
                          desc: 'Plain-language query about public services',
                        },
                        {
                          step: '02',
                          title: 'Guided Discovery Concept',
                          desc: 'Explores AI-assisted service navigation',
                        },
                        {
                          step: '03',
                          title: 'Relevant Service Direction',
                          desc: 'Clear pointers without fabricated live integrations',
                        },
                      ].map((stage) => (
                        <div
                          key={stage.step}
                          className="flex items-start gap-3 border border-[#28334A] bg-[#1E273B] px-3.5 py-2.5"
                        >
                          <span className="font-mono text-[11px] text-[#60A5FA] tabular-nums">
                            {stage.step}
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-white">
                              {stage.title}
                            </p>
                            <p className="text-[11px] text-[#AAB7CE]">
                              {stage.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <span className="text-[#6A7180] tabular-nums">
                        {project.index} · {project.subtitle}
                      </span>
                      <span className="font-semibold uppercase tracking-[0.12em] text-[#1D4ED8]">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#111318]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-[#4E5563]">
                      {project.summary}
                    </p>

                    <div className="mt-5 border-t border-[#E4E5E9] pt-5">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#4E5563]">
                        <Layers className="h-3.5 w-3.5 text-[#2563EB]" />
                        <span>Project Intent</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-[#252A34]"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 bg-[#2563EB]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E4E5E9] bg-white px-6 py-4 sm:px-8">
                  <p className="font-mono text-xs text-[#4E5563]">
                    {project.techStack.join(' · ')}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#111318]"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    View Scope Notes
                  </button>
                </div>
              </article>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
