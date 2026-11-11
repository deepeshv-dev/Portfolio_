import { externalLinkProps } from '../../config/site.js'
import { projects } from '../../data/portfolio.js'

function ExternalIcon() {
  return (
    <svg
      className="btn__icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      className="btn__icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg className="project-contribution__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
      <path d="M17 4c0 1.657-3.134 3-7 3S3 5.657 3 4s3.134-3 7-3 7 1.343 7 3z" />
    </svg>
  )
}

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2 id="projects-heading" className="section-title">Projects</h2>
        <div className="section-title-line" aria-hidden="true"></div>
      </div>
      <p className="section-subtitle">
        Hands-on full-stack applications built through student team collaborations and hackathon participation.
        Each project highlights the application purpose, tech stack, and my specific contribution.
      </p>

      <div className="projects-grid">
        {projects.map((project) => {
          const hasLinks = Boolean(project.github?.trim() || project.demo?.trim())

          return (
            <article key={project.id} className="project-card">
              <div className="project-card__header">
                <div className="project-card__badges">
                  {project.badge && (
                    <span className="project-badge">
                      {project.badge}
                    </span>
                  )}
                  {project.event && (
                    <span className="project-event-tag">{project.event}</span>
                  )}
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                {project.subtitle && (
                  <p className="project-card__subtitle">{project.subtitle}</p>
                )}
              </div>

              {/* Stack tags */}
              <div className="project-card__stack-wrap">
                <span className="project-card__stack-label">Tech Stack:</span>
                <ul className="project-stack" aria-label={`Tech stack for ${project.title}`}>
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="project-stack__tag">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <p className="project-card__desc">{project.description}</p>

              {/* Core Features */}
              <div className="project-features-block">
                <p className="project-features-heading">Key Functionality</p>
                <ul className="project-feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="project-feature-bullet" aria-hidden="true"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dedicated Contribution Callout */}
              {project.contribution && (
                <div className="project-contribution">
                  <div className="project-contribution__header">
                    <DatabaseIcon />
                    <span className="project-contribution__title">My Contribution</span>
                  </div>
                  <p className="project-contribution__text">{project.contribution}</p>
                </div>
              )}

              {/* Links - rendered only when genuine URLs exist */}
              {hasLinks && (
                <div className="project-card__links">
                  {project.github && (
                    <a
                      className="btn btn--secondary"
                      href={project.github}
                      {...externalLinkProps()}
                      aria-label={`View source code for ${project.title}`}
                    >
                      <GitHubIcon />
                      Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      className="btn btn--primary"
                      href={project.demo}
                      {...externalLinkProps()}
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      <ExternalIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
