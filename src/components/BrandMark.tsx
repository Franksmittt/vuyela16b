type BrandMarkProps = {
  className?: string;
  title?: string;
};

/** Simple interlocking-V mark inspired by the fleet livery */
export default function BrandMark({
  className = 'h-8 w-8',
  title = 'Vuyela Group',
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={title ? undefined : true}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      <rect width="40" height="40" rx="4" fill="#FFD700" />
      <path
        d="M8 10h6.2L20 28.5 25.8 10H32L22.4 32h-4.8L8 10Z"
        fill="#141414"
      />
      <path
        d="M14.5 10h4.8L22 22.8 19.2 30h-3.2L14.5 10Z"
        fill="#141414"
        opacity="0.35"
      />
    </svg>
  );
}
