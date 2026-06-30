export function Intro({ data }) {
  return (
    <section className="section intro-section" aria-labelledby="intro-title">
      <div className="section-shell intro-grid">
        <div>
          <p className="eyebrow">{data.intro.eyebrow}</p>
          <h2 id="intro-title">{data.intro.title}</h2>
          <p className="section-lead">{data.intro.text}</p>
        </div>
        <div className="benefit-grid">
          {data.intro.benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
