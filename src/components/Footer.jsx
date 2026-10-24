import logoWhite from '../assets/images/logo-lomas-intiyaco-white.svg'

function WhatsAppIcon() {
  return (
    <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.49 0 9.96-4.47 9.96-9.96C22 6.47 17.53 2 12.04 2Zm0 18.18h-.01a8.25 8.25 0 0 1-4.2-1.15l-.3-.18-3.08.81.82-3-.2-.31a8.23 8.23 0 0 1-1.26-4.39c0-4.56 3.71-8.27 8.28-8.27a8.24 8.24 0 0 1 8.24 8.27c0 4.56-3.71 8.22-8.28 8.22Zm4.54-6.16c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12 0 1.25.91 2.45 1.04 2.62.13.17 1.79 2.73 4.33 3.83.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.3Z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.15-2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"
      />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8L12 2.8Z"
      />
    </svg>
  )
}

export function Footer({ data }) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <img className="footer-logo" src={logoWhite} alt={data.name} />
          <p>{data.location.text}</p>
          <p className="footer-hours">
            {data.ui.checkinLabel} {data.schema.checkinTime} · {data.ui.checkoutLabel} {data.schema.checkoutTime}
          </p>
        </div>
        <nav className="footer-nav-wrap" aria-label={data.ui.footerNavTitle}>
          <p className="footer-heading">{data.ui.footerNavTitle}</p>
          <div className="footer-nav">
            {data.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="footer-links">
          <p className="footer-heading">{data.ui.footerContactTitle}</p>
          <a className="footer-contact-link" href={data.whatsapp.url} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            <span>WhatsApp {data.whatsapp.number}</span>
          </a>
          <a className="footer-contact-link" href={data.instagram.url} target="_blank" rel="noreferrer">
            <InstagramIcon />
            <span>Instagram {data.instagram.handle}</span>
          </a>
          <a className="footer-contact-link" href={data.links.googleMaps} target="_blank" rel="noreferrer">
            <MapIcon />
            <span>Google Maps</span>
          </a>
          <a className="footer-contact-link" href={data.reviews.writeUrl} target="_blank" rel="noreferrer">
            <StarIcon />
            <span>{data.ui.footerReview}</span>
          </a>
        </div>
        <p className="copyright">Copyright {new Date().getFullYear()} {data.name}. {data.ui.copyright}</p>
      </div>
    </footer>
  )
}
