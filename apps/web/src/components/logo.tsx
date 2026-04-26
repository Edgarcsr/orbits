import Image from 'next/image'

export default function Logo({ size = 48 }: { size?: number }) {
  return <Image alt="" src="/logo-dark.svg" width={size} height={size} />
}
