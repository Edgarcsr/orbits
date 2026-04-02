import LaserFlow from '@/components/react-bits/LaserFlow'

export default function DataSection() {
  return (
    <div>
      <LaserFlow
        verticalBeamOffset={0}
        horizontalBeamOffset={0.2}
        color="#FFAE00"
        verticalSizing={0.9}
        fogIntensity={0}
        falloffStart={0.6}
        className="z-10"
      />
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-[86%] h-[60%]">
        <div className="relative w-full h-full rounded-[20px] bg-linear-to-b from-[#FFAE00] to-black p-0.5">
          <div className="w-full h-full rounded-[20px] bg-black flex items-center justify-center">
            <p className="text-muted-foreground">
              Placeholder for data section, showcasing project management
              features and benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
