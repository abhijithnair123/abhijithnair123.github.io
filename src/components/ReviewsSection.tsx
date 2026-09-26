'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  isFeatured?: boolean;
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'director',
    quote:
      '“Abhijith is an exceptional Senior Software Developer and Squad Lead. He directed a 12-developer squad delivering mission-critical Next.js platforms on schedule, consistently raised our code quality standards, and improved platform load times by over 25%.”',
    author: 'VP of Technology',
    role: 'Engineering Director, IBIL Solutions',
    avatar: '/avatar_thomas.jpg',
    isFeatured: false,
  },
  {
    id: 'pm',
    quote:
      '“Abhijith’s technical depth across Next.js, live streaming integrations (Wowza/Video.js), and CyberSource/Stripe payment systems made our launch an enormous success. He is reliable, proactive, and a great mentor.”',
    author: 'Principal Product Manager',
    role: 'Client Lead, Video Social Marketplace',
    avatar: '/avatar_sarah.jpg',
    isFeatured: true,
  },
  {
    id: 'peer',
    quote:
      '“Working alongside Abhijith is inspiring. His expertise in React architecture, TypeScript rigor, and CI/CD pipelines ensures our production releases are seamless, robust, and zero-downtime.”',
    author: 'Staff Software Engineer',
    role: 'Tech Partner, Cloud Architecture',
    avatar: '/avatar_camille.jpg',
    isFeatured: false,
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
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
            SOCIAL PROOF
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
            What colleagues &amp; leaders say
          </h2>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS.map((review) => {
            const isFeatured = review.isFeatured;

            return (
              <div
                key={review.id}
                className={`review-card ${isFeatured ? 'review-card-featured' : 'review-card-standard'}`}
              >
                {/* 5 Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="#ff5722"
                      color="#ff5722"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p
                  className={`review-quote ${isFeatured ? 'review-quote-featured' : 'review-quote-standard'}`}
                >
                  {review.quote}
                </p>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      position: 'relative',
                      flexShrink: 0,
                      border: isFeatured ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div
                      className={`author-name ${isFeatured ? 'author-name-featured' : 'author-name-standard'}`}
                    >
                      {review.author}
                    </div>
                    <div
                      className={`author-role ${isFeatured ? 'author-role-featured' : 'author-role-standard'}`}
                    >
                      {review.role}
                    </div>
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
