import { Plus, RotateCcw, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { type ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

interface DemoBook {
  id: string;
  title: string;
  author: string;
  issuedTo: string | null;
}

const INITIAL_DEMO_BOOKS: DemoBook[] = [
  { id: 'BK-101', title: 'Python Crash Course', author: 'Eric Matthes', issuedTo: null },
  { id: 'BK-102', title: 'Learning SQL', author: 'Alan Beaulieu', issuedTo: 'Anjali S. (BCA-V)' },
  { id: 'BK-103', title: 'Data Structures & Algorithms', author: 'N. Karumanchi', issuedTo: null },
];

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [books, setBooks] = useState<DemoBook[]>(INITIAL_DEMO_BOOKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [studentName, setStudentName] = useState('Riya K. (BCA-V)');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleIssue = (bookId: string) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === bookId
          ? { ...book, issuedTo: book.issuedTo ? null : studentName.trim() || 'Student' }
          : book
      )
    );
  };

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBookTitle.trim()) return;
    const nextNum = 101 + books.length;
    setBooks((prev) => [
      ...prev,
      {
        id: `BK-${nextNum}`,
        title: newBookTitle.trim(),
        author: newBookAuthor.trim() || 'Course Reference',
        issuedTo: null,
      },
    ]);
    setNewBookTitle('');
    setNewBookAuthor('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-[#111318]/70 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#D4D6DC] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#E4E5E9] bg-white px-6 py-5 sm:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#2563EB] tabular-nums">
              {project.index} · {project.status}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#111318]"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center border border-[#D4D6DC] bg-[#FAF9F6] text-[#111318] transition-colors hover:border-[#111318]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-7 px-6 py-7 sm:px-8">
          <p className="text-[15.5px] leading-relaxed text-[#353B47]">
            {project.summary}
          </p>

          <div className="border border-[#E4E5E9] bg-[#FAF9F6] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#1D4ED8]">
              Accuracy &amp; Development Status Note
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#252A34]">
              {project.detailsNote}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-[#4E5563]">
                {project.id === 'library-management'
                  ? 'Implemented Workflows'
                  : 'Exploration Focus'}
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#252A34]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-[#2563EB]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-[#4E5563]">
                Architecture &amp; Scope Notes
              </h4>
              <ul className="mt-3 space-y-2">
                {project.scopeNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2.5 text-sm text-[#252A34]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-[#111318]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-[#E4E5E9] pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6A7180]">
                  Stack &amp; Focus
                </p>
                <p className="mt-1 font-mono text-xs text-[#111318]">
                  {project.techStack.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Workflow Simulation ONLY for Library Management System */}
          {project.id === 'library-management' && (
            <div className="border border-[#D9DCE3] bg-[#FAF9F6] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E5E9] pb-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#2563EB]">
                    Interactive Workflow Preview
                  </p>
                  <p className="mt-0.5 text-xs text-[#4E5563]">
                    Browser simulation of add, search, issue, return, and JSON record updates.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBooks(INITIAL_DEMO_BOOKS);
                    setSearchQuery('');
                  }}
                  className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs text-[#4E5563] hover:text-[#111318]"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset sample
                </button>
              </div>

              {/* Search & Issue Student Controls */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Search books</span>
                  <div className="flex items-center border border-[#D4D6DC] bg-white px-3 py-2">
                    <Search className="mr-2 h-3.5 w-3.5 text-[#6A7180]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by title, ID, or author..."
                      className="w-full text-xs text-[#111318] placeholder-[#8B93A5] focus:outline-none"
                    />
                  </div>
                </label>
                <label className="flex items-center gap-2 border border-[#D4D6DC] bg-white px-3 py-2">
                  <span className="shrink-0 font-mono text-[11px] text-[#6A7180]">
                    Issue to:
                  </span>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full text-xs text-[#111318] focus:outline-none"
                  />
                </label>
              </div>

              {/* Catalogue Table */}
              <div className="mt-4 overflow-x-auto border border-[#E4E5E9] bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-[#E4E5E9] bg-[#F5F6F8] font-mono text-[11px] uppercase text-[#4E5563]">
                    <tr>
                      <th className="px-3 py-2.5">ID</th>
                      <th className="px-3 py-2.5">Book Title</th>
                      <th className="px-3 py-2.5">Status</th>
                      <th className="px-3 py-2.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ECECEF]">
                    {filteredBooks.map((book) => (
                      <tr key={book.id}>
                        <td className="px-3 py-2.5 font-mono text-[#6A7180] tabular-nums">
                          {book.id}
                        </td>
                        <td className="px-3 py-2.5">
                          <span className="font-medium text-[#111318]">
                            {book.title}
                          </span>
                          <span className="block text-[11px] text-[#6A7180]">
                            {book.author}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 font-mono text-[11px]">
                          {book.issuedTo ? (
                            <span className="text-[#B45309]">
                              Issued · {book.issuedTo}
                            </span>
                          ) : (
                            <span className="text-[#15803D]">Available</span>
                          )}
                        </td>
                        <td className="px-3 py-2.5 text-right">
                          <button
                            type="button"
                            onClick={() => handleToggleIssue(book.id)}
                            className="cursor-pointer font-mono text-[11px] font-medium text-[#1D4ED8] underline underline-offset-2 hover:text-[#111318]"
                          >
                            {book.issuedTo ? 'Return' : 'Issue'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Quick Add Book Form */}
              <form
                onSubmit={handleAddBook}
                className="mt-3 flex flex-col gap-2 sm:flex-row"
              >
                <input
                  type="text"
                  value={newBookTitle}
                  onChange={(e) => setNewBookTitle(e.target.value)}
                  placeholder="Add new book title..."
                  className="flex-1 border border-[#D4D6DC] bg-white px-3 py-2 text-xs text-[#111318] placeholder-[#8B93A5] focus:border-[#2563EB] focus:outline-none"
                />
                <input
                  type="text"
                  value={newBookAuthor}
                  onChange={(e) => setNewBookAuthor(e.target.value)}
                  placeholder="Author (optional)"
                  className="sm:w-40 border border-[#D4D6DC] bg-white px-3 py-2 text-xs text-[#111318] placeholder-[#8B93A5] focus:border-[#2563EB] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-1.5 bg-[#111318] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2563EB]"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add Book
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
