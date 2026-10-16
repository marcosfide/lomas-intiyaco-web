import { useEffect, useState } from 'react'

import logo from '../assets/images/logo-lomas-intiyaco.svg'

export function Header({ data }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${menuOpen ? 'is-menu-open' : ''}`}>
      <a className="brand" href="#inicio" aria-label={`${data.name} ${data.ui.homeAriaSuffix}`} onClick={closeMenu}>
        <img className="brand-logo" src={logo} alt={data.name} />
      </a>
      <nav className="nav-links" aria-label={data.ui.navAria}>
        {data.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={data.whatsapp.url} target="_blank" rel="noreferrer">
        {data.ui.headerWhatsapp}
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>

      <nav id="mobile-menu" className="mobile-menu" aria-label={data.ui.navAria} hidden={!menuOpen}>
        {data.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a
          className="btn btn-primary mobile-menu-cta"
          href={data.whatsapp.url}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          {data.ui.headerWhatsapp}
        </a>
      </nav>
    </header>
  )
}
