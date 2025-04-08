import { Ref, SVGProps, forwardRef, memo } from 'react';

const ArrowRightIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="51"
    height="51"
    ref={ref}
    {...props}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="51" height="51" rx="4" fill="#FCFCFC" />
    <path d="M31.8008 25.5L19.2008 18.5V32.5L31.8008 25.5Z" fill="#86C05B" />
  </svg>
);
const ForwardRef = forwardRef(ArrowRightIcon);
const Memo = memo(ForwardRef);

export default Memo;
