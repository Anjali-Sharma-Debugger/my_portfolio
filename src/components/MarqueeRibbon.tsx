import { MARQUEE_ITEMS } from '../data/portfolio';

export function MarqueeRibbon() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="no-print overflow-hidden border-b border-[#E4E5E9] bg-[#111318] py-3 text-[#E4E7EE]"
    >
      <div className="animate-portfolio-marquee flex items-center gap-6">
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-6 font-mono text-xs uppercase tracking-[0.18em]"
          >
            <span>{item}</span>
            <span className="text-[#2563EB]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
