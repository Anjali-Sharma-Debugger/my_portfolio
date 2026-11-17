import { CheckCircle2, FileText, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { PORTFOLIO_PROFILE } from '../data/portfolio';

interface ContactProps {
  onOpenResume: () => void;
}

export function Contact({ onOpenResume }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('IT Internship Inquiry');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email address, and message.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setTopic('IT Internship Inquiry');
    setMessage('');
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="contact" className="bg-[#111318] py-20 text-[#FAF9F6] sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Details & Resume Trigger */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#60A5FA] tabular-nums">
                05 · Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Open to IT internships &amp; entry-level roles.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#B2B8C6]">
                I am looking forward to opportunities where I can apply Python
                programming, SQL databases, and web fundamentals while learning
                from experienced engineering teams.
              </p>
            </div>

            <div className="space-y-4 border-t border-[#252A34] pt-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#60A5FA]" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8B93A5]">
                    Location &amp; Campus
                  </p>
                  <p className="mt-1 text-[#F3F4F6]">
                    {PORTFOLIO_PROFILE.institution} · {PORTFOLIO_PROFILE.location}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex cursor-pointer items-center gap-2 border border-[#353C4A] bg-[#181B22] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-[#60A5FA] hover:bg-[#2563EB]"
                >
                  <FileText className="h-4 w-4" />
                  Open Printable Resume
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="border border-[#252A34] bg-[#181B22] p-6 sm:p-8 lg:col-span-7">
            {submitted ? (
              <div className="flex h-full flex-col justify-between py-6">
                <div>
                  <CheckCircle2 className="h-8 w-8 text-[#60A5FA]" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    Message drafted for {PORTFOLIO_PROFILE.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B2B8C6]">
                    Thank you, {name}. Your inquiry regarding{' '}
                    <span className="font-medium text-white">{topic}</span> has
                    been validated in this static preview. Connect your
                    preferred mail backend or Formspree endpoint before live
                    deployment to receive submissions directly.
                  </p>
                  <div className="mt-6 border border-[#252A34] bg-[#111318] p-4 font-mono text-xs text-[#D1D5DB]">
                    <p>From: {name} ({email})</p>
                    <p className="mt-1">Topic: {topic}</p>
                    <p className="mt-2 border-t border-[#252A34] pt-2 text-[#9BA3B4]">
                      {message}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 w-fit cursor-pointer border border-[#353C4A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-[#60A5FA]"
                >
                  Compose Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#252A34] pb-4">
                  <h3 className="font-display text-lg font-bold text-white">
                    Send an inquiry
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8B93A5]">
                    Recruiters &amp; Mentors
                  </span>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="border border-[#EF4444]/40 bg-[#EF4444]/10 px-3.5 py-2.5 text-xs text-[#FCA5A5]"
                  >
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#B2B8C6]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Recruiter or mentor name"
                      className="mt-2 w-full border border-[#303644] bg-[#111318] px-3.5 py-2.5 text-sm text-white placeholder-[#6A7180] focus:border-[#60A5FA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#B2B8C6]"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="mt-2 w-full border border-[#303644] bg-[#111318] px-3.5 py-2.5 text-sm text-white placeholder-[#6A7180] focus:border-[#60A5FA] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#B2B8C6]"
                  >
                    Opportunity Type
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-2 w-full border border-[#303644] bg-[#111318] px-3.5 py-2.5 text-sm text-white focus:border-[#60A5FA] focus:outline-none"
                  >
                    <option value="IT Internship Inquiry">IT Internship Inquiry</option>
                    <option value="Entry-Level Python / Software Role">
                      Entry-Level Python / Software Role
                    </option>
                    <option value="Academic Project Collaboration">
                      Academic Project Collaboration
                    </option>
                    <option value="General Mentorship & Feedback">
                      General Mentorship &amp; Feedback
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#B2B8C6]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share role details, internship timeline, or feedback..."
                    className="mt-2 w-full border border-[#303644] bg-[#111318] px-3.5 py-2.5 text-sm text-white placeholder-[#6A7180] focus:border-[#60A5FA] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-2 bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
