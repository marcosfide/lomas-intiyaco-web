export function Footer({ data }) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <p className="footer-brand">{data.name}</p>
          <p>{data.location.text}</p>
        </div>
        <div className="footer-links">
          <a href={data.whatsapp.url} target="_blank" rel="noreferrer">
            WhatsApp {data.whatsapp.number}
          </a>
          <a href={data.instagram.url} target="_blank" rel="noreferrer">
            Instagram {data.instagram.handle}
          </a>
          <a href={data.links.googleMaps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
        <p className="copyright">Copyright {new Date().getFullYear()} {data.name}. {data.ui.copyright}</p>
      </div>
    </footer>
  )
}
