"use client";
import { motion } from "framer-motion";
import { serviceIconMap } from "@/lib/serviceIcons";

type Item = { name: string; icon: string };
type MovingStripData = { items: Item[] };

export default function MovingStrip({ data }: { data: MovingStripData }) {
  const items = data?.items || [];
  const looped = [...items, ...items];
  return (
    <div style={{ marginTop: 80, overflow: "hidden" }}>
      <motion.div
        style={{ display: "flex", gap: 40, whiteSpace: "nowrap" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {looped.map((m, i) => {
          const Icon = serviceIconMap[m.icon] || serviceIconMap.react;
          return (
            <div key={i} style={{ display: "flex", gap: 6, color: "var(--green-bright)" }}>
              <Icon /><span>{m.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}