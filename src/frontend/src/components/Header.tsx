import { useState } from "react";
import { CREATE_URL, NAV_LINKS } from "../config/siteConfig";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      data-ocid="nav.panel"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(20px, 5vw, 40px)",
        background: "rgba(6,8,15,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
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
          fontSize: "0.85rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#A86BFF",
          textDecoration: "none",
          fontVariant: "small-caps",
        }}
      >
        Galactic Dogs
      </a>

      {/* Desktop nav */}
      <div
        style={{ display: "flex", gap: "28px", alignItems: "center" }}
        className="hidden md:flex"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="nav-link" data-ocid="nav.link">
            {label}
          </a>
        ))}
        {/* My Dogs — muted until gallery exists */}
        <span
          className="nav-link"
          title="Coming soon"
          style={{ opacity: 0.4, cursor: "default" }}
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
          padding: "4px",
        }}
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
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
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "56px",
            left: 0,
            right: 0,
            background: "rgba(6,8,15,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(168,107,255,0.12)",
            padding: "20px clamp(20px,5vw,40px)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 49,
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              data-ocid="nav.link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          {/* My Dogs — muted until gallery exists */}
          <span
            className="nav-link"
            title="Coming soon"
            style={{ opacity: 0.35, cursor: "default" }}
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
              fontSize: "0.85rem",
              padding: "10px 20px",
              borderRadius: "100px",
              background: "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 100%)",
              color: "#fff",
              textDecoration: "none",
              display: "inline-block",
              width: "fit-content",
            }}
          >
            Create Your Dog
          </a>
        </div>
      )}
    </nav>
  );
}
