import { skillCategories } from '../../data/portfolio.js'

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="section-header">
        <span className="section-label">Capabilities</span>
        <h2 id="skills-heading" className="section-title">Technical Skills</h2>
        <div className="section-title-line" aria-hidden="true"></div>
      </div>
      <p className="section-subtitle">
        Languages, libraries, databases, and development tools I actively use in coursework and projects.
        Organized by domain without inflated ratings or arbitrary percentages.
      </p>

      <div className="skills-grid" role="list">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-card" role="listitem">
            <div className="skill-card__header">
              <span className="skill-card__indicator" aria-hidden="true"></span>
              <h3 className="skill-card__title">{category.title}</h3>
            </div>
            <ul className="skill-tag-list" aria-label={`${category.title} skills`}>
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="skill-tag">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
