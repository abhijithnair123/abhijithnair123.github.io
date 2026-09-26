'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/portfolioData';
import { Quote, MessageSquare, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            <MessageSquare size={14} />
            <span>ENDORSEMENTS</span>
          </div>
          <h2 className="section-title">
            Recommendations &amp; Peer Reviews
          </h2>
          <p className="section-subtitle">
            Feedback from Engineering Directors, Product Leads, and Squad Peers on delivery velocity, code standards, and leadership.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="bento-grid">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="col-4 glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <Quote size={22} color="#3b82f6" style={{ opacity: 0.6 }} />
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '20px' }}>
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                  }}
                >
                  {item.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f8fafc' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#60a5fa' }}>
                    {item.role} • {item.company}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                    {item.relationship}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
