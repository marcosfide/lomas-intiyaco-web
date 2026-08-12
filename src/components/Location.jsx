import { ImageWithFallback } from './ImageWithFallback'

export function Location({ data }) {
  return (
    <section className="section location-section" id="ubicacion" aria-labelledby="location-title">
      <ImageWithFallback src={data.location.image} alt={data.location.imageAlt} className="location-media" />
      <div className="location-overlay" />
      <div className="section-shell location-grid">
        <div>
          <p className="eyebrow">{data.ui.locationEyebrow}</p>
          <h2 id="location-title">{data.location.text}</h2>
          <ul className="distance-list">
            {data.location.distances.map((distance) => (
              <li key={distance}>{distance}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href={data.location.googleMapsUrl} target="_blank" rel="noreferrer">
            {data.ui.locationButton}
          </a>
        </div>
        <div className="map-card">
          {data.location.mapEmbedUrl ? (
            <iframe
              title="Mapa de Lomas de Intiyaco"
              src={data.location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="map-placeholder">
              <span>{data.ui.mapPlaceholder}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
