// Home.js
"use client"
import React, { useState } from 'react';
import './style.css';
import Link from 'next/link';

function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault();
    
    if (!longUrl.trim()) {
      alert('Please enter a URL to shorten');
      return;
    }

    // Validate URL format
    try {
      new URL(longUrl);
    } catch (err) {
      alert('Please enter a valid URL (include http:// or https://)');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const baseUrl = 'short.li';
      const generatedAlias = customAlias.trim() || generateRandomAlias();
      const newShortUrl = `${baseUrl}/${generatedAlias}`;
      
      setShortUrl(newShortUrl);
      setIsLoading(false);
      
      // Reset form but keep the long URL
      setCustomAlias('');
    }, 1000);
  };

  const generateRandomAlias = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl)
      .then(() => {
        alert('Short link copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const resetForm = () => {
    setLongUrl('');
    setShortUrl('');
    setCustomAlias('');
  };

  return (
    <div className="home-app">
      <div className="home-container">
        {/* Header */}
        <header className="home-header">
          <div className="home-logo">
            <span className="logo-icon">🔗</span>
            <h1 className="logo-text">ShortLink</h1>
          </div>
          <p className="tagline">The simplest way to shorten URLs</p>
        </header>

        <main className="home-content">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h2 className="hero-title">
                Shorten Links <span className="highlight">Instantly</span>
              </h2>
              <p className="hero-subtitle">
                Paste your long URL below and get a short, shareable link in seconds
              </p>
            </div>
          </section>

          {/* URL Shortener Form */}
          <section className="shortener-section">
            <div className="shortener-card">
              <form onSubmit={handleShorten} className="shortener-form">
                <div className="form-group">
                  <div className="input-with-icon">
                    <span className="input-icon">🌐</span>
                    <input
                      type="url"
                      value={longUrl}
                      onChange={(e) => setLongUrl(e.target.value)}
                      placeholder="Paste your long URL here (e.g., https://example.com/very-long-path)"
                      className="url-input"
                      required
                    />
                  </div>
                </div>

                {/* Advanced Options */}
                <div className="advanced-toggle" onClick={() => setShowAdvanced(!showAdvanced)}>
                  <span className="toggle-icon">{showAdvanced ? '▼' : '▶'}</span>
                  <span className="toggle-text">Advanced Options</span>
                </div>

                {showAdvanced && (
                  <div className="advanced-options">
                    <div className="form-group">
                      <label className="option-label">
                        <span className="label-icon">✏️</span>
                        Custom Alias (Optional)
                      </label>
                      <div className="input-with-prefix">
                        <span className="prefix">short.li/</span>
                        <input
                          type="text"
                          value={customAlias}
                          onChange={(e) => setCustomAlias(e.target.value)}
                          placeholder="your-custom-alias"
                          className="alias-input"
                          pattern="[a-zA-Z0-9_-]+"
                          title="Only letters, numbers, hyphens, and underscores"
                        />
                      </div>
                      <p className="hint-text">Leave blank for a random short code</p>
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="shorten-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner"></span>
                        Shortening...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">⚡</span>
                        Shorten URL
                      </>
                    )}
                  </button>
                  <button 
                    type="button" 
                    className="reset-btn"
                    onClick={resetForm}
                  >
                    <span className="btn-icon">🔄</span>
                    Reset
                  </button>
                </div>
              </form>

              {/* Result Display */}
              {shortUrl && (
                <div className="result-section">
                  <div className="success-message">
                    <span className="success-icon">✅</span>
                    <span>Your short link is ready!</span>
                  </div>
                  
                  <div className="result-card">
                    <div className="original-url">
                      <span className="label">Original:</span>
                      <span className="url">{longUrl}</span>
                    </div>
                    
                    <div className="short-url-display">
                      <div className="short-url-info">
                        <span className="label">Short Link:</span>
                        <div className="short-url-container">
                          <span className="short-url">{shortUrl}</span>
                          <div className="url-actions">
                            <button 
                              onClick={copyToClipboard}
                              className="copy-btn"
                              title="Copy to clipboard"
                            >
                              <span className="action-icon">📋</span>
                              Copy
                            </button>
                            <Link 
                              href={`https://${shortUrl}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="test-btn"
                              title="Test the link"
                            >
                              <span className="action-icon">↗️</span>
                              Test
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="share-section">
                      <p className="share-label">Share your short link:</p>
                      <div className="share-buttons">
                        <button className="share-btn twitter">
                          <span className="share-icon">🐦</span>
                          Twitter
                        </button>
                        <button className="share-btn facebook">
                          <span className="share-icon">📘</span>
                          Facebook
                        </button>
                        <button className="share-btn whatsapp">
                          <span className="share-icon">💬</span>
                          WhatsApp
                        </button>
                        <button className="share-btn email">
                          <span className="share-icon">📧</span>
                          Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats Preview */}
              <div className="stats-preview">
                <div className="stat-item">
                  <div className="stat-icon">🚀</div>
                  <div className="stat-text">
                    <span className="stat-number">Instant</span>
                    <span className="stat-label">Shortening</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🔒</div>
                  <div className="stat-text">
                    <span className="stat-number">Secure</span>
                    <span className="stat-label">Links</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-text">
                    <span className="stat-number">Custom</span>
                    <span className="stat-label">Aliases</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h3 className="section-title">Why Use ShortLink?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Lightning Fast</h4>
                <p>Get your short link instantly with our optimized shortening engine.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h4>100% Secure</h4>
                <p>All links are HTTPS secured and protected against malware.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🆓</div>
                <h4>Completely Free</h4>
                <p>No limits, no registration required. Use it as much as you want.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h4>Mobile Friendly</h4>
                <p>Works perfectly on all devices - desktop, tablet, or mobile.</p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="how-it-works">
            <h3 className="section-title">Shorten in 3 Simple Steps</h3>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Paste Your URL</h4>
                <p>Copy any long URL from your browser</p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Click Shorten</h4>
                <p>Well generate a compact version instantly</p>
              </div>
              <div className="step-arrow">→</div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Share & Use</h4>
                <p>Copy your new short link and share anywhere</p>
              </div>
            </div>
          </section>

          {/* Popular Use Cases */}
          <section className="use-cases">
            <h3 className="section-title">Perfect For</h3>
            <div className="cases-grid">
              <div className="case-card">
                <div className="case-icon">📱</div>
                <h4>Social Media</h4>
                <p>Share clean links on Twitter, Instagram, and Facebook</p>
              </div>
              <div className="case-card">
                <div className="case-icon">📧</div>
                <h4>Email Marketing</h4>
                <p>Clean up long URLs in newsletters and campaigns</p>
              </div>
              <div className="case-card">
                <div className="case-icon">📊</div>
                <h4>Presentations</h4>
                <p>Make slides cleaner with short, memorable links</p>
              </div>
              <div className="case-card">
                <div className="case-icon">📝</div>
                <h4>Documents</h4>
                <p>Keep your PDFs and documents looking professional</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Shorten Your First Link?</h3>
              <p className="cta-subtitle">Try it now - no sign up required!</p>
              <button 
                onClick={() => document.querySelector('.url-input').focus()}
                className="cta-btn"
              >
                <span className="btn-icon">🚀</span>
                Start Shortening
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="home-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-icon">🔗</span>
              <span className="footer-text">ShortLink</span>
            </div>
            <p className="footer-tagline">Making long URLs short and sweet since 2024</p>
            <div className="footer-links">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/privacy" className="footer-link">Privacy</Link>
              <Link href="/terms" className="footer-link">Terms</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;