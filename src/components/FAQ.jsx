export function FAQ({ data }) {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">{data.ui.faqEyebrow}</p>
          <h2 id="faq-title">{data.ui.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {data.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
