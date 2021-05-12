import { IconProps } from "./types";
import { _icon } from "./_icon";

const El = _icon(
  "0 0 24 24",
  <>
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </>
);
export const RefreshIcon = (props: IconProps) => (
  <El
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  />
);
