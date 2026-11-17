import { useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { EducationCertifications } from './components/EducationCertifications';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { Projects } from './components/Projects';
import { ResumeModal } from './components/ResumeModal';
import { Skills } from './components/Skills';
import { type ProjectItem } from './data/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111318]">
      <div className="no-print">
        <Navbar onOpenResume={() => setResumeOpen(true)} />
        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <MarqueeRibbon />
          <About />
          <Skills />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <EducationCertifications />
          <Contact onOpenResume={() => setResumeOpen(true)} />
        </main>
        <Footer onOpenResume={() => setResumeOpen(true)} />
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
