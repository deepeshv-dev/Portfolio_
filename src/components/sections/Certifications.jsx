import { certifications } from '../../data/portfolio.js'

function BadgeCheckIcon() {
  return (
    <svg
      className="cert-card__icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-heading">
      <div className="section-header">
        <span className="section-label">Verified Learning</span>
        <h2 id="certifications-heading" className="section-title">Certifications</h2>
        <div className="section-title-line" aria-hidden="true"></div>
      </div>
      <p className="section-subtitle">
        Coursework and skill certifications completed to reinforce theoretical knowledge and practical development practices.
      </p>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.name} className="cert-card">
            <div className="cert-card__icon-wrap">
              <BadgeCheckIcon />
            </div>
            <div className="cert-card__details">
              <h3 className="cert-card__title">{cert.name}</h3>
              {cert.provider && (
                <p className="cert-card__provider">
                  <span className="cert-card__provider-label">Provider:</span> {cert.provider}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
