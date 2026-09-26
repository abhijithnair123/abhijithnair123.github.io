'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await fetch('https://formcarry.com/s/PuvEIavYZPJ', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg('Failed to send message. Please email directly at contact@abhijithhnair.in');
      }
    } catch {
      setErrorMsg('Network error. Please email directly at contact@abhijithhnair.in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '70px 0 100px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Dark Floating Contact Card */}
        <div className="contact-dark-card">
          <div className="contact-grid">
            {/* Left Column: Intro & Direct Links */}
            <div className="contact-info-col">
              <div
                style={{
                  color: '#ff5722',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                GET IN TOUCH
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '18px',
                }}
              >
                Let&apos;s build
                <br />
                something great
              </h2>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: '#94a3b8',
                  maxWidth: '440px',
                  marginBottom: '32px',
                }}
              >
                Available for Senior Software Developer, Full-Stack Lead, and Technical Architecture roles. Whether you need Next.js modernization, high-concurrency systems, or a dedicated squad lead — let&apos;s talk.
              </p>

              {/* Direct Channel Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="mailto:contact@abhijithhnair.in"
                  className="contact-channel-pill"
                >
                  <Mail size={16} color="#ff5722" />
                  <span>contact@abhijithhnair.in</span>
                </a>

                <a
                  href="tel:+916282801344"
                  className="contact-channel-pill"
                >
                  <Phone size={16} color="#ff5722" />
                  <span>+91 6282801344</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhijith-h-nair-394606130/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-pill"
                >
                  <LinkedinIcon size={16} color="#ff5722" />
                  <span>linkedin.com/in/abhijith-h-nair</span>
                </a>

                <a
                  href="https://github.com/abhijithnair123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-pill"
                >
                  <GithubIcon size={16} color="#ff5722" />
                  <span>github.com/abhijithnair123</span>
                </a>

                <div className="contact-channel-pill" style={{ cursor: 'default' }}>
                  <MapPin size={16} color="#94a3b8" />
                  <span>Thiruvananthapuram, Kerala, India (Remote)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="contact-form-col">
              {submitted ? (
                <div
                  style={{
                    height: '100%',
                    minHeight: '340px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    padding: '30px',
                    border: '1px solid rgba(255, 87, 34, 0.3)',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(255, 87, 34, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <CheckCircle2 size={32} color="#ff5722" />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '340px' }}>
                    Thank you for reaching out. Abhijith will get back to you directly shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {errorMsg && (
                    <div
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: '#fca5a5',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Row: Name and Email */}
                  <div className="form-double-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                      <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 500 }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="contact-input"
                        suppressHydrationWarning
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                      <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 500 }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="contact-input"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 500 }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Senior Full-Stack Developer Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="contact-input"
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Message */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 500 }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your role, team, or project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="contact-input"
                      suppressHydrationWarning
                      style={{ resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="submit-btn"
                    suppressHydrationWarning
                  >
                    <span>{loading ? 'Sending...' : 'Send message'}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
