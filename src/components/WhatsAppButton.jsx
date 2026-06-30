export function WhatsAppButton({ data }) {
  return (
    <a
      className="whatsapp-float"
      href={data.whatsapp.url}
      target="_blank"
      rel="noreferrer"
      aria-label={data.ui.whatsappAria}
    >
      WA
    </a>
  )
}
