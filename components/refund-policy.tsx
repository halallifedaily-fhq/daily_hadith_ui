import React from "react";

type Props = {
    lastUpdated?: string;
    companyName?: string;
    contactEmail?: string;
};

const containerStyle: React.CSSProperties = {
    maxWidth: 880,
    margin: "32px auto",
    padding: "24px",
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#111827",
    lineHeight: 1.6,
    background: "#ffffff",
    borderRadius: 8,
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
};

const h1Style: React.CSSProperties = {
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
    color: "#0f172a"
};

const metaStyle: React.CSSProperties = {
    marginTop: 6,
    color: "#6b7280",
    fontSize: 13
};

const sectionStyle: React.CSSProperties = {
    marginTop: 20
};

const headingStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
    color: "#0f172a"
};

const paraStyle: React.CSSProperties = {
    margin: "6px 0",
    color: "#374151",
    fontSize: 15
};

const listStyle: React.CSSProperties = {
    paddingLeft: 20,
    margin: "6px 0"
};

const RefundPolicy: React.FC<Props> = ({
    lastUpdated = "2025-12-01",
    companyName = "Halal Life Daily",
    contactEmail = "info@halallifedaily.com"
}) => {
    return (
        <main style={containerStyle} aria-labelledby="refund-title">
            <header>
                <h1 id="refund-title" style={h1Style}>Refund Policy — 7-Day Guarantee</h1>
                <div style={metaStyle}>Last updated: {lastUpdated} · {companyName}</div>
            </header>

            {/* Intro */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>Introduction</h2>
                <p style={paraStyle}>
                    At {companyName}, customer satisfaction is important to us. If you’re not satisfied
                    with your subscription, we offer a **7-day unconditional refund guarantee**.
                </p>
            </section>

            {/* 1. Eligibility */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>1. Eligibility for Refund</h2>
                <p style={paraStyle}>You are eligible for a refund if:</p>
                <ul style={listStyle}>
                    <li>You request it within 7 days of purchase</li>
                    <li>The request is made using the same email/phone number used during checkout</li>
                    <li>Your subscription is still active</li>
                </ul>
                <p style={paraStyle}>Refund applies to all plans:</p>
                <ul style={listStyle}>
                    <li>Monthly plans</li>
                    <li>Yearly plans</li>
                    <li>1/day or 5/day message packages</li>
                </ul>
            </section>

            {/* 2. How to Request */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>2. How to Request a Refund</h2>
                <p style={paraStyle}>Contact us at:</p>
                <ul style={listStyle}>
                    <li>Email: {contactEmail}</li>
                </ul>
                <p style={paraStyle}>Please provide:</p>
                <ul style={listStyle}>
                    <li>Your name</li>
                    <li>Your phone number used for subscription</li>
                    <li>Order email or transaction ID (if available)</li>
                </ul>
            </section>

            {/* 3. Processing Time */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>3. Processing Time</h2>
                <p style={paraStyle}>
                    Refunds are processed through Paddle.  
                    It may take **3–10 business days** for the refund to appear depending on your bank.
                </p>
            </section>

            {/* 4. Non-refundable cases */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>4. Non-Refundable Situations</h2>
                <ul style={listStyle}>
                    <li>Requests made after 7 days</li>
                    <li>Fraudulent or unauthorized purchases</li>
                    <li>Users who have abused prior refunds</li>
                </ul>
            </section>

            {/* 5. Changes */}
            <section style={sectionStyle}>
                <h2 style={headingStyle}>5. Changes to Refund Policy</h2>
                <p style={paraStyle}>
                    We reserve the right to modify this refund policy at any time.
                </p>
            </section>

            <footer style={{ marginTop: 28, color: "#6b7280", fontSize: 13 }}>
                <p style={{ margin: 0 }}>
                    This Refund Policy is for informational purposes only and does not constitute legal advice.
                </p>
            </footer>
        </main>
    );
};

export default RefundPolicy;
