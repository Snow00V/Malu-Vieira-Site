import { useState, useEffect, useRef } from "react"
import maluPortrait from "@/imports/image__8_.png"
import svcImg1 from "@/imports/optimized/service-edicao.webp"
import svcImg2 from "@/imports/optimized/service-full-day.webp"
import svcImg3 from "@/imports/optimized/service-storymaker.webp"
import svcImg4 from "@/imports/optimized/service-gestao.webp"
import portImg1 from "@/imports/optimized/portfolio-diario-obra.webp"
import portVideo1 from "@/imports/portfolio-diario-obra.mp4"
import portImg2 from "@/imports/optimized/portfolio-historia-empresa.webp"
import portVideo2 from "@/imports/portfolio-historia-empresa.mp4"
import portImg3 from "@/imports/optimized/portfolio-vlog-do-dia.webp"
import portVideo3 from "@/imports/portfolio-vlog-do-dia.mp4"
import portImg4 from "@/imports/optimized/portfolio-gravacao-curso.webp"
import portVideo4 from "@/imports/portfolio-gravacao-curso.mp4"
import portImg5 from "@/imports/optimized/portfolio-mentoria-presencial.webp"
import portVideo5 from "@/imports/portfolio-mentoria-presencial.mp4"
import portImg6 from "@/imports/optimized/portfolio-campanhas.webp"
import portVideo6 from "@/imports/portfolio-campanhas.mp4"
import portImg7 from "@/imports/optimized/portfolio-trafego-pago.webp"
import portVideo7 from "@/imports/portfolio-trafego-pago.mp4"
import portImg8 from "@/imports/optimized/portfolio-video-trend.webp"
import portVideo8 from "@/imports/portfolio-video-trend.mp4"
import heroCover from "@/imports/optimized/hero.webp"

const WHATSAPP_NUMBER = "5511932417761"
const GENERAL_WHATSAPP_MESSAGE = "Olá! Vim pelo seu site e queria transformar minha presença digital. Gostaria de entender como vocês podem me ajudar e conhecer os serviços disponíveis."
const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
const trackEvent = (name: string, params: Record<string, string> = {}) => {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  gtag?.("event", name, params)
}

// ─── Scroll Reveal ──────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    )
    document
      .querySelectorAll(".reveal, .reveal-fade, .reveal-scale, .step-line")
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Counter Hook ───────────────────────────────────────────────────────────
function useCounter(target: number, trigger: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let cur = 0
    const step = target / 60
    const t = setInterval(() => {
      cur += step
      if (cur >= target) {
        setVal(target)
        clearInterval(t)
      } else setVal(Math.floor(cur))
    }, 25)
    return () => clearInterval(t)
  }, [trigger, target])
  return val
}

// ─── Parallax Hook ──────────────────────────────────────────────────────────
function useParallax() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        setOffset(window.scrollY * 0.3)
        frame = 0
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])
  return offset
}

// ─── SVG Icons ──────────────────────────────────────────────────────────────
const IconInstagram = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
const IconTikTok = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.16 8.16 0 004.77 1.53V6.79a4.85 4.85 0 01-1-.1z" />
  </svg>
)
const IconPortfolio = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 7.5h7l2-3h9v15H3z" />
    <path d="M3 7.5V5h6l1 2.5" />
  </svg>
)
const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
const IconArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)
const IconDiamond = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
    <path d="M4 0L8 4L4 8L0 4Z" />
  </svg>
)

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  const links = [
    { id: "sobre", label: "Sobre mim" },
    { id: "servicos", label: "Serviços" },
    { id: "portfolio", label: "Portfólio" },
    { id: "contato", label: "Contato" },
  ]

  return (
    <header>
      <nav
        aria-label="Navegação principal"
        className="hero-nav rsp-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          background: scrolled ? "rgba(240,234,224,0.93)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(107,58,31,0.1)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <a
          href="#hero"
          aria-label="Malu Vieira — início"
          className="hero-logo font-serif"
          style={{
            fontSize: 22,
            fontWeight: 700,
            fontStyle: "italic",
            color: "#2C1810",
            background: "none",
            textDecoration: "none",
            padding: 0,
          }}
        >
          Malu<span style={{ color: "#7B4520" }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 32 }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="block md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span
            className="ham-line"
            style={{
              width: 24,
              transform: open
                ? "rotate(45deg) translate(4.5px, 4.5px)"
                : "none",
            }}
          />
          <span
            className="ham-line"
            style={{ width: 24, opacity: open ? 0 : 1 }}
          />
          <span
            className="ham-line"
            style={{
              width: 24,
              transform: open
                ? "rotate(-45deg) translate(4.5px, -4.5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "#F0EAE0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#2C1810",
                fontSize: 30,
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl(GENERAL_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            onClick={() => trackEvent("whatsapp_click", { location: "mobile_menu" })}
            style={{ marginTop: 8, width: 220, justifyContent: "center" }}
          >
            Vamos conversar
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const parallax = useParallax()

  return (
    <section
      id="hero"
      className="rsp-hero-pad grain"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "#F0EAE0",
      }}
    >
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "6%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(123,69,32,0.09) 0%, transparent 70%)",
          transform: `translateY(${-parallax * 0.4}px)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "3%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(107,58,31,0.06) 0%, transparent 70%)",
          transform: `translateY(${-parallax * 0.2}px)`,
          pointerEvents: "none",
        }}
      />
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(107,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,58,31,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="rsp-hero-grid">
          {/* Text column */}
          <div>
            <div className="hero-eyebrow" style={{ marginBottom: 24 }}>
              <span className="tag">
                <IconDiamond /> Social Media Estratégica
              </span>
            </div>

            <h1
              className="hero-title font-display"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#2C1810",
                marginBottom: 20,
              }}
            >
              Transformo{" "}
              <span
                style={{
                  color: "#7B4520",
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                  fontWeight: 700,
                }}
              >
                presença digital
              </span>{" "}
              em marcas que são lembradas.
            </h1>

            <p
              className="hero-sub"
              style={{
                fontSize: "clamp(15px, 1.8vw, 17px)",
                lineHeight: 1.7,
                color: "rgba(44,24,16,0.55)",
                marginBottom: 36,
                maxWidth: 440,
              }}
            >
              Estratégia, conteúdo, edição e gestão de Instagram para marcas que
              querem se posicionar com autenticidade e crescer de forma
              consistente.
            </p>

            <div
              className="hero-ctas"
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a
                href={whatsappUrl(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              >
                Quero transformar meu Instagram <IconArrow />
              </a>
              <a
                href="#portfolio"
                className="btn-ghost"
                onClick={() => trackEvent("cta_click", { location: "hero", target: "portfolio" })}
              >
                Ver meu trabalho
              </a>
            </div>

            <div
              className="hero-scroll"
              style={{
                marginTop: 48,
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "rgba(44,24,16,0.3)",
                fontSize: 12,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 1,
                  background: "rgba(44,24,16,0.15)",
                }}
              />
              Role para explorar ↓
            </div>
          </div>

          {/* Visual column — hidden on mobile */}
          <div
            className="hero-visual hidden md:block"
            style={{
              position: "relative",
              transform: `translateY(${-parallax * 0.12}px)`,
            }}
          >
            <div
              style={{ position: "relative", maxWidth: 460, margin: "0 auto" }}
            >
              <div
                style={{
                  width: 280,
                  height: 380,
                  borderRadius: 24,
                  overflow: "hidden",
                  margin: "0 auto",
                  boxShadow:
                    "0 40px 80px rgba(44,24,16,0.2), 0 0 0 1px rgba(107,58,31,0.08)",
                  position: "relative",
                }}
              >
                <img
                  src={heroCover}
                  alt="Malu Vieira — Social Media Estratégica"
                  width="280"
                  height="380"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "35%",
                    background:
                      "linear-gradient(to top, rgba(44,24,16,0.85) 0%, transparent 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "rgba(245,237,227,0.7)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    @vieira.maluu
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#F5EDE3",
                      fontFamily: "Bricolage Grotesque, sans-serif",
                    }}
                  >
                    Malu Vieira
                  </div>
                </div>
              </div>

              {/* Floating card — engagement */}
              <div
                className="float-anim"
                style={{
                  position: "absolute",
                  top: 32,
                  right: -16,
                  background: "#FAF5EF",
                  border: "1px solid rgba(107,58,31,0.12)",
                  borderRadius: 16,
                  padding: "14px 18px",
                  boxShadow: "0 16px 48px rgba(44,24,16,0.12)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(44,24,16,0.4)",
                    marginBottom: 4,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Engajamento
                </div>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    color: "#2C1810",
                    letterSpacing: "-0.03em",
                  }}
                >
                  +248%
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#7B4520",
                    marginTop: 2,
                    fontWeight: 600,
                  }}
                >
                  ↑ este mês
                </div>
              </div>

              {/* Floating card — post */}
              <div
                style={{
                  position: "absolute",
                  bottom: 64,
                  left: -32,
                  background: "#FAF5EF",
                  border: "1px solid rgba(107,58,31,0.12)",
                  borderRadius: 16,
                  padding: "14px 18px",
                  boxShadow: "0 16px 48px rgba(44,24,16,0.12)",
                  animation: "floatUp 5s ease-in-out 1s infinite",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #7B4520, #A07252)",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#2C1810",
                      }}
                    >
                      Novo reel!
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(44,24,16,0.4)" }}>
                      3.2k curtidas em 1h
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  display: "flex",
                  gap: 8,
                  color: "rgba(123,69,32,0.3)",
                }}
              >
                <IconDiamond />
                <IconDiamond />
                <IconDiamond />
                <IconDiamond />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  const photoRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [photoInView, setPhotoInView] = useState(false)
  const [statsInView, setStatsInView] = useState(false)

  useEffect(() => {
    const makeObs = (setter: (v: boolean) => void) =>
      new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true) }, { threshold: 0.1 })
    const o1 = makeObs(setPhotoInView)
    const o2 = makeObs(setStatsInView)
    if (photoRef.current) o1.observe(photoRef.current)
    if (statsRef.current) o2.observe(statsRef.current)
    return () => { o1.disconnect(); o2.disconnect() }
  }, [])

  const c3Photo = useCounter(4, photoInView)
  const c1 = useCounter(15, statsInView)
  const c2 = useCounter(1000, statsInView)
  const c3 = useCounter(4, statsInView)

  return (
    <section
      id="sobre"
      className="section-padding"
      style={{ background: "#EAE3D8", position: "relative" }}
    >
      <div className="rsp-wrap">
        <div className="rsp-about-grid">
          {/* Photo */}
          <div ref={photoRef} className="reveal" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                aspectRatio: "3/4",
                boxShadow: "0 32px 80px rgba(44,24,16,0.15)",
              }}
            >
              <img
                src={maluPortrait}
                alt="Malu Vieira — estrategista de conteúdo"
                width="597"
                height="820"
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div className="rsp-about-deco" />
            <div className="rsp-about-badge">
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  color: "#F5EDE3",
                }}
              >
                +{c3Photo}
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "rgba(245,237,227,0.75)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                anos de exp.
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 0,
                display: "flex",
                gap: 8,
                color: "rgba(123,69,32,0.35)",
              }}
            >
              <IconDiamond />
              <IconDiamond />
              <IconDiamond />
              <IconDiamond />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="reveal" style={{ marginBottom: 20 }}>
              <span className="serif-pill">Quem é a Malu Vieira?</span>
            </div>

            <h2
              className="reveal delay-1 font-display"
              style={{
                fontSize: "clamp(28px, 3.2vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#2C1810",
                marginBottom: 24,
              }}
            >
              Por trás de cada conteúdo, existe uma estratégia.
            </h2>

            <p
              className="reveal delay-2"
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(44,24,16,0.6)",
                marginBottom: 16,
              }}
            >
              Sou estrategista de conteúdo e estudante de Publicidade e
              Propaganda, com atuação em posicionamento e comunicação digital
              para marcas e negócios.
            </p>

            <p
              className="reveal delay-3"
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(44,24,16,0.6)",
                marginBottom: 28,
              }}
            >
              Meu trabalho é transformar ideias em uma presença digital
              estratégica, construindo constância, autoridade e conexão através
              de conteúdos pensados para comunicar, atrair e fortalecer marcas
              no digital.
            </p>

            <blockquote
              className="reveal delay-3"
              style={{
                borderLeft: "2px solid #7B4520",
                paddingLeft: 18,
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontSize: 15,
                color: "rgba(44,24,16,0.75)",
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              "Acredito que conteúdo vai muito além de simplesmente postar: cada
              publicação precisa ter intenção, estratégia e um objetivo dentro
              da comunicação da marca."
            </blockquote>

            <div
              className="reveal delay-3 diamond-divider"
              style={{ marginBottom: 28 }}
            >
              <IconDiamond /> <IconDiamond />
            </div>

            <div ref={statsRef} className="reveal delay-4 rsp-stats">
              {[
                { num: `+${c1}`, label: "marcas atendidas" },
                { num: `+${c2}`, label: "conteúdos produzidos" },
                { num: `+${c3}`, label: "anos de exp." },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 36px)",
                      fontWeight: 800,
                      fontFamily: "Bricolage Grotesque, sans-serif",
                      color: "#7B4520",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(44,24,16,0.45)",
                      marginTop: 6,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "Edição",
    desc: "Edição profissional de vídeos para redes sociais, transformando seu material bruto em conteúdos dinâmicos, estratégicos e alinhados à identidade da sua marca.",
    img: svcImg1,
    alt: "Timeline de edição de vídeo",
    tag: "Reels · Stories · Vídeos",
    what: "Edição profissional de vídeos para redes sociais, transformando seu material bruto em conteúdos dinâmicos, estratégicos e alinhados à identidade da sua marca.",
    includes: ["Edição de Reels e TikToks", "Cortes e ajustes de ritmo", "Legendas animadas", "Trilha sonora e efeitos", "Identidade visual do vídeo", "Entrega otimizada para redes sociais"],
    ideal: "Marcas e profissionais que já gravam seus próprios conteúdos, mas querem elevar a qualidade dos vídeos e deixar o perfil mais profissional.",
    whatsappMessage: "Olá! Vim pelo seu site e tenho interesse no serviço de Edição. Queria entender melhor como funciona e receber mais informações.",
  },
  {
    num: "02",
    title: "Full Day | Dia de Gravação",
    desc: "Um dia dedicado à produção de conteúdo da sua marca, com planejamento e captação de diferentes vídeos para criar um banco de conteúdos estratégico.",
    img: svcImg2,
    alt: "Setup profissional de câmera para gravação",
    tag: "Fotos · Bastidores · Vídeo",
    what: "Um dia dedicado à produção de conteúdo da sua marca, com planejamento e captação de diferentes vídeos para criar um banco de conteúdos estratégico.",
    includes: ["Planejamento da gravação", "Direcionamento de cenas e conteúdos", "Captação de vídeos", "Diferentes formatos e enquadramentos", "Organização do material gravado", "Edição dos conteúdos contratados"],
    ideal: "Marcas e profissionais que querem produzir vários conteúdos de uma só vez e manter as redes abastecidas sem precisar gravar toda semana.",
    whatsappMessage: "Olá! Vim pelo seu site e tenho interesse no Full Day de gravação. Queria saber como funciona a diária e o que está incluso.",
  },
  {
    num: "03",
    title: "Storymaker",
    desc: "Cobertura de eventos e momentos especiais em tempo real, com olhar criativo e estratégico para transformar cada detalhe em conteúdo para os Stories.",
    img: svcImg3,
    alt: "Mão segurando celular com conteúdo digital",
    tag: "Stories · Eventos · Cobertura",
    what: "Cobertura de eventos e momentos especiais em tempo real, com olhar criativo e estratégico para transformar cada detalhe em conteúdo para os Stories.",
    includes: ["Captação vertical pelo celular", "Cobertura em tempo real", "Fotos e vídeos dos principais momentos", "Edição durante a cobertura", "Publicação de Stories", "Conteúdos alinhados à identidade da marca"],
    ideal: "Marcas, eventos, lançamentos, inaugurações e experiências que querem mostrar o que está acontecendo de forma espontânea, profissional e envolvente.",
    whatsappMessage: "Olá! Vim pelo seu site e tenho interesse no serviço de Storymaker. Queria entender melhor como funciona e saber sobre disponibilidade.",
  },
  {
    num: "04",
    title: "Gestão de Instagram",
    desc: "Gestão estratégica do Instagram para construir uma presença digital consistente, profissional e alinhada aos objetivos da sua marca.",
    img: svcImg4,
    alt: "Criadora de conteúdo profissional",
    tag: "Feed · Planejamento · Gestão",
    what: "Gestão estratégica do Instagram para construir uma presença digital consistente, profissional e alinhada aos objetivos da sua marca.",
    includes: ["Planejamento estratégico de conteúdo", "Calendário editorial", "Criação de pautas e roteiros", "Desenvolvimento de Reels e carrosséis", "Legendas e direcionamento de comunicação", "Organização e acompanhamento do perfil"],
    ideal: "Marcas e profissionais que querem fortalecer seu posicionamento no Instagram, mas não têm tempo ou direcionamento para planejar e executar os conteúdos.",
    whatsappMessage: "Olá! Vim pelo seu site e tenho interesse em Gestão de Instagram. Gostaria de entender como funciona o serviço e conhecer as opções disponíveis.",
  },
]

type Service = typeof services[0]

function ServiceCard({ s, delay, onOpen }: { s: Service; delay: number; onOpen: (s: Service) => void }) {
  return (
    <article className={`service-card reveal delay-${delay}`}>
      <button
        type="button"
        className="card-action"
        aria-label={`Ver detalhes do serviço ${s.title}`}
        onClick={() => {
          trackEvent("service_view", { service: s.title })
          onOpen(s)
        }}
      />
      <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
        <img src={s.img} alt={s.alt} loading="lazy" decoding="async" className="service-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(44,24,16,0.1) 0%, rgba(44,24,16,0.55) 100%)" }} />
        <div className="service-num" style={{ position: "absolute", top: 16, right: 16, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(245,237,227,0.5)", transition: "color 0.3s ease" }}>
          {s.num}
        </div>
      </div>
      <div style={{ padding: "24px 24px 28px" }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#7B4520", textTransform: "uppercase", marginBottom: 8 }}>{s.tag}</div>
        <h3 className="font-display" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#2C1810", marginBottom: 10 }}>{s.title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(44,24,16,0.55)" }}>{s.desc}</p>
        <div style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#7B4520", cursor: "pointer" }}>
          Saiba mais <IconArrow />
        </div>
      </div>
    </article>
  )
}

function ServiceModal({ s, onClose }: { s: Service; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby={`service-modal-${s.num}`} onClick={(e) => e.stopPropagation()} style={{ background: "#FAF5EF", borderRadius: 20, maxWidth: 640, width: "92%", maxHeight: "92vh", overflow: "auto", border: "1px solid rgba(107,58,31,0.1)" }}>
        <div style={{ height: 240, overflow: "hidden", borderRadius: "20px 20px 0 0", position: "relative" }}>
          <img src={s.img} alt={s.alt} decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(44,24,16,0.05) 0%, rgba(44,24,16,0.5) 100%)" }} />
          <div style={{ position: "absolute", bottom: 20, left: 24 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,237,227,0.7)" }}>{s.tag}</span>
          </div>
        </div>
        <div className="rsp-modal-inner">
          <div style={{ fontSize: 10, fontWeight: 600, color: "#7B4520", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Serviço {s.num}</div>
          <h3 id={`service-modal-${s.num}`} className="font-display" style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#2C1810", marginBottom: 16 }}>{s.title}</h3>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(44,24,16,0.65)", marginBottom: 24 }}>{s.what}</p>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(44,24,16,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>O que está incluído</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {s.includes.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(44,24,16,0.65)", lineHeight: 1.5 }}>
                  <span style={{ color: "#7B4520", marginTop: 2, flexShrink: 0 }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ padding: "12px 16px", background: "rgba(123,69,32,0.06)", borderRadius: 12, border: "1px solid rgba(123,69,32,0.15)", marginBottom: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#7B4520", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Ideal para</div>
            <p style={{ fontSize: 13, color: "rgba(44,24,16,0.6)", lineHeight: 1.6 }}>{s.ideal}</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={whatsappUrl(s.whatsappMessage)} target="_blank" rel="noreferrer" className="btn-primary" onClick={() => trackEvent("whatsapp_click", { location: "service", service: s.title })}>Quero esse serviço <IconArrow /></a>
            <button type="button" className="btn-ghost" onClick={onClose} autoFocus>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Services() {
  const [modal, setModal] = useState<Service | null>(null)

  useEffect(() => {
    if (!modal) {
      document.body.style.overflow = ""
      return
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModal(null)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [modal])

  return (
    <section
      id="servicos"
      className="section-padding"
      style={{ background: "#F0EAE0" }}
    >
      <div className="rsp-wrap">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16 }}>
            Serviços
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 58px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              color: "#2C1810",
              maxWidth: 560,
            }}
          >
            Tudo o que sua marca precisa para se destacar.
          </h2>
        </div>

        <div className="rsp-srv-grid">
          <ServiceCard s={services[0]} delay={1} onOpen={setModal} />
          <ServiceCard s={services[1]} delay={2} onOpen={setModal} />
          <ServiceCard s={services[2]} delay={3} onOpen={setModal} />
          <ServiceCard s={services[3]} delay={4} onOpen={setModal} />
        </div>
      </div>

      {modal && <ServiceModal s={modal} onClose={() => setModal(null)} />}
    </section>
  )
}

// ─── Process ─────────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Imersão",
    desc: "Entendo a marca, público, objetivos e posicionamento para construir uma base sólida.",
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Defino a direção de conteúdo e comunicação alinhada com o que a marca quer alcançar.",
  },
  {
    num: "03",
    title: "Produção",
    desc: "Crio, edito e organizo os conteúdos com atenção à qualidade e consistência visual.",
  },
  {
    num: "04",
    title: "Gestão",
    desc: "Acompanho a presença digital e mantenho a comunicação ativa e relevante.",
  },
]

function Process() {
  return (
    <section
      className="section-padding"
      style={{
        background: "#6B3A1F",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      <div className="rsp-wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div
            className="tag"
            style={{
              marginBottom: 16,
              color: "rgba(245,237,227,0.6)",
              background: "rgba(245,237,227,0.1)",
              border: "1px solid rgba(245,237,227,0.15)",
            }}
          >
            Processo
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 68px)",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              color: "#F5EDE3",
              maxWidth: 520,
            }}
          >
            Do planejamento ao conteúdo publicado.
          </h2>
        </div>

        <div className="rsp-proc-grid">
          {/* Connector — hidden on mobile via CSS */}
          <div
            className="rsp-proc-connector"
            style={{
              position: "absolute",
              top: 28,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "rgba(245,237,227,0.1)",
              zIndex: 0,
            }}
          />
          <div
            className="step-line rsp-proc-connector"
            style={{
              position: "absolute",
              top: 28,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background:
                "linear-gradient(90deg, #F5EDE3, rgba(245,237,227,0.4))",
              zIndex: 1,
              transformOrigin: "left",
            }}
          />

          {steps.map((s, i) => (
            <div key={s.num} className={`reveal delay-${i + 1} rsp-proc-step`}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  border: "1px solid rgba(245,237,227,0.25)",
                  background: i === 0 ? "#F5EDE3" : "rgba(245,237,227,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  position: "relative",
                  zIndex: 2,
                  boxShadow:
                    i === 0 ? "0 0 0 8px rgba(245,237,227,0.08)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: i === 0 ? "#6B3A1F" : "rgba(245,237,227,0.7)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.num}
                </span>
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#F5EDE3",
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(245,237,227,0.55)",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Diário de obra",
    cat: "Captação + Edição",
    desc: "Uma série de vídeos que documenta a transformação e compõe seu portfólio.",
    img: portImg1,
    alt: "Profissional segurando as chaves de um imóvel",
    span: "tall",
    context: "Cada etapa da obra faz parte de uma transformação que merece ser acompanhada.",
    objective: "Mostrar a evolução do projeto e valorizar o trabalho realizado.",
    strategy: "Registrar o progresso, os bastidores e os detalhes, conectando as etapas até o resultado final.",
    result: "Uma série de vídeos que documenta a transformação e compõe seu portfólio.",
    whatsappMessage: "Olá! Vim pelo seu site e vi o portfólio de Diário de Obra. Tenho interesse nesse tipo de conteúdo para o meu projeto e queria saber mais.",
    video: portVideo1,
  },
  {
    id: 2,
    title: "História da empresa",
    cat: "Captação + Edição",
    desc: "Um vídeo institucional que traduz a essência da empresa.",
    img: portImg2,
    alt: "Equipe celebrando a trajetória da empresa",
    span: "tall",
    context: "Toda empresa tem uma trajetória que merece ser contada.",
    objective: "Apresentar a história da marca e criar conexão com o público.",
    strategy: "Unir depoimentos, imagens dos bastidores e uma narrativa que valorize os momentos dessa trajetória.",
    result: "Um vídeo institucional que traduz a essência da empresa.",
    whatsappMessage: "Olá! Vim pelo seu site e vi o trabalho de Conte sua História. Gostaria de criar um vídeo contando a história da minha marca e queria entender como funciona.",
    video: portVideo2,
  },
  {
    id: 3,
    title: "Vlog do dia",
    cat: "Captação + Edição",
    desc: "Um vídeo que transforma a rotina em conteúdo com personalidade.",
    img: portImg3,
    alt: "Bastidores da gravação de conteúdo em um salão de beleza",
    span: "tall",
    context: "A rotina também revela o que torna você e seu trabalho únicos.",
    objective: "Aproximar o público e mostrar os bastidores de forma leve.",
    strategy: "Registrar momentos do dia e conectar as cenas com uma edição dinâmica e espontânea.",
    result: "Um vídeo que transforma a rotina em conteúdo com personalidade.",
    whatsappMessage: "Olá! Vim pelo seu site e vi o trabalho de Vlog do Dia. Tenho interesse em produzir conteúdos mostrando minha rotina e queria saber mais sobre o serviço.",
    video: portVideo3,
  },
  {
    id: 4,
    title: "Gravação de curso",
    cat: "Captação + Edição",
    desc: "Aulas editadas e organizadas para disponibilizar aos alunos.",
    img: portImg4,
    alt: "Bastidores da gravação de um curso com celular",
    span: "tall",
    context: "Seu conhecimento pode alcançar mais pessoas por meio de aulas gravadas.",
    objective: "Apresentar o conteúdo com clareza e facilitar o aprendizado.",
    strategy: "Organizar a gravação das aulas, cuidar do enquadramento e do áudio e editar o conteúdo.",
    result: "Aulas editadas e organizadas para disponibilizar aos alunos.",
    whatsappMessage: "Olá! Vim pelo seu site e vi o trabalho de Gravação de Curso. Tenho interesse em gravar meu curso e gostaria de saber como funciona o processo.",
    video: portVideo4,
  },
  {
    id: 5,
    title: "Mentoria presencial",
    cat: "Captação + Edição",
    desc: "Vídeos que apresentam a mentoria e ajudam a divulgar novas turmas.",
    img: portImg5,
    alt: "Bastidores da gravação de uma mentoria presencial",
    span: "tall",
    context: "Uma mentoria reúne conhecimento, troca e experiências que merecem ser registradas.",
    objective: "Mostrar a experiência do encontro e valorizar seu trabalho como mentor.",
    strategy: "Captar ensinamentos, interações e depoimentos, destacando os principais momentos.",
    result: "Vídeos que apresentam a mentoria e ajudam a divulgar novas turmas.",
    whatsappMessage: "Olá! Vim pelo seu site e vi o trabalho de Mentoria Presencial. Tenho interesse em registrar uma mentoria e queria entender melhor como funciona.",
    video: portVideo5,
  },
  {
    id: 6,
    title: "Campanhas",
    cat: "Captação + Edição",
    desc: "Vídeos que dão vida à campanha e reforçam sua mensagem.",
    img: portImg6,
    alt: "Bastidores da gravação de uma campanha em um salão de beleza",
    span: "tall",
    context: "Lançamentos e ações especiais precisam de uma comunicação que desperte interesse.",
    objective: "Valorizar a proposta da campanha e incentivar o público a participar.",
    strategy: "Construir um conceito criativo e combinar roteiro, captação e edição com a identidade da marca.",
    result: "Vídeos que dão vida à campanha e reforçam sua mensagem.",
    whatsappMessage: "Olá! Vim pelo seu site e vi os trabalhos de Campanhas. Tenho uma campanha que gostaria de produzir e queria saber mais sobre o processo.",
    video: portVideo6,
  },
  {
    id: 7,
    title: "Vídeo para tráfego pago",
    cat: "Captação + Edição",
    desc: "Um vídeo preparado para comunicar sua oferta em campanhas de tráfego pago.",
    img: portImg7,
    alt: "Roteiro de gravação para uma campanha de tráfego pago",
    span: "tall",
    context: "Seu anúncio precisa chamar atenção e comunicar a oferta em poucos segundos.",
    objective: "Despertar interesse e incentivar uma ação, como entrar em contato ou comprar.",
    strategy: "Criar uma abertura atrativa, apresentar os benefícios da oferta e finalizar com uma chamada clara.",
    result: "Um vídeo preparado para comunicar sua oferta em campanhas de tráfego pago.",
    whatsappMessage: "Olá! Vim pelo seu site e vi o trabalho de Vídeo para Tráfego Pago. Tenho interesse em criar vídeos para anúncios e gostaria de saber como funciona.",
    video: portVideo7,
  },
  {
    id: 8,
    title: "Vídeo de trend",
    cat: "Captação + Edição",
    desc: "Um vídeo leve e criativo, com a personalidade do seu negócio.",
    img: portImg8,
    alt: "Bastidores da gravação de uma trend em um salão de beleza",
    span: "tall",
    context: "As tendências podem aproximar sua marca das conversas e dos interesses do público.",
    objective: "Gerar identificação e estimular a interação com o conteúdo.",
    strategy: "Adaptar a trend à identidade da marca, com uma abordagem que faça sentido para seu público.",
    result: "Um vídeo leve e criativo, com a personalidade do seu negócio.",
    whatsappMessage: "Olá! Vim pelo seu site e vi o trabalho de Vídeo de Trend. Tenho interesse em criar conteúdos nesse formato para a minha marca e queria saber mais.",
    video: portVideo8,
  },
]

type Project = {
  id: number
  title: string
  cat: string
  desc: string
  img: string
  alt: string
  span: string
  context: string
  objective: string
  strategy: string
  result?: string
  whatsappMessage: string
  video?: string
}

const IconPlay = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="rgba(245,237,227,0.2)" />
    <circle cx="24" cy="24" r="20" fill="rgba(245,237,227,0.15)" stroke="rgba(245,237,227,0.6)" strokeWidth="1.5" />
    <path d="M20 16.5l14 7.5-14 7.5V16.5z" fill="#F5EDE3" />
  </svg>
)

function PortfolioCard({ p, delay, onOpen }: { p: Project; delay: number; onOpen: (p: Project) => void }) {
  return (
    <article
      className={`portfolio-card reveal delay-${delay}`}
      style={{
        aspectRatio: p.span === "tall" ? "3/4" : p.span === "wide" ? "4/3" : "1/1",
        display: "block",
        cursor: "pointer",
      }}
    >
      <button
        type="button"
        className="card-action"
        aria-label={`Abrir projeto ${p.title}`}
        onClick={() => {
          trackEvent("portfolio_view", { project: p.title })
          onOpen(p)
        }}
      />
      <img
        src={p.img}
        alt={p.alt}
        loading="lazy"
        decoding="async"
        className="portfolio-img"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div className="portfolio-overlay">
        <div>
          {p.video && (
            <div style={{ marginBottom: 10 }}>
              <IconPlay />
            </div>
          )}
          <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(245,237,227,0.65)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
            {p.cat}
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "Bricolage Grotesque, sans-serif", color: "#F5EDE3", letterSpacing: "-0.02em" }}>
            {p.title}
          </div>
        </div>
      </div>
    </article>
  )
}

function PortfolioModal({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`portfolio-modal-${p.id}`}
        className={p.video ? "rsp-modal-video-layout" : ""}
        style={{
          background: "#FAF5EF",
          borderRadius: 20,
          maxWidth: p.video ? 860 : 680,
          width: "92%",
          maxHeight: "92vh",
          overflow: "auto",
          border: "1px solid rgba(107,58,31,0.1)",
          display: p.video ? undefined : "block",
        }}
      >
        {p.video ? (
          <div style={{ display: "flex", alignItems: "stretch", minHeight: 0 }} className="rsp-modal-video-inner">
            {/* Video — natural 9:16 */}
            <div style={{ flexShrink: 0, background: "#0a0a0a", borderRadius: "20px 0 0 20px", overflow: "hidden", display: "flex", alignItems: "center" }} className="rsp-modal-video-col">
              <video
                src={p.video}
                poster={p.img}
                controls
                playsInline
                preload="none"
                aria-label={`Vídeo do projeto ${p.title}`}
                style={{ display: "block", width: "100%", aspectRatio: "9/16" }}
              />
            </div>
            {/* Text panel */}
            <div className="rsp-modal-inner" style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#7B4520", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{p.cat}</div>
              <h3 id={`portfolio-modal-${p.id}`} className="font-display" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#2C1810", marginBottom: 20 }}>{p.title}</h3>
              {[{ label: "Contexto", text: p.context }, { label: "Objetivo", text: p.objective }, { label: "Estratégia", text: p.strategy }].map((item) => (
                <div key={item.label} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(44,24,16,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(44,24,16,0.65)" }}>{item.text}</p>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: "10px 14px", background: "rgba(123,69,32,0.06)", borderRadius: 12, border: "1px solid rgba(123,69,32,0.15)", marginBottom: 20 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: "#7B4520", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>Resultado</div>
                <p style={{ fontSize: 12, color: "rgba(44,24,16,0.45)" }}>{p.result ?? "Dados em breve · Portfólio em construção"}</p>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href={whatsappUrl(p.whatsappMessage)} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: 13 }} onClick={() => trackEvent("whatsapp_click", { location: "portfolio", project: p.title })}>
                  Quero um projeto assim <IconArrow />
                </a>
                <button type="button" className="btn-ghost" onClick={onClose} style={{ fontSize: 13 }} autoFocus>Fechar</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div style={{ height: 260, overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
              <img src={p.img} alt={p.alt} decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="rsp-modal-inner">
          <div style={{ fontSize: 10, fontWeight: 600, color: "#7B4520", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{p.cat}</div>
          <h3 id={`portfolio-modal-${p.id}`} className="font-display" style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#2C1810", marginBottom: 24 }}>
            {p.title}
          </h3>
              {[{ label: "Contexto", text: p.context }, { label: "Objetivo", text: p.objective }, { label: "Estratégia", text: p.strategy }].map((item) => (
                <div key={item.label} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(44,24,16,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>{item.label}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(44,24,16,0.65)" }}>{item.text}</p>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: "12px 16px", background: "rgba(123,69,32,0.06)", borderRadius: 12, border: "1px solid rgba(123,69,32,0.15)" }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: "#7B4520", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>Resultado</div>
                <p style={{ fontSize: 13, color: "rgba(44,24,16,0.45)" }}>{p.result ?? "Dados em breve · Portfólio em construção"}</p>
              </div>
              <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={whatsappUrl(p.whatsappMessage)} target="_blank" rel="noreferrer" className="btn-primary" onClick={() => trackEvent("whatsapp_click", { location: "portfolio", project: p.title })}>
                  Quero um projeto assim <IconArrow />
                </a>
                <button type="button" className="btn-ghost" onClick={onClose} autoFocus>Fechar</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Portfolio() {
  const [modal, setModal] = useState<Project | null>(null)

  useEffect(() => {
    if (!modal) {
      document.body.style.overflow = ""
      return
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModal(null)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [modal])

  return (
    <section id="portfolio" className="section-padding" style={{ background: "#EAE3D8" }}>
      <div className="rsp-wrap">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Portfólio</div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 58px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.08, color: "#2C1810", maxWidth: 520 }}>
            Conteúdo que fala antes mesmo de você.
          </h2>
        </div>

        <div className="portfolio-grid">
          <PortfolioCard p={projects[0]} delay={1} onOpen={setModal} />
          <PortfolioCard p={projects[1]} delay={2} onOpen={setModal} />
          <PortfolioCard p={projects[2]} delay={3} onOpen={setModal} />
          <PortfolioCard p={projects[3]} delay={1} onOpen={setModal} />
          <PortfolioCard p={projects[4]} delay={2} onOpen={setModal} />
          <PortfolioCard p={projects[5]} delay={3} onOpen={setModal} />
          <PortfolioCard p={projects[6]} delay={1} onOpen={setModal} />
          <PortfolioCard p={projects[7]} delay={2} onOpen={setModal} />
        </div>

        <div className="reveal" style={{ marginTop: 56, textAlign: "center" }}>
          <p className="font-display" style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "#2C1810", marginBottom: 20 }}>
            Quer ver mais projetos? Acesse meu portfólio.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1KXtCOn-6R90NLWan1pFJ2sF3RWPp0wS9"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            onClick={() => trackEvent("portfolio_external_click", { location: "portfolio_section" })}
          >
            Ver portfólio completo <IconArrow />
          </a>
        </div>
      </div>

      {modal && <PortfolioModal p={modal} onClose={() => setModal(null)} />}
    </section>
  )
}

// ─── Impact ───────────────────────────────────────────────────────────────────
function Impact() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold: 0.2 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const words = [
    "Seu",
    "Instagram",
    "pode",
    "ser",
    "muito",
    "mais",
    "do",
    "que",
    "um",
    "feed",
    "bonito.",
  ]

  return (
    <section
      className="rsp-impact"
      style={{
        background: "#2C1810",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />
      <div
        ref={ref}
        style={{
          maxWidth: 960,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          padding: "0 20px",
        }}
      >
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(32px, 6vw, 84px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          {words.map((w, i) => (
            <span
              key={i}
              className="impact-word"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
                color: ["Instagram", "mais"].includes(w)
                  ? "#A07252"
                  : "#F5EDE3",
                marginRight: "0.25em",
              }}
            >
              {w}
            </span>
          ))}
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: "clamp(15px, 2vw, 19px)",
            lineHeight: 1.7,
            color: "rgba(245,237,227,0.45)",
            maxWidth: 540,
            margin: "0 auto 44px",
          }}
        >
          Ele pode ser sua vitrine, sua história e uma ferramenta poderosa para
          fazer sua marca crescer de verdade.
        </p>
      </div>
    </section>
  )
}

// ─── CTA + Redes Sociais ──────────────────────────────────────────────────────
const socials = [
  {
    icon: <IconInstagram />,
    name: "Instagram",
    handle: "@vieira.maluu",
    desc: "Conteúdo, bastidores e projetos.",
    href: "https://instagram.com/vieira.maluu",
    color: "#C13584",
  },
  {
    icon: <IconTikTok />,
    name: "TikTok",
    handle: "@vieira.maluu",
    desc: "Conteúdo rápido e criativo.",
    href: "https://www.tiktok.com/@vieira.maluu?_r=1&_t=ZS-99atPoMQPVV",
    color: "#ff0050",
  },
  {
    icon: <IconPortfolio />,
    name: "Portfólio",
    handle: "Ver mais projetos",
    desc: "Conheça outros trabalhos e produções.",
    href: "https://drive.google.com/drive/folders/1KXtCOn-6R90NLWan1pFJ2sF3RWPp0wS9",
    color: "#7B4520",
  },
  {
    icon: <IconWhatsApp />,
    name: "WhatsApp",
    handle: "(11) 93241-7761",
    desc: "Fale comigo sobre seu projeto.",
    href: whatsappUrl(GENERAL_WHATSAPP_MESSAGE),
    color: "#25d366",
  },
]

const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbwj7B4cUtEknvub1D8yPUtbc8gmfq24qM7NYHkB6VjCxW5VY1-Lu-Db2Vopm-M1NyPd_Q/exec"

function CTAAndSocial() {
  const emptyForm = { nome: "", telefone: "", email: "", servico: "", mensagem: "" }
  const [form, setForm] = useState(emptyForm)
  const [website, setWebsite] = useState("")
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null)

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (website) return
    setSending(true)
    setStatus(null)
    try {
      const body = new URLSearchParams(form as Record<string, string>).toString()
      await fetch(SHEET_ENDPOINT, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      trackEvent("form_submit", { form: "contact" })
      setStatus({ type: "success", msg: "Enviado com sucesso! Em breve entraremos em contato." })
      setForm(emptyForm)
    } catch {
      setStatus({ type: "error", msg: "Erro ao enviar. Tente novamente." })
    } finally {
      setSending(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 10,
    border: "1px solid rgba(245,237,227,0.2)", background: "rgba(245,237,227,0.08)",
    fontSize: 14, color: "#F5EDE3", fontFamily: "Inter, sans-serif",
    outline: "none", transition: "border-color 0.2s",
  }
  const lbl = (t: string, id: string) => (
    <label htmlFor={id} style={{ display: "block", fontSize: 10, fontWeight: 600, color: "rgba(245,237,227,0.6)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>{t}</label>
  )
  const selectArrow = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23F5EDE3' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`

  return (
    <section
      id="contato"
      className="rsp-cta-pad"
      style={{
        background: "#7B4520",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />
      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,237,227,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* CTA + Form lado a lado */}
        <div className="rsp-cta-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", marginBottom: 64 }}>
          {/* Texto */}
          <div>
            <div className="reveal" style={{ marginBottom: 20 }}>
              <span className="tag" style={{ color: "rgba(245,237,227,0.65)", background: "rgba(245,237,227,0.1)", border: "1px solid rgba(245,237,227,0.15)" }}>
                Vamos começar?
              </span>
            </div>
            <h2 className="reveal delay-1 font-serif" style={{ fontSize: "clamp(28px, 4vw, 58px)", fontWeight: 700, fontStyle: "italic", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#F5EDE3", marginBottom: 18 }}>
              Pronta para transformar sua presença digital?
            </h2>
            <p className="reveal delay-2" style={{ fontSize: "clamp(14px, 1.6vw, 16px)", lineHeight: 1.75, color: "rgba(245,237,227,0.5)", marginBottom: 32 }}>
              Me conte sobre sua marca, seus objetivos e o que você quer construir. Preencha o formulário e entrarei em contato em breve.
            </p>
            <div className="reveal delay-3">
              <a href={whatsappUrl(GENERAL_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "14px 28px", fontSize: 14, background: "#F5EDE3", color: "#7B4520" }} onClick={() => trackEvent("whatsapp_click", { location: "contact_section" })}>
                Prefiro o WhatsApp <IconArrow />
              </a>
            </div>
          </div>

          {/* Formulário */}
          <form className="reveal delay-2" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="website">Não preencha este campo</label>
              <input id="website" name="website" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              {lbl("Nome completo", "nome")}
              <input id="nome" name="nome" type="text" required maxLength={120} autoComplete="name" placeholder="Nome completo" value={form.nome} onChange={(e) => set("nome", e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="rsp-form-row">
              <div>
                {lbl("Telefone / WhatsApp", "telefone")}
                <input id="telefone" name="telefone" type="tel" required maxLength={30} autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" value={form.telefone} onChange={(e) => set("telefone", e.target.value)} style={inputStyle} />
              </div>
              <div>
                {lbl("Seu melhor e-mail", "email")}
                <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" inputMode="email" placeholder="seu@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} style={inputStyle} />
              </div>
            </div>
            <div>
              {lbl("Serviço de interesse", "servico")}
              <select id="servico" name="servico" required value={form.servico} onChange={(e) => set("servico", e.target.value)}
                style={{ ...inputStyle, appearance: "none", backgroundImage: selectArrow, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 40, cursor: "pointer" }}>
                <option value="" disabled style={{ color: "#2C1810" }}>Selecione um serviço</option>
                <option value="Edição" style={{ color: "#2C1810" }}>Edição</option>
                <option value="Full Day | Dia de Gravação" style={{ color: "#2C1810" }}>Full Day | Dia de Gravação</option>
                <option value="Storymaker" style={{ color: "#2C1810" }}>Storymaker</option>
                <option value="Gestão de Instagram" style={{ color: "#2C1810" }}>Gestão de Instagram</option>
              </select>
            </div>
            <div>
              {lbl("Mensagem", "mensagem")}
              <textarea id="mensagem" name="mensagem" maxLength={2000} placeholder="Conte um pouco sobre seu projeto..." value={form.mensagem} onChange={(e) => set("mensagem", e.target.value)} rows={3}
                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} />
            </div>
            <button type="submit" disabled={sending}
              style={{ padding: "14px 24px", fontSize: 14, fontWeight: 700, fontFamily: "Bricolage Grotesque, sans-serif", background: "#F5EDE3", color: "#7B4520", border: "none", borderRadius: 10, cursor: sending ? "not-allowed" : "pointer", opacity: sending ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.2s" }}>
              {sending ? "Enviando..." : <>"Enviar mensagem" <IconArrow /></>}
            </button>
            {status && (
              <p role="status" aria-live="polite" style={{ textAlign: "center", fontSize: 12, lineHeight: 1.6, color: status.type === "success" ? "rgba(245,237,227,0.8)" : "#fca5a5", background: "rgba(245,237,227,0.06)", border: "1px solid rgba(245,237,227,0.12)", borderRadius: 8, padding: "10px 14px" }}>
                {status.msg}
              </p>
            )}
          </form>
        </div>

        {/* Divider */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div
            style={{ flex: 1, height: 1, background: "rgba(245,237,227,0.1)" }}
          />
          <div
            style={{ display: "flex", gap: 10, color: "rgba(245,237,227,0.2)" }}
          >
            <IconDiamond />
            <IconDiamond />
            <IconDiamond />
          </div>
          <div
            style={{ flex: 1, height: 1, background: "rgba(245,237,227,0.1)" }}
          />
        </div>

        {/* Social cards */}
        <div className="rsp-soc-grid">
          {socials.map((s, i) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={`reveal delay-${i + 1}`}
              onClick={() => trackEvent(s.name === "WhatsApp" ? "whatsapp_click" : "social_click", { location: "social_cards", network: s.name })}
              style={{
                display: "block",
                textDecoration: "none",
                padding: "24px 20px",
                background: "rgba(245,237,227,0.06)",
                borderRadius: 18,
                border: "1px solid rgba(245,237,227,0.1)",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245,237,227,0.1)"
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(245,237,227,0.06)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${s.color}22`,
                  border: `1px solid ${s.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s.color,
                  marginBottom: 16,
                }}
              >
                {s.icon}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  color: "#F5EDE3",
                  marginBottom: 3,
                }}
              >
                {s.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(245,237,227,0.35)",
                  marginBottom: 8,
                }}
              >
                {s.handle}
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "rgba(245,237,227,0.45)",
                }}
              >
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="rsp-footer"
      style={{ background: "#2C1810", borderTop: "1px solid rgba(245,237,227,0.06)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Brand block */}
        <div style={{ marginBottom: 32 }}>
          <div className="font-serif" style={{ fontSize: 22, fontWeight: 700, fontStyle: "italic", color: "#F5EDE3", marginBottom: 10 }}>
            Malu<span style={{ color: "#A07252" }}>.</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(245,237,227,0.35)", maxWidth: 280 }}>
            Conteúdo com estratégia. Marcas com presença.
          </p>
          <div style={{ marginTop: 14, display: "flex", gap: 8, color: "rgba(160,114,82,0.4)" }}>
            <IconDiamond /><IconDiamond /><IconDiamond />
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid rgba(245,237,227,0.06)", paddingTop: 20 }}>
          <p style={{ fontSize: 12, color: "rgba(245,237,227,0.5)" }}>
            © 2026 Malu Vieira. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: 12, color: "rgba(245,237,227,0.5)", marginTop: 6 }}>
            Desenvolvido por: V&amp;P TECH
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── WhatsApp Float ───────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(GENERAL_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Conversar pelo WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
    >
      <IconWhatsApp />
    </a>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal()
  return (
    <div style={{ background: "#F0EAE0", minHeight: "100%" }}>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Impact />
        <CTAAndSocial />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
