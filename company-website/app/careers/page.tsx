"use client";

import { useEffect, useState } from "react";

type Job = {
  title: string;
  type: string;
  location: string;
  description: string;
};

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const data: Job[] = []; // replace with API later
      setJobs(data);
      setLoading(false);
    };

    fetchJobs();
  }, []);

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
          <h1 style={{ fontSize: 42, fontWeight: 800 }}>
            Careers at <span className="gradient-text">Our Company</span>
          </h1>

          <p style={{ color: "#9ca3af", maxWidth: 720, margin: "16px auto 0" }}>
            Build your future with us. We welcome developers, designers, and interns.
          </p>
        </div>

        {/* LOADING */}
        {loading ? (
          <p style={{ textAlign: "center", color: "#9ca3af" }}>
            Loading opportunities...
          </p>
        ) : null}

        {/* EMPTY STATE */}
        {!loading && jobs.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              border: "1px solid #1E1E2E",
              borderRadius: 20,
              background: "#111118",
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 700 }}>
              No Jobs Available Right Now
            </h2>

            <p style={{ color: "#9ca3af", marginTop: 10 }}>
              We are not hiring at the moment, but new opportunities will open soon.
            </p>
          </div>
        ) : null}

        {/* JOB LIST */}
        {!loading && jobs.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {jobs.map((job, index) => (
              <div
                key={index}
                style={{
                  background: "#111118",
                  border: "1px solid #1E1E2E",
                  borderRadius: 20,
                  padding: 22,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>
                  {job.title}
                </h3>

                <p style={{ color: "#0f727a", marginTop: 6 }}>
                  {job.type} • {job.location}
                </p>

                <p style={{ color: "#9ca3af", marginTop: 12 }}>
                  {job.description}
                </p>

                <button
                  style={{
                    marginTop: 16,
                    padding: "10px 16px",
                    borderRadius: 10,
                    background: "linear-gradient(135deg,#0f727a,#68477c)",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        ) : null}

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
            <h2 style={{ fontSize: 28, fontWeight: 700 }}>
              Want to join us?
            </h2>

            <p style={{ color: "#9ca3af", marginTop: 10 }}>
              Send your CV even if no job is open.
            </p>

            <a
              href="mailto:m.junaidcs@gmail.com"
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
              Send CV
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}