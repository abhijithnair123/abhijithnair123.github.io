'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {

  return (
    <section
      id="experience"
      style={{
        padding: '90px 0 110px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div
            style={{
              color: '#ff5722',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Briefcase size={14} />
            <span>CAREER JOURNEY &amp; CREDENTIALS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '14px',
            }}
          >
            Work Experience
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Over 7 years directing engineering squads, architecting Next.js &amp; Angular platforms,
            and shipping enterprise-grade web solutions across high-growth domains.
          </p>
        </div>

        {/* Executive Resume Download Showcase Card */}
        <div className="resume-banner">
          <div className="resume-banner-grid">
            {/* Left: Info */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#ff5722',
                  background: 'rgba(255, 87, 34, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                <Sparkles size={12} />
                <span>Curriculum Vitae</span>
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em',
                }}
              >
                Abhijith H Nair — Senior Fullstack Developer
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <FileText size={14} color="#ff5722" />
                  PDF Format (185 KB)
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} color="#10b981" />
                  ATS-Optimized &amp; Verified
                </span>
                <span>•</span>
                <span>Kerala, India (Remote Available)</span>
              </div>

              {/* Highlights List */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '8px 20px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#ff5722" style={{ flexShrink: 0 }} />
                  <span>Senior Full Stack Developer @ Way.com (Carwash SaaS)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#ff5722" style={{ flexShrink: 0 }} />
                  <span>Angular, Node.js, Next.js, React &amp; TypeScript</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#ff5722" style={{ flexShrink: 0 }} />
                  <span>Ex-Lead directing squad of 12 developers at IBIL</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} color="#ff5722" style={{ flexShrink: 0 }} />
                  <span>Microservices, Live Streaming &amp; Payment Rails</span>
                </div>
              </div>
            </div>

            {/* Right: CTA Actions */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                justifyContent: 'center',
                alignItems: 'stretch',
                minWidth: '220px',
              }}
            >
              <a
                href="/abhijith.pdf"
                download="Abhijith_H_Nair_Resume.pdf"
                className="btn-pill-orange"
                style={{
                  justifyContent: 'center',
                  padding: '13px 24px',
                  fontSize: '0.95rem',
                  boxShadow: '0 6px 20px rgba(255, 87, 34, 0.35)',
                }}
              >
                <Download size={16} />
                <span>Download Executive PDF</span>
              </a>

              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline"
                style={{
                  justifyContent: 'center',
                  padding: '11px 22px',
                  fontSize: '0.88rem',
                }}
              >
                <ExternalLink size={14} />
                <span>View Interactive Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Cards Container */}
        <div className="experience-timeline">
          {/* Work Roles */}
          {EXPERIENCES.map((exp) => {
              const isCurrent = exp.period.includes('Present');
              const isLead = exp.type === 'Lead';
              return (
                <div
                  key={exp.id}
                  className={`timeline-card ${isCurrent ? 'featured-role' : ''}`}
                >
                  {/* Top Bar: Role & Period */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          flexWrap: 'wrap',
                          marginBottom: '6px',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '1.35rem',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {exp.role}
                        </h3>

                        {isCurrent && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              color: '#10b981',
                              background: 'rgba(16, 185, 129, 0.1)',
                              border: '1px solid rgba(16, 185, 129, 0.25)',
                              padding: '2px 8px',
                              borderRadius: '100px',
                            }}
                          >
                            <span
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#10b981',
                                display: 'inline-block',
                              }}
                            />
                            Current Role
                          </span>
                        )}

                        {isLead && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              color: '#ff5722',
                              background: 'rgba(255, 87, 34, 0.1)',
                              border: '1px solid rgba(255, 87, 34, 0.25)',
                              padding: '2px 8px',
                              borderRadius: '100px',
                            }}
                          >
                            Engineering Lead (12 Devs)
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '0.9rem',
                          color: '#ff5722',
                          fontWeight: 700,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span>{exp.company}</span>
                        <span style={{ color: 'var(--text-muted)' }}>•</span>
                        <span
                          style={{
                            color: 'var(--text-muted)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 500,
                          }}
                        >
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                        {exp.teamSize && (
                          <>
                            <span style={{ color: 'var(--text-muted)' }}>•</span>
                            <span
                              style={{
                                color: 'var(--text-muted)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontWeight: 500,
                              }}
                            >
                              <Users size={13} />
                              {exp.teamSize}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-card)',
                        padding: '6px 14px',
                        borderRadius: '100px',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Calendar size={13} color="#ff5722" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '20px',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Key Wins Pill Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                      gap: '10px',
                      marginBottom: '22px',
                    }}
                  >
                    {exp.keyWins.map((win, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-card)',
                          borderRadius: '10px',
                          padding: '10px 14px',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '1.15rem',
                            fontWeight: 800,
                            color: '#ff5722',
                            lineHeight: 1.1,
                          }}
                        >
                          {win.metric}
                        </div>
                        <div
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                            marginTop: '2px',
                          }}
                        >
                          {win.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Achievements List */}
                  <div style={{ marginBottom: '22px' }}>
                    <h4
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--text-muted)',
                        marginBottom: '10px',
                      }}
                    >
                      Key Deliverables &amp; Architectural Impact
                    </h4>

                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.55,
                          }}
                        >
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: '#ff5722',
                              marginTop: '8px',
                              flexShrink: 0,
                            }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used Pills */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '7px',
                      }}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-card)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
