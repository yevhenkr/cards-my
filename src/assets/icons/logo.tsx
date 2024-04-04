import { SVGProps, memo } from 'react'
export const Logo = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'var(--color-light-100)'}
    height={'36px'}
    viewBox={'0 0 380 100'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      d={'M121 0h5.67v102.05h-5.67z'}
      style={{
        fill: 'var(--color-light-100)',
        strokeWidth: 0,
      }}
    />
    <text
      style={{
        fill: 'var(--color-light-100)',
        fontFamily: 'Cambria-Bold,Cambria',
        fontSize: '72.22px',
        fontWeight: 700,
      }}
      transform={'translate(145 77)'}
    >
      <tspan x={0} y={0}>
        {'CARDS'}
      </tspan>
    </text>
    <path
      d={
        'M40.34.01c-.45.01-.89.05-1.34.12-4.22.62-7.89 3.67-9.37 7.73-.32.87-.52 1.75-.64 2.66-.82-.21-1.67-.31-2.54-.31h-.09c-.02 0-.03.01-.05.01-.72 0-1.44.06-2.16.21-4.28.84-7.73 4.29-8.61 8.56-.35 1.71-.31 3.41.12 5.04-5.05 1.02-8.86 5.49-8.86 10.84 0 1.89.48 3.74 1.4 5.37-.54.24-1.06.51-1.56.82-.11.07-.23.13-.34.2-.46.3-.91.61-1.33.96-.19.15-.35.31-.52.47-.15.14-.32.27-.47.43-.03.02-.03.05-.05.08C1.49 45.66 0 49.04 0 52.74s1.65 7.49 4.46 10.05c0 .02-.01.05-.02.07-.06.14-.11.28-.16.43-.15.39-.27.78-.38 1.18-.03.09-.07.19-.1.29v.1c-.25 1.04-.4 2.12-.4 3.2 0 5.69 3.49 10.67 8.68 12.68v.05c-.11.56-.17 1.14-.17 1.73 0 4.77 3.59 8.72 8.21 9.28 2.66 6.19 8.8 10.28 15.6 10.28 4.46 0 8.68-1.72 11.88-4.84 1.89-1.85 4.97-1.85 6.86 0 3.2 3.12 7.41 4.84 11.88 4.84 6.8 0 12.94-4.09 15.6-10.28 4.62-.56 8.21-4.51 8.21-9.28 0-.6-.06-1.18-.17-1.75v-.03c5.19-2.01 8.68-6.99 8.68-12.68 0-.52-.04-1.04-.1-1.55-.02-.2-.05-.39-.09-.59-.05-.31-.11-.6-.18-.91-.05-.23-.11-.47-.17-.7-.07-.25-.16-.5-.25-.74s-.16-.49-.26-.74l-.01-.02c2.82-2.56 4.46-6.23 4.46-10.05 0-4.62-2.29-8.72-5.91-11.19-.03-.03-.05-.07-.09-.09-.06-.05-.13-.08-.2-.12-.22-.14-.45-.27-.68-.4-.32-.18-.64-.35-.97-.5-.13-.05-.23-.13-.36-.18.92-1.63 1.4-3.48 1.4-5.37 0-5.34-3.81-9.81-8.86-10.84.43-1.63.47-3.34.12-5.04-.88-4.28-4.33-7.71-8.61-8.56-.72-.15-1.44-.2-2.16-.21-.02 0-.03-.01-.05-.01h-.09c-.48 0-.95.03-1.42.1-.13.02-.25.05-.38.07-.25.05-.5.09-.74.15-.11-.9-.33-1.79-.64-2.66C70.94 3.84 67.26.8 63.05.18c-3.57-.53-7.16.54-9.82 2.96a3.301 3.301 0 0 1-4.4 0A11.765 11.765 0 0 0 40.34.01Zm.13 3.4c2.24-.09 4.4.7 6.07 2.2 2.52 2.29 6.46 2.29 8.98 0 1.89-1.72 4.46-2.49 7.04-2.11 3 .45 5.61 2.62 6.68 5.53.35.96.51 1.92.5 2.92a11.043 11.043 0 0 0-3.98 4.46c-.41.84-.06 1.87.78 2.27.25.12.5.18.75.18.63 0 1.24-.35 1.53-.96a7.575 7.575 0 0 1 3.4-3.45c.36-.19.73-.35 1.11-.47.03 0 .05-.02.07-.03 1.23-.39 2.54-.46 3.85-.2 2.95.58 5.33 2.96 5.94 5.91.36 1.75.13 3.51-.68 5.08-.27.53-.17 1.17.15 1.67.32.51.96.8 1.55.79 4.22 0 7.65 3.43 7.65 7.65 0 1.6-.53 3.14-1.46 4.43-2.27-.33-4.62-.11-6.78.7-.88.33-1.32 1.32-.98 2.2.33.88 1.32 1.32 2.2.98 1.89-.72 3.99-.84 5.97-.37.5.11.98.27 1.45.46.14.05.27.12.41.18.37.16.71.34 1.04.54.11.07.24.13.35.21a10.13 10.13 0 0 1 4.61 8.53c0 2.66-1.02 5.14-2.83 7.02-.97-1.26-2.17-2.37-3.57-3.24a1.7 1.7 0 0 0-2.34.53c-.5.8-.26 1.85.54 2.35 1.51.94 2.71 2.23 3.53 3.71.01.01 0 .03.02.04a10.26 10.26 0 0 1 1.25 4.9c0 4.27-2.64 7.99-6.54 9.49a9.363 9.363 0 0 0-7.4-4.36c.2-.83.34-1.69.34-2.58 0-1.81-.45-3.61-1.3-5.2a1.7 1.7 0 1 0-3 1.6c.6 1.12.9 2.33.9 3.6 0 3.55-2.41 6.6-5.85 7.44a1.7 1.7 0 0 0 .4 3.35c.13 0 .27-.01.4-.05 2.81-.68 5.1-2.4 6.6-4.67.33-.06.66-.12 1-.12 2.48 0 4.62 1.53 5.5 3.71.15.36.26.72.34 1.09.07.37.11.76.11 1.16 0 3.26-2.64 5.92-5.89 5.95-.83-.03-1.45.42-1.7 1.13-1.92 5.43-7.07 9.08-12.82 9.08-3.57 0-6.94-1.37-9.5-3.86-1.6-1.57-3.71-2.35-5.81-2.35s-4.21.78-5.81 2.35a13.548 13.548 0 0 1-9.5 3.86c-5.75 0-10.9-3.65-12.82-9.08-.25-.71-.86-1.18-1.7-1.13a5.952 5.952 0 0 1-5.89-5.95c0-.4.04-.78.11-1.16.08-.37.19-.73.34-1.09.89-2.17 3.02-3.7 5.5-3.7.34 0 .67.07 1 .12 1.49 2.27 3.77 3.99 6.57 4.67a1.704 1.704 0 0 0 2.06-1.25c.23-.91-.33-1.83-1.25-2.05a7.63 7.63 0 0 1-5.83-7.43c0-1.2.27-2.34.8-3.4.42-.84.07-1.87-.77-2.29-.84-.42-1.86-.07-2.28.77a10.98 10.98 0 0 0-1.15 4.92c0 .89.14 1.75.34 2.58a9.315 9.315 0 0 0-7.39 4.36 10.138 10.138 0 0 1-6.23-12.01c.11-.43.24-.84.4-1.24.08-.19.18-.38.27-.57.52-1.1 1.22-2.11 2.1-2.98.67-.65.68-1.73.03-2.4-.66-.68-1.73-.69-2.41-.03-.47.45-.89.94-1.28 1.45-1.8-1.89-2.82-4.36-2.82-7.02 0-2.9 1.21-5.52 3.18-7.39.12-.11.24-.23.36-.33.35-.31.72-.59 1.11-.84.05-.04.11-.07.16-.1.94-.58 1.97-1.02 3.1-1.28h.01a10.047 10.047 0 0 1 5.33.19c.9.27 1.85-.22 2.13-1.12.28-.89-.22-1.85-1.12-2.13-1.3-.41-2.66-.61-4.04-.61-.66 0-1.31.07-1.95.16-.92-1.3-1.45-2.82-1.45-4.41 0-4.22 3.43-7.65 7.61-7.65h.18c.6.02 1.17-.29 1.49-.8.32-.5.35-1.14.07-1.68a7.644 7.644 0 0 1-.68-5.07c.6-2.95 2.99-5.32 5.94-5.91.87-.18 1.74-.2 2.59-.09.04 0 .08.02.11.03.35.05.7.13 1.04.23.11.03.23.07.33.11a7.655 7.655 0 0 1 4.13 3.41c.31.54.88.85 1.47.85.29 0 .58-.07.84-.23.82-.47 1.1-1.51.63-2.33-.9-1.56-2.17-2.84-3.64-3.78 0-1 .16-1.98.51-2.95 1.06-2.92 3.68-5.08 6.67-5.53.33-.05.64-.07.97-.09Zm8.85 6.79c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm0 8.51c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm14.01 5.03c-.22.05-.43.13-.63.26a11.066 11.066 0 0 0-4.87 9.17c0 2.56.9 5.06 2.52 7.04a1.708 1.708 0 0 0 2.4.23c.72-.6.82-1.67.23-2.39a7.651 7.651 0 0 1-1.75-4.87c0-2.54 1.26-4.92 3.38-6.34.78-.52.98-1.59.46-2.37-.4-.58-1.09-.84-1.73-.72Zm-24.87.22c-.43.07-.83.29-1.11.67-.56.76-.4 1.82.36 2.38a7.682 7.682 0 0 1 3.11 6.16c0 1.77-.62 3.51-1.75 4.87-.6.72-.5 1.79.23 2.39.32.27.7.39 1.08.39.49 0 .98-.21 1.32-.62 1.63-1.97 2.52-4.47 2.52-7.04 0-3.49-1.68-6.82-4.49-8.9-.38-.28-.84-.38-1.27-.31Zm10.86 3.25c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm0 8.51c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm-23.08.12c-.94 0-1.7.76-1.7 1.7 0 4.26 2.38 8.06 6.21 9.93.24.12.49.17.74.17.63 0 1.24-.35 1.53-.96a1.7 1.7 0 0 0-.78-2.27 7.605 7.605 0 0 1-4.29-6.88c0-.94-.76-1.7-1.7-1.7Zm49.44.41c-.94 0-1.7.76-1.7 1.7 0 2.74-1.47 5.28-3.85 6.64-.82.47-1.1 1.51-.63 2.33.31.54.88.86 1.47.86.29 0 .58-.08.85-.23 3.43-1.97 5.55-5.64 5.55-9.59 0-.94-.76-1.7-1.7-1.7Zm-26.36 7.97c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm0 8.5c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm-20.57 3.35c-.43 0-.86.05-1.3.11a1.7 1.7 0 0 0-1.43 1.93c.14.94 1.01 1.55 1.93 1.44a7.67 7.67 0 0 1 6.56 2.15c.59.59 1.08 1.27 1.44 2.02a1.7 1.7 0 0 0 2.28.76c.84-.42 1.19-1.44.77-2.28-.53-1.08-1.24-2.05-2.09-2.91a11.117 11.117 0 0 0-8.17-3.23Zm45.11 0c-3.02-.09-6.01 1.07-8.17 3.23-.86.86-1.56 1.83-2.1 2.91-.41.84-.07 1.86.77 2.28.25.12.5.17.75.17.63 0 1.24-.34 1.53-.94a7.6 7.6 0 0 1 8-4.17c.94.12 1.79-.5 1.94-1.44.14-.93-.5-1.79-1.44-1.93a8.05 8.05 0 0 0-1.3-.11Zm-24.54 5.16c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm0 8.5c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm14.01 5.03c-.22.05-.43.13-.63.26a11.066 11.066 0 0 0-3.66 14.2c.3.59.9.92 1.51.92.26 0 .52-.05.78-.19.83-.43 1.16-1.45.73-2.29a7.594 7.594 0 0 1-.83-3.48c0-2.54 1.26-4.92 3.38-6.34.78-.52.98-1.59.46-2.37-.39-.58-1.09-.84-1.73-.72Zm-24.87.22c-.43.07-.83.29-1.11.67-.56.76-.4 1.82.36 2.38a7.682 7.682 0 0 1 3.11 6.16c0 1.23-.29 2.4-.84 3.48-.43.84-.1 1.86.74 2.29.25.13.51.19.77.19.62 0 1.22-.33 1.51-.92.8-1.54 1.22-3.29 1.22-5.04 0-3.49-1.68-6.82-4.49-8.9-.38-.28-.84-.38-1.27-.31Zm10.86 3.26c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Zm0 8.5c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7h3.4c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7h-3.4Z'
      }
      style={{
        fill: 'var(--color-light-100)',
        strokeWidth: 0,
      }}
    />
  </svg>
))
