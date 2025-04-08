import { Ref, SVGProps, forwardRef, memo } from 'react';

const ArrowLeftIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="12"
    height="14"
    ref={ref}
    {...props}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 7L12 0V14L0 7Z" fill="currentColor" />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeftIcon);
const Memo = memo(ForwardRef);

export default Memo;
