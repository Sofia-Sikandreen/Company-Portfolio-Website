"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient?: string; // optional now
  delay?: number;
};

export default function StatCard({
  icon: Icon,
  value,
  label,
  gradient,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative rounded-xl"
    >
      {/* Card */}
      <div
        style={{
          background: "#111118",
          border: "1px solid #1E1E2E",
          borderRadius: 16,
          padding: 24,
          textAlign: "center",
          transition: "0.3s",
        }}
      >
        {/* Icon */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #0f727a, #68477c)",
              boxShadow: "0 0 20px rgba(15,114,122,0.3)",
            }}
          >
            <Icon size={26} color="#fff" />
          </div>
        </div>

        {/* Value */}
        <h3
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: "#91a4d7",
            marginBottom: 4,
          }}
        >
          {value}
        </h3>

        {/* Label */}
        <p
          style={{
            fontSize: 14,
            color: "#9ca3af",
          }}
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}