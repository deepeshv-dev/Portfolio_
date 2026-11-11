function AcademicCapIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="section-header">
        <span className="section-label">Academics</span>
        <h2 id="education-heading" className="section-title">Education</h2>
        <div className="section-title-line" aria-hidden="true"></div>
      </div>

      <div className="education-container">
        <article className="education-card">
          <div className="education-card__icon" aria-hidden="true">
            <AcademicCapIcon />
          </div>

          <div className="education-card__content">
            <div className="education-card__header">
              <h3 className="education-card__institution">
                Rajalakshmi Institute of Technology
              </h3>
              <span className="education-card__badge">Undergraduate</span>
            </div>

            <p className="education-card__degree">
              B.E. Computer Science Engineering
            </p>

            <div className="education-card__status-row">
              <span className="education-card__status-dot" aria-hidden="true"></span>
              <span className="education-card__status-text">Third-Year Student</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education
