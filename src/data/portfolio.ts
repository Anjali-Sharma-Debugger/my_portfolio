export interface SkillItem {
  name: string;
  category:
    | 'Programming'
    | 'Database'
    | 'Web Development'
    | 'Tools'
    | 'Currently Strengthening';
  levelLabel: string;
  context: string;
}

export interface ProjectItem {
  id: 'library-management' | 'sahayak-ai';
  index: string;
  title: string;
  subtitle: string;
  status: 'In Progress' | 'Academic Project';
  summary: string;
  techStack: string[];
  highlights: string[];
  detailsNote: string;
  scopeNotes: string[];
}

export interface EducationItem {
  index: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  note?: string;
}

export interface CertificationItem {
  index: string;
  title: string;
  issuer: string;
  type: 'Certificate' | 'Workshop';
  focus: string;
}

export const PORTFOLIO_PROFILE = {
  name: 'Anjali Sharma',
  monogram: 'AS',
  kicker: 'Bengaluru · BCA V Semester',
  headlinePrefix: 'Hi, I’m',
  roleLine: 'BCA Student · Aspiring Python Developer · IT Enthusiast',
  location: 'Bengaluru, Karnataka',
  institution: 'Sindhi College, Bengaluru',
  academicYear: '2026–2027',
  heroIntro:
    'I’m a Bachelor of Computer Applications student at Sindhi College, Bengaluru, with an interest in Python programming, database management and web development. I enjoy learning by building practical projects and strengthening my problem-solving skills. I’m looking forward to opportunities where I can apply my knowledge, learn from experienced teams and contribute to meaningful software projects.',
  aboutParagraphs: [
    'I am Anjali Sharma, a BCA student at Sindhi College, Bengaluru. My academic learning has introduced me to programming in Python and Java, database management using SQL, web technologies such as HTML and CSS, data structures and algorithms, computer networks and operating systems.',
    'I am especially interested in Python development and practical problem-solving. I have been developing a Library Management System using Python, working with JSON for data storage and exploring a Tkinter-based graphical interface. I am also associated with the academic project concept “Sahayak AI – Government Service Assistant.” I value continuous learning, adaptability, teamwork and clear communication.',
  ],
  careerFocus:
    'Internship or entry-level opportunity in the IT industry, with an interest in Python development and software projects.',
  academicCoursework: [
    'Python Programming',
    'Java Programming',
    'Database Management (SQL)',
    'HTML & CSS',
    'Data Structures & Algorithms',
    'Computer Networks',
    'Operating Systems',
  ],
  strengths: [
    {
      title: 'Continuous Learning',
      detail: 'Building hands-on familiarity with scientific Python, JSON persistence, and desktop GUIs.',
    },
    {
      title: 'Adaptability',
      detail: 'Comfortable moving between console logic, structured data files, and web fundamentals.',
    },
    {
      title: 'Teamwork',
      detail: 'Collaborative approach shaped through academic coursework and group project exploration.',
    },
    {
      title: 'Clear Communication',
      detail: 'Focused on documenting project scope honestly, clearly, and systematically.',
    },
  ],
};

export const HERO_METRICS = [
  { index: '01', value: 'V Semester', label: 'BCA · Sindhi College' },
  { index: '02', value: '2026–2027', label: 'Current Academic Year' },
  { index: '03', value: 'Python · SQL', label: 'Primary Technical Track' },
  { index: '04', value: '03', label: 'Certificates & Workshops' },
];

export const SKILL_CATEGORIES = [
  'All',
  'Programming',
  'Database',
  'Web Development',
  'Tools',
  'Currently Strengthening',
] as const;

export type SkillCategoryFilter = (typeof SKILL_CATEGORIES)[number];

export const SKILLS: SkillItem[] = [
  {
    name: 'Python',
    category: 'Programming',
    levelLabel: 'Primary Project Language',
    context: 'Used for modular logic, console workflows, JSON storage, and Tkinter exploration.',
  },
  {
    name: 'Java',
    category: 'Programming',
    levelLabel: 'Academic Foundation',
    context: 'Studied object-oriented programming concepts as part of the BCA curriculum.',
  },
  {
    name: 'C (Foundations)',
    category: 'Programming',
    levelLabel: 'Foundational',
    context: 'Basic structured programming syntax and core problem-solving constructs.',
  },
  {
    name: 'SQL',
    category: 'Database',
    levelLabel: 'Academic & Query Practice',
    context: 'Relational schema concepts, queries, and structured record organisation.',
  },
  {
    name: 'Database Management Fundamentals',
    category: 'Database',
    levelLabel: 'Core Coursework',
    context: 'Data modelling principles, normalization basics, and record integrity.',
  },
  {
    name: 'HTML',
    category: 'Web Development',
    levelLabel: 'Core Web Markup',
    context: 'Semantic page structure for clean, accessible static web interfaces.',
  },
  {
    name: 'CSS',
    category: 'Web Development',
    levelLabel: 'Layout & Styling',
    context: 'Responsive styling, typography hierarchy, and clean component layout.',
  },
  {
    name: 'Visual Studio Code',
    category: 'Tools',
    levelLabel: 'Daily Editor',
    context: 'Primary code editor for Python scripts, JSON inspection, and web pages.',
  },
  {
    name: 'MS Word & MS Excel',
    category: 'Tools',
    levelLabel: 'Productivity & Documentation',
    context: 'Project documentation, structured tables, and academic reporting.',
  },
  {
    name: 'NumPy & Scientific Python',
    category: 'Currently Strengthening',
    levelLabel: 'Actively Learning',
    context: 'Building numerical array fundamentals following data science workshop exposure.',
  },
  {
    name: 'JSON Data Handling',
    category: 'Currently Strengthening',
    levelLabel: 'Applied in Progress',
    context: 'Persisting and retrieving book, student, and issue records cleanly in Python.',
  },
  {
    name: 'Python GUI with Tkinter',
    category: 'Currently Strengthening',
    levelLabel: 'Exploring',
    context: 'Transitioning console-based library workflows into structured desktop forms.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'library-management',
    index: '01',
    title: 'Library Management System',
    subtitle: 'Desktop & File-Backed Record Operations',
    status: 'In Progress',
    summary:
      'A Python-based application designed to organise library operations such as managing books and students, issuing and returning books, searching the book collection and viewing issued-book records.',
    techStack: ['Python', 'JSON', 'Tkinter', 'Visual Studio Code'],
    highlights: [
      'Add and view books in the collection',
      'Add and view student records',
      'Issue books and process book returns',
      'Search for books across the catalogue',
      'View active issued-book records',
      'Store and retrieve records using JSON files',
      'Explore a Tkinter-based graphical interface',
    ],
    detailsNote:
      'Developed in stages across console functions, JSON file persistence, and an ongoing Tkinter GUI layer. Presented honestly as In Progress while full validation and GUI workflows undergo testing.',
    scopeNotes: [
      'Core operations separated across books, students, and issue/return modules',
      'Lightweight JSON persistence designed for readable local record storage',
      'Ongoing refinement of input validation, edge-case handling, and desktop views',
    ],
  },
  {
    id: 'sahayak-ai',
    index: '02',
    title: 'Sahayak AI – Government Service Assistant',
    subtitle: 'Academic Project Concept',
    status: 'Academic Project',
    summary:
      'Sahayak AI is an academic project focused on the idea of making information about government services easier for users to access. The project explores how an AI-assisted interface could guide users towards relevant service information.',
    techStack: ['Academic Concept', 'Information Discovery', 'User Guidance'],
    highlights: [
      'Addresses difficulty citizens face locating relevant public service information',
      'Explores conversational or guided discovery towards appropriate service categories',
      'Structured around clear, accessible informational pathways',
    ],
    detailsNote:
      'Concept and early academic scope only. In keeping with strict factual accuracy, this portfolio does not claim live government portal integrations, automated eligibility verification, form submission, or a deployed AI backend.',
    scopeNotes: [
      'Problem exploration: simplifying discovery of dispersed public service details',
      'Concept architecture focused on guided intent routing rather than live portals',
      'Implementation details, dataset boundaries, and testing remain under academic definition',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    index: '01',
    degree: 'Bachelor of Computer Applications (BCA) — V Semester',
    institution: 'Sindhi College',
    location: 'Bengaluru, Karnataka',
    period: '2026–2027',
    note: 'Core studies spanning Python, Java, SQL, HTML/CSS, Data Structures & Algorithms, Computer Networks, and Operating Systems.',
  },
  {
    index: '02',
    degree: 'Class XII (PUC / Senior Secondary)',
    institution: 'Senior Secondary Education',
    location: 'Bengaluru, Karnataka',
    period: 'Completed',
    note: 'Pre-university studies completed prior to enrolling in the BCA programme.',
  },
  {
    index: '03',
    degree: 'Class X (Secondary School)',
    institution: 'Secondary Education',
    location: 'Bengaluru, Karnataka',
    period: 'Completed',
    note: 'Foundational schooling completed in Bengaluru.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    index: '01',
    title: 'Foundations of Python Programming using AI',
    issuer: 'YBI Foundation',
    type: 'Certificate',
    focus: 'Structured Python fundamentals paired with introductory AI programming concepts.',
  },
  {
    index: '02',
    title: 'Cyber Security',
    issuer: 'Course Certificate',
    type: 'Certificate',
    focus: 'Foundational awareness of security hygiene, threats, and safe system practices.',
  },
  {
    index: '03',
    title: 'Data Science Workshop',
    issuer: 'DataMites',
    type: 'Workshop',
    focus: 'Hands-on exposure to data workflows, analytical thinking, and Python ecosystems.',
  },
];

export const MARQUEE_ITEMS = [
  'Python Development',
  'Database Management',
  'JSON Persistence',
  'Tkinter GUI',
  'SQL & Web Foundations',
  'Sindhi College, Bengaluru',
];
