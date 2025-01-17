const SadFaceIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1"
    />
    <ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
    <ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </svg>
);
export default SadFaceIcon;
