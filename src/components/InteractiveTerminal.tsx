'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES, TERMINAL_COMMANDS } from '@/data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, Award } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHireModal: () => void;
}

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<TerminalProps> = ({ isOpen, onClose, onOpenHireModal }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome-msg',
      command: 'welcome',
      output: (
        <div style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
          <div style={{ color: '#00f5ff', fontWeight: 800, fontSize: '1.05rem', marginBottom: '6px' }}>
            ⚡ Abhijith H Nair — Senior Fullstack Developer Shell v3.0
          </div>
          <div>Next.js 14/15 • React.js • TypeScript • Node.js • Cloud Architecture</div>
          <div style={{ marginTop: '8px' }}>
            Type <span style={{ color: '#00f5ff', fontWeight: 700 }}>help</span> or <span style={{ color: '#00f5ff', fontWeight: 700 }}>experience</span> to inspect career milestones.
          </div>
        </div>
      ),
    },
  ]);

  const [cmdHistoryIndex, setCmdHistoryIndex] = useState<number>(-1);
  const [submittedCommands, setSubmittedCommands] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [mounted, setMounted] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.classList.remove('modal-open');
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen || !mounted) return null;

  const triggerSudoHire = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f5ff', '#8b5cf6', '#10b981', '#f59e0b'],
    });
    onOpenHireModal();
  };

  const handleCommandExecution = (rawCmd: string) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    setSubmittedCommands((prev) => [...prev, rawCmd]);
    setCmdHistoryIndex(-1);

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', marginTop: '6px' }}>
            {TERMINAL_COMMANDS.map((c) => (
              <div key={c.command} style={{ padding: '6px 10px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px' }}>
                <span style={{ color: '#00f5ff', fontWeight: 700 }}>{c.command}</span>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{c.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
      case 'career':
        outputNode = (
          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px 14px', borderRadius: '8px', borderLeft: '3px solid #00f5ff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f8fafc', fontWeight: 700, flexWrap: 'wrap' }}>
                  <span>{exp.role} @ <span style={{ color: '#00f5ff' }}>{exp.company}</span></span>
                  <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{exp.period}</span>
                </div>
                {exp.teamSize && <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '2px' }}>👥 Team: {exp.teamSize}</div>}
                <div style={{ fontSize: '0.825rem', color: '#cbd5e1', marginTop: '6px' }}>{exp.description}</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                  {exp.keyWins.map((w) => (
                    <span key={w.label} style={{ fontSize: '0.72rem', background: 'rgba(0, 245, 255, 0.1)', color: '#00f5ff', padding: '2px 6px', borderRadius: '4px' }}>
                      {w.metric} {w.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {PROJECTS.map((p) => (
              <div key={p.id} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.95rem' }}>{p.title}</div>
                <div style={{ color: '#00f5ff', fontSize: '0.78rem' }}>{p.subtitle}</div>
                <div style={{ color: '#cbd5e1', fontSize: '0.82rem', margin: '4px 0' }}>{p.description}</div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem', color: '#94a3b8', flexWrap: 'wrap' }}>
                  {p.technologies.slice(0, 6).map((t) => (
                    <span key={t} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2px 6px', borderRadius: '4px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div style={{ marginTop: '8px' }}>
            <div style={{ color: '#38bdf8', fontWeight: 700, marginBottom: '6px' }}>🚀 Technical Toolkit & Experience</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
              {SKILLS.map((skill) => (
                <div key={skill.name} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px 12px', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: '#f8fafc', fontWeight: 600 }}>{skill.name}</span>
                    <span style={{ color: '#00f5ff' }}>{skill.level}%</span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{skill.yearsOfExp}+ Yrs Production Exp</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'metrics':
        outputNode = (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginTop: '8px' }}>
            {PERSONAL_INFO.stats.map((s) => (
              <div key={s.label} style={{ background: 'rgba(0, 245, 255, 0.08)', border: '1px solid rgba(0, 245, 255, 0.25)', padding: '10px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f5ff' }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{s.label}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: '#00f5ff', textDecoration: 'underline' }}>{PERSONAL_INFO.email}</a></div>
            <div>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ color: '#00f5ff', textDecoration: 'underline' }}>{PERSONAL_INFO.github}</a></div>
            <div>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: '#00f5ff', textDecoration: 'underline' }}>{PERSONAL_INFO.linkedin}</a></div>
            <div>🌐 Portfolio: <a href={PERSONAL_INFO.website} target="_blank" rel="noreferrer" style={{ color: '#00f5ff', textDecoration: 'underline' }}>{PERSONAL_INFO.website}</a></div>
          </div>
        );
        break;

      case 'hire':
        outputNode = (
          <div style={{ marginTop: '8px' }}>
            <div style={{ color: '#10b981', fontWeight: 700 }}>Opening Senior Engagement &amp; Hiring Modal...</div>
          </div>
        );
        onOpenHireModal();
        break;

      case 'sudo hire':
        outputNode = (
          <div style={{ marginTop: '8px', padding: '12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} />
              VIP PRIORITY FAST-TRACK INTERVIEW CHANNEL GRANTED!
            </div>
            <div style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '4px' }}>
              Connecting with Abhijith H Nair for Senior Fullstack Developer roles.
            </div>
          </div>
        );
        triggerSudoHire();
        break;

      case 'cat resume.md':
      case 'resume':
        outputNode = (
          <div style={{ marginTop: '8px', background: 'rgba(0, 0, 0, 0.5)', padding: '14px', borderRadius: '8px', fontSize: '0.8rem', color: '#cbd5e1', maxHeight: '260px', overflowY: 'auto' }}>
            <div style={{ fontWeight: 800, color: '#f8fafc', fontSize: '1.05rem' }}>{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</div>
            <div>{PERSONAL_INFO.email} • {PERSONAL_INFO.location} • {PERSONAL_INFO.github}</div>
            <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
            <div style={{ fontWeight: 700, color: '#00f5ff' }}>EXPERIENCE</div>
            <div>• Senior Full Stack Developer @ Way.com (July 2026 – Present) — Carwash SaaS, Angular, Node.js, Microservices</div>
            <div>• Senior Software Developer &amp; Lead @ IBIL Solutions (Feb 2020 – July 2026) — Directed 12 developers, Next.js architecture, +25% speed boost</div>
            <div>• WordPress &amp; Frontend Developer @ Cankado India (Aug 2019 – Jan 2020) — Digital health UIs, Stripe integrations</div>
            <div style={{ marginTop: '10px' }}>
              <a href="/abhijith.pdf" download="Abhijith_H_Nair_Resume.pdf" style={{ color: '#ff5722', textDecoration: 'underline', fontWeight: 600 }}>
                ↓ Download Full PDF Resume (abhijith.pdf)
              </a>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <div style={{ color: '#f43f5e' }}>
            Command not recognized: &quot;{rawCmd}&quot;. Type <span style={{ color: '#00f5ff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleCommandExecution('help')}>help</span> for list of valid commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        command: rawCmd,
        output: outputNode,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandExecution(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (submittedCommands.length > 0) {
        const nextIndex = cmdHistoryIndex === -1 ? submittedCommands.length - 1 : Math.max(0, cmdHistoryIndex - 1);
        setCmdHistoryIndex(nextIndex);
        setInputVal(submittedCommands[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistoryIndex !== -1) {
        const nextIndex = cmdHistoryIndex + 1;
        if (nextIndex >= submittedCommands.length) {
          setCmdHistoryIndex(-1);
          setInputVal('');
        } else {
          setCmdHistoryIndex(nextIndex);
          setInputVal(submittedCommands[nextIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = TERMINAL_COMMANDS.find((c) => c.command.startsWith(inputVal.trim()));
      if (match) {
        setInputVal(match.command);
      }
    }
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content mono-font"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isMaximized ? '96vw' : '820px',
          height: isMaximized ? '92vh' : '580px',
          maxHeight: '92vh',
          background: '#050914',
          border: '1px solid rgba(0, 245, 255, 0.4)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 50px rgba(0, 245, 255, 0.2)',
        }}
      >
        {/* Terminal Title Bar */}
        <div
          style={{
            background: 'rgba(10, 18, 38, 0.95)',
            borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f43f5e', cursor: 'pointer' }} onClick={onClose} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fbbf24', cursor: 'pointer' }} onClick={() => setIsMaximized(!isMaximized)} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', cursor: 'pointer' }} onClick={triggerSudoHire} />
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TerminalIcon size={14} color="#00f5ff" />
              abhijith@lead-mac: ~/career-portfolio (zsh)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              title="Toggle Size"
            >
              {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              title="Close Terminal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Output Area */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontSize: '0.875rem',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {item.command !== 'welcome' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8' }}>
                  <span style={{ color: '#10b981' }}>➜</span>
                  <span style={{ color: '#a78bfa' }}>senior-dev</span>
                  <span style={{ color: '#64748b' }}>git:(main)</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Suggestions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Quick:</span>
          {['experience', 'projects', 'skills', 'metrics', 'sudo hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandExecution(cmd)}
              style={{
                background: cmd === 'sudo hire' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: cmd === 'sudo hire' ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                color: cmd === 'sudo hire' ? '#10b981' : '#cbd5e1',
                padding: '3px 8px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                cursor: 'pointer',
              }}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div
          style={{
            background: 'rgba(7, 12, 26, 0.95)',
            borderTop: '1px solid rgba(0, 245, 255, 0.15)',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
          }}
        >
          <span style={{ color: '#10b981', fontWeight: 800 }}>➜</span>
          <span style={{ color: '#a78bfa', fontSize: '0.85rem' }}>senior-dev</span>
          <span style={{ color: '#64748b', fontSize: '0.8rem' }}>git:(main)</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command (e.g. experience, projects, skills, sudo hire)..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              outline: 'none',
            }}
          />
          <button
            onClick={() => handleCommandExecution(inputVal)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00f5ff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Execute"
          >
            <CornerDownLeft size={16} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
