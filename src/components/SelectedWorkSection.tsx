'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  badges: { label: string; isOrange?: boolean }[];
  description: string[];
  imageSrc: string;
  imageAlt: string;
  metrics?: { label: string; value: string }[];
  technologies: string[];
  highlights?: string[];
  isFeatured?: boolean;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'way-carwash-saas',
    title: 'Way.com – Carwash SaaS Platform',
    tagline: 'Enterprise Auto-Care Services Marketplace & Subscription Engine',
    badges: [
      { label: 'Flagship SaaS', isOrange: true },
      { label: 'Angular 18', isOrange: false },
      { label: 'Node.js', isOrange: false },
    ],
    description: [
      'Way.com’s flagship enterprise Carwash SaaS platform powering customer carwash subscription passes, partner merchant portals, slot scheduling, and contactless QR redemptions across hundreds of US locations.',
      'Architected reactive front-end modules, merchant administration portals, and state management using Angular and RxJS, with high-throughput Node.js microservices for real-time partner POS barcode validations and automated revenue reconciliation.',
    ],
    imageSrc: '/carwash_saas.jpg',
    imageAlt: 'Way.com Carwash SaaS enterprise dashboard',
    metrics: [
      { label: 'Frontend Stack', value: 'Angular + RxJS' },
      { label: 'Backend APIs', value: 'Node.js Services' },
      { label: 'Architecture', value: 'Multi-Tenant' },
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'RxJS', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs'],
    highlights: [
      'Architected reactive customer booking & pass subscription management flows with Angular and RxJS',
      'Engineered high-throughput Node.js microservices handling real-time partner POS barcode redemptions',
      'Constructed multi-tenant merchant portal for location management and revenue analytics',
      'Optimized end-to-end checkout flows with minimal latency across mobile and web interfaces',
    ],
    isFeatured: true,
  },
  {
    id: 'video-marketplace',
    title: 'Video Social Marketplace',
    tagline: 'Live Video Streaming, Social Post Creation & Creator E-Commerce Hub',
    badges: [
      { label: 'Live Video', isOrange: true },
      { label: 'Social Posts', isOrange: false },
      { label: 'E-Commerce', isOrange: false },
    ],
    description: [
      'A comprehensive video social and commerce ecosystem for creators and viewers, uniting low-latency live streaming broadcasts, dynamic social post creation, and seamless marketplace purchasing.',
      'Engineered low-latency live video streaming pipelines using Wowza Engine paired with custom Video.js controls, channel memberships, and Socket.io real-time chat & interactive tipping.',
      'Integrated enterprise-grade CyberSource and Stripe payment checkouts with automated Avalara retail sales tax calculation and GoShippo logistics tracking for instant product purchases.',
    ],
    imageSrc: '/novu_dashboard.jpg',
    imageAlt: 'Video Social Marketplace live streaming and commerce interface',
    metrics: [
      { label: 'Streaming Tech', value: 'Wowza Engine' },
      { label: 'Payment Gateway', value: 'CyberSource' },
      { label: 'Real-Time Sync', value: 'Socket.io' },
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Wowza', 'Video.js', 'Socket.io', 'CyberSource', 'Avalara', 'AWS S3'],
    highlights: [
      'Engineered low-latency live video streaming pipelines with Video.js',
      'Interactive creator social post creation and community feeds',
      'Unified CyberSource and Stripe payment checkouts with automated tax',
      'Multi-tier AWS S3 storage with global CDN caching',
    ],
  },
  {
    id: 'sypher-insurance',
    title: 'Sypher – Property Insurance Platform',
    tagline: 'Enterprise Underwriting Workflows, Quoting Engine & Risk Intelligence',
    badges: [
      { label: 'Enterprise SaaS', isOrange: true },
      { label: 'AWS Serverless', isOrange: false },
      { label: 'Next.js', isOrange: false },
    ],
    description: [
      'An enterprise property insurance underwriting and quoting engine supporting end-to-end policy workflows with real-time risk assessment.',
      'Built complex frontend workflows using React.js, Next.js, and TypeScript across property, applicant, underwriting, and quote-generation processes.',
      'Integrated external insurance data services including the A-PLUS Property API to retrieve property details and prior-loss history on AWS serverless cloud infrastructure (Lambda, API Gateway, S3, Cognito, RDS).',
    ],
    imageSrc: '/sypher_insurance.jpg',
    imageAlt: 'Sypher property insurance underwriting and quoting platform',
    metrics: [
      { label: 'Role', value: 'Senior Frontend Lead' },
      { label: 'Cloud Architecture', value: 'AWS Serverless' },
      { label: 'Data Integration', value: 'A-PLUS API' },
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'AWS Lambda', 'API Gateway', 'PostgreSQL', 'A-PLUS Property API', 'Cognito'],
    highlights: [
      'Built multi-step frontend workflows using React.js, Next.js, and TypeScript for property & underwriting',
      'Integrated A-PLUS Property API to retrieve real-time property intelligence and loss history',
      'Connected frontend applications to AWS serverless APIs (Lambda, API Gateway, S3, Cognito)',
      'Engineered reusable TypeScript/React design system ensuring strict underwriting validation',
    ],
  },
  {
    id: 'contract-q',
    title: 'Contract Q – Construction Platform',
    tagline: 'Enterprise Construction Job Dispatch, Estimation Workflows & Field Hub',
    badges: [
      { label: 'Construction Tech', isOrange: true },
      { label: 'Next.js', isOrange: false },
      { label: 'Joyfill Forms', isOrange: false },
    ],
    description: [
      'A comprehensive web and administration platform built for construction builders and contractors to manage field jobs, workers, and client cost estimations.',
      'Facilitates real-time employee job assignments, dispatch tracking, construction project oversight, and custom dynamic customer estimation form workflows integrated with Joyfill form builder.',
    ],
    imageSrc: '/finlo_laptop.jpg',
    imageAlt: 'Contract Q construction platform dashboard on laptop',
    metrics: [
      { label: 'Form Engine', value: 'Joyfill Custom' },
      { label: 'API Optimization', value: '-35% Calls' },
      { label: 'Domain', value: 'Construction Tech' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Joyfill Form Builder', 'Tailwind CSS', 'REST APIs', 'Node.js'],
    highlights: [
      'Responsive multi-role portal for worker dispatch and schedule tracking',
      'Integrated Joyfill form builder for real-time contractor estimates',
      'Client-side data caching reducing backend overhead by 35%',
    ],
  },
  {
    id: 'ourchild-education',
    title: 'OurChild – Child Education Platform',
    tagline: 'Interactive Learning Activities, Student Progress & School Communication',
    badges: [
      { label: 'EdTech Platform', isOrange: true },
      { label: 'Interactive UI', isOrange: false },
      { label: 'Next.js', isOrange: false },
    ],
    description: [
      'A dedicated child education and learning platform connecting teachers, students, and parents for interactive curriculum activities and school communication.',
      'Features interactive learning activity modules, daily progress tracking, multimedia assignment submissions, and instant school-to-home announcements.',
    ],
    imageSrc: '/ourchild_education.jpg',
    imageAlt: 'OurChild child education and school communication dashboard',
    metrics: [
      { label: 'Target Audience', value: 'Students & Parents' },
      { label: 'Feature Set', value: 'Learning Activities' },
      { label: 'Communication', value: 'School Feed' },
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Interactive learning activity modules with child-friendly accessible UX and animations',
      'School-to-parent announcement feed with real-time notification broadcasting',
      'Student milestone tracking and teacher feedback assessment portals',
    ],
  },
];

export const SelectedWorkSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeModalProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setActiveModalProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.classList.remove('modal-open');
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModalProject]);

  const heroProject = PROJECTS_DATA[0];
  const gridProjects = PROJECTS_DATA.slice(1);

  return (
    <section
      id="work"
      style={{
        padding: '70px 0 100px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '44px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div
              style={{
                color: '#ff5722',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              PORTFOLIO
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4.2vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
              }}
            >
              Selected work
            </h2>
          </div>

          <a
            href="https://github.com/abhijithnair123"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5722')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <span>All projects</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Featured Flagship Project (Way.com Carwash SaaS) */}
        <div className="featured-hero-card">
          <div className="featured-hero-image-box">
            <Image
              src={heroProject.imageSrc}
              alt={heroProject.imageAlt}
              width={750}
              height={450}
              className="featured-hero-image"
              priority
            />
          </div>

          <div className="featured-hero-body">
            <div className="badge-row">
              {heroProject.badges.map((b) => (
                <span
                  key={b.label}
                  className={`tag-pill ${b.isOrange ? 'tag-pill-orange' : 'tag-pill-neutral'}`}
                >
                  {b.label}
                </span>
              ))}
            </div>

            <h3 className="project-title" style={{ fontSize: '1.65rem' }}>
              {heroProject.title}
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#ff5722', fontWeight: 600, marginBottom: '12px' }}>
              {heroProject.tagline}
            </p>

            <div className="project-desc-stack" style={{ marginBottom: '20px' }}>
              {heroProject.description.map((p, idx) => (
                <p key={idx} className="project-desc-paragraph">
                  {p}
                </p>
              ))}
            </div>

            {/* Metrics Chips */}
            {heroProject.metrics && (
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '24px',
                  flexWrap: 'wrap',
                }}
              >
                {heroProject.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '8px 14px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setActiveModalProject(heroProject)}
              className="case-study-btn"
              suppressHydrationWarning
            >
              <span>View case study</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* 2-Column Grid for the 4 Other Major Projects */}
        <div className="projects-grid-2col">
          {gridProjects.map((project) => (
            <div key={project.id} className="project-grid-card">
              <div className="card-image-box">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={700}
                  height={390}
                  className="card-image"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="card-body">
                <div className="badge-row">
                  {project.badges.map((b) => (
                    <span
                      key={b.label}
                      className={`tag-pill ${b.isOrange ? 'tag-pill-orange' : 'tag-pill-neutral'}`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p style={{ fontSize: '0.85rem', color: '#ff5722', fontWeight: 600, marginBottom: '10px' }}>
                  {project.tagline}
                </p>

                <p className="project-desc-paragraph" style={{ marginBottom: '22px' }}>
                  {project.description[0]}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="case-study-btn"
                  suppressHydrationWarning
                >
                  <span>View case study</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {mounted && activeModalProject && createPortal(
        <div
          className="modal-overlay"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '820px', padding: '0', maxHeight: '90vh', overflowY: 'auto' }}
          >
            {/* Modal Hero Banner */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                background: '#090b10',
                borderTopLeftRadius: 'var(--radius-xl)',
                borderTopRightRadius: 'var(--radius-xl)',
                overflow: 'hidden',
              }}
            >
              <Image
                src={activeModalProject.imageSrc}
                alt={activeModalProject.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.72)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'transform 0.15s ease, background 0.15s ease',
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px 36px 36px 36px' }}>
              {/* Badges */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {activeModalProject.badges.map((b) => (
                  <span
                    key={b.label}
                    className={`tag-pill ${b.isOrange ? 'tag-pill-orange' : 'tag-pill-neutral'}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                }}
              >
                {activeModalProject.title}
              </h3>
              <div
                style={{
                  fontSize: '1rem',
                  color: '#ff5722',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                {activeModalProject.tagline}
              </div>

              {/* Metrics Grid */}
              {activeModalProject.metrics && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '24px',
                  }}
                >
                  {activeModalProject.metrics.map((m) => (
                    <div key={m.label}>
                      <div
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Description paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '26px' }}>
                {activeModalProject.description.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Deliverables Highlights */}
              {activeModalProject.highlights && (
                <div style={{ marginBottom: '28px' }}>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '10px',
                    }}
                  >
                    Architecture &amp; Engineering Deliverables
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeModalProject.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CheckCircle2 size={16} color="#ff5722" style={{ flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {activeModalProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
};
