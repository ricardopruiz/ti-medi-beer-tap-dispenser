const Eye = ({ className }: { className?: string }) => (
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
      d="M9 4.46A9.84 9.84 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20c-4.182 0-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.465 14.465 0 0 1 5 6.821"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default Eye;
