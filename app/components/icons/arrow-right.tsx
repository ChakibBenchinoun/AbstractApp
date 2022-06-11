export default function ArrowRight(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M13.75 6.75L19.25 12L13.75 17.25"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M19 12H4.75"
      ></path>
    </svg>
  )
}
