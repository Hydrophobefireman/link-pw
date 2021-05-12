import { IconProps } from "./types";
import { _icon } from "./_icon";

const El = _icon(
  "0 0 24 24",
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </>
);

export const LockIcon = (props: IconProps) => (
  <El
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
    {...props}
  />
);
