'use client';

import React, { useState } from 'react';
import { CODE_SNIPPETS } from '@/data/portfolioData';
import { Code2, Copy, Check, Zap } from 'lucide-react';

export const CodePlayground: React.FC = () => {
  const [activeSnippetId, setActiveSnippetId] = useState(CODE_SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);

  const currentSnippet = CODE_SNIPPETS.find((s) => s.id === activeSnippetId) || CODE_SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            <Code2 size={14} />
            <span>CODE LAB</span>
          </div>
          <h2 className="section-title">
            Architectural Snippets &amp; Implementation Patterns
          </h2>
          <p className="section-subtitle">
            Clean, modular, and production-tested patterns demonstrating Next.js SSR caching, granular tag revalidation, and multi-rail payment integrations.
          </p>
        </div>

        {/* Snippet Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {CODE_SNIPPETS.map((snippet) => {
            const isSelected = snippet.id === activeSnippetId;
            return (
              <button
                key={snippet.id}
                onClick={() => setActiveSnippetId(snippet.id)}
                className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '8px 16px',
                  fontSize: '0.825rem',
                  borderRadius: '8px',
                }}
              >
                <span>{snippet.category}: {snippet.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Code Frame */}
        <div
          className="glass-card"
          style={{
            padding: 0,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#0c0e15',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', opacity: 0.8 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', opacity: 0.8 }} />
              </div>
              <span className="mono-font" style={{ fontSize: '0.825rem', color: '#f8fafc', fontWeight: 600 }}>
                {currentSnippet.title}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge mono-font" style={{ fontSize: '0.7rem', padding: '2px 6px' }}>
                {currentSnippet.language.toUpperCase()}
              </span>
              <button
                onClick={handleCopy}
                className="btn btn-secondary"
                style={{ padding: '5px 10px', fontSize: '0.75rem', gap: '4px' }}
                title="Copy code"
              >
                {copied ? (
                  <>
                    <Check size={13} color="#10b981" />
                    <span style={{ color: '#10b981' }}>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '20px', background: '#080a0f' }}>
            <pre
              className="mono-font"
              style={{
                fontSize: '0.825rem',
                lineHeight: 1.65,
                color: '#e2e8f0',
                overflowX: 'auto',
                maxHeight: '440px',
              }}
            >
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          {/* Takeaway */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Zap size={16} color="#3b82f6" style={{ flexShrink: 0 }} />
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60a5fa', marginRight: '6px' }}>
                ENGINEERING TAKEAWAY:
              </span>
              <span style={{ fontSize: '0.825rem', color: '#94a3b8' }}>
                {currentSnippet.takeaway}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
