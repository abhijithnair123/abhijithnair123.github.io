'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { SKILLS, PROJECTS, PERSONAL_INFO } from '@/data/portfolioData';
import { Search, Terminal, Sparkles, Cpu, Mail, Code2, ArrowRight, X, Briefcase, FileText } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenHireModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenHireModal,
}) => {
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      setTimeout(() => inputRef.current?.focus(), 80);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.classList.remove('modal-open');
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const filteredSkills = SKILLS.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 4);

  const filteredProjects = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 3);

  const quickActions = [
    { label: 'Work Experience & Timeline', action: () => { onClose(); window.location.hash = '#experience'; }, icon: Briefcase, color: '#ff5722' },
    { label: 'Download Abhijith Resume (PDF)', action: () => { onClose(); window.open('/abhijith.pdf', '_blank'); }, icon: FileText, color: '#10b981' },
    { label: 'View Featured Production Projects', action: () => { onClose(); window.location.hash = '#work'; }, icon: Sparkles, color: '#3b82f6' },
    { label: 'Core Engineering Services & Architecture', action: () => { onClose(); window.location.hash = '#services'; }, icon: Cpu, color: '#f59e0b' },
    { label: 'Launch Interactive CLI Shell', action: () => { onClose(); onOpenTerminal(); }, icon: Terminal, color: '#8b5cf6' },
    { label: 'Get in Touch / Direct Inquiry', action: () => { onClose(); onOpenHireModal(); }, icon: Mail, color: '#ff5722' },
  ];

  return createPortal(
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '600px',
          padding: 0,
          background: '#0d111a',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Search Header */}
        <div
          style={{
            padding: '14px 18px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Search size={18} color="#94a3b8" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search experience, projects, skills..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              fontSize: '0.925rem',
              outline: 'none',
            }}
          />
          <kbd
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '0.7rem',
              color: '#64748b',
              fontFamily: 'monospace',
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '12px' }}>
          {/* Quick Actions */}
          {!query && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px', paddingLeft: '8px' }}>
                Navigation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {quickActions.map((qa) => (
                  <button
                    key={qa.label}
                    onClick={qa.action}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      background: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      color: '#cbd5e1',
                      fontSize: '0.825rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <qa.icon size={15} color={qa.color} />
                      <span>{qa.label}</span>
                    </div>
                    <ArrowRight size={13} color="#64748b" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Skills */}
          {filteredSkills.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px', paddingLeft: '8px' }}>
                Skills
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {filteredSkills.map((s) => (
                  <div
                    key={s.name}
                    onClick={() => {
                      onClose();
                      window.location.hash = '#skills';
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.825rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{s.description.slice(0, 50)}...</div>
                    </div>
                    <span className="badge badge-blue" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                      {s.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px', paddingLeft: '8px' }}>
                Projects
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      window.location.hash = '#projects';
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.825rem' }}>{p.title}</div>
                      <div style={{ fontSize: '0.72rem', color: '#3b82f6' }}>{p.subtitle}</div>
                    </div>
                    <span className="badge" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                      {p.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
