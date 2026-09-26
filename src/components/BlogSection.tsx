'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ArticleItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  url?: string;
}

const ARTICLES: ArticleItem[] = [
  {
    id: 'nextjs-perf',
    category: 'Performance',
    date: 'Mar 2025',
    title: 'Optimizing Next.js SSR & Server Caching for a 25% Speed Boost',
    excerpt:
      'A deep-dive into on-demand tag revalidation, selective hydration, and server-side caching patterns that elevated Core Web Vitals to 98+.',
    imageSrc: '/blog_coding.jpg',
    imageAlt: 'Syntax highlighted code in Next.js editor',
  },
  {
    id: 'streaming-arch',
    category: 'Architecture',
    date: 'Feb 2025',
    title: 'Architecting Low-Latency Live Video Streaming with Wowza & Video.js',
    excerpt:
      'How we engineered concurrent creator broadcasting with Socket.io WebSockets chat and automated CDN distribution.',
    imageSrc: '/blog_sketching.jpg',
    imageAlt: 'Architecture sketching of live video streaming pipelines',
  },
  {
    id: 'payment-rails',
    category: 'Fintech',
    date: 'Jan 2025',
    title: 'Multi-Gateway Payment Router: Integrating CyberSource, Stripe & Avalara',
    excerpt:
      'Architecting decoupled payment pipelines with automated jurisdictional sales tax calculation and zero-downtime tokenization.',
    imageSrc: '/blog_freelance.jpg',
    imageAlt: 'Fintech payment gateway dashboard on laptop',
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section
      id="blog"
      style={{
        padding: '70px 0 90px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '44px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
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
              THOUGHTS
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
              Engineering &amp; Insights
            </h2>
          </div>

          <a
            href="https://github.com/abhijithnair123"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5722')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <span>All articles</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="articles-grid">
          {ARTICLES.map((article) => (
            <article key={article.id} className="article-card">
              {/* Thumbnail Image */}
              <div className="article-image-box">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  width={600}
                  height={350}
                  className="article-image"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Body */}
              <div className="article-body">
                {/* Meta Row: Category Badge & Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span className="category-pill">{article.category}</span>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="article-title">{article.title}</h3>

                {/* Excerpt */}
                <p className="article-excerpt">{article.excerpt}</p>

                {/* Read More Link */}
                <span
                  className="read-more-link"
                  style={{ cursor: 'pointer' }}
                >
                  <span>Read case breakdown</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
};
