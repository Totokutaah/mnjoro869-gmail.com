import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      background: "#1a1a2e",
      padding: "1rem 0",
      borderRadius: "8px",
      margin: "2rem auto",
      maxWidth: 700,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    }}>
      <Link to="/" style={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}>Home</Link>
      <Link to="/services" style={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}>Services</Link>
      <Link to="/contact" style={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}>Contact</Link>
    </nav>
  );
}