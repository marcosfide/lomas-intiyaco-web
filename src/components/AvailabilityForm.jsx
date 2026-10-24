import { useEffect, useMemo, useRef, useState } from 'react'

import { SELECT_CABIN_EVENT } from '../events'

const WEEKDAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]
const DAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())
const sameDay = (a, b) => a && b && a.getTime() === b.getTime()
const nightsBetween = (from, to) => Math.round((to - from) / 86400000)
const pad = (n) => String(n).padStart(2, '0')
const shortDate = (d) => `${DAY_NAMES[d.getDay()].slice(0, 3)} ${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}`
const longDate = (d) => `${DAY_NAMES[d.getDay()]} ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`

function buildMonth(year, month) {
  const first = new Date(year, month, 1)
  const offset = (first.getDay() + 6) % 7 // Monday first
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = Array.from({ length: offset }, () => null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
  return cells
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm0 3h16M8 3v4m8-4v4"
      />
    </svg>
  )
}

export function AvailabilityForm({ data }) {
  const today = useMemo(() => startOfDay(new Date()), [])
  const options = data.availability.options
  const [cabinId, setCabinId] = useState(options[0].id)
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [range, setRange] = useState({ from: null, to: null })
  const [guests, setGuests] = useState(2)
  const [picking, setPicking] = useState(null) // null | 'from' | 'to'
  const datesRef = useRef(null)

  const cabin = options.find((option) => option.id === cabinId)
  const maxGuests = cabin.maxGuests
  const guestCount = Math.min(guests, maxGuests)
  const cells = buildMonth(view.year, view.month)
  const canGoBack = view.year > today.getFullYear() || view.month > today.getMonth()
  const nights = range.from && range.to ? nightsBetween(range.from, range.to) : 0

  const cardRef = useRef(null)

  // A cabin card's "Consultar disponibilidad" preselects that cabin and opens the date picker.
  useEffect(() => {
    let timer
    const onSelect = (event) => {
      setCabinId(event.detail)
      setRange({ from: null, to: null })
      setView({ year: today.getFullYear(), month: today.getMonth() })
      cardRef.current?.classList.remove('is-highlighted')
      void cardRef.current?.offsetWidth
      cardRef.current?.classList.add('is-highlighted')
      timer = window.setTimeout(() => setPicking('from'), 700)
    }
    window.addEventListener(SELECT_CABIN_EVENT, onSelect)
    return () => {
      window.removeEventListener(SELECT_CABIN_EVENT, onSelect)
      window.clearTimeout(timer)
    }
  }, [today])

  useEffect(() => {
    if (!picking) return undefined
    const onPointer = (event) => {
      if (!datesRef.current?.contains(event.target)) setPicking(null)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setPicking(null)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [picking])

  const changeMonth = (delta) => {
    setView(({ year, month }) => {
      const next = new Date(year, month + delta, 1)
      return { year: next.getFullYear(), month: next.getMonth() }
    })
  }

  const openPicker = (field) => {
    const anchor = (field === 'to' && range.to) || range.from
    if (anchor) setView({ year: anchor.getFullYear(), month: anchor.getMonth() })
    setPicking((current) => (current === field ? null : field))
  }

  const pickDay = (day) => {
    if (picking === 'to' && range.from && day > range.from) {
      setRange({ from: range.from, to: day })
      setPicking(null)
      return
    }
    setRange({ from: day, to: null })
    setPicking('to')
  }

  const message = useMemo(() => {
    if (!range.from || !range.to) return ''
    return [
      `¡Hola! Quería consultar disponibilidad en ${data.name}:`,
      `• ${cabin.messageLabel}`,
      `• Ingreso: ${longDate(range.from)}`,
      `• Salida: ${longDate(range.to)} (${nights} ${nights === 1 ? 'noche' : 'noches'})`,
      `• Huéspedes: ${guestCount}`,
      '¡Gracias!',
    ].join('\n')
  }, [cabin, data.name, guestCount, nights, range])

  const whatsappHref = message
    ? `https://wa.me/${data.whatsapp.number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    : undefined

  return (
    <form ref={cardRef} className="availability-card" onSubmit={(event) => event.preventDefault()} aria-labelledby="availability-title">
      <h3 id="availability-title">{data.availability.title}</h3>

      <div className="cabin-options" role="group" aria-label="Cabaña">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="cabin-option"
            aria-pressed={option.id === cabinId}
            onClick={() => setCabinId(option.id)}
          >
            <span className="cabin-option-title">{option.label}</span>
            <span className="cabin-option-note">{option.note}</span>
          </button>
        ))}
      </div>

      <div className="dates-wrap" ref={datesRef}>
        <div className="dates-row">
          {[
            ['from', 'Ingreso', range.from],
            ['to', 'Salida', range.to],
          ].map(([field, label, value]) => (
            <button
              key={field}
              type="button"
              className={`date-field ${picking === field ? 'is-active' : ''}`}
              aria-expanded={picking === field}
              aria-controls="availability-calendar"
              onClick={() => openPicker(field)}
            >
              <span className="date-field-label">{label}</span>
              <span className={`date-field-value ${value ? '' : 'is-empty'}`}>
                <CalendarIcon />
                {value ? shortDate(value) : 'Elegir'}
              </span>
            </button>
          ))}
        </div>

        {picking ? (
          <div className="calendar-pop" id="availability-calendar">
            <div className="calendar-head">
              <button
                type="button"
                className="calendar-nav"
                onClick={() => changeMonth(-1)}
                disabled={!canGoBack}
                aria-label="Mes anterior"
              >
                ‹
              </button>
              <p className="calendar-month" aria-live="polite">
                {MONTHS[view.month]} {view.year}
              </p>
              <button type="button" className="calendar-nav" onClick={() => changeMonth(1)} aria-label="Mes siguiente">
                ›
              </button>
            </div>
            <div className="calendar-grid">
              {WEEKDAYS.map((day, index) => (
                <span className="calendar-weekday" key={`${day}-${index}`} aria-hidden="true">
                  {day}
                </span>
              ))}
              {cells.map((day, index) => {
                if (!day) return <span key={`empty-${index}`} />
                const disabled = day < today
                const isStart = sameDay(day, range.from)
                const isEnd = sameDay(day, range.to)
                const inRange = range.from && range.to && day > range.from && day < range.to
                const classes = [
                  'calendar-day',
                  isStart && 'is-start',
                  isEnd && 'is-end',
                  inRange && 'in-range',
                  range.from && range.to && isStart && 'has-range',
                  sameDay(day, today) && 'is-today',
                ]
                  .filter(Boolean)
                  .join(' ')
                return (
                  <button
                    key={day.getTime()}
                    type="button"
                    className={classes}
                    disabled={disabled}
                    aria-pressed={Boolean(isStart || isEnd || inRange)}
                    aria-label={longDate(day)}
                    onClick={() => pickDay(day)}
                  >
                    {day.getDate()}
                  </button>
                )
              })}
            </div>
            <p className="calendar-hint">
              {picking === 'from' || !range.from ? 'Elegí el día de ingreso' : 'Ahora elegí el día de salida'}
            </p>
          </div>
        ) : null}
      </div>

      <div className="guests-row">
        <span className="guests-label" id="guests-label">
          Huéspedes
          {nights ? <span className="nights-badge">{nights} {nights === 1 ? 'noche' : 'noches'}</span> : null}
        </span>
        <div className="stepper" role="group" aria-labelledby="guests-label">
          <button
            type="button"
            onClick={() => setGuests(Math.max(1, guestCount - 1))}
            disabled={guestCount <= 1}
            aria-label="Menos huéspedes"
          >
            −
          </button>
          <output aria-live="polite">{guestCount}</output>
          <button
            type="button"
            onClick={() => setGuests(Math.min(maxGuests, guestCount + 1))}
            disabled={guestCount >= maxGuests}
            aria-label="Más huéspedes"
          >
            +
          </button>
        </div>
      </div>

      <a
        className={`btn btn-whatsapp availability-submit ${whatsappHref ? '' : 'is-disabled'}`}
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-disabled={!whatsappHref}
        onClick={(event) => {
          if (!whatsappHref) {
            event.preventDefault()
            openPicker(range.from ? 'to' : 'from')
          }
        }}
      >
        {data.availability.button}
      </a>
      <p className="availability-note">{data.availability.note}</p>
    </form>
  )
}
