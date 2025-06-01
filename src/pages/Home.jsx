export default function Home() {
  return (
    <div className="text-center p-8" style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#646cff", marginBottom: "1rem" }}>MindWell</h1>
      <h2 className="text-4xl font-bold mb-4">Find Support, Guidance, and Balance</h2>
      <p className="text-lg text-gray-600 mb-8">Your journey to mental wellness starts here.</p>
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Wellness" style={{ width: "100%", borderRadius: 12, marginBottom: "2rem" }} />
    </div>
  )
}
