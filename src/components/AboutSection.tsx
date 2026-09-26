'use client';

import React from 'react';
import Image from 'next/image';

const STACK_AND_TOOLS = [
  'Angular',
  'Next.js',
  'React.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PHP / Laravel',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'AWS S3',
  'GitHub Actions',
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: '90px 0 110px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div className="about-layout">
          {/* Left Column: Portrait Squircle */}
          <div className="about-media">
            <div className="about-image-wrapper">
              <Image
                src="/abhijith-photo.jpg"
                alt="Abhijith H Nair - Senior Fullstack Developer"
                width={400}
                height={400}
                className="about-avatar"
                style={{ objectFit: 'cover', objectPosition: 'center 36%' }}
              />
            </div>
          </div>

          {/* Right Column: Bio & Tech Stack */}
          <div className="about-content">
            {/* Tag */}
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
              ABOUT ME
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 'clamp(2.3rem, 4vw, 3.1rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '26px',
                textWrap: 'balance',
              }}
            >
              A bit about
              <br />
              who I am
            </h2>

            {/* Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  margin: 0,
                  maxWidth: '560px',
                }}
              >
                I&apos;m Abhijith H Nair, a Senior Fullstack Developer currently engineering high-scale Carwash SaaS platforms at <strong>Way.com</strong> with Angular and Node.js. With over 7 years of expertise across modern full-stack web technologies, I previously led squads of 12+ developers at IBIL Solutions, orchestrating enterprise Next.js architectures, SSR optimizations, and zero-downtime CI/CD pipelines.
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  margin: 0,
                  maxWidth: '560px',
                }}
              >
                I specialize in designing scalable, secure, and resilient web architectures — from enterprise automotive SaaS and POS hardware integrations to low-latency live streaming (Wowza &amp; Video.js), payment rails (CyberSource &amp; Stripe), and HIPAA-standard clinical systems. When I&apos;m not architecting platforms or mentoring engineers, you&apos;ll find me exploring new web standards and contributing to open source.
              </p>
            </div>

            {/* Stack & Tools Label */}
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              STACK &amp; TOOLS
            </div>

            {/* Pills Group */}
            <div className="stack-pills-row">
              {STACK_AND_TOOLS.map((tool) => (
                <span key={tool} className="tool-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
