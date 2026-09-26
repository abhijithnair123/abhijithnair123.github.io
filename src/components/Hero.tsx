'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown, Download, ArrowRight, FileText } from 'lucide-react';

interface HeroProps {
  onOpenTerminal?: () => void;
  onOpenHireModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenHireModal }) => {
  return (
    <section
      className="hero-section"
      style={{
        paddingTop: '48px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Headline, Bio, Buttons, Stats */}
          <div className="hero-content">
            {/* Availability Overline Tag */}
            <div
              style={{
                color: '#ff5722',
                fontWeight: 700,
                fontSize: '0.825rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ff5722',
                  boxShadow: '0 0 10px #ff5722',
                }}
              />
              SENIOR FULLSTACK DEVELOPER
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '22px',
                textWrap: 'balance',
              }}
            >
              Hi, I&apos;m <span style={{ color: '#ff5722' }}>Abhijith</span>
            </h1>

            {/* Subtitle Bio */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.18rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '540px',
                marginBottom: '36px',
                textWrap: 'pretty',
              }}
            >
              Senior{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                Fullstack Developer
              </strong>
              . Over 7 years of expertise engineering high-concurrency Angular, Next.js, React, and Node.js platforms. Proven track record leading developer squads and shipping enterprise-scale digital platforms.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '44px',
              }}
            >
              <a href="#work" className="btn-pill-dark">
                <span>View my work</span>
                <ChevronDown size={16} />
              </a>

              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline"
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <FileText size={15} />
                <span>Resume (7+ Yrs)</span>
              </a>

              <button
                type="button"
                onClick={onOpenHireModal}
                className="btn-pill-outline"
                suppressHydrationWarning
                style={{ cursor: 'pointer' }}
              >
                <span>Get in touch</span>
              </button>
            </div>

            {/* Subtle Divider Line */}
            <div
              style={{
                width: '100%',
                maxWidth: '520px',
                height: '1px',
                background: 'var(--border-card)',
                marginBottom: '30px',
              }}
            />

            {/* Metric Benchmarks Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(28px, 4.5vw, 56px)',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 'clamp(1.85rem, 2.8vw, 2.3rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  7y+
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}
                >
                  Experience
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: 'clamp(1.85rem, 2.8vw, 2.3rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  15+
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}
                >
                  Platforms shipped
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: 'clamp(1.85rem, 2.8vw, 2.3rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  12+
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}
                >
                  Engineers directed
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Squircle Portrait Image with Floating Badge */}
          <div className="hero-media">
            <div className="hero-image-wrapper">
              <Image
                src="/abhijith-photo.jpg"
                alt="Abhijith H Nair - Senior Fullstack Developer"
                width={460}
                height={460}
                priority
                className="hero-avatar-squircle"
                style={{ objectFit: 'cover', objectPosition: 'center 36%' }}
              />

              {/* Floating Pill Badge */}
              <div className="hero-floating-badge">
                <span>Senior Fullstack • 7+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
