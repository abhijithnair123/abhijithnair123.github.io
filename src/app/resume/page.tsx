'use client';

import React from 'react';
import Link from 'next/link';
import {
  Printer,
  Download,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import './resume.css';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page-wrapper">
      {/* Top Floating Control Bar (Hidden on Print) */}
      <div className="resume-toolbar no-print">
        <div className="toolbar-container">
          <Link href="/" className="toolbar-btn outline">
            <ArrowLeft size={15} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="toolbar-center-badge">
            <span>Executive Resume • 7+ Years Experience</span>
          </div>

          <div className="toolbar-actions">
            <button onClick={handlePrint} className="toolbar-btn secondary" suppressHydrationWarning>
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>

            <a href="/abhijith.pdf" download="Abhijith_H_Nair_Resume.pdf" className="toolbar-btn primary">
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="resume-paper">
        {/* ============================================================ */}
        {/* SHEET 1: HEADER, SUMMARY, SKILLS, WAY.COM, IBIL SOLUTIONS    */}
        {/* ============================================================ */}
        <div className="resume-page-sheet page-1">
          {/* Executive Header Block */}
          <header className="resume-header">
            <h1 className="candidate-name">ABHIJITH H NAIR</h1>
            <div className="candidate-title">
              Senior Fullstack Developer • 7+ Years Experience
            </div>

            <div className="contact-strip">
              <span className="contact-item">
                <MapPin size={11} className="c-icon" />
                <span>Thiruvananthapuram, Kerala, India</span>
              </span>
              <span className="c-sep">•</span>
              <span className="contact-item">
                <Phone size={11} className="c-icon" />
                <span>+91 6282801344</span>
              </span>
              <span className="c-sep">•</span>
              <span className="contact-item">
                <Mail size={11} className="c-icon" />
                <a href="mailto:abhijithnairprasadam@gmail.com">abhijithnairprasadam@gmail.com</a>
              </span>
            </div>

            <div className="contact-strip links">
              <span className="contact-item">
                <LinkedinIcon size={11} className="c-icon" />
                <a href="https://linkedin.com/in/abhijith-h-nair-394606130" target="_blank" rel="noreferrer">
                  linkedin.com/in/abhijith-h-nair-394606130
                </a>
              </span>
              <span className="c-sep">•</span>
              <span className="contact-item">
                <GithubIcon size={11} className="c-icon" />
                <a href="https://github.com/abhijithnair123" target="_blank" rel="noreferrer">
                  github.com/abhijithnair123
                </a>
              </span>
              <span className="c-sep">•</span>
              <span className="contact-item">
                <Globe size={11} className="c-icon" />
                <a href="https://abhijithnair123.github.io" target="_blank" rel="noreferrer">
                  abhijithnair123.github.io
                </a>
              </span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h2 className="section-heading">Professional Summary</h2>
            <p className="summary-text">
              Senior Fullstack Developer with <strong>7+ years of professional experience</strong> architecting
              high-throughput web platforms, scalable microservices, and reactive SaaS systems. Currently building Way.com&apos;s
              enterprise <strong>Carwash SaaS platform</strong> utilizing <strong>Angular (v17/v18)</strong> and <strong>Node.js</strong>.
              Proven engineering leadership directing cross-functional squads of <strong>12+ developers</strong> at IBIL Solutions across
              enterprise InsurTech (Sypher), video commerce marketplaces, and Next.js applications, driving <strong>25%+ page speed gains</strong>,
              establishing automated CI/CD pipelines, and integrating enterprise payment rails (CyberSource, Stripe) and low-latency video streaming pipelines (Wowza).
            </p>
          </section>

          {/* Core Technical Competencies */}
          <section className="resume-section">
            <h2 className="section-heading">Technical Skills</h2>
            <div className="skills-table">
              <div className="skill-row">
                <span className="skill-cat">Languages &amp; Frameworks:</span>
                <span className="skill-val">
                  Angular (v17/v18), Next.js (App &amp; Pages Router), React.js, TypeScript, JavaScript (ES6+), Node.js, Express.js, PHP/Laravel, RxJS, HTML5, CSS3, SCSS
                </span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Architecture &amp; State:</span>
                <span className="skill-val">
                  Microservices Architecture, Redux Toolkit, Context API, RESTful APIs, WebSockets (Socket.io), SSR/SSG/ISR, Event-Driven Pipelines
                </span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Databases &amp; Caching:</span>
                <span className="skill-val">
                  PostgreSQL, MongoDB, MySQL, Redis Distributed Caching, AWS S3
                </span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Cloud, DevOps &amp; Tools:</span>
                <span className="skill-val">
                  AWS (Lambda, API Gateway, S3, Cognito), Docker, GitHub Actions (CI/CD Pipelines), Terraform, Vercel, Git, JIRA, Postman, Webpack, Agile/Scrum
                </span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Integrations &amp; Specialized:</span>
                <span className="skill-val">
                  A-PLUS Property API, Stripe, CyberSource, Wowza Live Streaming, Video.js, Joyfill Form Builder, Avalara Tax, GoShippo, HIPAA Compliance
                </span>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="resume-section" style={{ marginBottom: 0 }}>
            <h2 className="section-heading">Professional Experience</h2>

            {/* Role 1: Way.com */}
            <div className="job-entry">
              <div className="job-row-1">
                <div className="job-title-group">
                  <span className="company-name">Way.com</span>
                  <span className="job-badge">Carwash SaaS Product</span>
                </div>
                <span className="job-location">Kerala, India / Remote</span>
              </div>
              <div className="job-row-2">
                <span className="job-role">Senior Full Stack Developer</span>
                <span className="job-dates">July 2026 – Present</span>
              </div>
              <ul className="bullet-list">
                <li>
                  Engineering Way.com&apos;s flagship <strong>Carwash SaaS platform</strong>, powering customer subscription passes,
                  slot scheduling, merchant partner management, and contactless QR redemptions across hundreds of US locations.
                </li>
                <li>
                  Architecting reactive front-end modules, merchant administration portals, and state management using <strong>Angular (v17/v18)</strong>,{' '}
                  <strong>TypeScript</strong>, and <strong>RxJS</strong>.
                </li>
                <li>
                  Developing scalable backend microservices and RESTful API endpoints with <strong>Node.js</strong> to power real-time carwash booking,
                  pass activations, and barcode/QR redemptions.
                </li>
                <li>
                  Integrating third-party POS hardware systems, merchant validation APIs, and payment rails for automated wash validations across partner carwash operators.
                </li>
              </ul>
            </div>

            {/* Role 2: IBIL Solutions */}
            <div className="job-entry" style={{ marginBottom: 0 }}>
              <div className="job-row-1">
                <div className="job-title-group">
                  <span className="company-name">IBIL Solutions</span>
                  <span className="job-badge lead">Squad Lead (12 Developers)</span>
                </div>
                <span className="job-location">Kerala, India</span>
              </div>
              <div className="job-row-2">
                <span className="job-role">Senior Software Developer &amp; Engineering Lead</span>
                <span className="job-dates">Feb 2020 – July 2026</span>
              </div>
              <ul className="bullet-list">
                <li>
                  Directed a cross-functional squad of <strong>12 software developers</strong> delivering high-visibility Next.js enterprise
                  applications, ensuring strict alignment with business goals, architectural guidelines, and delivery milestones.
                </li>
                <li>
                  Spearheaded frontend architecture for <strong>Sypher — Insurance Platform</strong>, engineering complex property underwriting,
                  applicant, and quoting workflows in <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>; integrated <strong>A-PLUS Property API</strong> for prior-loss history and <strong>AWS serverless</strong> APIs (Lambda, Cognito, S3, Secrets Manager).
                </li>
                <li>
                  Architected Next.js SSR/SSG platforms achieving <strong>25%+ page speed gains</strong>, configured automated CI/CD deployment pipelines using <strong>GitHub Actions</strong>, and built reusable TypeScript component libraries.
                </li>
                <li>
                  Integrated enterprise FinTech payment rails (<strong>CyberSource</strong>, <strong>Stripe</strong>), <strong>Avalara</strong> automated retail tax calculation, <strong>GoShippo</strong> shipping, and <strong>Wowza Streaming Engine</strong> video pipelines; conducted code reviews and mentored 12 engineers in Agile/Scrum.
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Clean Hard Page Break */}
        <div className="page-break" />

        {/* ============================================================ */}
        {/* SHEET 2: CANKADO, KEY PLATFORMS, ARCHITECTURE, EDUCATION     */}
        {/* ============================================================ */}
        <div className="resume-page-sheet page-2">
          {/* Professional Experience (Cont.) */}
          <section className="resume-section">
            <h2 className="section-heading">
              Professional Experience <span className="heading-sub">(Continued)</span>
            </h2>

            {/* Role 3: Cankado */}
            <div className="job-entry" style={{ marginBottom: 0 }}>
              <div className="job-row-1">
                <div className="job-title-group">
                  <span className="company-name">Cankado India Pvt Ltd</span>
                  <span className="job-badge">Digital Health &amp; Oncology</span>
                </div>
                <span className="job-location">Kerala, India</span>
              </div>
              <div className="job-row-2">
                <span className="job-role">WordPress &amp; Frontend Developer</span>
                <span className="job-dates">August 2019 – January 2020</span>
              </div>
              <ul className="bullet-list">
                <li>
                  Built responsive web pages and digital health user interfaces for oncology patients and healthcare providers using WordPress, HTML5, CSS3, JavaScript, and PHP.
                </li>
                <li>
                  Integrated <strong>Stripe payment gateway</strong> into clinical web applications for secure, streamlined patient billing and transaction processing.
                </li>
                <li>
                  Designed custom page layouts and developed custom PHP/JS plugins to extend Elementor functionality for medical oncology requirements.
                </li>
                <li>
                  Integrated electronic Patient-Reported Outcomes (ePRO) tools, enabling patients to document health status in real time.
                </li>
              </ul>
            </div>
          </section>

          {/* Key Production Platforms & Architectural Achievements */}
          <section className="resume-section">
            <h2 className="section-heading">Key Production Platforms &amp; Architectural Projects</h2>
            <div className="projects-list">
              <div className="project-card">
                <div className="project-top">
                  <span className="project-name">Way.com – Carwash SaaS Platform</span>
                  <span className="project-tech">Angular 17/18, Node.js, RxJS, PostgreSQL, Microservices, POS Integrations</span>
                </div>
                <p className="project-summary">
                  Enterprise vehicle care SaaS platform facilitating customer subscription passes, partner merchant portals, slot scheduling,
                  and contactless QR/barcode redemptions across hundreds of US partner locations. Engineered high-throughput booking microservices
                  and POS validation workflows with automated billing reconciliation.
                </p>
              </div>

              <div className="project-card">
                <div className="project-top">
                  <span className="project-name">Sypher – Insurance Underwriting Platform</span>
                  <span className="project-tech">React.js, Next.js, TypeScript, AWS (Lambda, API Gateway, S3, Cognito), A-PLUS Property API</span>
                </div>
                <p className="project-summary">
                  Enterprise property insurance underwriting and quoting platform supporting multi-step property, applicant, and risk workflows.
                  Integrated external insurance services including the A-PLUS Property API for loss history, connected frontend applications to AWS serverless APIs, and built reusable TypeScript component libraries.
                </p>
              </div>

              <div className="project-card">
                <div className="project-top">
                  <span className="project-name">Video Social Marketplace</span>
                  <span className="project-tech">Next.js, Node.js, Wowza Live Streaming, CyberSource, Avalara, GoShippo</span>
                </div>
                <p className="project-summary">
                  High-concurrency video social and commerce platform enabling creators to monetize live streams, channel
                  memberships, CyberSource credit checkouts, and real-time sales tax calculation via Avalara. Directed frontend engineering
                  squad implementing custom Video.js controls, WebSockets chat streams, and carrier label shipping automation.
                </p>
              </div>

              <div className="project-card">
                <div className="project-top">
                  <span className="project-name">Contract Q – Builder &amp; Contractor Platform</span>
                  <span className="project-tech">Next.js, TypeScript, Joyfill Form Builder, Tailwind CSS</span>
                </div>
                <p className="project-summary">
                  Enterprise job assignment, field tracking, and dynamic customer estimation form builder system with real-time
                  state synchronization and multi-tenant access control. Built interactive schema-driven estimation forms with Joyfill
                  streamlining contract drafting for commercial contractors.
                </p>
              </div>

              <div className="project-card">
                <div className="project-top">
                  <span className="project-name">HASHAPP – Crypto-Social Engagement Network</span>
                  <span className="project-tech">Next.js, TypeScript, Node.js, Stripe, Socket.io, Video.js</span>
                </div>
                <p className="project-summary">
                  Blockchain engagement platform rewarding member interaction with micropayments, interactive media feeds, and Stripe
                  checkout subscriptions. Built responsive media feed with custom Video.js player, Socket.io instant messaging, and dark mode.
                </p>
              </div>

              <div className="project-card">
                <div className="project-top">
                  <span className="project-name">Intellicp Pharmacovigilance &amp; CANKADO Health</span>
                  <span className="project-tech">React.js, MongoDB, HIPAA Compliance, ePRO Systems</span>
                </div>
                <p className="project-summary">
                  HIPAA-standard adverse event extraction tool compiling automated ICSR safety reports from medical source documents,
                  and accessible patient-reported symptom tracking interfaces for clinical oncology studies.
                </p>
              </div>
            </div>
          </section>

          {/* Architectural Competencies & Technical Leadership */}
          <section className="resume-section">
            <h2 className="section-heading">Architectural Competencies &amp; Technical Leadership</h2>
            <div className="competencies-list">
              <div className="comp-item">
                <strong>Frontend Architecture &amp; Performance:</strong> Deep mastery of Next.js (App &amp; Pages Router SSR/SSG/ISR) and Angular (v17/v18 with RxJS). Implemented code splitting, selective hydration, on-demand cache revalidation, and CDN optimization boosting page speed by 25%+.
              </div>
              <div className="comp-item">
                <strong>High-Throughput Microservices &amp; APIs:</strong> Engineered resilient Node.js microservices, RESTful APIs, and real-time Socket.io WebSockets event pipelines powering instantaneous notification streams, booking queues, and POS hardware barcode validations.
              </div>
              <div className="comp-item">
                <strong>FinTech, InsurTech &amp; Tax Integrations:</strong> Architected multi-gateway payment processing with Stripe and CyberSource, automated jurisdictional retail tax calculations via Avalara, insurance loss retrieval via A-PLUS Property API, and dynamic schema forms with Joyfill.
              </div>
              <div className="comp-item">
                <strong>Engineering Squad Direction &amp; DevOps:</strong> Directed squads of 12+ developers at IBIL Solutions, driving sprint planning, code review standards, zero-downtime CI/CD deployment automation with GitHub Actions, and high-impact mentorship.
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section" style={{ marginBottom: 0 }}>
            <h2 className="section-heading">Education &amp; Credentials</h2>
            <div className="education-block">
              <div className="edu-row">
                <div className="edu-main">
                  <span className="edu-degree">Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</span>
                  <span className="edu-school">APJ Abdul Kalam Technological University • Kerala, India</span>
                </div>
                <div className="edu-year">2015 – 2019</div>
              </div>
              <div className="edu-coursework">
                Core Coursework: Data Structures &amp; Algorithms, Object-Oriented Software Engineering, Database Management Systems, Distributed Networks, Operating Systems, Web Technologies
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
