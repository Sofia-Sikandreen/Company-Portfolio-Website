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

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    cv: null as File | null,
  });

  // 🔹 FETCH JOBS
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/careers`,  {
          cache: "no-store",
        });

        const data = await res.json();

        const formattedJobs = Array.isArray(data.docs)
          ? data.docs.map((job: any) => ({
              title: job.jobTitle,
              type: job.type,
              location: job.location,
              description: job.description || "",
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

  // 🔹 SUBMIT APPLICATION (FIXED)
  const submitApplication = async () => {
  if (!form.fullName || !form.email || !form.cv) {
    alert("Please fill all fields + upload CV");
    return;
  }

  try {
    const formData = new FormData();

    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("jobTitle", applyJob?.title || "");
    formData.append("cv", form.cv);

    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/applications`, {
      method: "POST",
      body: formData,
    });

    //  check response
    if (!res.ok) {
      const error = await res.text();
      console.log("Payload error:", error);
      alert("Submission failed");
      return;
    }

    alert("Application submitted");

    setForm({ fullName: "", email: "", cv: null });
    setApplyJob(null);
  } catch (err) {
    console.log(err);
    alert("Submission failed");
  }
};

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#110b0f",
        color: "#fff",
        padding: "120px 24px 80px",
        userSelect: "none",
    cursor: "default",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{ fontSize: 42, fontWeight: 800 }}>
            Careers at <span className="gradient-text">Our Company</span>
          </h1>

          <p style={{ color: "#9ca3af", marginTop: 10 }}>
            Explore opportunities and grow with us.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <p style={{ textAlign: "center", color: "#9ca3af" }}>
            Loading opportunities...
          </p>
        )}

        {/* EMPTY */}
        {!loading && jobs.length === 0 && (
          <p style={{ textAlign: "center", color: "#9ca3af" }}>
            No jobs available right now
          </p>
        )}

        {/* JOB LIST */}
        {!loading && jobs.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(auto-fit, minmax(60px, 1fr))",
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

                {/* DESCRIPTION */}
                <p style={{ color: "#9ca3af", marginTop: 6 }}>
                  {expandedIndex === index
                    ? job.description
                    : (job.description || "").length > 90
                    ? job.description?.slice(0, 90) + "..."
                    : job.description}
                </p>

                {(job.description || "").length > 90 && (
                  <div style={{ textAlign: "right", marginTop: 6 }}>
                    <span
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                      style={{
                        fontSize: 12,
                        color: "#0f727a",
                        cursor: "pointer",
                      }}
                    >
                      {expandedIndex === index
                        ? "Show less"
                        : "Read more →"}
                    </span>
                  </div>
                )}

                {/* APPLY BUTTON */}
                <div style={{ marginTop: 12, textAlign: "right" }}>
                  <button
                    onClick={() => setApplyJob(job)}
                    style={{
                      padding: "10px 16px",
                      borderRadius: 10,
                      background:
                        "linear-gradient(135deg,#0f727a,#68477c)",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      
                    }}
                  >
                    Apply Now
                  </button>
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
        // STEP 1: Upload the CV file to Payload's media collection
        const mediaForm = new FormData();
        mediaForm.append("file", form.cv);

        const mediaRes = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/media`, {
          method: "POST",
          body: mediaForm,
        });

        if (!mediaRes.ok) {
          const err = await mediaRes.text();
          console.error("Media upload failed:", err);
          alert("CV upload failed");
          return;
        }

        const mediaData = await mediaRes.json();
        const cvId = mediaData.doc?.id;

        if (!cvId) {
          alert("Could not get CV ID after upload");
          return;
        }

        // STEP 2: Create the application with the media ID as the cv field
        const appRes = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/applications`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: form.fullName,
            email: form.email,
            jobTitle: applyJob.title,
            cv: cvId, // ✅ media document ID, not the raw file
          }),
        });

        if (!appRes.ok) {
          const err = await appRes.text();
          console.error("Application submission failed:", err);
          alert("Submission failed");
          return;
        }

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
    </main>
  );
}