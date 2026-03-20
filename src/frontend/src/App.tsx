import { useEffect, useRef, useState } from "react";

/* ============================================================
   STAR DATA
   ============================================================ */
const STARS = Array.from({ length: 85 }, (_, i) => ({
  id: i,
  x: Math.floor(Math.random() * 10000) / 100,
  y: Math.floor(Math.random() * 10000) / 100,
  size: Math.random() < 0.15 ? 2 : 1,
  duration: 2 + Math.random() * 3,
  delay: Math.random() * 5,
}));

/* ============================================================
   BONE DATA
   ============================================================ */
const BONES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: Math.floor(Math.random() * 9200) / 100,
  y: Math.floor(Math.random() * 9500) / 100,
  size: 20 + Math.random() * 40,
  duration: 10 + Math.random() * 10,
  delay: -(Math.random() * 10),
  rotate: Math.random() * 360,
}));

/* ============================================================
   MILK BONE SVG
   ============================================================ */
function MilkBone({ size }: { size: number }) {
  return (
    <svg
      role="img"
      aria-label="Decorative milk bone"
      width={size}
      height={size * 0.55}
      viewBox="0 0 80 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="12" r="9" fill="#D07CFF" opacity="0.8" />
      <circle cx="10" cy="32" r="9" fill="#D07CFF" opacity="0.8" />
      <circle cx="70" cy="12" r="9" fill="#D07CFF" opacity="0.8" />
      <circle cx="70" cy="32" r="9" fill="#D07CFF" opacity="0.8" />
      <rect
        x="12"
        y="14"
        width="56"
        height="16"
        rx="3"
        fill="#F2A6FF"
        opacity="0.9"
      />
      <rect x="12" y="14" width="56" height="16" rx="3" fill="url(#boneGlow)" />
      <defs>
        <linearGradient id="boneGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D07CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ============================================================
   DOG SVGs
   ============================================================ */
function DogKozmo() {
  return (
    <svg
      role="img"
      aria-label="Blaze the space dog"
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="80"
        cy="140"
        rx="48"
        ry="52"
        fill="#1a1060"
        stroke="#59D6FF"
        strokeWidth="2"
      />
      <circle
        cx="80"
        cy="72"
        r="44"
        fill="#0d0830"
        stroke="#59D6FF"
        strokeWidth="2.5"
      />
      <circle cx="80" cy="72" r="44" fill="url(#helmetGlassK)" />
      <ellipse
        cx="68"
        cy="58"
        rx="14"
        ry="8"
        fill="#59D6FF"
        opacity="0.15"
        transform="rotate(-15 68 58)"
      />
      <ellipse cx="80" cy="76" rx="28" ry="26" fill="#C47D3C" />
      <ellipse
        cx="55"
        cy="60"
        rx="10"
        ry="16"
        fill="#9B5E2A"
        transform="rotate(-15 55 60)"
      />
      <ellipse
        cx="105"
        cy="60"
        rx="10"
        ry="16"
        fill="#9B5E2A"
        transform="rotate(15 105 60)"
      />
      <ellipse cx="80" cy="88" rx="14" ry="11" fill="#A8602A" />
      <ellipse cx="80" cy="82" rx="5" ry="3.5" fill="#1a1060" />
      <circle cx="68" cy="72" r="5" fill="white" />
      <circle cx="92" cy="72" r="5" fill="white" />
      <circle cx="69" cy="72" r="3" fill="#1a1060" />
      <circle cx="93" cy="72" r="3" fill="#1a1060" />
      <circle cx="70" cy="71" r="1" fill="white" />
      <circle cx="94" cy="71" r="1" fill="white" />
      <ellipse cx="80" cy="96" rx="5" ry="6" fill="#FF6B8A" />
      <path
        d="M75 92 Q80 96 85 92"
        stroke="#7a4020"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="60"
        y="118"
        width="40"
        height="28"
        rx="6"
        fill="#0d0830"
        stroke="#3AA8FF"
        strokeWidth="1.5"
      />
      <circle cx="70" cy="130" r="4" fill="#59D6FF" opacity="0.7" />
      <circle cx="80" cy="130" r="4" fill="#A86BFF" opacity="0.7" />
      <circle cx="90" cy="130" r="4" fill="#FF5AD6" opacity="0.7" />
      <ellipse
        cx="40"
        cy="140"
        rx="12"
        ry="28"
        fill="#1a1060"
        stroke="#59D6FF"
        strokeWidth="1.5"
        transform="rotate(10 40 140)"
      />
      <ellipse
        cx="120"
        cy="140"
        rx="12"
        ry="28"
        fill="#1a1060"
        stroke="#59D6FF"
        strokeWidth="1.5"
        transform="rotate(-10 120 140)"
      />
      <ellipse cx="33" cy="162" rx="11" ry="9" fill="#59D6FF" opacity="0.8" />
      <ellipse cx="127" cy="162" rx="11" ry="9" fill="#59D6FF" opacity="0.8" />
      <ellipse
        cx="62"
        cy="182"
        rx="14"
        ry="16"
        fill="#1a1060"
        stroke="#59D6FF"
        strokeWidth="1.5"
      />
      <ellipse
        cx="98"
        cy="182"
        rx="14"
        ry="16"
        fill="#1a1060"
        stroke="#59D6FF"
        strokeWidth="1.5"
      />
      <ellipse
        cx="62"
        cy="194"
        rx="16"
        ry="8"
        fill="#0a0720"
        stroke="#59D6FF"
        strokeWidth="1"
      />
      <ellipse
        cx="98"
        cy="194"
        rx="16"
        ry="8"
        fill="#0a0720"
        stroke="#59D6FF"
        strokeWidth="1"
      />
      <path
        d="M128 155 Q148 140 144 120 Q140 102 132 110"
        stroke="#C47D3C"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="helmetGlassK" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#59D6FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#050611" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function DogNova() {
  return (
    <svg
      role="img"
      aria-label="Nova the space dog"
      width="180"
      height="220"
      viewBox="0 0 180 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="90"
        cy="158"
        rx="54"
        ry="56"
        fill="#18064a"
        stroke="#A86BFF"
        strokeWidth="2.5"
      />
      <circle
        cx="90"
        cy="80"
        r="50"
        fill="#0d0830"
        stroke="#A86BFF"
        strokeWidth="3"
      />
      <circle cx="90" cy="80" r="50" fill="url(#helmetGlassN)" />
      <ellipse
        cx="76"
        cy="64"
        rx="16"
        ry="9"
        fill="#A86BFF"
        opacity="0.18"
        transform="rotate(-12 76 64)"
      />
      <ellipse cx="90" cy="84" rx="32" ry="30" fill="#E8E0D0" />
      <ellipse cx="72" cy="80" rx="10" ry="8" fill="#B0A090" opacity="0.7" />
      <ellipse cx="108" cy="88" rx="7" ry="6" fill="#B0A090" opacity="0.7" />
      <ellipse
        cx="62"
        cy="66"
        rx="12"
        ry="20"
        fill="#D4C8B0"
        transform="rotate(-20 62 66)"
      />
      <ellipse
        cx="118"
        cy="66"
        rx="12"
        ry="20"
        fill="#D4C8B0"
        transform="rotate(20 118 66)"
      />
      <ellipse cx="90" cy="98" rx="16" ry="12" fill="#ccc0a8" />
      <ellipse cx="90" cy="90" rx="6" ry="4.5" fill="#2a1a4a" />
      <circle cx="76" cy="78" r="7" fill="white" />
      <circle cx="104" cy="78" r="7" fill="white" />
      <circle cx="77" cy="79" r="4.5" fill="#2a1a4a" />
      <circle cx="105" cy="79" r="4.5" fill="#2a1a4a" />
      <circle cx="78" cy="77" r="1.5" fill="white" />
      <circle cx="106" cy="77" r="1.5" fill="white" />
      <path
        d="M90 58 L92 64 L98 64 L93 68 L95 74 L90 70 L85 74 L87 68 L82 64 L88 64 Z"
        fill="#FF5AD6"
        opacity="0.9"
      />
      <path
        d="M80 104 Q90 112 100 104"
        stroke="#8a7a5a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="90" cy="110" rx="6" ry="7" fill="#FF6B8A" />
      <rect
        x="66"
        y="130"
        width="48"
        height="34"
        rx="8"
        fill="#0d0830"
        stroke="#A86BFF"
        strokeWidth="1.5"
      />
      <rect
        x="72"
        y="136"
        width="36"
        height="6"
        rx="3"
        fill="#A86BFF"
        opacity="0.5"
      />
      <rect
        x="72"
        y="146"
        width="24"
        height="6"
        rx="3"
        fill="#FF5AD6"
        opacity="0.4"
      />
      <ellipse
        cx="44"
        cy="158"
        rx="14"
        ry="30"
        fill="#18064a"
        stroke="#A86BFF"
        strokeWidth="2"
        transform="rotate(8 44 158)"
      />
      <ellipse
        cx="136"
        cy="158"
        rx="14"
        ry="30"
        fill="#18064a"
        stroke="#A86BFF"
        strokeWidth="2"
        transform="rotate(-8 136 158)"
      />
      <ellipse cx="36" cy="182" rx="13" ry="10" fill="#A86BFF" opacity="0.8" />
      <ellipse cx="144" cy="182" rx="13" ry="10" fill="#A86BFF" opacity="0.8" />
      <ellipse
        cx="70"
        cy="202"
        rx="16"
        ry="18"
        fill="#18064a"
        stroke="#A86BFF"
        strokeWidth="1.5"
      />
      <ellipse
        cx="110"
        cy="202"
        rx="16"
        ry="18"
        fill="#18064a"
        stroke="#A86BFF"
        strokeWidth="1.5"
      />
      <ellipse
        cx="70"
        cy="215"
        rx="18"
        ry="9"
        fill="#0a0420"
        stroke="#A86BFF"
        strokeWidth="1"
      />
      <ellipse
        cx="110"
        cy="215"
        rx="18"
        ry="9"
        fill="#0a0420"
        stroke="#A86BFF"
        strokeWidth="1"
      />
      <defs>
        <radialGradient id="helmetGlassN" cx="38%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#A86BFF" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#050611" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function DogBlaze() {
  return (
    <svg
      role="img"
      aria-label="Blaze the space dog"
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="80"
        cy="140"
        rx="48"
        ry="52"
        fill="#0a1a40"
        stroke="#3AA8FF"
        strokeWidth="2"
      />
      <circle
        cx="80"
        cy="72"
        r="44"
        fill="#060e28"
        stroke="#3AA8FF"
        strokeWidth="2.5"
      />
      <circle cx="80" cy="72" r="44" fill="url(#helmetGlassB)" />
      <ellipse
        cx="67"
        cy="57"
        rx="13"
        ry="7"
        fill="#3AA8FF"
        opacity="0.2"
        transform="rotate(-10 67 57)"
      />
      <ellipse cx="80" cy="76" rx="29" ry="27" fill="#D4922A" />
      <ellipse cx="56" cy="84" rx="9" ry="7" fill="#E8A840" opacity="0.8" />
      <ellipse cx="104" cy="84" rx="9" ry="7" fill="#E8A840" opacity="0.8" />
      <ellipse
        cx="54"
        cy="62"
        rx="11"
        ry="18"
        fill="#B87820"
        transform="rotate(-18 54 62)"
      />
      <ellipse
        cx="106"
        cy="62"
        rx="11"
        ry="18"
        fill="#B87820"
        transform="rotate(18 106 62)"
      />
      <ellipse cx="80" cy="89" rx="15" ry="11" fill="#C07820" />
      <ellipse cx="80" cy="82" rx="5.5" ry="4" fill="#0d0830" />
      <circle cx="67" cy="71" r="5.5" fill="white" />
      <circle cx="93" cy="71" r="5.5" fill="white" />
      <circle cx="68" cy="72" r="3.5" fill="#1a0840" />
      <circle cx="94" cy="72" r="3.5" fill="#1a0840" />
      <circle cx="69" cy="70" r="1.2" fill="white" />
      <circle cx="95" cy="70" r="1.2" fill="white" />
      <path
        d="M73 94 Q80 100 87 94"
        stroke="#7a4010"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="80" cy="99" rx="6" ry="7.5" fill="#FF6B8A" />
      <line
        x1="80"
        y1="96"
        x2="80"
        y2="106"
        stroke="#e0506a"
        strokeWidth="1.5"
      />
      <rect
        x="60"
        y="118"
        width="40"
        height="28"
        rx="6"
        fill="#060e28"
        stroke="#3AA8FF"
        strokeWidth="1.5"
      />
      <rect x="64" y="122" width="32" height="18" rx="4" fill="#0d2060" />
      <path
        d="M68 138 L72 128 L77 135 L81 130 L86 138"
        stroke="#59D6FF"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx="40"
        cy="140"
        rx="12"
        ry="28"
        fill="#0a1a40"
        stroke="#3AA8FF"
        strokeWidth="1.5"
        transform="rotate(12 40 140)"
      />
      <ellipse
        cx="120"
        cy="140"
        rx="12"
        ry="28"
        fill="#0a1a40"
        stroke="#3AA8FF"
        strokeWidth="1.5"
        transform="rotate(-12 120 140)"
      />
      <ellipse cx="31" cy="163" rx="12" ry="9" fill="#3AA8FF" opacity="0.75" />
      <ellipse cx="129" cy="163" rx="12" ry="9" fill="#3AA8FF" opacity="0.75" />
      <ellipse
        cx="62"
        cy="182"
        rx="14"
        ry="16"
        fill="#0a1a40"
        stroke="#3AA8FF"
        strokeWidth="1.5"
      />
      <ellipse
        cx="98"
        cy="182"
        rx="14"
        ry="16"
        fill="#0a1a40"
        stroke="#3AA8FF"
        strokeWidth="1.5"
      />
      <ellipse
        cx="62"
        cy="194"
        rx="16"
        ry="8"
        fill="#040c20"
        stroke="#3AA8FF"
        strokeWidth="1"
      />
      <ellipse
        cx="98"
        cy="194"
        rx="16"
        ry="8"
        fill="#040c20"
        stroke="#3AA8FF"
        strokeWidth="1"
      />
      <path
        d="M32 155 Q12 140 16 118 Q20 98 28 108"
        stroke="#D4922A"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="helmetGlassB" cx="38%" cy="33%" r="60%">
          <stop offset="0%" stopColor="#3AA8FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#050611" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ============================================================
   ICONS
   ============================================================ */
function IconPaw({ color = "#A86BFF" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <ellipse cx="9" cy="8" rx="3.5" ry="4.5" fill={color} opacity="0.9" />
      <ellipse cx="19" cy="8" rx="3.5" ry="4.5" fill={color} opacity="0.9" />
      <ellipse cx="5" cy="14" rx="2.5" ry="3.5" fill={color} opacity="0.7" />
      <ellipse cx="23" cy="14" rx="2.5" ry="3.5" fill={color} opacity="0.7" />
      <ellipse cx="14" cy="18" rx="7" ry="6" fill={color} />
    </svg>
  );
}

function IconPalette({ color = "#FF5AD6" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <circle
        cx="14"
        cy="14"
        r="10"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="9" cy="11" r="2.5" fill={color} opacity="0.9" />
      <circle cx="14" cy="7" r="2.5" fill={color} opacity="0.9" />
      <circle cx="19" cy="11" r="2.5" fill={color} opacity="0.9" />
      <path
        d="M14 18 Q18 20 20 17"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTag({ color = "#59D6FF" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M6 6h10l8 8-10 10L6 16V6z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2" fill={color} />
    </svg>
  );
}

function IconLightning({ color = "#D4A853" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M16 4 L10 15 L15 15 L12 24 L22 12 L17 12 L22 4 Z"
        fill={color}
        opacity="0.9"
      />
    </svg>
  );
}

function IconRocket({ color = "#A86BFF" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M14 4 C14 4 20 8 20 16 L16 20 L12 20 L8 16 C8 8 14 4 14 4Z"
        fill={color}
        opacity="0.85"
      />
      <ellipse cx="14" cy="13" rx="3" ry="3" fill="white" opacity="0.6" />
      <path d="M10 20 L7 24 L12 22" fill={color} opacity="0.6" />
      <path d="M18 20 L21 24 L16 22" fill={color} opacity="0.6" />
    </svg>
  );
}

function IconPencil({ color = "#59D6FF" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect
        x="6"
        y="14"
        width="16"
        height="8"
        rx="2"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M10 14 L14 6 L18 14"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="10" y1="18" x2="18" y2="18" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function IconImage({ color = "#FF5AD6" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect
        x="4"
        y="6"
        width="20"
        height="16"
        rx="3"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="10" cy="12" r="2" fill={color} opacity="0.8" />
      <path
        d="M4 20 L10 14 L15 18 L19 14 L24 20"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCalendar({ color = "#D4A853" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect
        x="4"
        y="8"
        width="20"
        height="16"
        rx="3"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <line x1="4" y1="13" x2="24" y2="13" stroke={color} strokeWidth="1.5" />
      <line
        x1="10"
        y1="5"
        x2="10"
        y2="10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="5"
        x2="18"
        y2="10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="18" r="1.5" fill={color} opacity="0.8" />
      <circle cx="14" cy="18" r="1.5" fill={color} opacity="0.8" />
      <circle cx="18" cy="18" r="1.5" fill={color} opacity="0.8" />
    </svg>
  );
}

function IconCompass({ color = "#A86BFF" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <circle
        cx="14"
        cy="14"
        r="10"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path d="M14 6 L16 14 L14 22 L12 14 Z" fill={color} opacity="0.4" />
      <path d="M6 14 L14 12 L22 14 L14 16 Z" fill={color} opacity="0.9" />
    </svg>
  );
}

/* ============================================================
   NAVBAR
   ============================================================ */
function Navbar() {
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
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
        className="hidden md:flex"
      >
        {" "}
        {[
          ["How It Works", "#how-it-works"],
          ["Breeds", "#breeds"],
          ["Community", "#community"],
          ["Join The Pack", "#join"],
        ].map(([label, href]) => (
          <a key={label} href={href} className="nav-link" data-ocid="nav.link">
            {label}
          </a>
        ))}
        <a
          href="#join"
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
    </nav>
  );
}

/* ============================================================
   HERO SECTION
   ============================================================ */
function HeroSection({
  starsRef,
  bonesRef,
}: {
  starsRef: React.MutableRefObject<typeof STARS>;
  bonesRef: React.MutableRefObject<typeof BONES>;
}) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #050611 0%, #080b1a 40%, #0B0F20 100%)",
        minHeight: "100svh",
      }}
    >
      {/* Nebula layers */}
      <div
        className="pointer-events-none absolute inset-0 nebula-glow"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(107,43,217,0.38) 0%, rgba(155,77,255,0.18) 40%, transparent 75%)," +
            "radial-gradient(ellipse 40% 35% at 65% 45%, rgba(209,76,255,0.22) 0%, transparent 60%)," +
            "radial-gradient(ellipse 30% 25% at 35% 42%, rgba(255,90,214,0.14) 0%, transparent 55%)",
        }}
      />

      {/* Stars */}
      {starsRef.current.map((star) => (
        <div
          key={star.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.id % 5 === 0 ? "#CFE8FF" : "#FFFFFF",
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            opacity: 0.4,
          }}
        />
      ))}

      {/* Floating milk bones */}
      {bonesRef.current.map((bone) => (
        <div
          key={bone.id}
          className="pointer-events-none absolute"
          style={{
            left: `${bone.x}%`,
            top: `${bone.y}%`,
            animation: `drift ${bone.duration}s ease-in-out infinite`,
            animationDelay: `${bone.delay}s`,
            transform: `rotate(${bone.rotate}deg)`,
            opacity: 0.55,
            filter: "drop-shadow(0 0 6px rgba(210,124,255,0.7))",
          }}
        >
          <MilkBone size={bone.size} />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        {/* Title */}
        <div
          className="animate-fade-up mb-10 text-center"
          style={{ animationDelay: "0.1s" }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#A86BFF",
            }}
          >
            Galactic Dogs
          </span>
        </div>

        {/* Dogs row */}
        <div
          className="animate-fade-up relative flex items-end justify-center"
          style={{
            animationDelay: "0.3s",
            gap: "clamp(0px, 4vw, 48px)",
            marginBottom: "clamp(32px, 6vh, 72px)",
          }}
        >
          {/* Kozmo */}
          <div
            className="flex flex-col items-center"
            style={{ marginBottom: "32px" }}
          >
            <div
              className="animate-float1"
              style={{
                filter: "drop-shadow(0 0 16px rgba(89,214,255,0.3))",
                opacity: 0.6,
              }}
            >
              <DogKozmo />
            </div>
            <span
              className="dog-label mt-2 text-xs font-semibold uppercase tracking-widest"
              style={{
                color: "#59D6FF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textShadow: "0 0 12px rgba(89,214,255,0.8)",
                opacity: 0.6,
              }}
            >
              Kozmo
            </span>
          </div>

          {/* Nova -- center */}
          <div
            className="flex flex-col items-center"
            style={{ marginBottom: "0px" }}
          >
            <div
              className="pointer-events-none absolute"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse at center, rgba(168,107,255,0.28) 0%, rgba(255,90,214,0.12) 50%, transparent 75%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                zIndex: -1,
              }}
            />
            <div
              className="animate-float2"
              style={{
                filter:
                  "drop-shadow(0 0 40px rgba(168,107,255,0.85)) drop-shadow(0 0 80px rgba(168,107,255,0.4)) brightness(1.15)",
              }}
            >
              <div style={{ transform: "scale(1.18)" }}>
                <DogNova />
              </div>
            </div>
            <span
              className="dog-label mt-2 text-xs font-semibold uppercase tracking-widest"
              style={{
                color: "#A86BFF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textShadow: "0 0 12px rgba(168,107,255,0.8)",
              }}
            >
              Nova
            </span>
          </div>

          {/* Blaze */}
          <div
            className="flex flex-col items-center"
            style={{ marginBottom: "28px" }}
          >
            <div
              className="animate-float3"
              style={{
                filter: "drop-shadow(0 0 16px rgba(58,168,255,0.3))",
                opacity: 0.6,
              }}
            >
              <DogBlaze />
            </div>
            <span
              className="dog-label mt-2 text-xs font-semibold uppercase tracking-widest"
              style={{
                color: "#3AA8FF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textShadow: "0 0 12px rgba(58,168,255,0.8)",
                opacity: 0.6,
              }}
            >
              Blaze
            </span>
          </div>
        </div>

        {/* Hero copy */}
        <div
          className="animate-fade-up mx-auto max-w-3xl text-center"
          style={{ animationDelay: "0.6s" }}
        >
          <h1
            className="mb-5 leading-none tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
              color: "#FFFFFF",
              textShadow:
                "0 0 40px rgba(168,107,255,0.6), 0 0 80px rgba(107,43,217,0.3)",
              letterSpacing: "-0.02em",
            }}
          >
            Create Your Dog
          </h1>
          <p
            className="mx-auto max-w-lg leading-relaxed"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              color: "#D0C8E8",
              letterSpacing: "0.01em",
              marginBottom: "0.5rem",
            }}
          >
            Choose a breed. Name it. Own it.
          </p>
          <p
            className="mx-auto max-w-lg leading-relaxed"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
              color: "rgba(184,192,214,0.7)",
              letterSpacing: "0.01em",
            }}
          >
            Mint your own custom digital dog in seconds.
          </p>
        </div>

        {/* Primary CTA */}
        <div
          className="animate-fade-up mt-8"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            data-ocid="hero.primary_button"
            type="button"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "14px 40px",
              borderRadius: "100px",
              background: "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 100%)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.04em",
              boxShadow:
                "0 0 32px rgba(168,107,255,0.5), 0 0 64px rgba(255,90,214,0.2)",
            }}
          >
            Create Your Dog
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className="animate-fade-up mt-16"
          style={{
            animationDelay: "0.9s",
            width: "1px",
            height: "60px",
            background:
              "linear-gradient(to bottom, transparent, rgba(168,107,255,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */
const HOW_STEPS = [
  {
    num: "01",
    icon: <IconPaw color="#A86BFF" />,
    title: "Choose Your Breed",
    desc: "Pick from six handcrafted starter breeds. Each one has its own look, personality, and trait palette.",
  },
  {
    num: "02",
    icon: <IconPalette color="#FF5AD6" />,
    title: "Customize Traits",
    desc: "Mix coat colors, eye styles, and markings. Every combination is unique — yours to keep.",
  },
  {
    num: "03",
    icon: <IconTag color="#59D6FF" />,
    title: "Name Your Dog",
    desc: "Give your dog a name that sticks. It becomes part of your dog's identity forever.",
  },
  {
    num: "04",
    icon: <IconLightning color="#D4A853" />,
    title: "Mint Instantly",
    desc: "Confirm and your dog is created on-chain in seconds. It lives in your collection, owned by you.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ background: "#090c1a", padding: "100px clamp(20px,5vw,80px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label" style={{ color: "#A86BFF" }}>
            The Process
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F0E8D8",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Four steps to your dog
          </h2>
          <p style={{ color: "#C4BFDB", fontSize: "1.05rem", opacity: 0.8 }}>
            Simple by design. Personal by nature.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {HOW_STEPS.map((step) => (
            <div
              key={step.num}
              className="card-hover"
              style={{
                background: "rgba(13,18,37,0.8)",
                border: "1px solid rgba(168,107,255,0.15)",
                borderRadius: "16px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "18px",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: "3.5rem",
                  color: "rgba(168,107,255,0.12)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>
              <div style={{ marginBottom: "16px", marginTop: "32px" }}>
                {step.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#F0E8D8",
                  margin: "0 0 10px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "#C4BFDB",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BREED PREVIEW
   ============================================================ */
const BREEDS = [
  {
    name: "Husky",
    rarity: "Rare",
    traits: 28,
    color: "#59D6FF",
    bg: "rgba(89,214,255,0.08)",
    initials: "HK",
    emoji: "🐺",
  },
  {
    name: "Golden Retriever",
    rarity: "Common",
    traits: 24,
    color: "#D4A853",
    bg: "rgba(212,168,83,0.08)",
    initials: "GR",
    emoji: "🐕",
  },
  {
    name: "Shiba Inu",
    rarity: "Rare",
    traits: 26,
    color: "#FF8A3D",
    bg: "rgba(255,138,61,0.08)",
    initials: "SI",
    emoji: "🦊",
  },
  {
    name: "Corgi",
    rarity: "Common",
    traits: 22,
    color: "#FFD166",
    bg: "rgba(255,209,102,0.08)",
    initials: "CG",
    emoji: "🐾",
  },
  {
    name: "Dalmatian",
    rarity: "Epic",
    traits: 32,
    color: "#C4BFDB",
    bg: "rgba(196,191,219,0.08)",
    initials: "DL",
    emoji: "🔵",
  },
  {
    name: "Border Collie",
    rarity: "Epic",
    traits: 30,
    color: "#A86BFF",
    bg: "rgba(168,107,255,0.08)",
    initials: "BC",
    emoji: "⭐",
  },
];

const RARITY_COLORS: Record<string, string> = {
  Common: "rgba(196,191,219,0.15)",
  Rare: "rgba(89,214,255,0.15)",
  Epic: "rgba(168,107,255,0.2)",
};
const RARITY_TEXT: Record<string, string> = {
  Common: "#C4BFDB",
  Rare: "#59D6FF",
  Epic: "#A86BFF",
};

function BreedPreview() {
  return (
    <section
      id="breeds"
      style={{ background: "#06080f", padding: "100px clamp(20px,5vw,80px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label" style={{ color: "#D4A853" }}>
            Starter Breeds
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F0E8D8",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Find your companion
          </h2>
          <p style={{ color: "#C4BFDB", fontSize: "1.05rem", opacity: 0.8 }}>
            Six breeds. Infinite combinations.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {BREEDS.map((breed, i) => (
            <div
              key={breed.name}
              data-ocid={`breeds.item.${i + 1}`}
              className="card-hover"
              style={{
                background: "rgba(13,18,37,0.7)",
                border: "1px solid rgba(168,107,255,0.15)",
                borderRadius: "20px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Avatar */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background: breed.bg,
                    border: `1.5px solid ${breed.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    flexShrink: 0,
                  }}
                >
                  {breed.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#F0E8D8",
                      }}
                    >
                      {breed.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        padding: "2px 8px",
                        borderRadius: "100px",
                        background: "rgba(168,107,255,0.15)",
                        color: "#A86BFF",
                        textTransform: "uppercase",
                      }}
                    >
                      Starter
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "rgba(196,191,219,0.55)",
                    }}
                  >
                    {breed.traits} trait combinations
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "3px",
                    borderRadius: "2px",
                    background: `linear-gradient(90deg, ${breed.color}60 0%, transparent 100%)`,
                    marginRight: "12px",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    background: RARITY_COLORS[breed.rarity],
                    color: RARITY_TEXT[breed.rarity],
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {breed.rarity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRAIT CUSTOMIZATION
   ============================================================ */
function TraitCustomization() {
  const COAT_COLORS = [
    "#C47D3C",
    "#6B7280",
    "#F0E8D8",
    "#1a1a1a",
    "#B85C2C",
    "#A86BFF",
  ];
  const EYE_STYLES = [
    {
      label: "Piercing",
      icon: (
        <svg aria-hidden="true" width="32" height="20" viewBox="0 0 32 20">
          <ellipse
            cx="16"
            cy="10"
            rx="14"
            ry="8"
            stroke="#F0E8D8"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="16" cy="10" r="5" fill="#59D6FF" opacity="0.9" />
          <circle cx="16" cy="10" r="3" fill="#090c1a" />
          <circle cx="17.5" cy="8.5" r="1" fill="white" opacity="0.8" />
        </svg>
      ),
    },
    {
      label: "Dreamy",
      icon: (
        <svg aria-hidden="true" width="32" height="20" viewBox="0 0 32 20">
          <path
            d="M2 10 Q16 2 30 10"
            stroke="#F0E8D8"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse
            cx="16"
            cy="11"
            rx="10"
            ry="6"
            fill="#A86BFF"
            opacity="0.4"
          />
          <circle cx="16" cy="10" r="3" fill="#A86BFF" opacity="0.9" />
        </svg>
      ),
    },
    {
      label: "Curious",
      icon: (
        <svg aria-hidden="true" width="32" height="20" viewBox="0 0 32 20">
          <circle
            cx="16"
            cy="10"
            r="8"
            stroke="#FF5AD6"
            strokeWidth="1.5"
            fill="rgba(255,90,214,0.08)"
          />
          <circle cx="16" cy="10" r="4" fill="#FF5AD6" opacity="0.9" />
          <circle cx="18" cy="8" r="1.5" fill="white" opacity="0.8" />
        </svg>
      ),
    },
    {
      label: "Cosmic",
      icon: (
        <svg aria-hidden="true" width="32" height="20" viewBox="0 0 32 20">
          <ellipse
            cx="16"
            cy="10"
            rx="13"
            ry="7"
            stroke="#D4A853"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse cx="16" cy="10" rx="6" ry="4" fill="#D4A853" opacity="0.7" />
          <line
            x1="10"
            y1="10"
            x2="22"
            y2="10"
            stroke="#D4A853"
            strokeWidth="0.8"
            opacity="0.5"
          />
        </svg>
      ),
    },
  ];
  const MARKINGS = ["Spots", "Stripes", "Stars", "Patches"];

  return (
    <section
      style={{ background: "#090c1a", padding: "100px clamp(20px,5vw,80px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label" style={{ color: "#FF5AD6" }}>
            Make It Yours
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F0E8D8",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Every dog is one of a kind
          </h2>
          <p
            style={{
              color: "#C4BFDB",
              fontSize: "1.05rem",
              opacity: 0.8,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Mix traits across three dimensions to create something entirely
            yours.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {/* Coat Color */}
          <div
            className="warm-card-hover"
            style={{
              background: "rgba(20,17,10,0.9)",
              border: "1px solid rgba(210,180,120,0.2)",
              borderRadius: "20px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#F0E8D8",
                margin: "0 0 8px",
              }}
            >
              Coat Color
            </h3>
            <p
              style={{
                color: "rgba(196,191,219,0.6)",
                fontSize: "0.85rem",
                marginBottom: "24px",
              }}
            >
              18 coat colorways, from classic to rare.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {COAT_COLORS.map((c) => (
                <div
                  key={c}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid rgba(210,180,120,0.25)",
                    boxShadow: `0 0 8px ${c}40`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Eye Style */}
          <div
            className="warm-card-hover"
            style={{
              background: "rgba(20,17,10,0.9)",
              border: "1px solid rgba(210,180,120,0.2)",
              borderRadius: "20px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#F0E8D8",
                margin: "0 0 8px",
              }}
            >
              Eye Style
            </h3>
            <p
              style={{
                color: "rgba(196,191,219,0.6)",
                fontSize: "0.85rem",
                marginBottom: "24px",
              }}
            >
              Piercing, curious, dreamy — 12 eye styles.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {EYE_STYLES.map((eye) => (
                <div
                  key={eye.label}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "10px",
                    padding: "10px 12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(210,180,120,0.1)",
                  }}
                >
                  {eye.icon}
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(196,191,219,0.6)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {eye.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Markings */}
          <div
            className="warm-card-hover"
            style={{
              background: "rgba(20,17,10,0.9)",
              border: "1px solid rgba(210,180,120,0.2)",
              borderRadius: "20px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#F0E8D8",
                margin: "0 0 8px",
              }}
            >
              Markings & Patterns
            </h3>
            <p
              style={{
                color: "rgba(196,191,219,0.6)",
                fontSize: "0.85rem",
                marginBottom: "24px",
              }}
            >
              Spots, stripes, stars, and more. 16 variations.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {MARKINGS.map((m, i) => {
                const mColors = ["#A86BFF", "#59D6FF", "#FF5AD6", "#D4A853"];
                return (
                  <div
                    key={m}
                    style={{
                      padding: "7px 16px",
                      borderRadius: "100px",
                      background: `${mColors[i]}18`,
                      border: `1px solid ${mColors[i]}40`,
                      color: mColors[i],
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {m}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                marginTop: "20px",
                padding: "14px",
                borderRadius: "12px",
                background: "rgba(168,107,255,0.06)",
                border: "1px solid rgba(168,107,255,0.12)",
                textAlign: "center",
              }}
            >
              <span
                style={{ fontSize: "0.75rem", color: "rgba(196,191,219,0.5)" }}
              >
                +12 more patterns
              </span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(196,191,219,0.5)",
              letterSpacing: "0.05em",
            }}
          >
            Over <strong style={{ color: "#D4A853" }}>1,200</strong> unique
            combinations possible.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COLLECTION PREVIEW
   ============================================================ */
function CollectionPreview() {
  const dogs = [
    { name: "Nova", dog: <DogNova />, accent: "#A86BFF", traits: 14 },
    { name: "Kozmo", dog: <DogKozmo />, accent: "#59D6FF", traits: 12 },
    { name: "Blaze", dog: <DogBlaze />, accent: "#3AA8FF", traits: 11 },
  ];

  return (
    <section
      id="collection"
      style={{ background: "#06080f", padding: "100px clamp(20px,5vw,80px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label" style={{ color: "#59D6FF" }}>
            Your Collection
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F0E8D8",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Your dogs, your vault
          </h2>
          <p
            style={{
              color: "#C4BFDB",
              fontSize: "1.05rem",
              opacity: 0.8,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Every dog you create lives in your personal collection. Browse,
            share, and grow your pack.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {dogs.map((d, i) => (
            <div
              key={d.name}
              data-ocid={`collection.item.${i + 1}`}
              className="card-hover"
              style={{
                background:
                  "linear-gradient(160deg, rgba(13,18,37,0.9) 0%, rgba(6,8,15,0.9) 100%)",
                border: `1px solid ${d.accent}25`,
                borderRadius: "20px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "20px 0 10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "12px",
                    background: `radial-gradient(ellipse at 50% 60%, ${d.accent}18 0%, transparent 70%)`,
                  }}
                />
                <div
                  style={{
                    transform: "scale(0.75)",
                    transformOrigin: "center bottom",
                  }}
                >
                  {d.dog}
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#F0E8D8",
                  }}
                >
                  {d.name}
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: "rgba(89,214,255,0.12)",
                      color: "#59D6FF",
                      letterSpacing: "0.05em",
                    }}
                  >
                    In Collection
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: "rgba(168,107,255,0.12)",
                      color: "#A86BFF",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {d.traits} traits
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="/"
            data-ocid="collection.link"
            style={{
              color: "rgba(196,191,219,0.5)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              letterSpacing: "0.03em",
              transition: "color 0.2s",
              borderBottom: "1px solid rgba(196,191,219,0.2)",
              paddingBottom: "2px",
            }}
          >
            View Your Collection →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMMUNITY & ECOSYSTEM
   ============================================================ */
const ECOSYSTEM_CARDS = [
  {
    title: "Starter Dogs",
    status: "live",
    icon: <IconRocket color="#A86BFF" />,
    desc: "Six handcrafted breeds ready to customize and own today.",
  },
  {
    title: "Content Tools",
    status: "soon",
    icon: <IconPencil color="#59D6FF" />,
    desc: "Generate shareable graphics and profiles for your dogs.",
  },
  {
    title: "Graphics & Assets",
    status: "soon",
    icon: <IconImage color="#FF5AD6" />,
    desc: "Download your dog as high-res artwork and collectible assets.",
  },
  {
    title: "Community Events",
    status: "soon",
    icon: <IconCalendar color="#D4A853" />,
    desc: "Breed showcases, challenges, and community drops.",
  },
  {
    title: "Future Features",
    status: "roadmap",
    icon: <IconCompass color="#A86BFF" />,
    desc: "Breeding, evolution, leaderboards. The pack grows.",
  },
];

function CommunityEcosystem() {
  return (
    <section
      id="community"
      style={{ background: "#090c1a", padding: "100px clamp(20px,5vw,80px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-label" style={{ color: "#A86BFF" }}>
            The Ecosystem
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F0E8D8",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Bigger than a mint page
          </h2>
          <p
            style={{
              color: "#C4BFDB",
              fontSize: "1.05rem",
              opacity: 0.8,
              maxWidth: "460px",
              margin: "0 auto",
            }}
          >
            Galactic Dogs is a growing world. Here's what's being built.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {ECOSYSTEM_CARDS.map((card, i) => (
            <div
              key={card.title}
              data-ocid={`ecosystem.item.${i + 1}`}
              className="card-hover"
              style={{
                background: "rgba(10,13,26,0.9)",
                border: "1px solid rgba(168,107,255,0.12)",
                borderRadius: "20px",
                padding: "28px",
                opacity: card.status === "soon" ? 0.85 : 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                {card.icon}
                {card.status === "live" && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: "rgba(34,197,94,0.15)",
                      color: "#4ade80",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#4ade80",
                        display: "inline-block",
                      }}
                    />
                    Live
                  </span>
                )}
                {card.status === "soon" && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: "rgba(212,168,83,0.12)",
                      color: "#D4A853",
                      textTransform: "uppercase",
                    }}
                  >
                    Coming Soon
                  </span>
                )}
                {card.status === "roadmap" && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: "rgba(168,107,255,0.12)",
                      color: "#A86BFF",
                      textTransform: "uppercase",
                    }}
                  >
                    Roadmap
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#F0E8D8",
                  margin: "0 0 10px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: "#C4BFDB",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.75,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RESOURCES & TOOLS
   ============================================================ */
const RESOURCE_TILES = [
  { label: "Starter Dogs", icon: <IconRocket color="#A86BFF" />, live: true },
  {
    label: "Content Generator",
    icon: <IconPencil color="#59D6FF" />,
    live: false,
  },
  {
    label: "Graphics Library",
    icon: <IconImage color="#FF5AD6" />,
    live: false,
  },
  {
    label: "Community Events",
    icon: <IconCalendar color="#D4A853" />,
    live: false,
  },
  { label: "Shop", icon: <IconLightning color="#D4A853" />, live: false },
];

function ResourcesTools() {
  return (
    <section
      style={{ background: "#06080f", padding: "80px clamp(20px,5vw,80px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label" style={{ color: "#D4A853" }}>
            Resources
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "#F0E8D8",
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            Everything you need
          </h2>
          <p style={{ color: "#C4BFDB", fontSize: "1rem", opacity: 0.7 }}>
            Tools, assets, and guides — all in one place.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {RESOURCE_TILES.map((tile, i) => (
            <div
              key={tile.label}
              data-ocid={`resources.item.${i + 1}`}
              className="resource-tile"
            >
              <div style={{ flexShrink: 0 }}>{tile.icon}</div>
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#F0E8D8",
                  }}
                >
                  {tile.label}
                </span>
              </div>
              {tile.live ? (
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    background: "rgba(34,197,94,0.15)",
                    color: "#4ade80",
                    textTransform: "uppercase",
                  }}
                >
                  Live
                </span>
              ) : (
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(196,191,219,0.35)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Coming Soon →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   JOIN THE PACK CTA
   ============================================================ */
function JoinThePack() {
  return (
    <section
      id="join"
      style={{
        position: "relative",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px clamp(20px,5vw,80px)",
        overflow: "hidden",
        background: "#090c1a",
      }}
    >
      {/* Radial gradient bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(107,43,217,0.35) 0%, rgba(168,107,255,0.15) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle star field */}
      {[
        [7, 12],
        [10.3, 19.1],
        [13.6, 26.2],
        [16.9, 33.3],
        [20.2, 40.4],
        [23.5, 47.5],
        [26.8, 54.6],
        [30.1, 61.7],
        [33.4, 68.8],
        [36.7, 75.9],
        [40, 83],
        [43.3, 90.1],
        [46.6, 97.2],
        [49.9, 4.3],
        [53.2, 11.4],
        [56.5, 18.5],
        [59.8, 25.6],
        [63.1, 32.7],
        [66.4, 39.8],
        [69.7, 46.9],
        [73, 54],
        [76.3, 61.1],
        [79.6, 68.2],
        [82.9, 75.3],
        [86.2, 82.4],
        [89.5, 89.5],
        [92.8, 96.6],
        [96.1, 3.7],
        [99.4, 10.8],
        [2.7, 17.9],
      ].map(([x, y], i) => (
        <div
          key={`${x}-${y}`}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 4 === 0 ? "2px" : "1px",
            height: i % 4 === 0 ? "2px" : "1px",
            background: "#FFFFFF",
            opacity: 0.25,
          }}
        />
      ))}

      <div
        style={{ position: "relative", textAlign: "center", maxWidth: "600px" }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#D4A853",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Join the Pack
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            color: "#FFFFFF",
            margin: "0 0 20px",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            textShadow: "0 0 60px rgba(168,107,255,0.5)",
          }}
        >
          Your dog is waiting.
        </h2>
        <p
          style={{
            color: "rgba(196,191,219,0.7)",
            fontSize: "1rem",
            marginBottom: "40px",
            lineHeight: 1.6,
          }}
        >
          Create your first Galactic Dog today. It takes less than a minute.
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            data-ocid="join.primary_button"
            type="button"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "16px 48px",
              borderRadius: "100px",
              background: "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 100%)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.04em",
              boxShadow:
                "0 0 40px rgba(168,107,255,0.55), 0 0 80px rgba(255,90,214,0.2)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 60px rgba(168,107,255,0.7), 0 0 100px rgba(255,90,214,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 40px rgba(168,107,255,0.55), 0 0 80px rgba(255,90,214,0.2)";
            }}
          >
            Create Your Dog →
          </button>
          <a
            href="#how-it-works"
            data-ocid="join.link"
            style={{
              color: "rgba(196,191,219,0.45)",
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "color 0.2s",
            }}
          >
            Learn more ↓
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
const FOOTER_NAV = [
  {
    heading: "Explore",
    links: ["How It Works", "Breeds", "Trait System", "Collection"],
    hrefs: ["#how-it-works", "#breeds", "#", "#collection"],
  },
  {
    heading: "Community",
    links: ["Join The Pack", "Events", "Content Tools", "Graphics"],
    hrefs: ["#join", "#", "#", "#"],
  },
  {
    heading: "Resources",
    links: ["Starter Dogs", "Content Generator", "Shop", "Roadmap"],
    hrefs: ["#", "#", "#", "#"],
  },
];

function SiX() {
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
function SiDiscord() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M7 9a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
        fill="currentColor"
      />
      <path
        d="M14.5 3.5C13.2 2.9 11.7 2.5 10 2.4l-.3.6a9.6 9.6 0 00-1.4 0L8 2.4c-1.7.1-3.2.5-4.5 1.1C1.2 6.8.7 10 .8 13c1.3 1 2.8 1.6 4.2 2l.8-1.2a9 9 0 01-1.3-.7l.3-.3c2.6 1.3 5.4 1.3 8 0l.3.3a9 9 0 01-1.3.7l.8 1.2c1.4-.4 2.9-1 4.2-2 .1-3-.5-6.2-2.3-9.5z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
function SiInstagram() {
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

function Footer() {
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
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#A86BFF",
            }}
          >
            Galactic Dogs
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(196,191,219,0.4)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Create. Customize. Collect.
          </span>
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
          {FOOTER_NAV.map((col) => (
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
                {col.links.map((link, i) => (
                  <a
                    key={link}
                    href={col.hrefs[i]}
                    data-ocid="footer.link"
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
                    {link}
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
            marginBottom: "28px",
          }}
        />

        {/* Bottom row */}
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
            {[
              { icon: <SiX />, label: "x" },
              { icon: <SiDiscord />, label: "discord" },
              { icon: <SiInstagram />, label: "ig" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="/"
                data-ocid="footer.link"
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
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   MAIN APP
   ============================================================ */
export default function App() {
  const starsRef = useRef<typeof STARS>(STARS);
  const bonesRef = useRef<typeof BONES>(BONES);

  // Intersection observer for section reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-fade-in");
          }
        }
      },
      { threshold: 0.1 },
    );
    for (const el of document.querySelectorAll(".observe-reveal")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#06080f", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection starsRef={starsRef} bonesRef={bonesRef} />
      <HowItWorks />
      <BreedPreview />
      <TraitCustomization />
      <CollectionPreview />
      <CommunityEcosystem />
      <ResourcesTools />
      <JoinThePack />
      <Footer />
    </div>
  );
}
