import { ArrowRight, ArrowUpRight, FileText, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { HERO_METRICS, PORTFOLIO_PROFILE } from '../data/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

type PreviewTab = 'profile.py' | 'books.json';

export function Hero({ onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<PreviewTab>('profile.py');

  return (
    <section id="top" className="border-b border-[#E4E5E9] bg-[#FAF9F6]">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-18 lg:pt-20">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#2563EB]">
                {PORTFOLIO_PROFILE.kicker}
              </p>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111318] sm:text-5xl lg:text-[3.5rem]">
                {PORTFOLIO_PROFILE.headlinePrefix}{' '}
                <span className="font-['Cormorant_Garamond'] text-[1.08em] font-semibold italic text-[#1D4ED8]">
                  {PORTFOLIO_PROFILE.name}
                </span>
              </h1>

              <p className="mt-4 font-display text-base font-semibold tracking-tight text-[#252A34] sm:text-lg">
                {PORTFOLIO_PROFILE.roleLine}
              </p>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#4E5563] sm:text-base">
                {PORTFOLIO_PROFILE.heroIntro}
              </p>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#111318] px-6 py-3.5 text-sm font-semibold text-[#FAF9F6] transition-colors hover:bg-[#2563EB]"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#CFD2DA] bg-white px-6 py-3.5 text-sm font-semibold text-[#111318] transition-colors hover:border-[#111318]"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4 text-[#4E5563]" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex cursor-pointer items-center gap-2 px-2 py-3.5 text-sm font-semibold text-[#1D4ED8] underline decoration-[#1D4ED8]/35 underline-offset-4 transition-colors hover:text-[#111318] hover:decoration-[#111318]"
              >
                <FileText className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Right Column: Matching-Height Interactive Developer Dossier Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col justify-between border border-[#D9DCE3] bg-white shadow-[0_18px_40px_-28px_rgba(17,19,24,0.22)]">
              {/* Top Interactive Code / Dossier Bar */}
              <div className="flex items-center justify-between border-b border-[#E8EAEE] bg-[#F5F6F8] px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#4E5563]">
                  <Terminal className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span>workspace / portfolio</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile.py')}
                    className={`cursor-pointer border-b-2 pb-0.5 font-mono text-xs transition-colors ${
                      activeTab === 'profile.py'
                        ? 'border-[#2563EB] font-medium text-[#111318]'
                        : 'border-transparent text-[#6A7180] hover:text-[#111318]'
                    }`}
                  >
                    profile.py
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('books.json')}
                    className={`cursor-pointer border-b-2 pb-0.5 font-mono text-xs transition-colors ${
                      activeTab === 'books.json'
                        ? 'border-[#2563EB] font-medium text-[#111318]'
                        : 'border-transparent text-[#6A7180] hover:text-[#111318]'
                    }`}
                  >
                    books.json
                  </button>
                </div>
              </div>

              {/* Code / Structure Body */}
              <div className="flex-1 bg-[#111318] p-5 font-mono text-[12.5px] leading-6 text-[#E4E7EE]">
                {activeTab === 'profile.py' ? (
                  <pre className="overflow-x-auto">
                    <code>
                      <span className="text-[#7C8599]">01</span>{' '}
                      <span className="text-[#93C5FD]">student</span> = {'{\n'}
                      <span className="text-[#7C8599]">02</span>{' '}
                      {'  '}<span className="text-[#A5F3FC]">&quot;name&quot;</span>:{' '}
                      <span className="text-[#FDE68A]">&quot;Anjali Sharma&quot;</span>,{'\n'}
                      <span className="text-[#7C8599]">03</span>{' '}
                      {'  '}<span className="text-[#A5F3FC]">&quot;program&quot;</span>:{' '}
                      <span className="text-[#FDE68A]">&quot;BCA · V Semester&quot;</span>,{'\n'}
                      <span className="text-[#7C8599]">04</span>{' '}
                      {'  '}<span className="text-[#A5F3FC]">&quot;college&quot;</span>:{' '}
                      <span className="text-[#FDE68A]">&quot;Sindhi College, Bengaluru&quot;</span>,{'\n'}
                      <span className="text-[#7C8599]">05</span>{' '}
                      {'  '}<span className="text-[#A5F3FC]">&quot;focus&quot;</span>: [
                      <span className="text-[#FDE68A]">&quot;Python&quot;</span>,{' '}
                      <span className="text-[#FDE68A]">&quot;SQL&quot;</span>,{' '}
                      <span className="text-[#FDE68A]">&quot;HTML/CSS&quot;</span>],{'\n'}
                      <span className="text-[#7C8599]">06</span>{' '}
                      {'  '}<span className="text-[#A5F3FC]">&quot;building&quot;</span>:{' '}
                      <span className="text-[#FDE68A]">&quot;Library Management System&quot;</span>,{'\n'}
                      <span className="text-[#7C8599]">07</span>{' '}
                      {'  '}<span className="text-[#A5F3FC]">&quot;learning&quot;</span>: [
                      <span className="text-[#FDE68A]">&quot;NumPy&quot;</span>,{' '}
                      <span className="text-[#FDE68A]">&quot;JSON&quot;</span>,{' '}
                      <span className="text-[#FDE68A]">&quot;Tkinter&quot;</span>],{'\n'}
                      <span className="text-[#7C8599]">08</span>{' '}
                      {'  '}<span className="text-[#A5F3FC]">&quot;seeking&quot;</span>:{' '}
                      <span className="text-[#FDE68A]">&quot;IT Internship / Entry Role&quot;</span>{'\n'}
                      <span className="text-[#7C8599]">09</span> {'}'}
                    </code>
                  </pre>
                ) : (
                  <pre className="overflow-x-auto">
                    <code>
                      <span className="text-[#7C8599]">01</span> {'[\n'}
                      <span className="text-[#7C8599]">02</span> {'  {\n'}
                      <span className="text-[#7C8599]">03</span>{' '}
                      {'    '}<span className="text-[#A5F3FC]">&quot;book_id&quot;</span>:{' '}
                      <span className="text-[#FDE68A]">&quot;BK-101&quot;</span>,{'\n'}
                      <span className="text-[#7C8599]">04</span>{' '}
                      {'    '}<span className="text-[#A5F3FC]">&quot;title&quot;</span>:{' '}
                      <span className="text-[#FDE68A]">&quot;Python Crash Course&quot;</span>,{'\n'}
                      <span className="text-[#7C8599]">05</span>{' '}
                      {'    '}<span className="text-[#A5F3FC]">&quot;issued_to&quot;</span>:{' '}
                      <span className="text-[#93C5FD]">null</span>,{'\n'}
                      <span className="text-[#7C8599]">06</span>{' '}
                      {'    '}<span className="text-[#A5F3FC]">&quot;available&quot;</span>:{' '}
                      <span className="text-[#86EFAC]">true</span>{'\n'}
                      <span className="text-[#7C8599]">07</span> {'  }\n'}
                      <span className="text-[#7C8599]">08</span> {']\n'}
                      <span className="text-[#7C8599]">09</span>{' '}
                      <span className="text-[#7C8599]"># Persisted via Python json module</span>
                    </code>
                  </pre>
                )}
              </div>

              {/* Card Footer Summary */}
              <div className="grid grid-cols-2 divide-x divide-[#E8EAEE] border-t border-[#E8EAEE] bg-white">
                <div className="px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6A7180]">
                    Current Focus
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#111318]">
                    Python &amp; Software Projects
                  </p>
                </div>
                <div className="px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6A7180]">
                    Base
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#111318]">
                    Bengaluru, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Metrics Row Below the Split */}
        <div className="mt-12 grid grid-cols-2 divide-y divide-[#E4E5E9] border border-[#E4E5E9] bg-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {HERO_METRICS.map((metric) => (
            <div key={metric.index} className="px-5 py-4.5">
              <p className="font-mono text-[11px] text-[#6A7180] tabular-nums">
                {metric.index}
              </p>
              <p className="mt-1.5 font-display text-lg font-bold tracking-tight text-[#111318] tabular-nums sm:text-xl">
                {metric.value}
              </p>
              <p className="mt-0.5 text-xs text-[#4E5563]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
