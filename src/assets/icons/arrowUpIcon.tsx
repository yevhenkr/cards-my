import { SVGProps, memo } from 'react'

export const ArrowUpIcon = memo((props: SVGProps<SVGSVGElement>) => (
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
          'M13.028 9.676a.667.667 0 0 1-1.094.513L8.361 7.203l-3.58 2.88a.667.667 0 0 1-.94-.1.667.667 0 0 1 .1-.974l4-3.22a.667.667 0 0 1 .847 0l4 3.334a.666.666 0 0 1 .24.553Z'
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
