import React from "react";

type Props = {
    lastUpdated?: string;
    companyName?: string;
    contactEmail?: string;
    websiteUrl?: string;
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
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};

const h1Style: React.CSSProperties = {
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
    color: "#0f172a",
};

const metaStyle: React.CSSProperties = {
    marginTop: 6,
    color: "#6b7280",
    fontSize: 13,
};

const tocStyle: React.CSSProperties = {
    marginTop: 20,
    marginBottom: 20,
    padding: 12,
    background: "#f8fafc",
    borderRadius: 6,
    border: "1px solid #e6eef6",
};

const sectionStyle: React.CSSProperties = {
    marginTop: 20,
};

const headingStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
    color: "#0f172a",
};

const paraStyle: React.CSSProperties = {
    margin: "6px 0",
    color: "#374151",
    fontSize: 15,
};

const listStyle: React.CSSProperties = {
    paddingLeft: 20,
    margin: "6px 0",
};

const PrivacyPolicy: React.FC<Props> = ({
    lastUpdated = "2025-12-01",
    companyName = "Halal Life Daily",
    contactEmail = "info@halallifedaily.com",
    websiteUrl = "https://halallifedaily.com"
}) => {
    return (
        <main style={containerStyle} aria-labelledby="privacy-title">
            <header>
                <h1 id="privacy-title" style={h1Style}>Privacy Policy</h1>
                <div style={metaStyle}>Last updated: {lastUpdated} · {companyName}</div>
            </header>

            <nav aria-label="Table of contents" style={tocStyle}>
                <strong style={{ fontSize: 14 }}>Contents</strong>
                <ul style={{ ...listStyle, marginTop: 8 }}>
                    <li><a href="#1">1. Information We Collect</a></li>
                    <li><a href="#2">2. How We Use Your Information</a></li>
                    <li><a href="#3">3. Legal Basis for Processing</a></li>
                    <li><a href="#4">4. Data Storage and Security</a></li>
                    <li><a href="#5">5. Sharing Your Data</a></li>
                    <li><a href="#6">6. Your Data Rights</a></li>
                    <li><a href="#7">7. International Transfers</a></li>
                    <li><a href="#8">8. Updates to This Policy</a></li>
                    <li><a href="#9">9. Contact Us</a></li>
                </ul>
            </nav>

            <section style={sectionStyle}>
                <h2 style={headingStyle}>Introduction</h2>
                <p style={paraStyle}>
                    {companyName} (“we”, “us”, “our”) provides a subscription-based Islamic educational service
                    that delivers daily Hadith via WhatsApp. We respect your privacy and are committed to protecting your
                    personal data.
                </p>
                <p style={paraStyle}>
                    This Privacy Policy explains how we collect, use, store, and secure your data when you use our website
                    or subscribe to our service.
                </p>
            </section>

            {/* 1. Information We Collect */}
            <section id="1" style={sectionStyle}>
                <h2 style={headingStyle}>1. Information We Collect</h2>

                <h3 style={{ ...headingStyle, fontSize: 16 }}>Personal Information</h3>
                <ul style={listStyle}>
                    <li>Full name</li>
                    <li>Phone number (required for WhatsApp delivery)</li>
                    <li>Email address (optional depending on payment provider)</li>
                    <li>Selected language</li>
                    <li>Country / region</li>
                    <li>Timezone</li>
                </ul>

                <h3 style={{ ...headingStyle, fontSize: 16 }}>Technical Information</h3>
                <ul style={listStyle}>
                    <li>Device type</li>
                    <li>Browser type</li>
                    <li>IP address (via analytics)</li>
                </ul>

                <h3 style={{ ...headingStyle, fontSize: 16 }}>Payment Information</h3>
                <p style={paraStyle}>
                    All payments are securely processed by Paddle.  
                    We do <strong>not</strong> store:
                </p>
                <ul style={listStyle}>
                    <li>Credit card details</li>
                    <li>Bank information</li>
                    <li>Billing address (Paddle may store this)</li>
                </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section id="2" style={sectionStyle}>
                <h2 style={headingStyle}>2. How We Use Your Information</h2>
                <ul style={listStyle}>
                    <li>Deliver daily hadith messages</li>
                    <li>Manage subscriptions</li>
                    <li>Provide customer support</li>
                    <li>Improve service reliability</li>
                    <li>Prevent fraud</li>
                    <li>Comply with legal obligations</li>
                </ul>
                <p style={paraStyle}><strong>We never sell or share your data for marketing.</strong></p>
            </section>

            {/* 3. Legal Basis */}
            <section id="3" style={sectionStyle}>
                <h2 style={headingStyle}>3. Legal Basis for Processing</h2>
                <ul style={listStyle}>
                    <li>Contractual necessity</li>
                    <li>Legitimate interest</li>
                    <li>Consent (where required)</li>
                </ul>
            </section>

            {/* 4. Data Storage */}
            <section id="4" style={sectionStyle}>
                <h2 style={headingStyle}>4. Data Storage and Security</h2>
                <p style={paraStyle}>We use industry-standard protections, including:</p>
                <ul style={listStyle}>
                    <li>Encrypted databases</li>
                    <li>Secure servers</li>
                    <li>Role-restricted access</li>
                    <li>WhatsApp Business API</li>
                </ul>
            </section>

            {/* 5. Sharing */}
            <section id="5" style={sectionStyle}>
                <h2 style={headingStyle}>5. Sharing Your Data</h2>
                <ul style={listStyle}>
                    <li>Paddle (payment provider)</li>
                    <li>WhatsApp Business API provider</li>
                    <li>Internal automations (n8n workflow)</li>
                </ul>
                <p style={paraStyle}>We do not share your data with advertisers.</p>
            </section>

            {/* 6. User Rights */}
            <section id="6" style={sectionStyle}>
                <h2 style={headingStyle}>6. Your Data Rights</h2>
                <p style={paraStyle}>You may have the right to:</p>
                <ul style={listStyle}>
                    <li>Access your data</li>
                    <li>Request corrections</li>
                    <li>Request deletion</li>
                    <li>Object to processing</li>
                    <li>Export your data</li>
                </ul>
                <p style={paraStyle}>To exercise rights, contact us at: {contactEmail}</p>
            </section>

            {/* 7. International Transfers */}
            <section id="7" style={sectionStyle}>
                <h2 style={headingStyle}>7. International Transfers</h2>
                <p style={paraStyle}>
                    Your data may be stored or processed on servers outside your country.
                    We take measures to ensure adequate protection.
                </p>
            </section>

            {/* 8. Updates */}
            <section id="8" style={sectionStyle}>
                <h2 style={headingStyle}>8. Updates to This Policy</h2>
                <p style={paraStyle}>
                    We may update this Privacy Policy as needed. Continued use of the service
                    means you accept the updated policy.
                </p>
            </section>

            {/* 9. Contact */}
            <section id="9" style={sectionStyle}>
                <h2 style={headingStyle}>9. Contact Us</h2>
                <p style={paraStyle}>Halal Life Daily is a project owned and operated by FARHAN HOQUE.
                For any business or legal inquiries, please contact:</p>
                <ul style={listStyle}>
                    <li>Email: {contactEmail}</li>
                    <li>Website: <a href={websiteUrl}>{websiteUrl}</a></li>
                </ul>
            </section>

            <footer style={{ marginTop: 28, color: "#6b7280", fontSize: 13 }}>
                <p style={{ margin: 0 }}>
                    This Privacy Policy is for informational purposes only and does not constitute legal advice.
                </p>
            </footer>
        </main>
    );
};

export default PrivacyPolicy;
