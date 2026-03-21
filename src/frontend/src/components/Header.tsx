import { useState } from "react";
import { CREATE_URL, NAV_LINKS } from "../config/siteConfig";

const navChipStyle: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 500,
  fontSize: "0.8rem",
  letterSpacing: "0.02em",
  color: "rgba(196,191,219,0.75)",
  textDecoration: "none",
  padding: "6px 14px",
  borderRadius: "8px",
  background: "rgba(168,107,255,0.08)",
  border: "1px solid rgba(168,107,255,0.12)",
  transition: "background 0.2s, color 0.2s, border-color 0.2s",
  whiteSpace: "nowrap",
  display: "inline-block",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      data-ocid="nav.panel"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(16px, 4vw, 40px)",
        background: "rgba(6,8,15,0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(168,107,255,0.1)",
      }}
    >
      {/* Wordmark */}
      <a
        href="/"
        data-ocid="nav.link"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#A86BFF",
          textDecoration: "none",
          flexShrink: 0,
          marginRight: "8px",
        }}
      >
        Galactic Dogs
      </a>

      {/* Desktop nav */}
      <div
        className="hidden md:flex"
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          flexWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            data-ocid="nav.link"
            style={navChipStyle}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(168,107,255,0.18)";
              el.style.color = "#E0D5F5";
              el.style.borderColor = "rgba(168,107,255,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(168,107,255,0.08)";
              el.style.color = "rgba(196,191,219,0.75)";
              el.style.borderColor = "rgba(168,107,255,0.12)";
            }}
          >
            {label}
          </a>
        ))}
        {/* My Dogs — muted until gallery exists */}
        <span
          data-ocid="nav.link"
          title="Coming soon"
          style={{
            ...navChipStyle,
            opacity: 0.35,
            cursor: "default",
          }}
        >
          My Dogs
        </span>
        <a
          href={CREATE_URL}
          target="_blank"
          rel="noreferrer"
          data-ocid="nav.primary_button"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.8rem",
            padding: "7px 18px",
            borderRadius: "100px",
            background: "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 100%)",
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "0.03em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Create Your Dog
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="flex md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px",
          borderRadius: "6px",
          flexShrink: 0,
        }}
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          {menuOpen ? (
            <>
              <line
                x1="4"
                y1="4"
                x2="18"
                y2="18"
                stroke="#C4BFDB"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="18"
                y1="4"
                x2="4"
                y2="18"
                stroke="#C4BFDB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <line
                x1="2"
                y1="6"
                x2="20"
                y2="6"
                stroke="#C4BFDB"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="2"
                y1="11"
                x2="20"
                y2="11"
                stroke="#C4BFDB"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="2"
                y1="16"
                x2="20"
                y2="16"
                stroke="#C4BFDB"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            right: 0,
            background: "rgba(6,8,15,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(168,107,255,0.15)",
            padding: "20px clamp(16px,5vw,40px) 24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 49,
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-ocid="nav.link"
              onClick={() => setMenuOpen(false)}
              style={{
                ...navChipStyle,
                display: "block",
                textAlign: "center",
                fontSize: "0.9rem",
                padding: "10px 16px",
              }}
            >
              {label}
            </a>
          ))}
          <span
            title="Coming soon"
            style={{
              ...navChipStyle,
              display: "block",
              textAlign: "center",
              fontSize: "0.9rem",
              padding: "10px 16px",
              opacity: 0.3,
              cursor: "default",
            }}
          >
            My Dogs
          </span>
          <a
            href={CREATE_URL}
            target="_blank"
            rel="noreferrer"
            data-ocid="nav.primary_button"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "12px 20px",
              borderRadius: "100px",
              background: "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 100%)",
              color: "#fff",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              marginTop: "6px",
            }}
          >
            Create Your Dog
          </a>
        </div>
      )}
    </nav>
  );
}
