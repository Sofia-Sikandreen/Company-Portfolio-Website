"use client";

import Image from "next/image";

const teamMembers = [
  { name: "Husnain Shafqat", role: "Sr Web Developer", img: "/team/image.png" },
  { name: "Jawad Hassan", role: "Backend Engineer", img: "/team/image.png" },
  { name: "Muhammad Shahzaib", role: "Web Developer", img: "/team/image.png" },
  { name: "Soban Amjad", role: "DevOps Engineer", img: "/team/image.png" },
  { name: "Yahya Ahmad", role: "Web Developer", img: "/team/image.png" },
  { name: "Muhammad Junaid", role: "FoollStack Engineer", img: "/team/image.png" },
];

export default function TeamPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#110b0f",
        color: "#fff",
        padding: "120px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800 }}>
            Our <span className="gradient-text">Team</span>
          </h1>

          <p style={{ color: "#9ca3af", maxWidth: 680, margin: "16px auto 0" }}>
            A group of passionate developers, designers, and engineers building scalable digital products.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                background: "#111118",
                border: "1px solid #1E1E2E",
                borderRadius: 20,
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* IMAGE FIXED */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 260,
                  background: "#0b0b10",
                }}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* INFO */}
              <div style={{ padding: 20, textAlign: "center" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>
                  {member.name}
                </h3>

                <p style={{ color: "#0f727a", marginTop: 6, fontSize: 14 }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 80 }}>
          <div
            style={{
              background: "linear-gradient(135deg,#111118,#0a0a0f)",
              border: "1px solid #1E1E2E",
              borderRadius: 20,
              padding: 40,
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 700 }}>
              Want to work with us?
            </h2>

            <p style={{ color: "#9ca3af", marginTop: 10 }}>
              Let’s build something impactful together.
            </p>

            <a
              href="/contactus"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "12px 22px",
                borderRadius: 10,
                background: "linear-gradient(135deg,#0f727a,#68477c)",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}