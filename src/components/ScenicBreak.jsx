import { ImageWithFallback } from './ImageWithFallback'

export function ScenicBreak({ data }) {
  return (
    <section className="scenic-section" aria-label={data.scenic.imageAlt}>
      <ImageWithFallback src={data.scenic.image} alt={data.scenic.imageAlt} className="scenic-media" />
      <div className="scenic-overlay" />
      <div className="scenic-content section-shell">
        <p className="eyebrow">{data.scenic.eyebrow}</p>
        <h2>{data.scenic.title}</h2>
        <p>{data.scenic.text}</p>
      </div>
    </section>
  )
}
