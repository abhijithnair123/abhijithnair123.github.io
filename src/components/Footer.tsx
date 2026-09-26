'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-card)',
        background: 'var(--bg-primary)',
        padding: '36px 0 32px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          {/* Left: Copyright */}
          <div>
            © {new Date().getFullYear()} Abhijith H Nair. All rights reserved.
          </div>

          {/* Center / Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {onOpenTerminal && (
              <button
                type="button"
                onClick={onOpenTerminal}
                suppressHydrationWarning
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.825rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5722')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <Terminal size={14} />
                <span>CLI</span>
              </button>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              suppressHydrationWarning
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.825rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ff5722')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>

          {/* Right: Built with */}
          <div>
            Built with Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
