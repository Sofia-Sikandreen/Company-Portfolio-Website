"use client";

import {
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaFigma,
  FaWordpress,
  FaJira,
  FaDocker,
  FaYoutube,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiPython,
  SiDjango,
  SiSketch,
  SiDrupal,
  SiTailwindcss,
  SiFlutter,
  SiShopify,
} from "react-icons/si";

import { MdCloud, MdMemory } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const iconMap: any = {
  react: FaReact,
  js: FaJs,
  node: FaNodeJs,
  python: SiPython,
  design: FaFigma,
  youtube: FaYoutube,

  laravel: SiLaravel,
  wordpress: FaWordpress,
  shopify: SiShopify,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  flutter: SiFlutter,
  docker: FaDocker,
  aws: MdCloud,
};

type Service = {
  id?: number;
  title: string;
  description?: string;
  icon?: any;
};

const services = [
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Vue.js", icon: FaVuejs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Figma", icon: FaFigma },
  { name: "Sketch", icon: SiSketch },
  { name: "WordPress", icon: FaWordpress },
  { name: "Drupal", icon: SiDrupal },
  { name: "Jira", icon: FaJira },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const platforms = [
  { name: "AWS", icon: MdCloud },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "Docker", icon: FaDocker },
  { name: "AI / ML", icon: MdMemory },
  { name: "WordPress", icon: FaWordpress },
  { name: "Shopify", icon: SiShopify },
];

const movingServices = [
  { name: "Web Development", icon: FaReact },
  { name: "AI & ML", icon: MdMemory },
  { name: "Mobile Apps", icon: SiFlutter },
  { name: "UI/UX Design", icon: FaFigma },
  { name: "Cloud Solutions", icon: MdCloud },
  { name: "E-commerce", icon: SiShopify },
];

export default function ServicesPage() {
  const [apiServices, setApiServices] = useState<Service[]>([]);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/services`);
        const data = await res.json();

        setApiServices(data.docs || []);
      } catch (err) {
        console.log("Error fetching services", err);
      }
    };

    fetchServices();
  }, []);

  if (!time) return null;

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#110b0f",
        color: "white",
        padding: "120px 24px 80px",
        userSelect: "none",
    cursor: "default",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{ fontSize: 38, fontWeight: 800 }}>
            Our <span className="gradient-text">Services</span>
          </h1>

          <p style={{ color: "#9ca3af", maxWidth: 700, margin: "16px auto 0" }}>
            Technologies and tools we use to build modern digital solutions.
          </p>
        </div>
    
    {/*services grid */}
    <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
  }}
>
  {[
    // Default frontend services
    ...services.map((service) => ({
      title: service.name,
      icon: service.icon,
      isComponent: true,
    })),

    // Admin panel services
    ...(Array.isArray(apiServices)
      ? apiServices.map((s: any) => ({
          title: s.title || s.name,
          icon: iconMap[s.icon] || FaReact,
          isComponent: false,
        }))
      : []),
  ].map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="card-hover"
        style={{
          padding: 22,
          borderRadius: 16,
          textAlign: "center",
          placeItems: "center",
          background: "#111118",
          border: "1px solid #1E1E2E",
        }}
      >
        <Icon
          size={32}
          style={{
            color: "#91a4d7",
            marginBottom: 10,
          }}
        />

        <h3
          style={{
            color: "#91a4d7",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {item.title.toUpperCase()}
        </h3>
      </div>
    );
  })}
</div>

        {/* PLATFORM */}
        <div
          style={{
            marginTop: 70,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "#111118",
              border: "1px solid #1E1E2E",
              borderRadius: 20,
              padding: 28,
            }}
          >
            <h2 style={{ fontSize: 30, fontWeight: 800 }}>
              Platform flexibility.<br />
              <span className="gradient-text">Design consistency.</span>
            </h2>

            <p style={{ marginTop: 14, color: "#9ca3af" }}>
              Consistent design across all platforms with scalable architecture.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid #1E1E2E",
              borderRadius: 20,
              overflow: "hidden",
              background: "#111118",
            }}
          >
            {platforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: 20,
                    textAlign: "center",
                    placeItems: "center",
                    marginTop: 7,
                  }}
                >
                  <Icon size={22} style={{ color: "#68477c" }} />

                  <p
                    style={{
                      fontSize: 12,
                      marginTop: 6,
                      color: "#9ca3af",
                    }}
                  >
                    {p.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOVING STRIP */}
        <div style={{ marginTop: 80, overflow: "hidden" }}>
          <motion.div
            style={{ display: "flex", gap: 40, whiteSpace: "nowrap" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...movingServices, ...movingServices].map((m, i) => {
              const Icon = m.icon;

              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 6,
                    color: "#0f727a",
                  }}
                >
                  <Icon />
                  <span>{m.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* CMS + CLOCK */}
        <div
          style={{
            marginTop: 80,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >

          {/* CMS */}
          <div
            style={{
              background: "#111118",
              padding: 28,
              borderRadius: 20,
              border: "1px solid #1E1E2E",
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>
              Seamless <span className="gradient-text">CMS</span> Launch
            </h2>

            <p style={{ marginTop: 12, color: "#9ca3af" }}>
              Update content without code changes.
            </p>

            <div
              className="p-6 height-50 width-120 border rounded-xl"
              style={{ marginTop: 20 }}
            >
              <div
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: "#9ca3af",
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <b style={{ color: "#91a4d7" }}>Title</b>
                  <b style={{ color: "#91a4d7" }}>Date</b>
                </div>

                <div style={{ marginTop: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Mastering Motion</span>
                    <span>5 Aug 2025</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Brand</span>
                    <span>Jul</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>UI</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CLOCK */}
          <div
            style={{
              background: "#111118",
              padding: 28,
              borderRadius: 20,
              border: "1px solid #1E1E2E",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>
              Future <span className="gradient-text">Ready</span>
            </h2>

            <p style={{ color: "#9ca3af", marginTop: 10 }}>
              Systems that scale with growth
            </p>

            {/* CLOCK CONTAINER */}
            <div
              style={{
                width: 220,
                height: 220,
                margin: "20px auto",
                borderRadius: "50%",
                border: "1px solid #68477c",
                position: "relative",
              }}
            >
              {[...Array(12)].map((_, i) => {
                const angle = (i + 1) * 30;

                const x = 50 + 42 * Math.sin((angle * Math.PI) / 180);
                const y = 50 - 42 * Math.cos((angle * Math.PI) / 180);

                return (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      fontSize: 10,
                      color: "#9ca3af",
                    }}
                  >
                    {i + 1}
                  </span>
                );
              })}

              {/* center dot */}
              <div
                style={{
                  position: "absolute",
                  width: 10,
                  height: 10,
                  background: "#fff",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              />

              {/* hour hand */}
              <div
                style={{
                  position: "absolute",
                  width: 4,
                  height: 60,
                  background: "#fff",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "bottom",
                  transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
                }}
              />

              {/* minute hand */}
              <div
                style={{
                  position: "absolute",
                  width: 3,
                  height: 75,
                  background: "#9ca3af",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "bottom",
                  transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
                }}
              />

              {/* second hand */}
              <div
                style={{
                  position: "absolute",
                  width: 2,
                  height: 85,
                  background: "#0f727a",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "bottom",
                  transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
                }}
              />
            </div>

            <p style={{ color: "#0f727a" }}>Always on Time</p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 80, textAlign: "center" }}>
          <div
            style={{
              background: "linear-gradient(135deg,#111118,#0a0a0f)",
              border: "1px solid #1E1E2E",
              borderRadius: 20,
              padding: 40,
            }}
          >
            <h2 style={{ fontSize: 28 }}>Still Have Questions?</h2>

            <p style={{ color: "#9ca3af", marginTop: 10 }}>
              Contact us for custom solutions
            </p>

            <a
              href="/contactus"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "12px 20px",
                borderRadius: 10,
                background: "linear-gradient(135deg,#0f727a,#68477c)",
                color: "white",
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