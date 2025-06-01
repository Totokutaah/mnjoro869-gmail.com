import React from "react";

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/yourprofile" },
  { name: "Facebook", url: "https://facebook.com/yourprofile" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { name: "Instagram", url: "https://instagram.com/yourprofile" },
];

export default function SocialMedia() {
  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <h3>Follow us:</h3>
      <ul style={{ listStyle: "none", padding: 0, display: "inline-flex", gap: "1.5rem" }}>
        {socialLinks.map((channel) => (
          <li key={channel.name}>
            <a href={channel.url} target="_blank" rel="noopener noreferrer">
              {channel.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}