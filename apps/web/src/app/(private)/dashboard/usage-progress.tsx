interface UsageProgressProps {
  percentage: number
  size?: number
}

export function UsageProgress({ percentage, size = 20 }: UsageProgressProps) {
  const circumference = 2 * Math.PI * 14
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex items-center gap-2">
      <svg className={`w-${size} h-${size}`} viewBox="0 0 32 32">
        <title>Usage progress {percentage}%</title>
        {/* Background circle */}
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-gray-300 dark:text-gray-600 group-hover:opacity-30 "
        />
        {/* Progress circle */}
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-amber-300"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 16 16)"
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      <span className="text-sm">{percentage}%</span>
    </div>
  )
}
