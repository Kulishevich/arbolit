import { Ref, SVGProps, forwardRef, memo } from 'react';

const BurgerMenuIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="26"
    height="26"
    {...props}
    ref={ref}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 6H2"
      stroke="#FCFCFC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M24 12H2"
      stroke="#FCFCFC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M24 19H2"
      stroke="#FCFCFC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(BurgerMenuIcon);
const Memo = memo(ForwardRef);

export default Memo;
