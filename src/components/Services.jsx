export function Services({ data }) {
  return (
    <section className="section services-section" id="servicios" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">{data.ui.servicesEyebrow}</p>
          <h2 id="services-title">{data.ui.servicesTitle}</h2>
        </div>
        <div className="services-grid">
          {data.services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true" />
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
