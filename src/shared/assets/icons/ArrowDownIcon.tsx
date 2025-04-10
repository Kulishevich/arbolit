import { Ref, SVGProps, forwardRef, memo } from 'react';

const ArrowDownIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="10"
    height="9"
    ref={ref}
    {...props}
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 9L10 0H0L5 9Z" fill="#86C05B" />
  </svg>
);
const ForwardRef = forwardRef(ArrowDownIcon);
const Memo = memo(ForwardRef);

export default Memo;
