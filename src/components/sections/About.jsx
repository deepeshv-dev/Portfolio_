function About() {
  const highlights = [
    'Third-year Computer Science Engineering student at Rajalakshmi Institute of Technology, Chennai.',
    'Focused on software development, web technologies, backend APIs, and database engineering.',
    'Hands-on experience building full-stack academic and hackathon projects with React, Node.js, and Supabase.',
    'Continuous learner holding coursework certifications in DBMS, Algorithms, Agile, Jira, and Testing.',
    'Targeting Software Developer Intern and Full-Stack Developer Intern roles to contribute and grow.',
  ]

  const infoCards = [
    { label: 'Current Education', value: 'B.E. Computer Science Engineering' },
    { label: 'Institution', value: 'Rajalakshmi Institute of Technology, Chennai' },
    { label: 'Academic Standing', value: 'Third-Year Student' },
    { label: 'Target Roles', value: 'Software Developer / Full-Stack Intern' },
  ]

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="section-header">
        <span className="section-label">Background</span>
        <h2 id="about-heading" className="section-title">About Me</h2>
        <div className="section-title-line" aria-hidden="true"></div>
      </div>

      <div className="about__grid">
        {/* Left: authentic narrative + bullet points */}
        <div className="about__narrative">
          <div className="prose">
            <p>
              I&rsquo;m Deepesh V, a third-year Computer Science Engineering student at
              Rajalakshmi Institute of Technology in Chennai. My primary interest lies in
              software development, building practical web applications, and working with modern
              databases and backend services.
            </p>
            <p>
              Through academic coursework and team projects, I have developed a strong foundation in
              programming and full-stack development using technologies like React, Node.js, and Supabase.
              I enjoy understanding how systems connect—from structured relational schemas to clean REST APIs
              and responsive user interfaces.
            </p>
            <p>
              My goal is to gain practical industry experience, strengthen my engineering fundamentals,
              and build reliable software that delivers real value. I am eager to join a collaborative
              development team where I can contribute to meaningful projects while learning best practices
              from experienced developers.
            </p>
          </div>

          <div className="about__key-points">
            <h3 className="about__key-points-title">Highlights &amp; Focus Areas</h3>
            <ul className="about__highlight-list" aria-label="Key background highlights">
              {highlights.map((item) => (
                <li key={item} className="about__highlight-item">
                  <span className="about__highlight-bullet" aria-hidden="true" />
                  <p className="about__highlight-text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: info cards */}
        <div className="about__info-col">
          <div className="about__card-stack">
            {infoCards.map((card) => (
              <div key={card.label} className="about__info-card">
                <span className="about__info-label">{card.label}</span>
                <span className="about__info-value">{card.value}</span>
              </div>
            ))}
          </div>

          <div className="about__callout">
            <div className="about__callout-accent" aria-hidden="true"></div>
            <div>
              <p className="about__callout-heading">Career Objective</p>
              <p className="about__callout-text">
                To gain practical experience, improve my software development skills, build useful applications,
                and grow into a successful software developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
