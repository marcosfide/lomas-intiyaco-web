import { ImageWithFallback } from './ImageWithFallback'
import { ServiceIcon } from './ServiceIcon'

export function Services({ data }) {
  return (
    <section className="section services-section" id="servicios" aria-labelledby="services-title">
      <ImageWithFallback
        src={data.servicesBackground.image}
        alt={data.servicesBackground.imageAlt}
        className="services-media"
      />
      <div className="services-overlay" />
      <div className="section-shell services-content">
        <div className="section-heading">
          <p className="eyebrow">{data.ui.servicesEyebrow}</p>
          <h2 id="services-title">{data.ui.servicesTitle}</h2>
        </div>
        <div className="services-grid">
          {data.services.map((service) => (
            <article className="service-card" key={service.title}>
              <ServiceIcon name={service.icon} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
