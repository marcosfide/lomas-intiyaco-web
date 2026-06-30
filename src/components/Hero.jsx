import { ImageWithFallback } from './ImageWithFallback'

export function Hero({ data }) {
  return (
    <section className="hero-section" id="inicio">
      <ImageWithFallback src={data.hero.image} alt={data.hero.alt} className="hero-media" />
      <div className="hero-overlay" />
      <div className="hero-content section-shell">
        <p className="eyebrow">{data.name}</p>
        <h1>{data.title}</h1>
        <p className="hero-subtitle">{data.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={data.whatsapp.url} target="_blank" rel="noreferrer">
            {data.ui.heroPrimary}
          </a>
          <a className="btn btn-secondary" href="#cabanas">
            {data.ui.heroSecondary}
          </a>
        </div>
        <div className="badges" aria-label="Características destacadas">
          {data.hero.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
