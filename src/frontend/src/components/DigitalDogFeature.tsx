import { CREATE_URL } from "../config/siteConfig";

const BREEDS = [
  {
    name: "Husky",
    rarity: "Rare",
    traits: 28,
    color: "#59D6FF",
    bg: "rgba(89,214,255,0.08)",
    emoji: "🐺",
  },
  {
    name: "Golden Retriever",
    rarity: "Common",
    traits: 24,
    color: "#D4A853",
    bg: "rgba(212,168,83,0.08)",
    emoji: "🐕",
  },
  {
    name: "Shiba Inu",
    rarity: "Uncommon",
    traits: 26,
    color: "#FF8C42",
    bg: "rgba(255,140,66,0.08)",
    emoji: "🦊",
  },
  {
    name: "German Shepherd",
    rarity: "Common",
    traits: 22,
    color: "#A86BFF",
    bg: "rgba(168,107,255,0.08)",
    emoji: "🐾",
  },
  {
    name: "Border Collie",
    rarity: "Uncommon",
    traits: 30,
    color: "#59D6FF",
    bg: "rgba(89,214,255,0.08)",
    emoji: "⭐",
  },
  {
    name: "Corgi",
    rarity: "Rare",
    traits: 20,
    color: "#FF5AD6",
    bg: "rgba(255,90,214,0.08)",
    emoji: "🌸",
  },
];

const RARITY_COLORS: Record<string, string> = {
  Common: "rgba(196,191,219,0.12)",
  Uncommon: "rgba(89,214,255,0.12)",
  Rare: "rgba(168,107,255,0.15)",
  Epic: "rgba(255,90,214,0.15)",
};
const RARITY_TEXT: Record<string, string> = {
  Common: "#C4BFDB",
  Uncommon: "#59D6FF",
  Rare: "#A86BFF",
  Epic: "#FF5AD6",
};

const TRAIT_CATEGORIES = [
  {
    name: "Coat Color",
    count: 18,
    accent: "#D4A853",
    desc: "From snowfield white to nebula black",
    swatches: [
      "#C47D3C",
      "#6B7280",
      "#F0E8D8",
      "#1a1a1a",
      "#B85C2C",
      "#A86BFF",
    ],
  },
  {
    name: "Eye Style",
    count: 12,
    accent: "#59D6FF",
    desc: "Piercing, dreamy, curious, cosmic",
    swatches: ["#59D6FF", "#A86BFF", "#FF5AD6", "#D4A853"],
  },
  {
    name: "Markings",
    count: 16,
    accent: "#FF5AD6",
    desc: "Spots, stripes, stars, patches",
    swatches: ["#A86BFF", "#59D6FF", "#FF5AD6", "#D4A853"],
  },
  {
    name: "Accessories",
    count: 24,
    accent: "#A86BFF",
    desc: "Helmets, collars, badges, gear",
    swatches: ["#F0E8D8", "#D4A853", "#A86BFF", "#59D6FF"],
  },
];

export default function DigitalDogFeature() {
  return (
    <section
      id="digital-dog"
      style={{
        background:
          "linear-gradient(180deg, #06080f 0%, #090c1a 50%, #06080f 100%)",
        padding: "120px clamp(20px,5vw,80px)",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span
            className="section-label"
            style={{ color: "#A86BFF", marginBottom: "20px", display: "block" }}
          >
            Your Digital Dog
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#FFFFFF",
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              textShadow: "0 0 60px rgba(168,107,255,0.4)",
            }}
          >
            Build. Name. Own.
          </h2>
          <p
            style={{
              color: "rgba(196,191,219,0.7)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Design a dog that's uniquely yours — every trait, every name, every
            detail is permanent and one of a kind.
          </p>
        </div>

        {/* ── BREED SELECTION ── */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "36px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#D4A853",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Step 01
            </span>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#F0E8D8",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Choose Your Breed
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {BREEDS.map((breed, i) => (
              <div
                key={breed.name}
                data-ocid={`breeds.item.${i + 1}`}
                className="card-hover"
                style={{
                  background: "rgba(10,13,26,0.95)",
                  border: `1.5px solid ${breed.color}22`,
                  borderRadius: "24px",
                  padding: "28px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Glow bg */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at 50% 0%, ${breed.color}10 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
                {/* Emoji avatar */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "20px",
                    background: breed.bg,
                    border: `1.5px solid ${breed.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.4rem",
                    marginBottom: "20px",
                    boxShadow: `0 0 20px ${breed.color}20`,
                  }}
                >
                  {breed.emoji}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      color: "#F0E8D8",
                    }}
                  >
                    {breed.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      padding: "3px 9px",
                      borderRadius: "100px",
                      background: RARITY_COLORS[breed.rarity],
                      color: RARITY_TEXT[breed.rarity],
                      textTransform: "uppercase",
                    }}
                  >
                    {breed.rarity}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(196,191,219,0.5)",
                    marginBottom: "20px",
                  }}
                >
                  {breed.traits} trait combinations
                </div>

                {/* Color bar */}
                <div
                  style={{
                    height: "3px",
                    borderRadius: "2px",
                    background: `linear-gradient(90deg, ${breed.color}80 0%, ${breed.color}10 100%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── TRAIT CUSTOMIZATION ── */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "36px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#FF5AD6",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Step 02
            </span>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#F0E8D8",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Customize Every Trait
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {TRAIT_CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className="warm-card-hover"
                style={{
                  background: "rgba(14,11,8,0.95)",
                  border: `1.5px solid ${cat.accent}25`,
                  borderRadius: "20px",
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${cat.accent} 0%, transparent 100%)`,
                  }}
                />
                <h4
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#F0E8D8",
                    margin: "0 0 6px",
                  }}
                >
                  {cat.name}
                </h4>
                <p
                  style={{
                    color: "rgba(196,191,219,0.5)",
                    fontSize: "0.82rem",
                    marginBottom: "20px",
                  }}
                >
                  {cat.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "16px",
                  }}
                >
                  {cat.swatches.map((swatch, _si) => (
                    <div
                      key={swatch}
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: swatch,
                        border: "2px solid rgba(255,255,255,0.08)",
                        boxShadow: `0 0 8px ${swatch}50`,
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: cat.accent,
                    letterSpacing: "0.06em",
                  }}
                >
                  {cat.count} options
                </span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(196,191,219,0.45)",
              }}
            >
              Over <strong style={{ color: "#D4A853" }}>1,200+</strong> unique
              combinations possible.
            </span>
          </div>
        </div>

        {/* ── NAMING STEP ── */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "36px" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#59D6FF",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Step 03
            </span>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#F0E8D8",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Name Your Dog
            </h3>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(10,13,26,0.98) 0%, rgba(14,18,42,0.98) 100%)",
              border: "1px solid rgba(89,214,255,0.2)",
              borderRadius: "24px",
              padding: "clamp(32px,5vw,56px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                right: "-80px",
                top: "-80px",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(89,214,255,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                color: "#F0E8D8",
                marginBottom: "10px",
                letterSpacing: "-0.01em",
              }}
            >
              What's in a name? Everything.
            </p>
            <p
              style={{
                color: "rgba(196,191,219,0.55)",
                fontSize: "1rem",
                marginBottom: "32px",
                maxWidth: "480px",
                lineHeight: 1.6,
              }}
            >
              Your dog's name is permanent. It becomes part of its identity
              forever. Choose wisely.
            </p>
            {/* Visual input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                background: "rgba(6,8,15,0.8)",
                border: "1.5px solid rgba(89,214,255,0.35)",
                borderRadius: "16px",
                padding: "16px 24px",
                maxWidth: "460px",
                boxShadow:
                  "0 0 30px rgba(89,214,255,0.1), inset 0 0 20px rgba(89,214,255,0.03)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "1.05rem",
                  color: "rgba(196,191,219,0.3)",
                  flex: 1,
                  letterSpacing: "0.02em",
                }}
              >
                Enter your dog's name...
              </span>
              <div
                style={{
                  width: "2px",
                  height: "20px",
                  background: "#59D6FF",
                  animation: "nebulaPulse 1s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        </div>

        {/* ── LIVE PREVIEW ZONE ── */}
        <div style={{ marginBottom: "80px" }}>
          <div
            style={{
              border: "2px dashed rgba(168,107,255,0.25)",
              borderRadius: "28px",
              padding: "clamp(48px,8vw,96px) clamp(20px,5vw,60px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, rgba(9,12,26,0.9) 0%, rgba(13,8,20,0.9) 50%, rgba(9,12,26,0.9) 100%)",
            }}
          >
            {/* Animated bg gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(168,107,255,0.08) 0%, transparent 70%)",
                animation: "nebulaPulse 6s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
            {/* Coming soon badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  padding: "5px 14px",
                  borderRadius: "100px",
                  background: "rgba(168,107,255,0.15)",
                  color: "#A86BFF",
                  textTransform: "uppercase",
                  border: "1px solid rgba(168,107,255,0.25)",
                }}
              >
                Coming Soon
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "rgba(240,232,216,0.6)",
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              Live Preview
            </h3>
            <p
              style={{
                color: "rgba(196,191,219,0.4)",
                fontSize: "1rem",
                maxWidth: "400px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              See your dog take shape in real time before you mint. Watch every
              trait update as you build.
            </p>
            {/* Decorative dog silhouette placeholder */}
            <div
              style={{
                marginTop: "40px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "2px dashed rgba(168,107,255,0.2)",
                margin: "40px auto 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                opacity: 0.3,
              }}
            >
              🐾
            </div>
          </div>
        </div>

        {/* ── CTA BLOCK ── */}
        <div
          style={{
            textAlign: "center",
            padding: "60px clamp(20px,5vw,60px)",
            background:
              "linear-gradient(135deg, rgba(13,8,32,0.9) 0%, rgba(20,10,40,0.9) 50%, rgba(13,8,32,0.9) 100%)",
            borderRadius: "28px",
            border: "1px solid rgba(168,107,255,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(168,107,255,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <h3
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#FFFFFF",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              position: "relative",
            }}
          >
            Your dog is waiting.
          </h3>
          <p
            style={{
              color: "rgba(196,191,219,0.6)",
              fontSize: "1rem",
              marginBottom: "36px",
              maxWidth: "400px",
              margin: "0 auto 36px",
              lineHeight: 1.6,
              position: "relative",
            }}
          >
            Every trait, every name, every dog — unique to you.
          </p>
          <a
            href={CREATE_URL}
            target="_blank"
            rel="noreferrer"
            data-ocid="digital-dog.primary_button"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "16px 48px",
              borderRadius: "100px",
              background: "linear-gradient(90deg, #A86BFF 0%, #FF5AD6 100%)",
              color: "#fff",
              textDecoration: "none",
              display: "inline-block",
              letterSpacing: "0.04em",
              boxShadow:
                "0 0 40px rgba(168,107,255,0.5), 0 0 80px rgba(255,90,214,0.2)",
              position: "relative",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 60px rgba(168,107,255,0.7), 0 0 100px rgba(255,90,214,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 40px rgba(168,107,255,0.5), 0 0 80px rgba(255,90,214,0.2)";
            }}
          >
            Build Your Dog →
          </a>
        </div>
      </div>
    </section>
  );
}
