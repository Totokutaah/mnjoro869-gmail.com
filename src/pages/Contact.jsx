export default function Contact() {
  return (
    <div className="p-8" style={{ maxWidth: 600, margin: "2rem auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p>Email: <a href="mailto:support@mindwell.com">support@mindwell.com</a></p>
      <p>Phone: <a href="tel:0110850861">0110850861</a></p>
      
      <div style={{ marginTop: "2rem" }}>
        <h3 className="text-2xl font-bold mb-2">Frequently Asked Questions</h3>
        <ul style={{ textAlign: "left", margin: "1rem 0", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>How do I book a session?</strong>
            <br />
            You can book a session by contacting us via email or phone, or by using the booking form on our website.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Do you offer online consultations?</strong>
            <br />
            Yes, we offer both in-person and online consultations to suit your needs.
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Are your services confidential?</strong>
            <br />
            Absolutely. All our services are strictly confidential and your privacy is our priority.
          </li>
        </ul>
      </div>
    </div>
  )
}

