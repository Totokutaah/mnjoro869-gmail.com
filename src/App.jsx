import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SocialMedia from './components/SocialMedia';

export default function App() {
  const [messenger, setMessenger] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMessengerSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessenger('');
  };

  return (
    <>
      <Navbar />
      <section style={{
        textAlign: "center",
        margin: "2rem auto",
        maxWidth: 700,
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(100,108,255,0.08)",
        padding: "2rem"
      }}>
        <h1 style={{ color: "#646cff", fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>Welcome to MindWell</h1>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          MindWell is your trusted partner on the journey to mental wellness. Explore our services, connect with our team, and discover resources to help you thrive.
        </p>
        {/* FAQ Section */}
        <div style={{ textAlign: "left", margin: "2rem 0" }}>
          <h2 style={{ color: "#646cff", fontSize: "1.3rem" }}>Frequently Asked Questions</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "1rem" }}>
              <strong>What services do you offer?</strong><br />
              We offer counseling, therapy, and mental wellness resources.
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <strong>How can I contact your team?</strong><br />
              Use the contact page or send us your Messenger tag above.
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <strong>Is my information confidential?</strong><br />
              Yes, all your information is kept private and secure.
            </li>
          </ul>
        </div>
       {/* End FAQ Section */}
        <form onSubmit={handleMessengerSubmit} style={{ marginTop: "2rem" }}>
          <label htmlFor="messenger" style={{ marginRight: "1rem" }}>
            Send us your Messenger tag:
          </label>
          <input
            id="messenger"
            type="text"
            value={messenger}
            onChange={e => setMessenger(e.target.value)}
            placeholder="Enter Messenger tag"
            required
            style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem 1rem", borderRadius: "6px", background: "#646cff", color: "#fff", border: "none" }}>
            Submit
          </button>
        </form>
        {submitted && (
           <div style={{ color: "green", marginTop: "1rem", fontWeight: 600 }}>
            Messenger submitted successfully
          </div>
        )}
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SocialMedia />
    </>
  );
}
        

