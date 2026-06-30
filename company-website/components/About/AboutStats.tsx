'use client'

import {
  TrendingUp, Users, CheckCircle, Award, Target, Zap, Shield,
  Heart, Star, Rocket, Briefcase, Globe, Clock, Lightbulb,
} from 'lucide-react'
import StatCard from '@/components/About/statcard'

const iconMap: Record<string, any> = {
  TrendingUp, Users, CheckCircle, Award, Target, Zap, Shield,
  Heart, Star, Rocket, Briefcase, Globe, Clock, Lightbulb,
}

type Stat = { icon: string; value: string; label: string }

export default function StatHighlights({ data }: { data: { stats: Stat[] } }) {
  const stats = data?.stats || []
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 20, marginBottom: 80,
    }}>
      {stats.map((item, i) => {
        const Icon = iconMap[item.icon] || Star
        return <StatCard key={i} icon={Icon} value={item.value} label={item.label} delay={i * 0.2} />
      })}
    </div>
  )
}