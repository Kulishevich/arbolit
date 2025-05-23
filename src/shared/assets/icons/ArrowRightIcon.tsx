import { Ref, SVGProps, forwardRef, memo } from 'react';

const ArrowRightIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="13"
    height="15"
    ref={ref}
    {...props}
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 7.5L0.5 0.5V14.5L12.5 7.5Z" fill="currentColor" />
  </svg>
);
const ForwardRef = forwardRef(ArrowRightIcon);
const Memo = memo(ForwardRef);

export default Memo;
