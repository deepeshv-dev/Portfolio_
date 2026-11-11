/**
 * ─────────────────────────────────────────────
 *  SITE CONFIGURATION  —  edit this file only
 * ─────────────────────────────────────────────
 *  github  : paste your full GitHub profile URL here, e.g.
 *            'https://github.com/yourusername'
 *            Leave as '' to hide GitHub links everywhere.
 */
export const siteConfig = {
  name: 'Deepesh V',
  role: 'Computer Science Engineering Student | Aspiring Software Developer',
  targetRole: 'Software Developer Intern & Full-Stack Developer Intern',
  email: 'dkvijay0309@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/deepesh-v-8b472732b',
  /** Leave as '' to hide GitHub links everywhere unless user provides their URL */
  github: '',
  /** Vite serves files from public/ — default path works as-is. */
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
}

export function externalLinkProps() {
  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
}
