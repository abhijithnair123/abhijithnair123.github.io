'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenHireModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenHireModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read theme preference with fallback to DOM attribute and system preference
    let initialTheme: 'light' | 'dark' = 'light';
    try {
      const saved = localStorage.getItem('theme-preference') as 'light' | 'dark' | null;
      const domTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
      if (saved === 'dark' || saved === 'light') {
        initialTheme = saved;
      } else if (domTheme === 'dark' || domTheme === 'light') {
        initialTheme = domTheme;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        initialTheme = 'dark';
      }
    } catch (e) {}

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    // Always calculate next theme based on active DOM data-theme attribute
    const currentTheme = document.documentElement.getAttribute('data-theme') || theme || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    try {
      localStorage.setItem('theme-preference', nextTheme);
    } catch (e) {}

    document.documentElement.setAttribute('data-theme', nextTheme);
    document.body.setAttribute('data-theme', nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  };

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Education', href: '/#education' },
    { label: 'About', href: '/#about' },
    { label: 'Resume', href: '/resume' },
    { label: 'Blog', href: '/#blog' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%',
        padding: scrolled ? '12px 0' : '18px 0',
        transition: 'padding 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo: abhijith */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
            }}
          >
            abhijith<span style={{ color: '#ff5722' }}>.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.925rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Hire Me CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Circular Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            suppressHydrationWarning
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
            }}
            title={mounted ? (theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode') : 'Toggle Theme'}
            aria-label="Toggle Theme"
          >
            {mounted && theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Hire Me CTA Button */}
          <button
            type="button"
            onClick={onOpenHireModal}
            className="btn-pill-orange"
            suppressHydrationWarning
            style={{
              padding: '9px 20px',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            <span>Hire me</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            suppressHydrationWarning
            style={{
              background: 'transparent',
              border: '1px solid var(--border-card)',
              borderRadius: '8px',
              padding: '7px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-card)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                color: 'var(--text-primary)',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Theme Toggle Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Theme: <strong style={{ color: 'var(--text-primary)' }}>{mounted ? (theme === 'dark' ? 'Dark' : 'Light') : 'Light'}</strong>
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-card)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {mounted && theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              <span>{mounted && theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenHireModal) onOpenHireModal();
            }}
            className="btn-pill-orange"
            suppressHydrationWarning
            style={{
              width: '100%',
              justifyContent: 'center',
              marginTop: '8px',
            }}
          >
            <span>Hire me</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

    </header>
  );
};
