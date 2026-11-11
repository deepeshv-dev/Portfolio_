import { useState } from 'react'
import { externalLinkProps, siteConfig } from '../../config/site.js'

function LinkedInIcon() {
  return (
    <svg className="btn__icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ArrowDownIcon() {
  return (
    <svg className="btn__icon" aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 4v12m0 0l-5-5m5 5l5-5" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="btn__icon" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="btn__icon" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="section section--hero" aria-labelledby="hero-heading">
      <div className="hero__inner">

        {/* ── Text Content ── */}
        <div className="hero__content">
          <div className="hero__status-badge">
            <span className="hero__status-dot" aria-hidden="true"></span>
            <span>Available for Software Developer Internships</span>
          </div>

          <h1 id="hero-heading" className="hero__heading">
            Hi, I&rsquo;m <span className="hero__heading-name">Deepesh V</span>
          </h1>

          <p className="hero__role">
            Computer Science Engineering Student <span className="hero__role-separator">|</span> Aspiring Software Developer
          </p>

          <p className="hero__intro">
            I&rsquo;m a third-year Computer Science Engineering student interested in software development,
            web technologies, databases, and building practical applications. I&rsquo;m looking for internship
            opportunities to apply my current skills, learn from experienced developers, and contribute to real-world projects.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
              <ArrowDownIcon />
            </a>

            <a className="btn btn--secondary" href="#contact">
              <MailIcon />
              Contact Me
            </a>

            <a
              className="btn btn--ghost"
              href={siteConfig.linkedIn}
              {...externalLinkProps()}
              aria-label="Deepesh V on LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </a>

            <a
              className="btn btn--ghost"
              href={siteConfig.resumePath}
              download="Deepesh_V_Resume.pdf"
              type="application/pdf"
              aria-label="Download Deepesh V Resume"
            >
              <DownloadIcon />
              Resume
            </a>
          </div>
        </div>

        {/* ── Profile Image ── */}
        <div className="hero__photo-col">
          <div className="hero__photo-wrap">
            {!imgError ? (
              <img
                className="hero__photo"
                src="/profile.jpg"
                alt="Deepesh V"
                width="220"
                height="220"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero__photo-placeholder" aria-label="Deepesh V initials avatar">
                <span className="hero__photo-initials">DV</span>
                <span className="hero__photo-placeholder-caption">Deepesh V</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
