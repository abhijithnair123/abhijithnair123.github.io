'use client';

import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'cyber' | 'sunset' | 'matrix'>('cyber');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'cyber' | 'sunset' | 'matrix' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'cyber');
    }
  }, []);

  const handleThemeChange = (newTheme: 'cyber' | 'sunset' | 'matrix') => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const themes = [
    { id: 'cyber', label: 'Cyber Aurora', color: '#00f5ff', secondary: '#8b5cf6' },
    { id: 'sunset', label: 'Sunset Fusion', color: '#fb7185', secondary: '#f59e0b' },
    { id: 'matrix', label: 'Matrix Emerald', color: '#10b981', secondary: '#06b6d4' },
  ] as const;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.04)', padding: '4px 6px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => handleThemeChange(t.id)}
          title={`Switch to ${t.label} Theme`}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${t.color}, ${t.secondary})`,
            border: theme === t.id ? '2px solid #ffffff' : '2px solid transparent',
            cursor: 'pointer',
            boxShadow: theme === t.id ? `0 0 12px ${t.color}` : 'none',
            transform: theme === t.id ? 'scale(1.15)' : 'scale(0.9)',
            transition: 'all 0.2s ease',
          }}
          aria-label={t.label}
        />
      ))}
    </div>
  );
};
