'use client';

import React from 'react';
import { EDUCATION } from '@/data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

const COURSEWORK_HIGHLIGHTS: Record<string, string[]> = {
  'btech-cse': [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Distributed Systems',
    'Database Management (DBMS)',
    'Object-Oriented Design',
    'Web Technologies',
    'Computer Networks',
    'Operating Systems',
  ],
  'higher-secondary': [
    'Programming Fundamentals (C++)',
    'Advanced Mathematics',
    'Computer Science',
    'Physical Sciences',
    'Logic & Boolean Algebra',
  ],
};

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      style={{
        padding: '90px 0 110px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px auto' }}>
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
            <GraduationCap size={15} />
            <span>ACADEMIC BACKGROUND</span>
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
            Education &amp; Qualifications
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Rigorous engineering foundations in Computer Science, software architecture,
            and computational principles.
          </p>
        </div>

        {/* 2-Column Education Cards Grid */}
        <div className="education-grid">
          {EDUCATION.map((edu, index) => {
            const coursework = COURSEWORK_HIGHLIGHTS[edu.id] || [];
            const isDegree = edu.id === 'btech-cse';

            return (
              <div
                key={edu.id}
                className="education-card"
                style={{
                  borderTop: isDegree ? '3px solid #ff5722' : '1px solid var(--border-card)',
                }}
              >
                {/* Header row: Icon + Period badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '18px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: isDegree ? 'rgba(255, 87, 34, 0.1)' : 'var(--bg-secondary)',
                      border: isDegree ? '1px solid rgba(255, 87, 34, 0.25)' : '1px solid var(--border-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isDegree ? '#ff5722' : 'var(--text-primary)',
                      flexShrink: 0,
                    }}
                  >
                    {isDegree ? <GraduationCap size={24} /> : <BookOpen size={22} />}
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-card)',
                      padding: '5px 14px',
                      borderRadius: '100px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Calendar size={13} color="#ff5722" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree / Certificate Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3,
                    marginBottom: '8px',
                  }}
                >
                  {edu.degree}
                </h3>

                {/* Institution & Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem',
                    color: '#ff5722',
                    fontWeight: 700,
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{edu.institution}</span>
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
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '22px',
                  }}
                >
                  {edu.description}
                </p>

                {/* Coursework & Competencies */}
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Award size={13} color="#ff5722" />
                    <span>Key Coursework &amp; Focus</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {coursework.map((course) => (
                      <span
                        key={course}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          padding: '4px 11px',
                          borderRadius: '8px',
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {course}
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
