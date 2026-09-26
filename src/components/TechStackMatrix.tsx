'use client';

import React, { useState } from 'react';
import { SKILLS } from '@/data/portfolioData';
import { Cpu, Server, Database, Cloud, Zap, CreditCard, Users } from 'lucide-react';

export const TechStackMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', icon: Cpu },
    { id: 'frontend', label: 'Frontend & Next.js', icon: Zap },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Databases & Storage', icon: Database },
    { id: 'cloud', label: 'CI/CD & DevOps', icon: Cloud },
    { id: 'specialized', label: 'Payments & Streaming', icon: CreditCard },
    { id: 'tools', label: 'Leadership & Agile', icon: Users },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            <Cpu size={14} />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="section-title">
            Skills &amp; Engineering Toolkit
          </h2>
          <p className="section-subtitle">
            6+ years building end-to-end applications across modern frontend architectures, backend APIs, distributed caching, and automated CI/CD pipelines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            marginBottom: '36px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '6px 14px',
                  fontSize: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Bento Grid */}
        <div className="bento-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="col-4 glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                      {skill.name}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>
                      {skill.yearsOfExp}+ Years Experience
                    </span>
                  </div>
                  <div
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      color: '#60a5fa',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                    className="mono-font"
                  >
                    {skill.level}%
                  </div>
                </div>

                <p style={{ fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '16px' }}>
                  {skill.description}
                </p>
              </div>

              <div>
                {/* Mastery Bar */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: '#3b82f6',
                        borderRadius: '2px',
                      }}
                    />
                  </div>
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.7rem',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: '#94a3b8',
                      }}
                      className="mono-font"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
