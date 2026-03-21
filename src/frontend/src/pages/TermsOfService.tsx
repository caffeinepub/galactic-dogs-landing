import { Link } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TermsOfService() {
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
            Terms of Service
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
              title: "Acceptance of Terms",
              content:
                "By accessing or using Galactic Dogs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform. We reserve the right to update these terms at any time, and continued use of the platform constitutes acceptance of any changes.",
            },
            {
              title: "Use of Service",
              content:
                "Galactic Dogs provides a platform for creating, customizing, naming, and collecting digital dogs. You agree to use the service only for lawful purposes and in accordance with these terms. You are responsible for all activity that occurs under your account or wallet. You agree not to attempt to disrupt, reverse-engineer, or exploit the platform in any unauthorized way.",
            },
            {
              title: "Ownership of Digital Dogs",
              content:
                "When you create and mint a digital dog on Galactic Dogs, you receive ownership of that specific digital asset as recorded on the Internet Computer blockchain. Galactic Dogs retains rights to the underlying platform, artwork styles, and systems. Your ownership does not grant you rights to the Galactic Dogs brand, trademarks, or core platform technology.",
            },
            {
              title: "Disclaimer of Warranties",
              content:
                'Galactic Dogs is provided "as is" without warranties of any kind. We do not guarantee that the service will be error-free, uninterrupted, or that digital dogs will retain any particular value. Digital assets carry inherent risks and the platform may evolve over time. Use of the platform is at your own risk.',
            },
            {
              title: "Limitation of Liability",
              content:
                "To the fullest extent permitted by applicable law, Galactic Dogs and its creators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. This includes but is not limited to loss of data, loss of digital assets, or any other losses related to your use of the service.",
            },
            {
              title: "Contact",
              content:
                "For questions about these Terms of Service, please reach out through our community Discord or the official Galactic Dogs website. We are happy to clarify any of the terms outlined in this document.",
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
            data-ocid="terms.link"
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
