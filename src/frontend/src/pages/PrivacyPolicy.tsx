import { Link } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#06080f", minHeight: "100vh" }}>
      <Header />
      <main
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "80px clamp(20px,5vw,40px) 120px",
        }}
      >
        <div style={{ marginBottom: "48px" }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#A86BFF",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "#F0E8D8",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(196,191,219,0.5)", fontSize: "0.85rem" }}>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {[
            {
              title: "Introduction",
              content:
                "Welcome to Galactic Dogs. We are committed to protecting your privacy and being transparent about how we handle information. This Privacy Policy explains our practices regarding the information you provide when using the Galactic Dogs platform, including our website and any related services.",
            },
            {
              title: "Information We Collect",
              content:
                "Galactic Dogs is designed with privacy in mind. When you create and customize digital dogs, the data associated with your creations is stored on-chain and linked to your wallet or identity. We may collect basic usage data such as page views and interaction patterns to improve the platform. We do not sell your personal information to third parties.",
            },
            {
              title: "How We Use Your Information",
              content:
                "Information collected through Galactic Dogs is used solely to provide and improve our services. This includes enabling dog creation, customization, naming, and collection features. Usage analytics help us understand how people interact with the platform so we can make it better. We do not use your data for advertising or third-party marketing purposes.",
            },
            {
              title: "On-Chain Data",
              content:
                "Digital dogs you create on Galactic Dogs are stored on the Internet Computer blockchain. This data is immutable and publicly accessible by design. Your dog's name, traits, and ownership are recorded on-chain as part of the core product experience. Please be aware that on-chain data cannot be deleted or altered once confirmed.",
            },
            {
              title: "Contact",
              content:
                "If you have any questions about this Privacy Policy or how your information is handled, please reach out to us through our community Discord or the official Galactic Dogs website. We aim to respond to all privacy inquiries within a reasonable timeframe.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#F0E8D8",
                  margin: "0 0 14px",
                }}
              >
                {section.title}
              </h2>
              <p
                style={{
                  color: "rgba(196,191,219,0.7)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(168,107,255,0.1)",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Link
            to="/"
            data-ocid="privacy.link"
            style={{
              color: "#A86BFF",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            ← Back to Galactic Dogs
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
