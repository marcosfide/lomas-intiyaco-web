export function Header({ data }) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label={`${data.name} ${data.ui.homeAriaSuffix}`}>
        <span className="brand-mark">LI</span>
        <span>{data.name}</span>
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
    </header>
  )
}
