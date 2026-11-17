import { useState } from 'react';
import {
  SKILL_CATEGORIES,
  SKILLS,
  type SkillCategoryFilter,
} from '../data/portfolio';

export function Skills() {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategoryFilter>('All');

  const visibleSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="border-b border-[#E4E5E9] bg-[#FAF9F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#2563EB] tabular-nums">
              02 · Skills &amp; Stack
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#111318] sm:text-4xl">
              Technical capabilities &amp; active learning.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#4E5563]">
            Organised across core coursework, project tooling, and areas I am
            actively strengthening through practical coding.
          </p>
        </div>

        {/* Interactive Underlined Category Filter Tabs (Zero Pills) */}
        <div
          role="tablist"
          aria-label="Filter skills by category"
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[#E4E5E9]"
        >
          {SKILL_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer border-b-2 pb-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-[#2563EB] text-[#111318]'
                    : 'border-transparent text-[#5E6573] hover:text-[#111318]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Clean Bento / Hairline Grid with Honest Proficiency Labels */}
        <div className="mt-8 grid grid-cols-1 gap-px border border-[#E4E5E9] bg-[#E4E5E9] sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map((skill, idx) => (
            <article
              key={skill.name}
              className="flex flex-col justify-between bg-white p-6 transition-colors hover:bg-[#FDFDFC]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6A7180]">
                    {skill.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#9BA1AE] tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-[#111318]">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#4E5563]">
                  {skill.context}
                </p>
              </div>

              <div className="mt-6 border-t border-[#F0F1F4] pt-3">
                <p className="font-mono text-xs font-medium text-[#1D4ED8]">
                  {skill.levelLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
