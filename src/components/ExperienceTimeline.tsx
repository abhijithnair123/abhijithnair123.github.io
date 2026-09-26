'use client';

import React, { useState } from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Users, Award, Zap, Download, FileText, X } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section id="experience" className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            <Briefcase size={14} />
            <span>CAREER & LEADERSHIP</span>
          </div>
          <h2 className="section-title">
            Professional Experience & Key Accomplishments
          </h2>
          <p className="section-subtitle">
            6+ years architecting enterprise web applications, directing cross-functional squads, and delivering measurable speed and scalability wins.
          </p>
        </div>

        {/* Quick Career Impact Overview Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
            marginBottom: '40px',
          }}
        >
          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Users size={18} color="#3b82f6" />
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>TEAM LEADERSHIP</span>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc' }} className="mono-font">
              12 Developers
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
              Directed squad at IBIL Solutions
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Zap size={18} color="#10b981" />
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>SPEED BOOST</span>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981' }} className="mono-font">
              +25% Speed
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
              Optimized via SSR/SSG &amp; Caching
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Award size={18} color="#60a5fa" />
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>CI/CD VELOCITY</span>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc' }} className="mono-font">
              GitHub Actions
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
              Automated pipelines &amp; releases
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Briefcase size={18} color="#fbbf24" />
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>PLATFORMS SHIPPED</span>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc' }} className="mono-font">
              15+ Apps
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
              Streaming, Healthcare, SaaS, E-Com
            </div>
          </div>
        </div>

        {/* Detailed Timeline Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: '32px',
                borderLeft: index === 0 ? '3px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc' }}>
                      {exp.role}
                    </h3>
                    {index === 0 && (
                      <span className="badge badge-emerald">
                        <div className="pulse-dot" />
                        <span>Present</span>
                      </span>
                    )}
                    {exp.teamSize && (
                      <span className="badge badge-blue">
                        <Users size={12} />
                        <span>{exp.teamSize}</span>
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: '1.1rem', color: '#3b82f6', fontWeight: 700 }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <div className="badge mono-font" style={{ fontSize: '0.8rem' }}>
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#94a3b8' }}>
                    <MapPin size={13} color="#64748b" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Summary */}
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '20px' }}>
                {exp.description}
              </p>

              {/* Key Wins Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '8px',
                  marginBottom: '20px',
                }}
              >
                {exp.keyWins.map((win) => (
                  <div
                    key={win.label}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc' }} className="mono-font">
                      {win.metric}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                      {win.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Responsibilities */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Core Responsibilities &amp; Impact:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.achievements.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#3b82f6',
                          marginTop: '8px',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#94a3b8',
                      }}
                      className="mono-font"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => setResumeModalOpen(true)}
            className="btn btn-secondary"
            style={{ padding: '12px 28px', fontSize: '0.9rem', gap: '8px' }}
          >
            <FileText size={16} />
            <span>View Full Resume</span>
          </button>
        </div>

        {/* Full Resume Modal */}
        {resumeModalOpen && (
          <div className="modal-overlay" onClick={() => setResumeModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc' }}>
                    {PERSONAL_INFO.name}
                  </h3>
                  <div style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.95rem' }}>
                    {PERSONAL_INFO.title}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>
                    {PERSONAL_INFO.email} • {PERSONAL_INFO.location} • {PERSONAL_INFO.github}
                  </div>
                </div>

                <button
                  onClick={() => setResumeModalOpen(false)}
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', marginBottom: '20px' }}>
                <h4 style={{ color: '#f8fafc', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>
                  SUMMARY
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', marginBottom: '20px' }}>
                <h4 style={{ color: '#f8fafc', fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px' }}>
                  WORK HISTORY
                </h4>
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>
                      <span>{exp.role} — <span style={{ color: '#3b82f6' }}>{exp.company}</span></span>
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{exp.period}</span>
                    </div>
                    <ul style={{ paddingLeft: '18px', marginTop: '6px', color: '#cbd5e1', fontSize: '0.825rem', lineHeight: 1.55 }}>
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} style={{ marginBottom: '4px' }}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  onClick={() => window.print()}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Print / Save PDF
                </button>
                <button
                  onClick={() => setResumeModalOpen(false)}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
