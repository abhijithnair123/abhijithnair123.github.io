import { Skill, Project, Experience, CodeSnippet, Testimonial, TerminalCommand, Education } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Abhijith H Nair',
  title: 'Senior Fullstack Developer',
  specialization: 'Angular • Next.js • React.js • Node.js • TypeScript • Cloud Architecture',
  bio: 'Senior Fullstack Developer with 7+ years of expertise building scalable web applications with Angular, Next.js, React, and Node.js. Currently engineering Carwash SaaS platforms at Way.com, previously directed 12+ developers at IBIL Solutions delivering high-performance Next.js architectures.',
  location: 'Kerala, India • Open for Remote Worldwide',
  experienceYears: 7,
  email: 'contact@abhijithhnair.in',
  github: 'https://github.com/abhijithnair123',
  linkedin: 'https://linkedin.com/in/abhijith-h-nair-394606130',
  website: 'https://abhijithnair123.github.io',
  calendarLink: 'https://calendly.com',
  status: 'Senior Fullstack Developer • Open for Strategic Consulting & Senior Roles',
  currentRole: 'Senior Full Stack Developer @ Way.com (Carwash SaaS)',
  stats: [
    { label: 'Years of Experience', value: '7+' },
    { label: 'Developers Directed & Mentored', value: '12+' },
    { label: 'Enterprise Platforms Shipped', value: '15+' },
    { label: 'Avg Page Load Speed Boost', value: '25%+' },
    { label: 'Core Web Vitals SLA', value: '98/100' },
    { label: 'Production Uptime', value: '99.9%' }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'way-com',
    role: 'Senior Full Stack Developer',
    company: 'Way.com',
    period: 'July 2026 – Present',
    location: 'Kerala, India • Remote',
    type: 'Senior',
    teamSize: 'Carwash Core Product Squad',
    description: 'Architecting and scaling Way.com’s high-traffic Carwash SaaS product, powering subscription carwash pass management, merchant partner portals, real-time booking, and automated redemptions using Angular and Node.js.',
    achievements: [
      'Architected reactive frontend modules, merchant administration portals, and state management using Angular (v17/v18), TypeScript, and RxJS for Way.com’s Carwash SaaS ecosystem.',
      'Engineered high-throughput backend microservices and RESTful API endpoints with Node.js to power real-time carwash booking, subscription pass activations, and barcode/QR redemptions.',
      'Integrated third-party POS hardware, merchant APIs, and payment rails for seamless automated wash validations across hundreds of partner locations.',
      'Optimized customer checkout velocity and mobile web performance, reducing booking drop-offs and operational friction.',
      'Collaborated closely with cross-functional product, UX, and QA squads in Agile sprint cycles to ship reliable auto-services features.'
    ],
    technologies: ['Angular', 'Node.js', 'TypeScript', 'RxJS', 'REST APIs', 'Microservices', 'PostgreSQL', 'Docker', 'Agile'],
    keyWins: [
      { metric: 'Carwash', label: 'SaaS Platform' },
      { metric: 'Angular', label: 'RxJS Architecture' },
      { metric: 'Node.js', label: 'Backend APIs' },
      { metric: 'POS', label: 'Partner Integrations' }
    ]
  },
  {
    id: 'ibil-solutions',
    role: 'Senior Software Developer & Engineering Lead',
    company: 'IBIL Solutions',
    period: 'Feb 2020 – July 2026',
    location: 'Kerala, India',
    type: 'Lead',
    teamSize: '12 Developers',
    description: 'Led technical architecture and full-stack engineering for major high-visibility enterprise platforms, including the Sypher Insurance Underwriting platform, Video Social Marketplace, and Contract Q. Directed a cross-functional squad of 12 developers, orchestrating sprint planning, architectural standards, and Next.js modernizations.',
    achievements: [
      'Directed a cross-functional squad of 12 developers in the successful delivery of high-visibility Next.js enterprise web applications, ensuring strict alignment with business goals and timelines.',
      'Spearheaded frontend architecture for Sypher — Insurance Platform, developing property underwriting, applicant, and quoting workflows in React.js, Next.js, and TypeScript.',
      'Integrated external insurance data services including the A-PLUS Property API to retrieve real-time loss history and property intelligence during underwriting.',
      'Connected frontend applications to AWS serverless APIs and services (Lambda, API Gateway, S3, Cognito, Secrets Manager, and RDS/PostgreSQL).',
      'Spearheaded the implementation of Next.js architecture (SSR & SSG), cutting server response times and improving page load speeds by 25%+ with automated GitHub Actions CI/CD pipelines.',
      'Integrated enterprise payment rails (CyberSource, Stripe), Avalara automated tax calculation, and GoShippo logistics into production marketplaces.',
      'Conducted rigorous code reviews, established reusable TypeScript component design systems, and mentored junior developers across Agile/Scrum sprint cycles.'
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'AWS (Lambda, S3, Cognito)', 'REST APIs', 'PostgreSQL', 'A-PLUS Property API', 'Redux', 'Tailwind CSS', 'GitHub Actions', 'Agile / Scrum'],
    keyWins: [
      { metric: '12+', label: 'Engineers Led' },
      { metric: 'Sypher', label: 'InsurTech Platform' },
      { metric: '+25%', label: 'Speed Optimization' },
      { metric: 'CI/CD', label: 'Automated Pipeline' }
    ]
  },
  {
    id: 'cankado',
    role: 'WordPress & Frontend Developer',
    company: 'Cankado India Pvt Ltd',
    period: 'Aug 2019 – Jan 2020',
    location: 'Kerala, India',
    type: 'Full-time',
    teamSize: 'Frontend Squad',
    description: 'Engineered responsive web applications and digital health user interfaces for oncology patients and healthcare providers.',
    achievements: [
      'Built and designed responsive web pages and digital health user interfaces using WordPress, HTML5, CSS3, JavaScript, and PHP.',
      'Integrated Stripe payment gateway into web applications for secure and streamlined transaction processing.',
      'Designed and implemented custom page layouts using Elementor, ensuring user-friendly and visually appealing interfaces.',
      'Developed and integrated custom widgets and plugins to extend Elementor functionality for specific clinical and business requirements.'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'WordPress', 'PHP', 'Stripe API', 'Elementor', 'UI/UX Design'],
    keyWins: [
      { metric: 'Stripe', label: 'Payment Gateway' },
      { metric: 'Health UI', label: 'Oncology Platform' },
      { metric: 'Custom', label: 'Plugins & Widgets' }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'btech-cse',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'APJ Abdul Kalam Technological University',
    location: 'Kerala, India',
    period: '2015 – 2019',
    description: 'Comprehensive coursework in Software Engineering, Data Structures & Algorithms, Distributed Systems, Web Technologies, Database Architecture, and Object-Oriented Design.'
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary Education (Computer Science)',
    institution: 'AMHSS, Thirumala',
    location: 'Kerala, India',
    period: '2013 – 2015',
    description: 'Foundational studies in Computer Science, Programming Fundamentals, Advanced Mathematics, and Physical Sciences.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'way-carwash-saas',
    title: 'Way.com – Carwash SaaS Platform',
    subtitle: 'Enterprise Vehicle Services Marketplace & Auto-Care Subscription Engine',
    category: 'Enterprise SaaS',
    domain: 'Automotive FinTech & Auto-Care Marketplace',
    description: 'Way.com’s flagship Carwash SaaS platform powering customer carwash subscription passes, partner merchant portals, slot scheduling, and contactless QR redemptions across hundreds of US locations.',
    longDescription: 'Currently engineering the enterprise Carwash SaaS product at Way.com. Developed with Angular, TypeScript, RxJS, and Node.js microservices, the platform facilitates multi-location merchant onboarding, subscription pass management, real-time POS barcode validations, and automated revenue reconciliation.',
    metrics: [
      { label: 'Frontend Stack', value: 'Angular + RxJS' },
      { label: 'Backend APIs', value: 'Node.js Microservices' },
      { label: 'Database', value: 'PostgreSQL + Redis' },
      { label: 'Domain', value: 'Carwash SaaS' }
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'RxJS', 'REST APIs', 'PostgreSQL', 'Microservices', 'Docker'],
    architectureHighlights: [
      'Architected reactive customer booking & pass subscription management flows with Angular and RxJS',
      'Engineered high-throughput Node.js microservices handling real-time partner POS barcode redemptions',
      'Constructed multi-tenant merchant portal for location management and revenue analytics',
      'Optimized end-to-end checkout flows with minimal latency across mobile and web interfaces'
    ],
    featured: true
  },
  {
    id: 'sypher-insurance',
    title: 'Sypher – Insurance Platform',
    subtitle: 'Property Insurance Underwriting, Quoting Engine & Risk Intelligence Platform',
    category: 'Enterprise SaaS',
    domain: 'Property Insurance, Underwriting & Quoting',
    description: 'An enterprise insurance underwriting and quoting platform supporting property insurance workflows, integrated with the A-PLUS Property API for prior-loss history and AWS serverless cloud infrastructure.',
    longDescription: 'Senior Frontend Developer & Lead on Sypher, an enterprise insurance underwriting and quoting platform for property insurance. Built complex frontend workflows using React.js, Next.js, and TypeScript across property, applicant, underwriting, and quote-related processes. Integrated external insurance data services including the A-PLUS Property API to retrieve property details and prior-loss history used during underwriting. Integrated frontend applications with AWS serverless APIs and cloud services (Lambda, API Gateway, S3, Cognito, Secrets Manager, and RDS/PostgreSQL), troubleshooting issues across frontend, APIs, and cloud infrastructure.',
    metrics: [
      { label: 'Role', value: 'Senior Frontend Lead' },
      { label: 'Domain', value: 'Property Insurance' },
      { label: 'Cloud Architecture', value: 'AWS Serverless' },
      { label: 'Data Integration', value: 'A-PLUS Property API' }
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'AWS (Lambda, S3, Cognito)', 'API Gateway', 'PostgreSQL', 'REST APIs', 'Terraform', 'GitHub Actions', 'A-PLUS Property API'],
    architectureHighlights: [
      'Built complex multi-step frontend workflows using React.js, Next.js, and TypeScript for property, applicant, underwriting, and quote processes',
      'Integrated A-PLUS Property API to retrieve real-time property intelligence and loss history during risk assessment',
      'Connected frontend applications to AWS serverless APIs (Lambda, API Gateway, S3, Cognito, Secrets Manager)',
      'Engineered reusable TypeScript/React design system components ensuring strict underwriting validation and consistent user experience'
    ],
    featured: true
  },
  {
    id: 'video-social-marketplace',
    title: 'Video Social Marketplace',
    subtitle: 'Live Video Streaming, Social Post Creation & Creator E-Commerce Hub',
    category: 'Video & E-Commerce',
    domain: 'Creator Economy & Live Commerce',
    description: 'A comprehensive video social and commerce ecosystem featuring low-latency live streaming broadcasts, interactive social post creation feeds, and seamless marketplace purchasing with CyberSource payment gateway, Avalara retail tax calculation, and GoShippo shipping logistics.',
    longDescription: 'Engineered a high-concurrency video social and commerce platform enabling creators to monetize live streams, post dynamic updates, and operate digital storefronts. Integrated Wowza Streaming Engine for low-latency live broadcasts, custom Video.js player controls, interactive post creation, CyberSource and Stripe payment integrations, Avalara real-time tax calculation, and GoShippo logistics tracking.',
    metrics: [
      { label: 'Live Video Tech', value: 'Wowza & Video.js' },
      { label: 'Payments', value: 'CyberSource + Stripe' },
      { label: 'Logistics', value: 'GoShippo API' },
      { label: 'Tax Engine', value: 'Avalara Automated' }
    ],
    technologies: ['Next.js', 'React.js', 'Laravel', 'Node.js', 'Socket.io', 'AWS S3', 'CyberSource', 'Wowza', 'Video.js', 'Avalara', 'GoShippo'],
    architectureHighlights: [
      'Engineered low-latency live streaming video pipelines using Wowza Engine and Video.js',
      'Integrated enterprise-grade CyberSource payment gateway with automated Avalara retail sales tax',
      'Constructed real-time live chat and interactive tipping with Socket.io WebSockets',
      'Configured multi-tier AWS S3 storage with CDN caching for media asset distribution'
    ],
    featured: true
  },
  {
    id: 'contract-q',
    title: 'Contract Q – Construction & Contractor Platform',
    subtitle: 'Enterprise Construction Job Dispatch, Estimation Workflows & Field Hub',
    category: 'Enterprise SaaS',
    domain: 'Construction & Enterprise Contractor Management',
    description: 'A comprehensive web and administration platform for construction builders and contractors. Facilitates employee job assignments, real-time dispatch tracking, administrative dashboards, and custom customer estimation form workflows integrated with Joyfill form builder.',
    longDescription: 'Contract Q automates multi-step construction workflows from job assignment to client cost estimation. Built with Next.js, TypeScript, and Tailwind CSS, the platform incorporates Joyfill form builder integration allowing field workers and contractors to create custom dynamic estimation forms with real-time sync.',
    metrics: [
      { label: 'Form Engine', value: 'Joyfill Custom' },
      { label: 'Architecture', value: 'Next.js + TypeScript' },
      { label: 'State Sync', value: 'Real-time REST' },
      { label: 'UI System', value: 'Tailwind CSS' }
    ],
    technologies: ['Next.js', 'TypeScript', 'React.js', 'Joyfill Form Builder', 'Tailwind CSS', 'REST APIs', 'Node.js'],
    architectureHighlights: [
      'Constructed responsive multi-role admin portal for field worker assignment and dispatch',
      'Integrated Joyfill form builder for custom dynamic contractor estimate generation',
      'Designed high-efficiency data caching reducing backend API calls by 35%',
      'Implemented granular role-based access control (RBAC) across contractor teams'
    ],
    featured: true
  },
  {
    id: 'ourchild-education',
    title: 'OurChild – Child Education & Learning Hub',
    subtitle: 'Interactive Learning Activities, Student Progress & School-Parent Communication',
    category: 'EdTech & Learning',
    domain: 'Child Education & Learning Communication',
    description: 'A dedicated child education platform connecting teachers, students, and parents for interactive learning activities, milestone tracking, and school communication.',
    longDescription: 'OurChild provides rich educational modules, progress tracking, and seamless school-to-parent announcement feeds. Engineered with Next.js, React.js, TypeScript, and Node.js, the system delivers child-friendly interactive learning interfaces, teacher feedback workflows, and real-time announcements.',
    metrics: [
      { label: 'Target Audience', value: 'Students, Parents & Teachers' },
      { label: 'Feature Set', value: 'Learning Activities' },
      { label: 'Communication', value: 'School-to-Parent Feed' },
      { label: 'Stack', value: 'Next.js + TypeScript' }
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    architectureHighlights: [
      'Engineered interactive learning activity modules with child-friendly accessible UX and animations',
      'Constructed school-to-parent announcement feed with real-time notification broadcasting',
      'Built student milestone tracking and teacher feedback assessment portals',
      'Implemented role-based access control for educators, parents, and school administrators'
    ],
    featured: true
  },
  {
    id: 'intellicp',
    title: 'Intellicp – Pharmacovigilance Tool',
    subtitle: 'Healthcare Data Extraction & ICSR Automated Reporting',
    category: 'Healthcare & HIPAA',
    domain: 'Healthcare Informatics & Pharmacovigilance',
    description: 'A specialized healthcare pharmacovigilance data extraction tool that processes structured MLM and spontaneous source medical documents to generate Individual Case Safety Reports (ICSRs) with high data precision and HIPAA-standard practices.',
    longDescription: 'Intellicp streamlines adverse event detection and medical safety reporting. The system processes medical documents, extracts clinical safety data, and compiles standard ICSRs adhering to stringent healthcare compliance and HIPAA requirements.',
    metrics: [
      { label: 'Compliance', value: 'HIPAA Standard' },
      { label: 'Report Engine', value: 'Automated ICSR' },
      { label: 'Data Store', value: 'MongoDB' },
      { label: 'Automation', value: 'UiPath + REST' }
    ],
    technologies: ['React.js', 'Python', 'Java', 'MongoDB', 'UiPath', 'REST APIs', 'HIPAA Compliance', 'TypeScript'],
    architectureHighlights: [
      'Engineered HIPAA-compliant medical data extraction interface with end-to-end encryption',
      'Streamlined automated ICSR generation reducing clinical review turnaround time',
      'Built responsive analytical dashboards for medical safety officers',
      'Integrated automated document validation and audit logging'
    ],
    featured: true
  },
  {
    id: 'cankado-health',
    title: 'CANKADO – Oncology Digital Health Platform',
    subtitle: 'Patient-Reported Outcomes (ePRO) & Clinical Decision Support',
    category: 'Healthcare & HIPAA',
    domain: 'Oncology & Clinical Healthcare',
    description: 'A digital health platform supporting oncology patients and clinicians. Integrates electronic Patient-Reported Outcomes (ePRO) tools allowing patients to log symptoms in real time, aiding medical providers in informed clinical decision-making.',
    longDescription: 'Developed intuitive and accessible digital health interfaces allowing cancer patients to track symptoms and clinical markers. Delivered clinical decision support dashboards for oncology specialists.',
    metrics: [
      { label: 'Domain', value: 'Oncology Health' },
      { label: 'Core Tech', value: 'ePRO Systems' },
      { label: 'Accessibility', value: 'WCAG AAA' },
      { label: 'Interface', value: 'React.js + SCSS' }
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'SCSS', 'ePRO', 'Digital Health', 'REST APIs'],
    architectureHighlights: [
      'Built accessible patient symptom tracking interfaces with high visual clarity and simple UX',
      'Engineered real-time symptom alert triggers for clinical oncologist portals',
      'Ensured strict medical data confidentiality and secure API communications'
    ],
    featured: true
  },
  {
    id: 'cargo-logistics',
    title: 'Cargo & Logistics Operations Dashboard',
    subtitle: 'Fleet Dispatch, Shipment Tracking & Real-Time Operational Analytics',
    category: 'Logistics',
    domain: 'Supply Chain & Cargo Fleet Management',
    description: 'A cargo operations management dashboard designed to streamline shipping workflows, cargo dispatch tracking, carrier assignment, and operational analytics with responsive interfaces.',
    longDescription: 'Built with Next.js, TypeScript, and Node.js, this operational dashboard equips logistics coordinators to manage shipping manifests, monitor carrier status in real time, and analyze delivery velocity.',
    metrics: [
      { label: 'Domain', value: 'Fleet Logistics' },
      { label: 'Stack', value: 'Next.js + TypeScript' },
      { label: 'Tracking', value: 'Live Manifest' },
      { label: 'Styling', value: 'Tailwind CSS' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Chart.js'],
    architectureHighlights: [
      'Designed responsive dispatch grid supporting hundreds of simultaneous cargo units',
      'Integrated real-time status update feeds and interactive shipping analytics charts',
      'Optimized frontend rendering for low-bandwidth mobile dispatcher devices'
    ],
    featured: true
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'Angular & RxJS',
    level: 95,
    category: 'frontend',
    icon: 'Layers',
    highlight: true,
    yearsOfExp: 3,
    description: 'Component architecture, RxJS reactive programming, dependency injection, and scalable enterprise SaaS portals at Way.com.',
    tags: ['Angular 17/18', 'RxJS', 'TypeScript', 'SaaS', 'Component Architecture']
  },
  {
    name: 'Next.js (App & Pages Router)',
    level: 98,
    category: 'frontend',
    icon: 'Zap',
    highlight: true,
    yearsOfExp: 5.5,
    description: 'SSR, SSG, ISR, Server Actions, App Router architecture, Partial Prerendering, and SEO enhancement.',
    tags: ['Next.js 14/15', 'App Router', 'SSR/SSG', 'Server Actions', 'SEO']
  },
  {
    name: 'React.js & Modern UI',
    level: 96,
    category: 'frontend',
    icon: 'Atom',
    highlight: true,
    yearsOfExp: 6,
    description: 'Custom hooks, Context API, Redux Toolkit, performance optimization, code-splitting, and lazy loading.',
    tags: ['React 18/19', 'Custom Hooks', 'Redux', 'Context API', 'Code Splitting']
  },
  {
    name: 'TypeScript & JavaScript (ES6+)',
    level: 95,
    category: 'frontend',
    icon: 'FileCode2',
    highlight: true,
    yearsOfExp: 6,
    description: 'Strict type systems, async/await concurrency, generic interfaces, and clean code architecture.',
    tags: ['TypeScript', 'JavaScript ES6+', 'Generics', 'Type Safety']
  },
  {
    name: 'Tailwind CSS & Styling',
    level: 95,
    category: 'frontend',
    icon: 'Palette',
    yearsOfExp: 5,
    description: 'Tailwind CSS, ShadCN UI, Glassmorphism, SCSS, responsive layouts, and accessible component design.',
    tags: ['Tailwind CSS', 'ShadCN UI', 'SCSS', 'Responsive Design']
  },

  // Backend & APIs
  {
    name: 'Node.js & Express.js',
    level: 92,
    category: 'backend',
    icon: 'Server',
    highlight: true,
    yearsOfExp: 5.5,
    description: 'RESTful API design, middleware pipelines, authentication, file handling, and microservices.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'Middleware']
  },
  {
    name: 'PHP & Laravel',
    level: 86,
    category: 'backend',
    icon: 'Cpu',
    yearsOfExp: 4,
    description: 'MVC architecture, Eloquent ORM, authentication, API integrations, and backend routing.',
    tags: ['PHP', 'Laravel', 'MVC', 'Eloquent']
  },
  {
    name: 'Socket.io & WebSockets',
    level: 90,
    category: 'backend',
    icon: 'Radio',
    yearsOfExp: 4.5,
    description: 'Real-time two-way communication, live chat streaming, event broadcasts, and presence sync.',
    tags: ['Socket.io', 'WebSockets', 'Real-Time Sync', 'Live Chat']
  },

  // Databases & Storage
  {
    name: 'PostgreSQL, MySQL & MongoDB',
    level: 90,
    category: 'database',
    icon: 'Database',
    highlight: true,
    yearsOfExp: 5,
    description: 'Schema modeling, relational indexing, query optimization, NoSQL aggregation, and Prisma/Mongoose.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma']
  },
  {
    name: 'Redis & AWS S3 Storage',
    level: 88,
    category: 'database',
    icon: 'HardDrive',
    yearsOfExp: 4.5,
    description: 'In-memory caching, session storage, rate limiting, and scalable cloud object storage with AWS S3.',
    tags: ['Redis', 'AWS S3', 'Caching', 'Cloud Storage']
  },

  // Cloud & DevOps
  {
    name: 'CI/CD & GitHub Actions',
    level: 92,
    category: 'cloud',
    icon: 'Activity',
    highlight: true,
    yearsOfExp: 5,
    description: 'Automated build, test, and zero-downtime deployment pipelines using GitHub Actions and Vercel.',
    tags: ['GitHub Actions', 'CI/CD', 'Vercel', 'Automated Testing']
  },
  {
    name: 'AWS Cloud & Docker',
    level: 86,
    category: 'cloud',
    icon: 'Cloud',
    yearsOfExp: 4,
    description: 'AWS EC2, S3 bucket management, Docker containerization, and environment provisioning.',
    tags: ['AWS EC2', 'AWS S3', 'Docker', 'Cloud Hosting']
  },

  // Specialized & Integrations
  {
    name: 'Payment Rails (Stripe & CyberSource)',
    level: 94,
    category: 'specialized',
    icon: 'CreditCard',
    highlight: true,
    yearsOfExp: 5,
    description: 'Secure checkout flows, recurring subscriptions, CyberSource gateway, Avalara tax, and GoShippo.',
    tags: ['Stripe', 'CyberSource', 'Avalara Tax', 'GoShippo']
  },
  {
    name: 'Video Streaming & Media (Wowza & Video.js)',
    level: 92,
    category: 'specialized',
    icon: 'Video',
    highlight: true,
    yearsOfExp: 4,
    description: 'Live broadcast streaming integration with Wowza Engine, custom Video.js UI, and media delivery.',
    tags: ['Wowza Streaming', 'Video.js', 'Live Broadcast', 'Media Sync']
  },
  {
    name: 'Engineering Leadership & Agile',
    level: 95,
    category: 'tools',
    icon: 'Users',
    highlight: true,
    yearsOfExp: 5,
    description: 'Directed squads of 12 developers, sprint planning, JIRA, daily stand-ups, code reviews, and mentorship.',
    tags: ['Team Lead (12 Devs)', 'Agile / Scrum', 'Code Reviews', 'JIRA']
  }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'nextjs-ssr-opt',
    title: 'Next.js Server-Side Caching & Streaming SSR Pipeline',
    language: 'typescript',
    category: 'Next.js & Performance',
    description: 'Production pattern for Next.js SSR with on-demand tag revalidation, selective hydration, and error boundaries as implemented at IBIL Solutions.',
    code: `import { revalidateTag } from 'next/cache';
import { notFound } from 'next/navigation';

export interface CreatorMarketplaceItem {
  id: string;
  creatorId: string;
  title: string;
  isLive: boolean;
  streamUrl: string;
  taxCategory: string;
  price: number;
}

// High-speed cached server fetch with granular tag revalidation
export async function getLiveStreamData(streamId: string): Promise<CreatorMarketplaceItem> {
  const res = await fetch(\`https://api.creatorspace.internal/v1/streams/\${streamId}\`, {
    next: {
      tags: [\`stream-\${streamId}\`, 'live-feed'],
      revalidate: 30 // Fallback 30s background revalidation
    },
    headers: {
      'Authorization': \`Bearer \${process.env.INTERNAL_SERVICE_TOKEN}\`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error(\`Stream Fetch Failed: \${res.statusText}\`);
  }

  return res.json();
}

// Server Action for instant real-time revalidation
export async function triggerLiveStateAction(streamId: string, isLive: boolean) {
  'use server';
  
  await fetch(\`https://api.creatorspace.internal/v1/streams/\${streamId}/status\`, {
    method: 'PATCH',
    body: JSON.stringify({ isLive, updatedAt: new Date() }),
  });

  // Revalidate instant cache for all viewers with 0 layout shift
  revalidateTag(\`stream-\${streamId}\`);
  revalidateTag('live-feed');
}`,
    takeaway: 'Achieves instant cache updates across hundreds of concurrent viewers with zero layout shift and 25%+ faster LCP.'
  },
  {
    id: 'cybersource-stripe',
    title: 'Multi-Gateway Payment & Tax Router (CyberSource + Avalara)',
    language: 'typescript',
    category: 'Fintech & Integrations',
    description: 'Enterprise payment router supporting CyberSource credit card tokens, automated Avalara sales tax calculation, and GoShippo label generation.',
    code: `import Stripe from 'stripe';

export interface CheckoutPayload {
  orderId: string;
  userId: string;
  amount: number;
  currency: string;
  taxAddress: { state: string; zip: string; country: string };
  gateway: 'CYBERSOURCE' | 'STRIPE';
}

export async function processMultiGatewayCheckout(payload: CheckoutPayload) {
  // 1. Calculate Real-Time Sales Tax with Avalara
  const taxEstimate = await calculateAvalaraTax({
    address: payload.taxAddress,
    amount: payload.amount
  });

  const totalCharged = payload.amount + taxEstimate.totalTax;

  // 2. Route to CyberSource or Stripe Rail
  if (payload.gateway === 'CYBERSOURCE') {
    const cyberSourceResponse = await executeCyberSourcePayment({
      merchantRef: payload.orderId,
      amount: totalCharged,
      currency: payload.currency
    });

    return {
      success: cyberSourceResponse.status === 'AUTHORIZED',
      transactionId: cyberSourceResponse.id,
      tax: taxEstimate.totalTax
    };
  } else {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalCharged * 100),
      currency: payload.currency,
      metadata: { orderId: payload.orderId }
    });

    return {
      success: true,
      clientSecret: paymentIntent.client_secret,
      tax: taxEstimate.totalTax
    };
  }
}`,
    takeaway: 'Decouples checkout logic across payment rails with automated jurisdictional tax calculations.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Engineering Director',
    role: 'Vice President of Technology',
    company: 'IBIL Solutions',
    avatar: '👨‍💼',
    relationship: 'Direct Manager at IBIL Solutions',
    content: 'Abhijith is an exceptional Senior Software Developer and Squad Lead. He led a 12-developer squad delivering mission-critical Next.js applications on schedule, consistently raised our code quality standards, and improved platform load times by over 25%.'
  },
  {
    id: 't2',
    name: 'Lead Product Manager',
    role: 'Principal PM',
    company: 'Enterprise Client',
    avatar: '👩‍💼',
    relationship: 'Collaborated on Video Social Marketplace',
    content: 'Abhijith’s technical depth across Next.js, live streaming integrations (Wowza/Video.js), and CyberSource/Stripe payment systems made our launch an enormous success. He is reliable, proactive, and a great mentor.'
  },
  {
    id: 't3',
    name: 'Senior Full-Stack Colleague',
    role: 'Staff Developer',
    company: 'Tech Partner',
    avatar: '👨‍💻',
    relationship: 'Peer Engineer',
    content: 'Working alongside Abhijith is inspiring. His expertise in React architecture, TypeScript rigor, and CI/CD pipelines ensures our releases are seamless and robust.'
  }
];

export const TERMINAL_COMMANDS: TerminalCommand[] = [
  { command: 'help', description: 'List all available terminal commands', category: 'system' },
  { command: 'experience', description: 'Display complete career history (IBIL Solutions, Cankado) and leadership impact', category: 'info' },
  { command: 'projects', description: 'Inspect real-world production projects (Video Social Marketplace, Contract Q, HASHAPP, Intellicp, CANKADO)', category: 'info' },
  { command: 'skills', description: 'Explore full-stack technical competencies & years of experience', category: 'info' },
  { command: 'metrics', description: 'View measurable benchmarks (team size, speed boosts, uptime)', category: 'info' },
  { command: 'contact', description: 'Get direct email, LinkedIn, GitHub, and calendar booking link', category: 'interactive' },
  { command: 'hire', description: 'Open senior engagement & consultation inquiry modal', category: 'interactive' },
  { command: 'sudo hire', description: 'Launch instant VIP interview channel with celebration confetti', category: 'interactive' },
  { command: 'cat resume.md', description: 'View clean terminal markdown preview of Abhijith’s senior resume', category: 'info' },
  { command: 'clear', description: 'Clear the interactive console screen', category: 'system' }
];
