'use client';

import React from 'react';
import { Code2, Zap, ShieldCheck } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  isFeatured?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Development',
    description:
      'Production-grade web apps using Next.js, React.js, TypeScript, Node.js, and Tailwind CSS. Clean component systems and scalable state management.',
    icon: Code2,
    isFeatured: false,
  },
  {
    id: 'performance-ssr',
    title: 'Performance & Architecture',
    description:
      'Specialized in Server-Side Rendering (SSR), SSG, code splitting, lazy loading, and server caching, resulting in 25%+ improvements in page load speeds.',
    icon: Zap,
    isFeatured: true,
  },
  {
    id: 'integrations-leadership',
    title: 'Integrations & Leadership',
    description:
      'Directed cross-functional squads of 12+ developers. Proven delivery across Stripe & CyberSource payments, Wowza live streaming, and HIPAA compliance.',
    icon: ShieldCheck,
    isFeatured: false,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      style={{
        padding: '70px 0 90px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '44px', textAlign: 'left' }}>
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
            WHAT I DO
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
            Services &amp; Architecture
          </h2>
        </div>

        {/* 3-Column Service Cards Grid */}
        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isFeatured = service.isFeatured;

            return (
              <div
                key={service.id}
                className={`service-card ${isFeatured ? 'service-card-featured' : 'service-card-standard'}`}
              >
                {/* Icon Container */}
                <div
                  className={`service-icon-box ${isFeatured ? 'service-icon-box-featured' : 'service-icon-box-standard'}`}
                >
                  <Icon size={24} color="#ff5722" />
                </div>

                {/* Service Title */}
                <h3
                  className={`service-title ${isFeatured ? 'service-title-featured' : 'service-title-standard'}`}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className={`service-description ${isFeatured ? 'service-description-featured' : 'service-description-standard'}`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
