'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { Sparkles, ArrowUpRight, CheckCircle2, X, Layers, Activity } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Video & E-Commerce', 'Enterprise SaaS', 'Healthcare & HIPAA', 'Web3 & Social', 'Logistics'];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} />
            <span>PRODUCTION PLATFORMS</span>
          </div>
          <h2 className="section-title">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="section-subtitle">
            A selection of high-visibility web applications, live streaming architectures, and enterprise platforms I have built and led.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`btn ${filterCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="bento-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="col-6 glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedProject(proj)}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span className="badge badge-blue" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    {proj.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {proj.domain}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>
                  {proj.title}
                </h3>
                <div style={{ fontSize: '0.825rem', color: '#3b82f6', fontWeight: 600, marginBottom: '12px' }}>
                  {proj.subtitle}
                </div>

                <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                  {proj.description}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px',
                    marginBottom: '20px',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                  }}
                >
                  {proj.metrics.map((m) => (
                    <div key={m.label}>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>{m.label}</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }} className="mono-font">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {proj.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.72rem',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: '#94a3b8',
                      }}
                      className="mono-font"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 5 && (
                    <span style={{ fontSize: '0.72rem', color: '#64748b', alignSelf: 'center' }}>
                      +{proj.technologies.length - 5}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.8rem',
                    color: '#60a5fa',
                    fontWeight: 600,
                  }}
                >
                  <span>View Details &amp; Architecture</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <div>
                  <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
                    {selectedProject.category}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc' }}>
                    {selectedProject.title}
                  </h3>
                  <div style={{ color: '#3b82f6', fontSize: '0.875rem', fontWeight: 600 }}>
                    {selectedProject.subtitle}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
                >
                  <X size={20} />
                </button>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '20px' }}>
                {selectedProject.longDescription}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                  Architecture &amp; Implementation Decisions
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedProject.architectureHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                      }}
                    >
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', marginBottom: '6px' }}>
                  TECHNOLOGY STACK:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#f8fafc',
                      }}
                      className="mono-font"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setSelectedProject(null)} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
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
