import { PORTFOLIO_PROFILE } from '../data/portfolio';

interface FooterProps {
  onOpenResume: () => void;
}

export function Footer({ onOpenResume }: FooterProps) {
  return (
    <footer className="no-print border-t border-[#252A34] bg-[#0B0D11] py-8 text-[#9BA3B4]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8">
        <div className="font-mono text-xs tabular-nums">
          © 2026 {PORTFOLIO_PROFILE.name} · {PORTFOLIO_PROFILE.location}
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-white">
            Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-white">
            Projects
          </a>
          <a href="#education" className="transition-colors hover:text-white">
            Education
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="cursor-pointer font-medium text-[#60A5FA] transition-colors hover:text-white"
          >
            Print Resume
          </button>
        </div>
      </div>
    </footer>
  );
}
