"use client";

import { useState } from "react";

type Job = { title: string; type?: string; location?: string };

export default function ApplyCard({ job, onClose, onSubmit }: {
  job: Job;
  onClose: () => void;
  onSubmit: (data: { fullName: string; email: string; cv: File | null }) => void;
}) {
  const [form, setForm] = useState({ fullName: "", email: "", cv: null as File | null });
  const [fileName, setFileName] = useState("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, cv: file });
    setFileName(file?.name || "");
  };

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 9999, padding: "1rem", userSelect: "none", cursor: "default",
    }}>
      <div onClick={(e) => e.stopPropagation()} className="apply-card" style={{
  isolation: 'isolate',
}}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "var(--card-bg)", border: "0.5px solid var(--border-green)",
          borderRadius: 8, padding: "4px 10px",
          fontSize: 12, color: "var(--text-secondary)", marginBottom: "1.25rem",
        }}>
          💼 {job.type || "Full-time"} · {job.location || "On-site"}
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 500, margin: 0, color: "var(--text-primary)" }}>
          Apply for {job.title}
        </h2>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: "4px 0 0" }}>
          Fill in your details and attach your CV to apply.
        </p>

        <div style={{ height: "0.5px", background: "var(bg-main)", margin: "1.25rem 0 0" }} />

        {/* Full Name */}
        <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: "1rem 0 4px" }}>Full name</p>
        <input type="text" placeholder="e.g. Ahmed Khan" value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          style={{
            width: "100%", boxSizing: "border-box", padding: "9px 12px",
            borderRadius: 8, border: "0.5px solid var(--border-green)", background: "var(--bg-main)",
            color: "var(--text-primary)", fontSize: 14, outline: "none",
          }}
        />

        {/* Email */}
        <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: "1rem 0 4px" }}>Email address</p>
        <input type="email" placeholder="you@example.com" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{
            width: "100%", boxSizing: "border-box", padding: "9px 12px",
            borderRadius: 8, border: "0.5px solid var(--border-green)", background: "var(--bg-main)",
            color: "var(--text-primary)", fontSize: 14, outline: "none",
          }}
        />

        {/* CV Upload */}
        <label style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", gap: 6, marginTop: "1rem",
          border: `0.5px dashed ${fileName ? "" : "#2a2a3a"}`,
          borderRadius: 8, background: "var(--bg-main)", padding: "1rem",
          cursor: "pointer", transition: "border-color 0.15s",
        }}>
          <span style={{ fontSize: 24 }}>☁️</span>
          {fileName
            ? <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500 }}>{fileName}</span>
            : <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Click to upload your CV</span>
          }
          <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>PDF or Word · max 5MB</span>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: "none" }} />
        </label>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10, marginTop: "1.25rem" }}>
          <button onClick={onClose} style={{
            flex: 1, padding: 10, borderRadius: 8,
            border: "0.5px solid var(--border-green)", background: "var(--bg-main)",
            color: "var(--text-secondary)", fontSize: 14, cursor: "pointer",
          }}>Cancel</button>
          <button onClick={() => onSubmit(form)} style={{
            flex: 2, padding: 10, borderRadius: 8, border: "none",
            background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime))', color: "var(--text-primary)", fontSize: 14,
            fontWeight: 500, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          }}>✉ Submit application</button>
        </div>
      </div>

      <style>{`
        .apply-card {
          width: 100%;
          max-width: 420px;
          background: var(--card-bg);
          border: 0.5px solid var(--border-green);
          border-radius: 20px;
          padding: 1.75rem;
          max-height: 90vh;
          overflow-y: auto;
          overflow-x: hidden;
          contain: paint; 
        }
        @media (max-width: 480px) {
          .apply-card {
            padding: 1.25rem;
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
}