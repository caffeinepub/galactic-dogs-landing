import { useRef } from "react";

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
      {/* Left knobs */}
      <circle cx="10" cy="12" r="9" fill="#D07CFF" opacity="0.8" />
      <circle cx="10" cy="32" r="9" fill="#D07CFF" opacity="0.8" />
      {/* Right knobs */}
      <circle cx="70" cy="12" r="9" fill="#D07CFF" opacity="0.8" />
      <circle cx="70" cy="32" r="9" fill="#D07CFF" opacity="0.8" />
      {/* Shaft */}
      <rect
        x="12"
        y="14"
        width="56"
        height="16"
        rx="3"
        fill="#F2A6FF"
        opacity="0.9"
      />
      {/* Glow overlay */}
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
      {/* Suit body */}
      <ellipse
        cx="80"
        cy="140"
        rx="48"
        ry="52"
        fill="#1a1060"
        stroke="#59D6FF"
        strokeWidth="2"
      />
      {/* Helmet glass sphere */}
      <circle
        cx="80"
        cy="72"
        r="44"
        fill="#0d0830"
        stroke="#59D6FF"
        strokeWidth="2.5"
      />
      <circle cx="80" cy="72" r="44" fill="url(#helmetGlassK)" />
      {/* Visor reflection */}
      <ellipse
        cx="68"
        cy="58"
        rx="14"
        ry="8"
        fill="#59D6FF"
        opacity="0.15"
        transform="rotate(-15 68 58)"
      />
      {/* Dog face inside helmet */}
      {/* Head */}
      <ellipse cx="80" cy="76" rx="28" ry="26" fill="#C47D3C" />
      {/* Ears */}
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
      {/* Snout */}
      <ellipse cx="80" cy="88" rx="14" ry="11" fill="#A8602A" />
      {/* Nose */}
      <ellipse cx="80" cy="82" rx="5" ry="3.5" fill="#1a1060" />
      {/* Eyes */}
      <circle cx="68" cy="72" r="5" fill="white" />
      <circle cx="92" cy="72" r="5" fill="white" />
      <circle cx="69" cy="72" r="3" fill="#1a1060" />
      <circle cx="93" cy="72" r="3" fill="#1a1060" />
      <circle cx="70" cy="71" r="1" fill="white" />
      <circle cx="94" cy="71" r="1" fill="white" />
      {/* Tongue */}
      <ellipse cx="80" cy="96" rx="5" ry="6" fill="#FF6B8A" />
      {/* Mouth line */}
      <path
        d="M75 92 Q80 96 85 92"
        stroke="#7a4020"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Suit chest panel */}
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
      {/* Arms */}
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
      {/* Gloves */}
      <ellipse cx="33" cy="162" rx="11" ry="9" fill="#59D6FF" opacity="0.8" />
      <ellipse cx="127" cy="162" rx="11" ry="9" fill="#59D6FF" opacity="0.8" />
      {/* Legs */}
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
      {/* Boots */}
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
      {/* Tail */}
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
      {/* Suit body */}
      <ellipse
        cx="90"
        cy="158"
        rx="54"
        ry="56"
        fill="#18064a"
        stroke="#A86BFF"
        strokeWidth="2.5"
      />
      {/* Helmet */}
      <circle
        cx="90"
        cy="80"
        r="50"
        fill="#0d0830"
        stroke="#A86BFF"
        strokeWidth="3"
      />
      <circle cx="90" cy="80" r="50" fill="url(#helmetGlassN)" />
      {/* Visor reflection */}
      <ellipse
        cx="76"
        cy="64"
        rx="16"
        ry="9"
        fill="#A86BFF"
        opacity="0.18"
        transform="rotate(-12 76 64)"
      />
      {/* Dog head */}
      <ellipse cx="90" cy="84" rx="32" ry="30" fill="#E8E0D0" />
      {/* Spots */}
      <ellipse cx="72" cy="80" rx="10" ry="8" fill="#B0A090" opacity="0.7" />
      <ellipse cx="108" cy="88" rx="7" ry="6" fill="#B0A090" opacity="0.7" />
      {/* Ears */}
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
      {/* Snout */}
      <ellipse cx="90" cy="98" rx="16" ry="12" fill="#ccc0a8" />
      {/* Nose */}
      <ellipse cx="90" cy="90" rx="6" ry="4.5" fill="#2a1a4a" />
      {/* Eyes -- big and expressive */}
      <circle cx="76" cy="78" r="7" fill="white" />
      <circle cx="104" cy="78" r="7" fill="white" />
      <circle cx="77" cy="79" r="4.5" fill="#2a1a4a" />
      <circle cx="105" cy="79" r="4.5" fill="#2a1a4a" />
      <circle cx="78" cy="77" r="1.5" fill="white" />
      <circle cx="106" cy="77" r="1.5" fill="white" />
      {/* Star on forehead */}
      <path
        d="M90 58 L92 64 L98 64 L93 68 L95 74 L90 70 L85 74 L87 68 L82 64 L88 64 Z"
        fill="#FF5AD6"
        opacity="0.9"
      />
      {/* Smile */}
      <path
        d="M80 104 Q90 112 100 104"
        stroke="#8a7a5a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Tongue */}
      <ellipse cx="90" cy="110" rx="6" ry="7" fill="#FF6B8A" />
      {/* Suit panel */}
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
      {/* Arms */}
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
      {/* Gloves */}
      <ellipse cx="36" cy="182" rx="13" ry="10" fill="#A86BFF" opacity="0.8" />
      <ellipse cx="144" cy="182" rx="13" ry="10" fill="#A86BFF" opacity="0.8" />
      {/* Legs */}
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
      {/* Boots */}
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
      {/* Suit body */}
      <ellipse
        cx="80"
        cy="140"
        rx="48"
        ry="52"
        fill="#0a1a40"
        stroke="#3AA8FF"
        strokeWidth="2"
      />
      {/* Helmet */}
      <circle
        cx="80"
        cy="72"
        r="44"
        fill="#060e28"
        stroke="#3AA8FF"
        strokeWidth="2.5"
      />
      <circle cx="80" cy="72" r="44" fill="url(#helmetGlassB)" />
      {/* Visor shine */}
      <ellipse
        cx="67"
        cy="57"
        rx="13"
        ry="7"
        fill="#3AA8FF"
        opacity="0.2"
        transform="rotate(-10 67 57)"
      />
      {/* Dog face -- golden retriever vibe */}
      <ellipse cx="80" cy="76" rx="29" ry="27" fill="#D4922A" />
      {/* Fluffy cheeks */}
      <ellipse cx="56" cy="84" rx="9" ry="7" fill="#E8A840" opacity="0.8" />
      <ellipse cx="104" cy="84" rx="9" ry="7" fill="#E8A840" opacity="0.8" />
      {/* Ears */}
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
      {/* Snout */}
      <ellipse cx="80" cy="89" rx="15" ry="11" fill="#C07820" />
      {/* Nose */}
      <ellipse cx="80" cy="82" rx="5.5" ry="4" fill="#0d0830" />
      {/* Eyes */}
      <circle cx="67" cy="71" r="5.5" fill="white" />
      <circle cx="93" cy="71" r="5.5" fill="white" />
      <circle cx="68" cy="72" r="3.5" fill="#1a0840" />
      <circle cx="94" cy="72" r="3.5" fill="#1a0840" />
      <circle cx="69" cy="70" r="1.2" fill="white" />
      <circle cx="95" cy="70" r="1.2" fill="white" />
      {/* Mouth + happy */}
      <path
        d="M73 94 Q80 100 87 94"
        stroke="#7a4010"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Tongue big lol */}
      <ellipse cx="80" cy="99" rx="6" ry="7.5" fill="#FF6B8A" />
      <line
        x1="80"
        y1="96"
        x2="80"
        y2="106"
        stroke="#e0506a"
        strokeWidth="1.5"
      />
      {/* Chest panel */}
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
      {/* Screen on chest */}
      <rect x="64" y="122" width="32" height="18" rx="4" fill="#0d2060" />
      <path
        d="M68 138 L72 128 L77 135 L81 130 L86 138"
        stroke="#59D6FF"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arms */}
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
      {/* Gloves */}
      <ellipse cx="31" cy="163" rx="12" ry="9" fill="#3AA8FF" opacity="0.75" />
      <ellipse cx="129" cy="163" rx="12" ry="9" fill="#3AA8FF" opacity="0.75" />
      {/* Legs */}
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
      {/* Boots */}
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
      {/* Tail */}
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
   MAIN APP
   ============================================================ */
export default function App() {
  const starsRef = useRef<typeof STARS>(STARS);
  const bonesRef = useRef<typeof BONES>(BONES);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #050611 0%, #080b1a 40%, #0B0F20 100%)",
      }}
    >
      {/* ---- Nebula layers ---- */}
      <div
        className="pointer-events-none absolute inset-0 nebula-glow"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(107,43,217,0.38) 0%, rgba(155,77,255,0.18) 40%, transparent 75%)," +
            "radial-gradient(ellipse 40% 35% at 65% 45%, rgba(209,76,255,0.22) 0%, transparent 60%)," +
            "radial-gradient(ellipse 30% 25% at 35% 42%, rgba(255,90,214,0.14) 0%, transparent 55%)",
        }}
      />

      {/* ---- Stars ---- */}
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

      {/* ---- Floating milk bones ---- */}
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

      {/* ---- Main content ---- */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        {/* Brand mark */}
        <div
          className="animate-fade-up mb-10 flex items-center gap-2"
          style={{ animationDelay: "0.1s" }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.35em]"
            style={{
              color: "#A86BFF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Galactic Dogs
          </span>
          <span
            style={{
              display: "inline-block",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#FF5AD6",
              boxShadow: "0 0 8px #FF5AD6",
            }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.35em]"
            style={{
              color: "#59D6FF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            NFT Collection
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
          {/* Kozmo -- left */}
          <div
            className="flex flex-col items-center"
            style={{ marginBottom: "32px" }}
          >
            <div
              className="animate-float1"
              style={{ filter: "drop-shadow(0 0 24px rgba(89,214,255,0.45))" }}
            >
              <DogKozmo />
            </div>
            <span
              className="dog-label mt-2 text-xs font-semibold uppercase tracking-widest"
              style={{
                color: "#59D6FF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textShadow: "0 0 12px rgba(89,214,255,0.8)",
              }}
            >
              Kozmo
            </span>
          </div>

          {/* Nova -- center, elevated */}
          <div
            className="flex flex-col items-center"
            style={{ marginBottom: "0px" }}
          >
            <div
              className="animate-float2"
              style={{ filter: "drop-shadow(0 0 32px rgba(168,107,255,0.55))" }}
            >
              <DogNova />
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

          {/* Blaze -- right */}
          <div
            className="flex flex-col items-center"
            style={{ marginBottom: "28px" }}
          >
            <div
              className="animate-float3"
              style={{ filter: "drop-shadow(0 0 24px rgba(58,168,255,0.45))" }}
            >
              <DogBlaze />
            </div>
            <span
              className="dog-label mt-2 text-xs font-semibold uppercase tracking-widest"
              style={{
                color: "#3AA8FF",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textShadow: "0 0 12px rgba(58,168,255,0.8)",
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
            The Pack Has Left
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 50%, #59D6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Planet
            </span>
          </h1>

          <p
            className="mx-auto max-w-lg text-base leading-relaxed"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              color: "#B8C0D6",
              letterSpacing: "0.01em",
            }}
          >
            999 cosmic canines drifting through the galaxy.
            <br />
            Own a piece of the void.
          </p>
        </div>

        {/* Divider line */}
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

        {/* Footer */}
        <footer
          className="animate-fade-up mt-10 text-center"
          style={{ animationDelay: "1s" }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.72rem",
              color: "rgba(184,192,214,0.4)",
              letterSpacing: "0.06em",
            }}
          >
            © {new Date().getFullYear()}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(168,107,255,0.5)", textDecoration: "none" }}
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
