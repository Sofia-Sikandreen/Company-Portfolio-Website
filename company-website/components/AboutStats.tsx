import {
  TrendingUp, Users, CheckCircle, Award, Target, Zap, Shield,
  Heart, Star, Rocket, Briefcase, Globe, Clock, Lightbulb,
} from 'lucide-react'
import StatCard from '@/components/statcard'

const iconMap: Record<string, any> = {
  trendingUp: TrendingUp, users: Users, checkCircle: CheckCircle,
  award: Award, target: Target, zap: Zap, shield: Shield,
  heart: Heart, star: Star, rocket: Rocket, briefcase: Briefcase,
  globe: Globe, clock: Clock, lightbulb: Lightbulb,
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