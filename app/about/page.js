// About.js
import React from "react";
import "./About.css";
import Link from "next/link";

function About() {
  return (
    <div className="about-app">
      <div className="about-container">
        {/* Header */}
        <header className="about-header">
          <div className="about-logo">
            <span className="logo-icon">🔗</span>
            <h1 className="logo-text">ShortLinker</h1>
          </div>
          <p className="tagline">Making links shorter, connections stronger</p>
        </header>

        <main className="about-content">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h2 className="hero-title">
                About <span className="highlight">ShortLinker</span>
              </h2>
              <p className="hero-subtitle">
                We are on a mission to simplify the web, one link at a time
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Links Shortened</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mission-section">
            <div className="mission-content">
              <h3 className="section-title">Our Mission</h3>
            </div>
            <div className="mission-visual">
              <div className="link-visualization">
                <div className="long-url">
                  https://www.verylongwebsiteurl.com/articles/how-to-make-urls-shorter
                </div>
                <div className="arrow">→</div>
                <div className="short-url">shrtly.vercel.app/abc123</div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h3 className="section-title">Why Choose ShortLink?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Lightning Fast</h4>
                <p>
                  Instant URL shortening with sub-second response times for
                  optimal user experience.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h4>Secure & Private</h4>
                <p>
                  All links are encrypted and protected. We never share your
                  data with third parties.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Custom URLs</h4>
                <p>
                  Create memorable custom short links that reflect your brand or
                  message.
                </p>
              </div>

              <div
                className="feature-card"
                style={{
                  gridColumnStart: "2",
                }}
              >
                <div className="feature-icon">🌐</div>
                <h4>Global Reach</h4>
                <p>
                  Our servers are distributed worldwide for fast access from any
                  location.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="how-it-works">
            <h3 className="section-title">How It Works</h3>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Paste Your Link</h4>
                  <p>Copy and paste any long URL into our shortening tool</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Customize (Optional)</h4>
                  <p>Add a custom alias or choose your preferred short link</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Shorten & Share</h4>
                  <p>Get your compact URL and share it anywhere</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Track Performance</h4>
                  <p>
                    Monitor clicks and engagement with our analytics dashboard
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Simplify Your Links?</h3>
              <p className="cta-subtitle">
                Join thousands of users who trust ShortLink for their URL
                shortening needs
              </p>
              <div className="cta-buttons">
                <Link href="/generate">
                  <button className="cta-btn primary">
                    <span className="btn-icon">🚀</span>
                    Start Shortening Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="about-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-icon">🔗</span>
              <span className="footer-text">ShortLinker</span>
            </div>
            <p className="footer-tagline">
              © 2026 ShortLink. Making the web more accessible, one short link
              at a time.
            </p>
            <div className="footer-links ">
              <Link
                href="/https://www.instagram.com/saadsaifsheikh/"
                target="_blank"
                className="footer-link"
              >
                <i className="ri-instagram-line"></i> Instgram
              </Link>
              <Link
                href="/https://www.linkedin.com/in/muhammad-saad-saif-10b38a360/"
                target="_blank"
                className="footer-link"
              >
                <i className="ri-linkedin-box-fill"></i> Linkedin
              </Link>
              <Link
                href="/https://github.com/M-Saad-saif"
                target="_blank"
                className="footer-link"
              >
                <i className="ri-github-fill"></i> GitHub
              </Link>
              <Link
                href="/mailto:gcsaadsaif123@gmail.com"
                target="_blank"
                className="footer-link"
              >
                <i className="ri-mail-fill"></i> Mail
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default About;
