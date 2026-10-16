const paths = {
  kitchen: (
    <>
      <path d="M4 11h16v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6Z" />
      <path d="M2 11h20" />
      <path d="M9 4.5c0 1 .8 1.3.8 2.3S9 8 9 8" />
      <path d="M12.5 4.5c0 1 .8 1.3.8 2.3s-.8 1.2-.8 1.2" />
      <path d="M16 4.5c0 1 .8 1.3.8 2.3S16 8 16 8" />
    </>
  ),
  grill: (
    <>
      <path d="M3 10h18a9 9 0 0 1-18 0Z" />
      <path d="M8 18.5 6 22" />
      <path d="m16 18.5 2 3.5" />
      <path d="M8 6.5c0-1 1-1.5 1-2.5" />
      <path d="M12 6.5c0-1 1-1.5 1-2.5" />
      <path d="M16 6.5c0-1 1-1.5 1-2.5" />
    </>
  ),
  heating: (
    <path d="M12 22c4 0 7-2.7 7-6.8 0-3.4-2.2-5.6-3.6-7.2-.3 1.9-1.2 3-2.4 3.6.3-3.4-1.2-6.4-4-8.6C9 6 5 8.9 5 15.2 5 19.3 8 22 12 22Z" />
  ),
  linen: (
    <>
      <path d="M3 18V7" />
      <path d="M3 12h18v6" />
      <path d="M3 16h18" />
      <path d="M6 12V9.5A1.5 1.5 0 0 1 7.5 8h3A1.5 1.5 0 0 1 12 9.5V12" />
    </>
  ),
  parking: (
    <>
      <path d="M5 16V11l2-5h10l2 5v5" />
      <path d="M3 16h18v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
      <path d="M5 11h14" />
      <circle cx="7.5" cy="13.5" r=".6" />
      <circle cx="16.5" cy="13.5" r=".6" />
    </>
  ),
  nature: (
    <>
      <path d="m12 2 5 7h-3l4 6H6l4-6H7l5-7Z" />
      <path d="M12 15v7" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8.8a15 15 0 0 1 20 0" />
      <path d="M5 12.6a10 10 0 0 1 14 0" />
      <path d="M8.5 16.3a5 5 0 0 1 7 0" />
      <circle cx="12" cy="20" r=".8" />
    </>
  ),
  pets: (
    <>
      <circle cx="5.5" cy="10.5" r="1.8" />
      <circle cx="9" cy="5.5" r="1.8" />
      <circle cx="15" cy="5.5" r="1.8" />
      <circle cx="18.5" cy="10.5" r="1.8" />
      <path d="M12 12c-2.6 0-5.5 3.6-5.5 6.2C6.5 20 7.8 21 9.3 21c1.2 0 1.7-.6 2.7-.6s1.5.6 2.7.6c1.5 0 2.8-1 2.8-2.8 0-2.6-2.9-6.2-5.5-6.2Z" />
    </>
  ),
}

export function ServiceIcon({ name }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {paths[name] ?? <circle cx="12" cy="12" r="4" />}
      </svg>
    </span>
  )
}
