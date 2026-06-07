"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient?: string;
  delay?: number;
};

export default function StatCard({ icon: Icon, value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative rounded-xl"
    >
      <div style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border-green)',
        borderRadius: 16, padding: 24, textAlign: "center",
        transition: "0.3s", userSelect: "none", cursor: "default",
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: 'linear-gradient(135deg, var(--green-bright), var(--green-lime))',
            boxShadow: '0 0 20px var(--glow-color)',
          }}>
            <Icon size={26} color="#fff" />
          </div>
        </div>
        <h3 style={{ fontSize: 26, fontWeight: 800, color: 'var(--green-bright)', marginBottom: 4 }}>
          {value}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
          {label}
        </p>
      </div>
    </motion.div>
  )
}