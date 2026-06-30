export function FinalCTA({ data }) {
  return (
    <section className="final-cta" id="contacto">
      <div className="section-shell final-cta-content">
        <h2>{data.finalCta.title}</h2>
        <p>{data.finalCta.text}</p>
        <a className="btn btn-primary btn-large" href={data.whatsapp.url} target="_blank" rel="noreferrer">
          {data.ui.finalButton}
        </a>
      </div>
    </section>
  )
}
