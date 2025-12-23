import React from "react";

type Props = {
  lastUpdated?: string;
  companyName?: string;
};

const containerStyle: React.CSSProperties = {
  maxWidth: 880,
  margin: "32px auto",
  padding: "24px",
  fontFamily:
    "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
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

const linkStyle: React.CSSProperties = {
  color: "#2563eb",
  textDecoration: "underline",
};

const RefundPolicy: React.FC<Props> = ({
  lastUpdated = "2025-12-23",
  companyName = "Halal Life Daily",
}) => {
  return (
    <main style={containerStyle} aria-labelledby="refund-title">
      <header>
        <h1 id="refund-title" style={h1Style}>
          Refund Policy
        </h1>
        <div style={metaStyle}>
          Last updated: {lastUpdated} · {companyName}
        </div>
      </header>

      {/* Intro */}
      <section style={sectionStyle}>
        <p style={paraStyle}>
          At {companyName}, all payments, billing and refunds are handled by{" "}
          <strong>Paddle.com</strong>, our Merchant of Record. By completing a
          purchase, you enter into a transaction with Paddle and agree to
          Paddle’s Consumer Terms.
        </p>
      </section>

      {/* 1. 14-Day Right to Cancel */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>1. 14-Day Right to Cancel (Consumer Right)</h2>
        <p style={paraStyle}>
          If you are a consumer, you have the right to cancel your purchase
          within 14 days of the transaction without giving any reason, in
          accordance with Paddle’s terms.
        </p>
        <p style={paraStyle}>
          To meet the cancellation deadline, your request must be sent before
          the end of the 14-day period.
        </p>
      </section>

      {/* 2. How to Request a Refund */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>2. How to Request a Refund</h2>
        <p style={paraStyle}>
          To request a refund or to cancel a purchase, please contact Paddle
          directly using their official support channel:
        </p>
        <p style={paraStyle}>
          👉{" "}
          <a
            href="https://paddle.net/contact"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            https://paddle.net/contact
          </a>
        </p>
        <p style={paraStyle}>
          Please include your order email and/or transaction ID so Paddle can
          process your request quickly.
        </p>
      </section>

      {/* 3. Refund Processing */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>3. Refund Processing</h2>
        <p style={paraStyle}>
          Paddle will process refunds using the same payment method used for the
          original transaction. Refunds are typically issued within 14 days
          after Paddle receives and confirms your cancellation.
        </p>
        <p style={paraStyle}>
          Processing time may vary depending on your bank.
        </p>
      </section>

      {/* 4. Additional Refund Information */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>4. Additional Refund Information</h2>
        <p style={paraStyle}>
          Refunds are handled at the sole discretion of Paddle, and may be
          refused in cases of:
        </p>
        <ul style={listStyle}>
          <li>Fraud</li>
          <li>Refund abuse</li>
          <li>Other behavior that violates Paddle’s terms</li>
        </ul>
        <p style={paraStyle}>
          This does not affect your legal consumer rights for products that are
          faulty, not as described, or unfit for purpose.
        </p>
      </section>

      {/* 5. Subscriptions */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>5. Subscriptions</h2>
        <p style={paraStyle}>
          If you wish to cancel a subscription, please contact Paddle at least{" "}
          <strong>48 hours</strong> before the next billing date. Refunds for
          unused subscription periods are not guaranteed and are determined by
          Paddle.
        </p>
      </section>

      {/* 6. Updates */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>6. Updates to This Policy</h2>
        <p style={paraStyle}>
          {companyName} may update this refund policy from time to time. Any
          changes will not override Paddle’s mandatory consumer protections.
        </p>
      </section>

      <footer style={{ marginTop: 28, color: "#6b7280", fontSize: 13 }}>
        <p style={{ margin: 0 }}>
          This Refund Policy is for informational purposes only and does not
          constitute legal advice.
        </p>
      </footer>
    </main>
  );
};

export default RefundPolicy;








// import React from "react";

// type Props = {
//     lastUpdated?: string;
//     companyName?: string;
//     contactEmail?: string;
// };

// const containerStyle: React.CSSProperties = {
//     maxWidth: 880,
//     margin: "32px auto",
//     padding: "24px",
//     fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
//     color: "#111827",
//     lineHeight: 1.6,
//     background: "#ffffff",
//     borderRadius: 8,
//     boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
// };

// const h1Style: React.CSSProperties = {
//     margin: 0,
//     fontSize: 28,
//     fontWeight: 700,
//     color: "#0f172a"
// };

// const metaStyle: React.CSSProperties = {
//     marginTop: 6,
//     color: "#6b7280",
//     fontSize: 13
// };

// const sectionStyle: React.CSSProperties = {
//     marginTop: 20
// };

// const headingStyle: React.CSSProperties = {
//     fontSize: 18,
//     fontWeight: 600,
//     marginBottom: 8,
//     color: "#0f172a"
// };

// const paraStyle: React.CSSProperties = {
//     margin: "6px 0",
//     color: "#374151",
//     fontSize: 15
// };

// const listStyle: React.CSSProperties = {
//     paddingLeft: 20,
//     margin: "6px 0"
// };

// const linkStyle: React.CSSProperties = {
//     color: "#2563eb",
//     textDecoration: "underline"
// };

// const RefundPolicy: React.FC<Props> = ({
//     lastUpdated = "2025-12-01",
//     companyName = "Halal Life Daily",
//     contactEmail = "info@halallifedaily.com"
// }) => {
//     return (
//         <main style={containerStyle} aria-labelledby="refund-title">
//             <header>
//                 <h1 id="refund-title" style={h1Style}>Refund Policy</h1>
//                 <div style={metaStyle}>Last updated: {lastUpdated} · {companyName}</div>
//             </header>

//             {/* Intro */}
//             <section style={sectionStyle}>
//                 <h2 style={headingStyle}>Introduction</h2>
//                 <p style={paraStyle}>
//                     At {companyName}, customer satisfaction is important to us. All payments, billing and refunds
//                     are handled by <strong>Paddle.com</strong>, our Merchant of Record. By completing a purchase,
//                     you enter into a transaction with Paddle and agree to Paddle&apos;s Consumer Terms.
//                 </p>
//             </section>

//             {/* 1. 14-Day Right to Cancel */}
//             <section style={sectionStyle}>
//                 <h2 style={headingStyle}>1. 14-Day Right to Cancel</h2>
//                 <p style={paraStyle}>
//                     If you are a consumer, you have the right to cancel your purchase within{" "}
//                     <strong>14 days</strong> of the transaction without giving any reason, in line with Paddle&apos;s
//                     terms and applicable consumer protection laws.
//                 </p>
//                 <p style={paraStyle}>
//                     The cancellation period expires 14 days after the day your transaction is completed. To meet the
//                     cancellation deadline, your request must be sent before the end of this 14-day period.
//                 </p>
//                 <p style={paraStyle}>
//                     <strong>Exception for digital content:</strong> if your purchase includes digital content that is
//                     made available immediately, you may be asked to confirm that you wish to access the content
//                     right away. By doing so, you acknowledge that once the download, access or delivery has begun,
//                     you waive your 14-day right to cancel for that specific purchase.
//                 </p>
//             </section>

//             {/* 2. How to Request a Refund */}
//             <section style={sectionStyle}>
//                 <h2 style={headingStyle}>2. How to Request a Refund</h2>
//                 <p style={paraStyle}>
//                     To request a refund or exercise your right to cancel, please contact Paddle using their official
//                     support channel:
//                 </p>
//                 <ul style={listStyle}>
//                     <li>
//                         Paddle Support:{" "}
//                         <a
//                             href="https://paddle.net/contact"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={linkStyle}
//                         >
//                             https://paddle.net/contact
//                         </a>
//                     </li>
//                 </ul>
//                 <p style={paraStyle}>
//                     To help Paddle process your request quickly, please include:
//                 </p>
//                 <ul style={listStyle}>
//                     <li>Your name</li>
//                     <li>The email address used at checkout</li>
//                     <li>Your order receipt or transaction ID (if available)</li>
//                 </ul>
//                 <p style={paraStyle}>
//                     You may also reach out to us at <a href={`mailto:${contactEmail}`} style={linkStyle}>{contactEmail}</a>{" "}
//                     if you need assistance locating your order details, but all refunds are processed by Paddle.
//                 </p>
//             </section>

//             {/* 3. Refund Processing */}
//             <section style={sectionStyle}>
//                 <h2 style={headingStyle}>3. Refund Processing</h2>
//                 <p style={paraStyle}>
//                     If your cancellation or refund request is approved, Paddle will reimburse all payments received
//                     for the relevant transaction using the same payment method used for the original purchase.
//                 </p>
//                 <p style={paraStyle}>
//                     Refunds are generally issued by Paddle without undue delay and no later than{" "}
//                     <strong>14 days</strong> from the day they are informed of your decision to cancel. The time it
//                     takes for the refund to appear in your account may vary depending on your bank or payment
//                     provider.
//                 </p>
//             </section>

//             {/* 4. Additional Refund Information */}
//             <section style={sectionStyle}>
//                 <h2 style={headingStyle}>4. Additional Refund Information</h2>
//                 <p style={paraStyle}>
//                     Refunds are handled at the sole discretion of Paddle and may be refused where Paddle finds
//                     evidence of:
//                 </p>
//                 <ul style={listStyle}>
//                     <li>Fraud or suspected fraudulent activity</li>
//                     <li>Refund abuse or excessive refund requests</li>
//                     <li>Other behavior that violates Paddle&apos;s terms or applicable laws</li>
//                 </ul>
//                 <p style={paraStyle}>
//                     This does not affect your legal rights as a consumer in relation to products that are not as
//                     described, faulty or not fit for purpose.
//                 </p>
//             </section>

//             {/* 5. Subscriptions */}
//             <section style={sectionStyle}>
//                 <h2 style={headingStyle}>5. Subscriptions</h2>
//                 <p style={paraStyle}>
//                     If your purchase is a recurring subscription (such as a monthly or yearly plan), it will
//                     automatically renew until cancelled. If you wish to cancel a subscription, please contact
//                     Paddle at least <strong>48 hours</strong> before the next billing date using the contact link
//                     above.
//                 </p>
//                 <p style={paraStyle}>
//                     Cancellation will take effect at the next billing period. Refunds for unused portions of a
//                     subscription are not guaranteed and are determined by Paddle in accordance with their
//                     policies.
//                 </p>
//             </section>

//             {/* 6. Changes to This Policy */}
//             <section style={sectionStyle}>
//                 <h2 style={headingStyle}>6. Changes to This Refund Policy</h2>
//                 <p style={paraStyle}>
//                     {companyName} may update this refund policy from time to time. Any changes will apply to future
//                     purchases and will not remove or limit any mandatory consumer rights granted to you by law or
//                     by Paddle&apos;s terms.
//                 </p>
//             </section>

//             <footer style={{ marginTop: 28, color: "#6b7280", fontSize: 13 }}>
//                 <p style={{ margin: 0 }}>
//                     This Refund Policy is for informational purposes only and does not constitute legal advice.
//                     For specific legal questions, please consult a qualified professional.
//                 </p>
//             </footer>
//         </main>
//     );
// };

// export default RefundPolicy;
