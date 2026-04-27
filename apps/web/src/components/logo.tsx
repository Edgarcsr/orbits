import Image from 'next/image'

type Props = {
  size?: number
  className?: string
  lightSrc?: string
  darkSrc?: string
}

export default function Logo({
  size = 48,
  className = '',
  lightSrc = '/logo-light.svg',
  darkSrc = '/logo-dark.svg',
}: Props) {
  return (
    <>
      <Image
        alt=""
        src={lightSrc}
        width={size}
        height={size}
        className={`${className} block dark:hidden`}
      />
      <Image
        alt=""
        src={darkSrc}
        width={size}
        height={size}
        className={`${className} hidden dark:block`}
      />
    </>
  )
}
