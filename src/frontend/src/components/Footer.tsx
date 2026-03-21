import { Link } from "@tanstack/react-router";
import {
  SiDiscord,
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiX,
} from "react-icons/si";
import {
  CREATE_URL,
  FOOTER_NAV_COLS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "../config/siteConfig";

const ICON_MAP: Record<string, React.ReactNode> = {
  facebook: <SiFacebook size={18} />,
  x: <SiX size={16} />,
  instagram: <SiInstagram size={18} />,
  discord: <SiDiscord size={18} />,
  tiktok: <SiTiktok size={18} />,
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#06080f",
        borderTop: "1px solid rgba(168,107,255,0.1)",
        padding: "60px clamp(20px,5vw,80px) 32px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <a
            href="/"
            data-ocid="footer.link"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#A86BFF",
              textDecoration: "none",
            }}
          >
            Galactic Dogs
          </a>
          <a
            href={CREATE_URL}
            target="_blank"
            rel="noreferrer"
            data-ocid="footer.primary_button"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              padding: "8px 20px",
              borderRadius: "100px",
              background: "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 100%)",
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            Create Your Dog
          </a>
        </div>

        {/* Nav columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {FOOTER_NAV_COLS.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(196,191,219,0.4)",
                  marginBottom: "16px",
                }}
              >
                {col.heading}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-ocid="footer.link"
                    title={link.href === "#" ? "Coming soon" : undefined}
                    style={{
                      color: "rgba(196,191,219,0.5)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#F0E8D8";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(196,191,219,0.5)";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(168,107,255,0.08)",
            marginBottom: "24px",
          }}
        />

        {/* Legal links — centered */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href as "/privacy" | "/terms"}
              data-ocid="footer.link"
              style={{
                color: "rgba(196,191,219,0.35)",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#F0E8D8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(196,191,219,0.35)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom bar — fully centered on all sizes */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            textAlign: "center",
          }}
        >
          {/* Social icons row */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={href === "#" ? `${label} — coming soon` : label}
                data-ocid="footer.link"
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noreferrer" : undefined}
                style={{
                  color: "rgba(196,191,219,0.4)",
                  transition: "color 0.2s, transform 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(168,107,255,0.06)",
                  border: "1px solid rgba(168,107,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "#A86BFF";
                  el.style.background = "rgba(168,107,255,0.15)";
                  el.style.borderColor = "rgba(168,107,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "rgba(196,191,219,0.4)";
                  el.style.background = "rgba(168,107,255,0.06)";
                  el.style.borderColor = "rgba(168,107,255,0.1)";
                }}
              >
                {ICON_MAP[icon]}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.72rem",
              color: "rgba(184,192,214,0.35)",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Galactic Dogs.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "rgba(168,107,255,0.45)",
                textDecoration: "none",
              }}
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
