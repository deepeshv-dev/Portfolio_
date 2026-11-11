import { externalLinkProps, siteConfig } from '../../config/site.js'

function MailIcon() {
  return (
    <svg
      className="contact-card__icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="contact-card__icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg className="contact-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  )
}

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="section-header">
        <span className="section-label">Connect</span>
        <h2 id="contact-heading" className="section-title">Get in Touch</h2>
        <div className="section-title-line" aria-hidden="true"></div>
      </div>

      <div className="contact-grid">
        {/* Left side: Context message */}
        <div className="contact-info">
          <p className="contact-intro">
            I am actively seeking <strong>Software Developer Intern</strong> and <strong>Full-Stack Developer Intern</strong> opportunities.
            If you have an open position, feedback on my projects, or would like to connect, please feel free to reach out via email or LinkedIn.
          </p>

          <div className="contact-meta-card">
            <span className="contact-meta-card__badge">Availability</span>
            <p className="contact-meta-card__text">
              Open to internship roles and technical discussions.
            </p>
          </div>
        </div>

        {/* Right side: Direct Verified Contact Cards */}
        <div className="contact-cards-col">
          {/* Email Card */}
          <a
            className="contact-action-card"
            href={`mailto:${siteConfig.email}`}
            aria-label={`Send email to ${siteConfig.email}`}
          >
            <div className="contact-action-card__icon-wrap">
              <MailIcon />
            </div>
            <div className="contact-action-card__details">
              <span className="contact-action-card__label">Email</span>
              <span className="contact-action-card__value">{siteConfig.email}</span>
            </div>
            <ArrowUpRightIcon />
          </a>

          {/* LinkedIn Card */}
          <a
            className="contact-action-card"
            href={siteConfig.linkedIn}
            {...externalLinkProps()}
            aria-label="Visit Deepesh V LinkedIn profile"
          >
            <div className="contact-action-card__icon-wrap">
              <LinkedInIcon />
            </div>
            <div className="contact-action-card__details">
              <span className="contact-action-card__label">LinkedIn</span>
              <span className="contact-action-card__value">linkedin.com/in/deepesh-v-8b472732b</span>
            </div>
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
