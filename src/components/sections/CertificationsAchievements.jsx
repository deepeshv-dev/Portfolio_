import {
  achievements,
  certificationProviders,
  certifications,
} from '../../data/portfolio.js'

function CertificationsAchievements() {
  return (
    <section
      id="certifications"
      className="section"
      aria-labelledby="ca-heading"
    >
      <span className="section-label">Credentials</span>
      <h2 id="ca-heading" className="section-title">
        Certifications &amp; Achievements
      </h2>
      <p className="section-subtitle">
        Self-paced technical coursework and competitive recognitions that support my foundational skills.
      </p>

      <div id="achievements" className="certs-achievements-grid">
        {/* Left Column: Certifications */}
        <div className="ca-block">
          <h3 className="ca-block__title">Technical Certifications</h3>
          <ul className="cert-chip-list" aria-label="Certifications list">
            {certifications.map((item) => (
              <li key={item}>
                <span className="cert-chip">{item}</span>
              </li>
            ))}
          </ul>
          <p className="cert-providers">
            <strong>Providers:</strong> {certificationProviders}.
          </p>
        </div>

        {/* Right Column: Achievements */}
        <div className="ca-block">
          <h3 className="ca-block__title">Recognitions &amp; Hackathons</h3>
          <ul className="achievement-list">
            {achievements.map((item) => (
              <li key={item.title} className="achievement-item">
                <h4 className="achievement-item__title">{item.title}</h4>
                <ul className="achievement-item__details">
                  {item.details.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CertificationsAchievements
