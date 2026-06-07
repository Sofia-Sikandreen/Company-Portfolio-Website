"use client";
import { TrendingUp, Users, CheckCircle } from "lucide-react"
import StatCard from "@/components/statcard";

export default function AboutPage() {
  return (
    <main style={{
      minHeight: "100vh", background: "var(--bg-dark)", color: "var(--text-primary)",
      userSelect: "none", cursor: "default",
    }} className="about-main">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{
            color: 'var(--green-lime)', letterSpacing: "0.3em", fontSize: 15,
            textTransform: "uppercase", fontWeight: 500,
          }}>About Us</p>

          <h1 className="about-title" style={{ fontWeight: 800, marginTop: 10 }}>
            We Build Modern Software Solutions
          </h1>

          <p style={{ color: "var(--text-secondary)", maxWidth: 700, margin: "18px auto 0", lineHeight: 1.7 }}>
            We are a software development company focused on building scalable,
            high-performance digital products for businesses worldwide.
          </p>
        </div>

        {/* STATS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20, marginBottom: 80,
        }}>
          {[
            { icon: TrendingUp, value: "50+", label: "Projects Completed", gradient: "from-[var(--green-bright)] to-[var(--green-mid)]" },
            { icon: Users, value: "30+", label: "Happy Clients", gradient: "from-[var(--green-lime)] to-[var(--green-mid)]" },
            { icon: CheckCircle, value: "99%", label: "Satisfaction", gradient: "from-[var(--green-bright)] to-[var(--green-lime)]" },
          ].map((item, i) => (
            <StatCard key={i} icon={item.icon} value={item.value} label={item.label} gradient={item.gradient} delay={i * 0.2} />
          ))}
        </div>

        {/* ABOUT TEXT */}
        <div style={{
          background: "var(--card-bg)",
          border: "1px solid var(--border-green)", borderRadius: 20,
          padding: 32, marginBottom: 80,
        }}>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 20 }}>
            We believe great software isn't just built — it's crafted with purpose and precision.
            Every detail matters, from how an interface feels to how efficiently it performs.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Founded with a passion for innovation, we focus on delivering solutions that are not only visually strong but also highly functional and scalable.
          </p>
        </div>

        {/* VALUES */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ textAlign: "center", fontSize: 28, marginBottom: 30, fontWeight: 500 }}>
            Our <span className="gradient-text">Values</span>
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}>
            {[
              { title: "Trust & Security", desc: "We build secure and reliable digital solutions." },
              { title: "Innovation", desc: "We turn ideas into modern scalable products." },
              { title: "Growth", desc: "Focused on long-term success and improvement." },
              { title: "Passion", desc: "We care deeply about every detail we build." },
            ].map((item, i) => (
              <div key={i} style={{
                background: "var(--card-bg)", border: "1px solid var(--border-green)",
                borderRadius: 16, padding: 24,
              }}>
                <h3 style={{ color: "var(--green-lime)", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: "linear-gradient(135deg, var(--green-bright), var(--green-lime),var(--green-dark))",
          borderRadius: 20, padding: 30, textAlign: "center",
        }}>
          <h2 style={{ fontSize: 22, marginBottom: 10, color: '#ffff' }}>Let's Build Something Great Together</h2>
          <p style={{ fontSize: 14,  color:'#ffff'}}>
            We collaborate with startups and enterprises to turn ideas into scalable digital products.
          </p>
        </div>

      </div>

      <style>{`
        .about-main {
          padding: 120px 24px 80px;
        }
        .about-title {
          font-size: 42px;
        }
        @media (max-width: 768px) {
          .about-main {
            padding: 100px 16px 60px;
          }
          .about-title {
            font-size: 28px;
          }
        }
      `}</style>
    </main>
  );
}