import { Link } from "@tanstack/react-router";
import {
  CREATE_URL,
  FOOTER_NAV_COLS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "../config/siteConfig";

function IconX() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M3 3 L15 15 M15 3 L3 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="14"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.03.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.78a4.85 4.85 0 01-1.07-.09z" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  x: <IconX />,
  instagram: <IconInstagram />,
  discord: <IconDiscord />,
  tiktok: <IconTikTok />,
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

        {/* Legal links row — using TanStack Router Link for internal routes */}
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

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
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

          {/* Social icons */}
          <div style={{ display: "flex", gap: "16px" }}>
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
                  color: "rgba(196,191,219,0.35)",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#A86BFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(196,191,219,0.35)";
                }}
              >
                {ICON_MAP[icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
