import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PORTFOLIO_PROFILE } from '../data/portfolio';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const offsets = NAV_LINKS.map((link) => {
        const el = document.querySelector(link.href);
        if (!el) return { href: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: Math.abs(rect.top - 140) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      if (window.scrollY > 220) {
        setActiveSection(closest.href);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`no-print sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FAF9F6]/92 backdrop-blur-md border-b border-[#E4E5E9]'
          : 'bg-[#FAF9F6]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-3 text-[#111318] focus:outline-none"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-[#111318] bg-[#111318] font-mono text-xs font-medium tracking-wider text-[#FAF9F6] transition-colors group-hover:border-[#2563EB] group-hover:bg-[#2563EB]">
            {PORTFOLIO_PROFILE.monogram}
          </span>
          <span className="whitespace-nowrap font-display text-base font-bold tracking-tight">
            {PORTFOLIO_PROFILE.name}
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#1D4ED8]'
                    : 'text-[#4E5563] hover:text-[#111318]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#2563EB]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden cursor-pointer whitespace-nowrap border border-[#111318] bg-[#111318] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#FAF9F6] transition-colors hover:border-[#2563EB] hover:bg-[#2563EB] sm:inline-flex"
          >
            Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-[#D4D6DC] bg-white text-[#111318] transition-colors hover:border-[#111318] md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E4E5E9] bg-[#FAF9F6] px-5 py-5 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="border-b border-[#ECECEF] py-3 text-base font-medium text-[#111318] transition-colors hover:text-[#2563EB]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="mt-4 w-full cursor-pointer border border-[#111318] bg-[#111318] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-[#FAF9F6] transition-colors hover:bg-[#2563EB] hover:border-[#2563EB]"
            >
              View &amp; Print Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
