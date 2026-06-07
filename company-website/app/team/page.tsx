"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ceo = {
  name: "Muhammad Junaid",
  role: "Chief Executive Officer",
  img: "/team/image.png",
  github: "https://github.com/your-ceo",
  linkedin: "https://linkedin.com/in/your-ceo",
  quote: "Building impactful digital products for the future.",
};

const teamMembers = [
  { name: "Husnain Shafqat", role: "Sr Web Developer", img: "/team/image.png", github: "https://github.com/husnain", linkedin: "https://linkedin.com/in/husnain", bio: "Passionate frontend developer focused on performance.", skills: ["React", "Next.js", "Tailwind"] },
  { name: "Jawad Hassan", role: "Backend Engineer", img: "/team/image.png", github: "https://github.com/jawad", linkedin: "https://linkedin.com/in/jawad", bio: "Building scalable APIs and backend systems.", skills: ["Node.js", "Express", "MongoDB"] },
  { name: "Muhammad Shahzaib", role: "Web Developer", img: "/team/image.png", github: "https://github.com/shahzaib", linkedin: "https://linkedin.com/in/shahzaib", bio: "Focused on clean UI and responsive design.", skills: ["HTML", "CSS", "JavaScript"] },
  { name: "Soban Amjad", role: "DevOps Engineer", img: "/team/image.png", github: "https://github.com/soban", linkedin: "https://linkedin.com/in/soban", bio: "Automating deployments and cloud infrastructure.", skills: ["Docker", "AWS", "CI/CD"] },
  { name: "Yahya Ahmad", role: "Web Developer", img: "/team/image.png", github: "https://github.com/yahya", linkedin: "https://linkedin.com/in/yahya", bio: "Turning ideas into interactive web experiences.", skills: ["React", "JS", "UI/UX"] },
  { name: "Muhammad Umar", role: "FullStack Engineer", img: "/team/image.png", github: "https://github.com/umar", linkedin: "https://linkedin.com/in/umar", bio: "Working across frontend & backend systems.", skills: ["MERN", "API", "DB"] },
  { name: "Kashif Khan", role: "UI/UX Designer", img: "/team/image.png", github: "https://github.com/aliraza", linkedin: "https://linkedin.com/in/aliraza", bio: "Designing clean and user-friendly interfaces.", skills: ["Figma", "UI Design", "UX Research"] },
  { name: "Nouman", role: "QA Engineer", img: "/team/image.png", github: "https://github.com/ahmed", linkedin: "https://linkedin.com/in/ahmed", bio: "Ensuring product quality and bug-free experience.", skills: ["Testing", "Automation", "QA"] },
];

export default function TeamPage() {
  return (
    <main style={{
      minHeight: "100vh", background: "var(--bg-main)", color: "var(--text-primary)",
      padding: "120px 24px 80px", userSelect: "none", cursor: "default",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <h1 style={{ fontSize: 42, fontWeight: 800 }}>
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0" }}>
            People behind the product — designers, engineers & problem solvers.
          </p>
        </div>

        {/* CEO SECTION */}
        <div className="ceo-card" style={{ marginBottom: 80 }}>
          <div style={{ width: 160, height: 160, borderRadius: 20, overflow: "hidden", flexShrink: 0, border: "1px solid var(--border-green)" }}>
            <Image src={ceo.img} alt={ceo.name} width={160} height={160} style={{ objectFit: "cover" }} />
          </div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700 }}>{ceo.name}</h2>
            <p style={{ color: "var(--green-bright)", marginTop: 6 }}>{ceo.role}</p>
            <p style={{ color: "var(--text-secondary)", marginTop: 12, maxWidth: 500 }}>
              Leading the vision and strategy, ensuring we build impactful and scalable digital solutions.
            </p>
            <p style={{ marginTop: 10, fontStyle: "italic", color: "var(--text-secondary)" }}>"{ceo.quote}"</p>
            <div style={{ marginTop: 14, display: "flex", gap: 14 }}>
              <a href={ceo.github} target="_blank"><FaGithub /></a>
              <a href={ceo.linkedin} target="_blank"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                background: "var(--card-bg)",
                border: "1px solid var(--border-green)",
                borderRadius: 20,
                padding: "100px 20px 28px",
                textAlign: "center",
                transition: "0.3s",
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
              {/* AVATAR */}
              <div style={{
                position: "absolute", top: -45, left: "50%",
                transform: "translateX(-50%)", width: 110, height: 110,
                borderRadius: "50%", overflow: "hidden", border: "4px solid var(--border-green)",
              }}>
                <Image src={member.img} alt={member.name} width={110} height={110} />
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700 }}>{member.name}</h3>
              <p style={{ color: "var(--green-bright)", fontSize: 14, marginTop: 6 }}>{member.role}</p>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 10 }}>{member.bio}</p>

              <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
                {member.skills.map((skill, i) => (
                  <span key={i} style={{
                    fontSize: 11, padding: "4px 8px", borderRadius: 6,
                    background: "var(--tag-bg)", color: "var(--text-primary)",
                  }}>{skill}</span>
                ))}
              </div>

              <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 12 }}>
                <a href={member.github} target="_blank"><FaGithub /></a>
                <a href={member.linkedin} target="_blank"><FaLinkedin /></a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 90 }}>
          <div style={{
            background: "var(--card-bg)", border: "1px solid var(--border-green)",
            borderRadius: 20, padding: 40, textAlign: "center",
          }}>
            <h2 style={{ fontSize: 28, fontWeight: 700 }}>Want to work with us?</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 10 }}>Let's build something impactful together.</p>
            <a href="/contactus" style={{
              display: "inline-block", marginTop: 20, padding: "12px 22px",
              borderRadius: 10, background: "linear-gradient(135deg,var(--green-bright),var(--green-lime))",
              color: "#ffff", fontWeight: 600,
            }}>Contact Us</a>
          </div>
        </div>

      </div>

      <style>{`
        .ceo-card {
          display: flex;
          gap: 28px;
          align-items: center;
          padding: 30px;
          borderRadius: 20px;
          background: var(--card-bg);
          border: 1px solid var(--border-green);
          border-radius: 20px;
          flex-wrap: wrap;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 70px 30px;
        }
        @media (max-width: 768px) {
          .ceo-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
          }
          .ceo-card div a {
            justify-content: center;
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 70px 16px;
          }
        }
        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr 1fr;
            gap: 70px 12px;
          }
        }
      `}</style>
    </main>
  );
}