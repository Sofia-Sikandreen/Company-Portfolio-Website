"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Skill = { skill: string };
type Member = {
  name: string; role: string; image?: { url: string };
  github?: string; linkedin?: string; bio?: string; skills?: Skill[];
};
type TeamData = {
  heading?: string; highlightedWord?: string; description?: string;
  ceoName?: string; ceoRole?: string; ceoImage?: string;
  ceoGithub?: string; ceoLinkedin?: string; ceoBio?: string; ceoQuote?: string;
  members?: Member[];
};

export default function TeamBlock({ data }: { data: TeamData }) {
  const {
    heading, highlightedWord, description,
    ceoName, ceoRole, ceoImage, ceoGithub, ceoLinkedin, ceoBio, ceoQuote,
    members = [],
  } = data || {};

  return (
    <div style={{ marginTop: 40 }}>
      <div style={{ textAlign: "center", marginBottom: 70 }}>
        <h1 style={{ fontSize: 42, fontWeight: 800 }}>
          {heading} <span className="gradient-text">{highlightedWord}</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0" }}>
          {description}
        </p>
      </div>

      {ceoName && (
        <div className="ceo-card" style={{ marginBottom: 80 }}>
          <div style={{ width: 160, height: 160, borderRadius: 20, overflow: "hidden", flexShrink: 0, border: "1px solid var(--border-green)" }}>
           {ceoImage?.url && <img src={ceoImage.url} alt={ceoName} width={160} height={160} style={{ objectFit: "cover" }} />}
          </div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700 }}>{ceoName}</h2>
            <p style={{ color: "var(--green-bright)", marginTop: 6 }}>{ceoRole}</p>
            <p style={{ color: "var(--text-secondary)", marginTop: 12, maxWidth: 500 }}>{ceoBio}</p>
            {ceoQuote && <p style={{ marginTop: 10, fontStyle: "italic", color: "var(--text-secondary)" }}>"{ceoQuote}"</p>}
            <div style={{ marginTop: 14, display: "flex", gap: 14 }}>
              {ceoGithub && <a href={ceoGithub} target="_blank"><FaGithub /></a>}
              {ceoLinkedin && <a href={ceoLinkedin} target="_blank"><FaLinkedin /></a>}
            </div>
          </div>
        </div>
      )}

      <div className="team-grid">
        {members.map((member, index) => (
          <div
            key={index}
            style={{
              position: "relative", background: "var(--card-bg)",
              border: "1px solid var(--border-green)", borderRadius: 20,
              padding: "100px 20px 28px", textAlign: "center", transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              position: "absolute", top: -45, left: "50%", transform: "translateX(-50%)",
              width: 110, height: 110, borderRadius: "50%", overflow: "hidden",
              border: "4px solid var(--border-green)",
            }}>
              {member.image?.url && <img src={member.image.url} alt={member.name} width={110} height={110} />}
            </div>

            <h3 style={{ fontSize: 17, fontWeight: 700 }}>{member.name}</h3>
            <p style={{ color: "var(--green-bright)", fontSize: 14, marginTop: 6 }}>{member.role}</p>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 10 }}>{member.bio}</p>

            <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
              {(member.skills || []).map((s, i) => (
                <span key={i} style={{ fontSize: 11, padding: "4px 8px", borderRadius: 6, background: "var(--tag-bg)", color: "var(--text-primary)" }}>
                  {s.skill}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 12 }}>
              {member.github && <a href={member.github} target="_blank"><FaGithub /></a>}
              {member.linkedin && <a href={member.linkedin} target="_blank"><FaLinkedin /></a>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 90 }}>
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--border-green)", borderRadius: 20, padding: 40, textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700 }}>Want to work with us?</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 10 }}>Let's build something impactful together.</p>
          <a href="/contactus" style={{
            display: "inline-block", marginTop: 20, padding: "12px 22px", borderRadius: 10,
            background: "linear-gradient(135deg,var(--green-bright),var(--green-lime))", color: "#fff", fontWeight: 600,
          }}>Contact Us</a>
        </div>
      </div>

      <style>{`
        .ceo-card { display: flex; gap: 28px; align-items: center; padding: 30px; background: var(--card-bg); border: 1px solid var(--border-green); border-radius: 20px; flex-wrap: wrap; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 70px 30px; }
        @media (max-width: 768px) {
          .ceo-card { flex-direction: column; align-items: center; text-align: center; gap: 20px; }
          .team-grid { grid-template-columns: repeat(2, 1fr); gap: 70px 16px; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr 1fr; gap: 70px 12px; }
        }
      `}</style>
    </div>
  );
}