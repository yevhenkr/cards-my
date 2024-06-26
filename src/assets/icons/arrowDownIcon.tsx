import { SVGProps, memo } from 'react'

export const ArrowDownIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'var(--color-light-100)'}
    height={props.height ?? 16}
    width={props.width ?? 16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M3.676 6.306a.667.667 0 0 1 1.093-.514L8.343 8.78l3.58-2.88a.666.666 0 0 1 .94.1.666.666 0 0 1-.1.973l-4 3.22a.666.666 0 0 1-.847 0l-4-3.333a.667.667 0 0 1-.24-.553Z'
        }
        fill={'var(--color-light-100)'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'var(--color-light-100)'} />
      </clipPath>
    </defs>
  </svg>
))
