"use client";

import { useEffect, useState } from "react";
import ApplyCard from '@/components/careers/ApplyCard';

type Job = {
  title: string;
  type: string;
  location: string;
  description?: string;
};

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/careers`, { cache: "no-store" });
        const data = await res.json();
        const formattedJobs = Array.isArray(data.docs)
          ? data.docs.map((job: any) => ({
              title: job.jobTitle, type: job.type,
              location: job.location, description: job.description || "",
            }))
          : [];
        setJobs(formattedJobs);
      } catch (error) {
        console.log("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <main style={{
      minHeight: "100vh", background: "#110b0f", color: "#fff",
      userSelect: "none", cursor: "default",
    }} className="careers-main">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 className="careers-title" style={{ fontWeight: 800 }}>
            Careers at <span className="gradient-text">Our Company</span>
          </h1>
          <p style={{ color: "#9ca3af", marginTop: 10 }}>
            Explore opportunities and grow with us.
          </p>
        </div>

        {loading && <p style={{ textAlign: "center", color: "#9ca3af" }}>Loading opportunities...</p>}
        {!loading && jobs.length === 0 && <p style={{ textAlign: "center", color: "#9ca3af" }}>No jobs available right now</p>}

        {/* JOB LIST */}
        {!loading && jobs.length > 0 && (
          <div style={{ display: "grid", gap: 24 }}>
            {jobs.map((job, index) => (
              <div key={index} style={{
                background: "#111118", border: "1px solid #1E1E2E",
                borderRadius: 20, padding: 22,
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{job.title}</h3>
                <p style={{ color: "#0f727a", marginTop: 6 }}>{job.type} • {job.location}</p>
                <p style={{ color: "#9ca3af", marginTop: 6 }}>
                  {expandedIndex === index
                    ? job.description
                    : (job.description || "").length > 90
                    ? job.description?.slice(0, 90) + "..."
                    : job.description}
                </p>
                {(job.description || "").length > 90 && (
                  <div style={{ textAlign: "right", marginTop: 6 }}>
                    <span onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      style={{ fontSize: 12, color: "#0f727a", cursor: "pointer" }}>
                      {expandedIndex === index ? "Show less" : "Read more →"}
                    </span>
                  </div>
                )}
                <div style={{ marginTop: 12, textAlign: "right" }}>
                  <button onClick={() => setApplyJob(job)} style={{
                    padding: "10px 16px", borderRadius: 10,
                    background: "linear-gradient(135deg,#0f727a,#68477c)",
                    color: "#fff", border: "none", cursor: "pointer",
                  }}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* APPLY MODAL */}
        {applyJob && (
          <ApplyCard
            job={applyJob}
            onClose={() => setApplyJob(null)}
            onSubmit={async (form) => {
              if (!form.fullName || !form.email || !form.cv) {
                alert("Please fill all fields and upload a CV");
                return;
              }
              try {
                const mediaForm = new FormData();
                mediaForm.append("file", form.cv);
                const mediaRes = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/media`, {
                  method: "POST", body: mediaForm,
                });
                if (!mediaRes.ok) { alert("CV upload failed"); return; }
                const mediaData = await mediaRes.json();
                const cvId = mediaData.doc?.id;
                if (!cvId) { alert("Could not get CV ID after upload"); return; }

                const appRes = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/applications`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    fullName: form.fullName, email: form.email,
                    jobTitle: applyJob.title, cv: cvId,
                  }),
                });
                if (!appRes.ok) { alert("Submission failed"); return; }
                alert("Application submitted successfully!");
                setApplyJob(null);
              } catch (err) {
                console.error(err);
                alert("Something went wrong");
              }
            }}
          />
        )}
      </div>

      <style>{`
        .careers-main { padding: 120px 24px 80px; }
        .careers-title { font-size: 42px; }
        @media (max-width: 768px) {
          .careers-main { padding: 100px 16px 60px; }
          .careers-title { font-size: 28px; }
        }
      `}</style>
    </main>
  );
}