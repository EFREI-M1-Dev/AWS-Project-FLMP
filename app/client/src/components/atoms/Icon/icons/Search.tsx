type SearchProps = React.SVGProps<SVGSVGElement> & {
  color?: string
}

const Search = ({ color = '#000', ...props }: SearchProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      aria-label="clap"
      color={color}
      fill="transparent"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default Search
