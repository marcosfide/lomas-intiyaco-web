import { AvailabilityForm } from './AvailabilityForm'
import { ImageWithFallback } from './ImageWithFallback'

export function FinalCTA({ data }) {
  return (
    <section className="final-cta" id="contacto">
      <ImageWithFallback src={data.finalCta.image} alt={data.finalCta.imageAlt} className="final-cta-media" />
      <div className="final-cta-overlay" />
      <div className="section-shell final-cta-grid">
        <div className="final-cta-content">
          <p className="eyebrow">{data.finalCta.eyebrow}</p>
          <h2>{data.finalCta.title}</h2>
          <p>{data.finalCta.text}</p>
          <a className="final-cta-direct" href={data.whatsapp.url} target="_blank" rel="noreferrer">
            {data.ui.finalDirect}
          </a>
        </div>
        <AvailabilityForm data={data} />
      </div>
    </section>
  )
}
