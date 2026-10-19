/* ─────────────────────────────────────────────────────────────────────
   SITE CONFIG
   This is the only file you need to edit to personalise the template.
   Every user-facing string and portfolio entry lives here.

   Quick start:
     1. Fill in ME below — every raw fact about you (name, role, email,
        usernames, resume path) lives there ONCE. Everything else in this
        file (PERSON, SITE, SOCIAL_LINKS, CONTACT, FOOTER, project GitHub
        links) is derived from it, so you never have to repeat yourself.
     2. Update EDUCATION, EXPERIENCE, and PROJECTS with your own entries
        (add/remove array items freely — sections render however many
        entries you give them).
     3. Skim HERO and adjust the bio/CTAs if you want.
     4. Drop your resume PDF at public/resume.pdf (or wherever ME.resumePath
        points) so the resume links work (see README.md for details).

   Note: you don't need to type in your site's URL anywhere. It's
   derived automatically below — see SITE_URL.
   ───────────────────────────────────────────────────────────────────── */

// ── Your info (edit this once) ─────────────────────────────────────────
// The single source of truth for anything identifying you. Every other
// section below derives from these fields instead of repeating them.
export const ME = {
  firstName:  'Janna Audrey',
  lastName:   'Doratan',
  role:       'Computer Science and Engineering Student at UCLA', // e.g. "Software Engineer", "Data Scientist"
  email:      'jadoratan@gmail.com',
  github:     'jadoratan',      // GitHub username only, no URL
  linkedin:   'jadoratan',      // LinkedIn username only, no URL
  resumePath: '/resume.pdf',       // path under public/ — see README.md
};

// Derived URLs, built once from ME so nothing else hardcodes them.
const GITHUB_URL   = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF   = `mailto:${ME.email}`;

// The site's own URL, figured out automatically instead of hardcoded:
//   - On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set for you at build
//     time, so a Vercel deploy needs zero config here.
//   - Locally (pnpm dev / pnpm build), it falls back to localhost.
//   - Deploying elsewhere (or using a custom domain)? Set NEXT_PUBLIC_SITE_URL
//     in your environment (e.g. a .env.local file) to override.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

// ── Who you are ──────────────────────────────────────────────────────
// Shown in the hero section and used to build the page title below.
export const PERSON = {
  firstName: ME.firstName,
  lastName:  ME.lastName,
  fullName:  `${ME.firstName} ${ME.lastName}`,
  role:      ME.role,
};

// ── Site metadata ─────────────────────────────────────────────────────
// Powers the browser tab title, meta description, canonical URL, and
// social previews. `url` is derived automatically (see SITE_URL above).
export const SITE = {
  url:         SITE_URL,
  title:       `${PERSON.fullName} — ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description: `Personal portfolio of ${PERSON.fullName}, a ${PERSON.role} at UCLA.`,
};

// ── Navigation links ──────────────────────────────────────────────────
// Shown in the header. Each `href` should match a section's `id` on the
// page (e.g. '#projects' scrolls to <section id="projects">). Add or
// remove entries to match the sections you actually want to show.
export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

// ── Hero section ──────────────────────────────────────────────────────
// The big intro at the top of the page. `ctas` are the call-to-action
// buttons — set `primary: true` for the filled/highlighted button.
export const HERO = {
  greeting: "Hi, I'm",
  bio:      "But call me Audrey! I'm a 2nd year Computer Science and Engineering major at UCLA. I'm interested in full-stack development, software for physical systems, and machine learning. I view tech as a powerful force we should steward for the good of others :)",
  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true  },
    { label: 'Get in touch',       href: '#contact',  primary: false },
  ],
};

// ── Education ─────────────────────────────────────────────────────────
// One entry per school. `minor` and `gpa` are optional — omit them if
// not applicable. `courses` shows as a list of relevant coursework.
export interface EducationEntry {
  school:     string;
  degree:     string;
  minor?:     string;
  gpa?:       string;
  graduation: string;
  courses:    string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school:     'University of California, Los Angeles',
    degree:     'B.S. Computer Science and Engineering',
    gpa:        '4.0',
    graduation: 'June 2029',
    courses: [
      'Data Structures & Algorithms',
      'Computer Architecture',
      'Software Construction',
      'Logic Design for Digital Systems',
      'Intro to Electrical Engineering (Circuits)'
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────
// One entry per job/internship/TA position, most recent first. `bullets`
// are rendered as a list of achievements — keep them action-oriented and
// quantify impact where you can. `tech` shows as tag chips.
export interface ExperienceEntry {
  company:   string;
  role:      string;
  location:  string;
  start:     string;
  end:       string;
  bullets:   string[];
  tech:      string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company:  'UCLA Digital and Technology Solutions',
    role:     'Information Technology Consultant',
    location: 'Los Angeles, CA',
    start:    'Mar 2026',
    end:      'Present',
    bullets: [
      'Resolve issues across Windows and Mac OS, including email clients, Microsoft Office 365, VPN software, MFA, and cloud-based file hosting platforms (Box, Google Drive) to facilitate work for faculty, staff, and students.',
      'Document and track ~50 support tickets weekly, contributing to service desk documentation and knowledge base resources to improve resolution efficiency.',
      'Mentor newer consultants in troubleshooting and resolution strategies, effective communication, and workplace procedures to ensure seamless knowledge transfer and sustained customer satisfaction.',
    ],
    tech: ['ServiceNow', 'Microsoft Office 365', 'Cloud-based file hosting', 'VPN', 'MFA', 'OS', ],
  },
  {
    company:  'University of Southern California',
    role:     'Machine Learning Researcher',
    location: 'Los Angeles, CA',
    start:    'Jun 2024',
    end:      'Aug 2024',
    bullets: [
      'Implemented estimator formula for zeroth-order stochastic gradient descent algorithm using PyTorch library to reduce memory usage without compromising model accuracy.',
      'Preprocessed open-source binary classification image datasets used to train and assess model in NumPy.',
      'Improved initial model accuracy by 17% by refining algorithm and fine-tuning hyperparameters.',
      'Designed and presented research poster to 350+ attendees within USC Viterbi Engineering community.'
    ],
    tech: ['Python', 'OpenCV', 'PyTorch', 'scikit-learn', 'NumPy', 'MATLAB'],
  },
];

// ── Projects ──────────────────────────────────────────────────────────
// One entry per project. `github` and `live` are both optional — omit
// whichever doesn't apply. Set `featured: true` to highlight a project
// (check the ProjectsSection component to see how featured entries are
// styled differently, if at all, in this template).
export interface ProjectEntry {
  name:        string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  featured:    boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name:        'ClubFinder',
    description: '(In progress) A website that centralizes club information for students to explore and get plugged into student organizations more easily.',
    tech:        ['React', 'HTML', 'CSS', 'Firebase'],
    // github:      `${GITHUB_URL}/studysync`,
    // live:        'https://studysync.app',
    featured:    false,
  },
  {
    name:        'GitHub Portfolio',
    description: 'Retired personal website. Currently functions as an aesthetic version of my GitHub profile.',
    tech:        ['HTML', 'CSS', 'JavaScript'],
    github:      `${GITHUB_URL}/github-portfolio`,
    live:        'https://jadoratan.github.io/github-portfolio/',
    featured:    true,
  },
  {
    name:        'Project Mousie',
    description: 'A hands-free computer mouse tailored to an end user with PD-related tremors. Developed algorithm and UI for software that executes mouse clicks triggered by user blinking.',
    tech:        ['Python', 'OpenCV', 'ttkbootstrap'],
    github:      `${GITHUB_URL}/project-mousie`,
    featured:    true,
  },
  {
    name:        'ML Research at USC',
    description: 'Estimator for zeroth-order stochastic gradient descent algorithm developed by Devansh Gupta, my mentor at USC. Includes training and comparison of existing models to gauge performance.',
    tech:        ['Python', 'NumPy', 'scikit-learn', 'PyTorch'],
    github:      `${GITHUB_URL}/shine-final`,
    featured:    true,
  },
  {
    name:        'Delay Relay',
    description: 'A website displaying the analysis of a flight delay dataset, including data visualizations and ML model performance.',
    tech:        ['Python', 'HTML', 'CSS', 'JavaScript'],
    github:      `${GITHUB_URL}/delay-relay`,
    live:        'https://jadoratan.github.io/delay-relay/',
    featured:    true,
  },
];

// ── Social links ──────────────────────────────────────────────────────
// Shown in the header/hero area. Add or remove entries as needed.
export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: GITHUB_URL   },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email',    href: EMAIL_HREF   },
];

// ── Contact ───────────────────────────────────────────────────────────
// The Resume link points to ME.resumePath, which is served from whatever
// file you place at public/resume.pdf — see README.md > "Adding Your
// Resume". If you don't want to show a resume link, delete that entry.
export const CONTACT = {
  email: ME.email,
  blurb: "I'm actively looking for internships starting 2027. If you're working on something interesting or just want to chat, my inbox is always open.",
  links: [
    { label: 'Email',    href: EMAIL_HREF,     display: ME.email                         },
    { label: 'GitHub',   href: GITHUB_URL,     display: `github.com/${ME.github}`        },
    { label: 'LinkedIn', href: LINKEDIN_URL,   display: `linkedin.com/in/${ME.linkedin}` },
    { label: 'Resume',   href: ME.resumePath,  display: 'Download PDF'                   },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────
// `columns` renders as link groups. The Resume link here reuses
// ME.resumePath, so it stays in sync with CONTACT automatically.
export const FOOTER = {
  tagline: "UCLA Computer Science student building things for good.",
  columns: [
    {
      heading: 'Portfolio',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Education',  href: '#education'  },
        { label: 'Contact',    href: '#contact'    },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub',   href: GITHUB_URL     },
        { label: 'LinkedIn', href: LINKEDIN_URL   },
        { label: 'Email',    href: EMAIL_HREF     },
        { label: 'Resume',   href: ME.resumePath  },
      ],
    },
  ],
};
