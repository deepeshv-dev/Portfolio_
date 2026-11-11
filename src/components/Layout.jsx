import { useState, useEffect } from 'react'
import { externalLinkProps, siteConfig } from '../config/site.js'
import './Layout.css'

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Education',      href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

function MenuIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

const CURRENT_YEAR = new Date().getFullYear()

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const showGitHub = Boolean(siteConfig.github?.trim())

  function closeMenu() { setMenuOpen(false) }
  function toggleMenu() { setMenuOpen(o => !o) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeMenu() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      {/* ── Header ── */}
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="site-header__inner container">

          <div className="site-header__brand-row">
            <a className="site-logo" href="#home" onClick={closeMenu} aria-label="Deepesh V Portfolio Home">
              <span className="site-logo__name">{siteConfig.name}</span>
              <span className="site-logo__dot" aria-hidden="true">.</span>
            </a>

            <button
              type="button"
              className="site-nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={toggleMenu}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          <nav
            id="site-navigation"
            className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
            aria-label="Main navigation"
          >
            <ul className="site-nav__list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a className="site-nav__link" href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="site-nav__action-item">
                <a
                  className="site-nav__resume"
                  href={siteConfig.resumePath}
                  download="Deepesh_V_Resume.pdf"
                  type="application/pdf"
                  title="Download Resume PDF"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </header>

      {/* ── Main ── */}
      <main id="main-content" className="site-main">
        <div className="container">{children}</div>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__identity">
            <p className="site-footer__name">{siteConfig.name}</p>
            <p className="site-footer__role">{siteConfig.role}</p>
          </div>
          <ul className="site-footer__links" aria-label="Profile and contact links">
            <li><a href={`mailto:${siteConfig.email}`}>Email</a></li>
            <li><a href={siteConfig.linkedIn} {...externalLinkProps()}>LinkedIn</a></li>
            {showGitHub && (
              <li><a href={siteConfig.github} {...externalLinkProps()}>GitHub</a></li>
            )}
            <li>
              <a href={siteConfig.resumePath} download="Deepesh_V_Resume.pdf">Resume</a>
            </li>
          </ul>
          <hr className="site-footer__divider" />
          <div className="site-footer__bottom">
            <p className="site-footer__copy">
              &copy; {CURRENT_YEAR} {siteConfig.name}. Designed &amp; built for internship and placement applications.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
