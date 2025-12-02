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

const TermsOfService: React.FC<Props> = ({
    lastUpdated = "2025-12-01",
    companyName = "Halal Life Daily",
    contactEmail = "info@halallifedaily.example",
    websiteUrl = "https://halallifedaily.com"
}) => {
    return (
        <main style={containerStyle} aria-labelledby="tos-title">
            <header>
                <h1 id="tos-title" style={h1Style}>
                    Terms of Service
                </h1>
                <div style={metaStyle}>Last updated: {lastUpdated} · {companyName}</div>
            </header>

            <nav aria-label="Table of contents" style={tocStyle}>
                <strong style={{ fontSize: 14 }}>Contents</strong>
                <ul style={{ ...listStyle, marginTop: 8 }}>
                    <li><a href="#1">1. About {companyName}</a></li>
                    <li><a href="#2">2. Eligibility</a></li>
                    <li><a href="#3">3. Service Description</a></li>
                    <li><a href="#4">4. Payment & Billing (via Paddle)</a></li>
                    <li><a href="#5">5. Subscription Renewal</a></li>
                    <li><a href="#6">6. Refund Policy — 7-Day Guarantee</a></li>
                    <li><a href="#7">7. Delivery Methods</a></li>
                    <li><a href="#8">8. Account Conduct & Restrictions</a></li>
                    <li><a href="#9">9. Intellectual Property</a></li>
                    <li><a href="#10">10. Islamic Content Disclaimer</a></li>
                    <li><a href="#11">11. Limitation of Liability</a></li>
                    <li><a href="#12">12. Changes to the Service</a></li>
                    <li><a href="#13">13. Governing Law</a></li>
                    <li><a href="#14">14. Contact Information</a></li>
                </ul>
            </nav>

            <section style={sectionStyle}>
                <h2 style={headingStyle}>Acceptance of Terms</h2>
                <p style={paraStyle}>
                    Welcome to {companyName} (“we”, “us”, “our”), These Terms of Service (“Terms”) govern your access to and use of our website, services, subscriptions, and any content delivered through WhatsApp or other messaging platforms (collectively, the “Service”).
                    By subscribing to Halal Life Daily, you agree to these Terms. If you do not agree, please do not use our Service.
                </p>
            </section>

            {/* 1. About Halal Life Daily */}
            <section id="1" style={sectionStyle}>
            <h2 style={headingStyle}>1. About {companyName}</h2>
            <p style={paraStyle}>
                {companyName} is a subscription-based educational service that delivers authentic Hadith to subscribers through
                WhatsApp on a daily basis. We provide multiple subscription plans, including monthly and yearly options, with 1 or
                5 Hadith per day depending on the plan selected.
            </p>
            <p style={paraStyle}>
                Our goal is to make Islamic knowledge more accessible and help users build a consistent habit of learning.
            </p>
            </section>

            {/* 2. Eligibility */}
            <section id="2" style={sectionStyle}>
            <h2 style={headingStyle}>2. Eligibility</h2>
            <p style={paraStyle}>To use our Service, you must:</p>
            <ul style={listStyle}>
                <li>Be at least 13 years old</li>
                <li>Provide accurate contact information, including a valid WhatsApp number</li>
                <li>Have the legal capacity to enter into a binding contract</li>
            </ul>
            <p style={paraStyle}>
                We welcome users from all backgrounds. You do not have to be Muslim to subscribe.
            </p>
            </section>

            {/* 3. Service Description */}
            <section id="3" style={sectionStyle}>
            <h2 style={headingStyle}>3. Service Description</h2>
            <p style={paraStyle}>By subscribing, you will receive:</p>
            <ul style={listStyle}>
                <li>Daily Hadith delivered through WhatsApp</li>
                <li>
                Content sourced from authentic collections (e.g., Sahih al-Bukhari, Sahih Muslim, and other recognized
                collections)
                </li>
                <li>Delivery timed according to your selected plan and timezone</li>
                <li>Support for multiple languages (where available)</li>
                <li>Continuous content delivery for the duration of your subscription</li>
                <li>
                Message timing may vary slightly due to system delays, user timezone differences, or WhatsApp API limitations.
                </li>
                <li>We do not provide scholarly fatwa services, personalized Islamic rulings, or religious counseling.</li>
            </ul>
            </section>

            {/* 4. Payment & Billing (via Paddle) */}
            <section id="4" style={sectionStyle}>
            <h2 style={headingStyle}>4. Payment &amp; Billing (via Paddle)</h2>
            <p style={paraStyle}>
                All payments are securely processed through Paddle, our Merchant of Record.
            </p>
            <p style={paraStyle}>By subscribing, you authorize Paddle to:</p>
            <ul style={listStyle}>
                <li>Charge your selected payment method</li>
                <li>Automatically renew your subscription</li>
                <li>Apply any relevant taxes based on your location</li>
            </ul>
            <p style={paraStyle}>
                We do not directly process or store your payment information. All payment details are handled by Paddle in
                accordance with their own privacy and security policies.
            </p>
            </section>

            {/* 5. Subscription Renewal */}
            <section id="5" style={sectionStyle}>
            <h2 style={headingStyle}>5. Subscription Renewal</h2>
            <p style={paraStyle}>
                Your subscription automatically renews at the end of each billing period (monthly or yearly) unless you cancel
                beforehand.
            </p>
            <p style={paraStyle}>
                You can manage or cancel your subscription at any time through the Paddle customer portal link provided in your
                purchase email.
            </p>
            <p style={paraStyle}>If you cancel:</p>
            <ul style={listStyle}>
                <li>You will continue receiving messages until the end of the current billing cycle</li>
                <li>You will not be charged again unless you resubscribe</li>
            </ul>
            </section>

            {/* 6. Refund Policy — 7-Day Guarantee */}
            <section id="6" style={sectionStyle}>
            <h2 style={headingStyle}>6. Refund Policy — 7-Day Guarantee</h2>
            <p style={paraStyle}>
                We offer a 7-day unconditional refund for all new subscriptions.
            </p>
            <p style={paraStyle}>To request a refund:</p>
            <ul style={listStyle}>
                <li>Contact Paddle support using the link in your purchase receipt, or</li>
                <li>Email us at the support address provided below</li>
            </ul>
            <p style={paraStyle}>
                Refunds are processed by Paddle and may take a few business days to appear depending on your bank.
            </p>
            <p style={paraStyle}>
                No refunds are provided after 7 days unless required by applicable law.
            </p>
            </section>

            {/* 7. Delivery Methods */}
            <section id="7" style={sectionStyle}>
            <h2 style={headingStyle}>7. Delivery Methods</h2>
            <p style={paraStyle}>
                Daily Hadith are delivered exclusively through WhatsApp using the official WhatsApp API (or approved integrations).
            </p>
            <p style={paraStyle}>You are responsible for:</p>
            <ul style={listStyle}>
                <li>Providing a valid WhatsApp number</li>
                <li>Ensuring your WhatsApp account is active and not blocked</li>
                <li>Keeping your device connected to the internet</li>
                <li>Not blocking our sending number</li>
            </ul>
            <p style={paraStyle}>
                If delivery fails because of issues on your device, your network, or with WhatsApp itself, we are not liable for
                missed messages.
            </p>
            </section>

            {/* 8. Account Conduct & Restrictions */}
            <section id="8" style={sectionStyle}>
            <h2 style={headingStyle}>8. Account Conduct &amp; Restrictions</h2>
            <p style={paraStyle}>You agree NOT to:</p>
            <ul style={listStyle}>
                <li>Share subscription content publicly without permission</li>
                <li>Copy, redistribute, or resell our daily messages</li>
                <li>Use our Service for harassment, spamming, or any unlawful purpose</li>
                <li>Impersonate others or submit false contact details</li>
                <li>Attempt to reverse-engineer our systems or API usage</li>
            </ul>
            <p style={paraStyle}>
                Violations may result in immediate suspension or termination of your access without refund, where permitted by law.
            </p>
            </section>

            {/* 9. Intellectual Property */}
            <section id="9" style={sectionStyle}>
            <h2 style={headingStyle}>9. Intellectual Property</h2>
            <p style={paraStyle}>
                All content delivered through our Service—including Hadith translations, summaries, explanations, images, and
                branding—belongs to {companyName} or its licensors unless otherwise specified.
            </p>
            <p style={paraStyle}>
                You are granted a personal, non-transferable, non-exclusive license to view the content for private use only. You
                may not copy, distribute, publicly display, or create derivative works from our content without prior written
                permission.
            </p>
            </section>

            {/* 10. Islamic Content Disclaimer */}
            <section id="10" style={sectionStyle}>
            <h2 style={headingStyle}>10. Islamic Content Disclaimer</h2>
            <p style={paraStyle}>
                While we strive to provide accurate and authentic Hadith from reliable sources:
            </p>
            <ul style={listStyle}>
                <li>We do not claim scholarly authority</li>
                <li>We do not issue fatwas</li>
                <li>We do not guarantee that all translations are perfect</li>
            </ul>
            <p style={paraStyle}>
                For religious rulings, personal circumstances, or detailed explanations, you should consult qualified scholars or
                recognized Islamic authorities. Our Service is intended for educational and spiritual benefit only.
            </p>
            </section>

            {/* 11. Limitation of Liability */}
            <section id="11" style={sectionStyle}>
            <h2 style={headingStyle}>11. Limitation of Liability</h2>
            <p style={paraStyle}>
                To the maximum extent permitted by law, {companyName} is not liable for:
            </p>
            <ul style={listStyle}>
                <li>Missed or delayed message delivery</li>
                <li>Interruptions caused by WhatsApp, Meta, n8n, server issues, or internet outages</li>
                <li>Any decisions you make based on the content we provide</li>
                <li>Data losses, technical errors, or system failures</li>
            </ul>
            <p style={paraStyle}>
                Your sole remedy for dissatisfaction with the Service is to discontinue use of the Service. Where applicable law
                does not allow certain limitations, our liability will be limited to the smallest amount permitted by law.
            </p>
            </section>

            {/* 12. Changes to the Service */}
            <section id="12" style={sectionStyle}>
            <h2 style={headingStyle}>12. Changes to the Service</h2>
            <p style={paraStyle}>
                We may update or modify the Service at any time—for example, to improve content, adjust delivery times, or enhance
                technical systems.
            </p>
            <p style={paraStyle}>
                We may also update these Terms from time to time. Where changes are material, we will provide notice (for example,
                via email, WhatsApp, or a notice on our website). Continued use of the Service after such changes constitutes
                acceptance of the updated Terms.
            </p>
            </section>

            {/* 13. Governing Law */}
            <section id="13" style={sectionStyle}>
            <h2 style={headingStyle}>13. Governing Law</h2>
            <p style={paraStyle}>
                These Terms are governed by the laws of the country or region where your Paddle transaction is processed, unless a
                different governing law is required by applicable consumer protection or other mandatory laws in your jurisdiction.
            </p>
            </section>

            {/* 14. Contact Information */}
            <section id="14" style={sectionStyle}>
            <h2 style={headingStyle}>14. Contact Information</h2>
            <p style={paraStyle}>
                If you have questions about these Terms or need help with your subscription, you can contact us at:
            </p>
            <ul style={listStyle}>
                <li>
                Email:&nbsp;
                <a href={`mailto:${contactEmail}`} style={{ color: "#0b63ff" }}>
                    {contactEmail}
                </a>
                </li>
                <li>
                Website:&nbsp;
                <a href={websiteUrl} style={{ color: "#0b63ff" }} target="_blank" rel="noreferrer">
                    {websiteUrl}
                </a>
                </li>
            </ul>
            <p style={paraStyle}>Service Name: {companyName}</p>
            </section>


            <footer style={{ marginTop: 28, color: "#6b7280", fontSize: 13 }}>
                <p style={{ margin: 0 }}>
                    This Terms of Service is a template and does not constitute legal advice. Consider consulting a qualified attorney for advice tailored to your situation.
                </p>
            </footer>
        </main>
    );
};

export default TermsOfService;